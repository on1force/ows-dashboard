#!/usr/bin/env bun
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { config, OwsLog, OwsWallet } from "./utils";
import { App } from "./pages/app";
import { execSync } from "node:child_process";
import {
  readdirSync,
  readFileSync,
  existsSync,
  mkdirSync,
  statSync,
} from "node:fs";
import { Wallets } from "./pages/wallets";
import { Keys } from "./pages/keys";
import { Policies } from "./pages/policies";
import { OwsKey, OwsPolicy, VaultHealth } from "./utils/types";
import open from "open";

function getVaultHealth(): VaultHealth {
  const health: VaultHealth = {
    path: config.owsPath,
    exists: existsSync(config.owsPath),
    permissions: {
      vault: "unknown",
      wallets: "unknown",
      keys: "unknown",
      policies: "unknown",
    },
    warnings: [],
  };

  const checkPerms = (path: string) => {
    if (!existsSync(path)) return "missing";
    try {
      const stats = statSync(path);
      const mode = (stats.mode & 0o777).toString(8);
      return mode;
    } catch (e) {
      return "error";
    }
  };

  health.permissions.vault = checkPerms(config.owsPath);
  health.permissions.wallets = checkPerms(config.walletsPath);
  health.permissions.keys = checkPerms(config.keysPath);
  health.permissions.policies = checkPerms(config.policiesPath);

  if (health.permissions.vault !== "700") {
    health.warnings.push(
      `Vault directory should have 700 permissions (found ${health.permissions.vault})`,
    );
  }
  if (
    health.permissions.wallets !== "700" &&
    health.permissions.wallets !== "missing"
  ) {
    health.warnings.push(
      `Wallets directory should have 700 permissions (found ${health.permissions.wallets})`,
    );
  }

  return health;
}

function main() {
  try {
    const haveOws = execSync("which ows", { encoding: "utf8" });
    if (!haveOws.includes(".ows/bin/ows")) {
      console.warn("⚠️ OWS core not found. Dashboard running in viewer mode.");
    }
  } catch (e) {
    console.warn("⚠️ OWS core not found. Dashboard running in viewer mode.");
  }

  // Ensure directories exist
  [
    config.logsPath,
    config.walletsPath,
    config.keysPath,
    config.policiesPath,
  ].forEach((path) => {
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }
  });
}

main();

const app = new Hono();

app.get("/healthz", (c) => {
  return c.text("OK");
});

app.use("/assets/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  let owsLogs: OwsLog<any>[] = [];
  const auditPath = config.logsPath + "/audit.jsonl";

  if (existsSync(auditPath)) {
    const content = readFileSync(auditPath, { encoding: "utf-8" });
    owsLogs = content
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }

  const owsWallets = readdirSync(config.walletsPath);
  const health = getVaultHealth();

  return c.html(<App logs={owsLogs} wallets={owsWallets} health={health} />);
});

app.get("/wallets", (c) => {
  const owsWallets = readdirSync(config.walletsPath).filter((f) =>
    f.endsWith(".json"),
  );
  const wallets = owsWallets.map((wallet) => {
    const walletPath = `${config.walletsPath}/${wallet}`;
    const walletData = JSON.parse(
      readFileSync(walletPath, { encoding: "utf-8" }),
    );
    return walletData;
  }) as OwsWallet[];

  return c.html(<Wallets wallets={wallets} />);
});

app.get("/keys", (c) => {
  const owsKeys = readdirSync(config.keysPath).filter((f) =>
    f.endsWith(".json"),
  );
  const keys = owsKeys.map((keyFile) => {
    const keyPath = `${config.keysPath}/${keyFile}`;
    return JSON.parse(readFileSync(keyPath, { encoding: "utf-8" }));
  }) as OwsKey[];

  return c.html(<Keys keys={keys} />);
});

app.get("/policies", (c) => {
  const owsPolicies = readdirSync(config.policiesPath).filter((f) =>
    f.endsWith(".json"),
  );
  const policies = owsPolicies.map((policyFile) => {
    const policyPath = `${config.policiesPath}/${policyFile}`;
    return JSON.parse(readFileSync(policyPath, { encoding: "utf-8" }));
  }) as OwsPolicy[];

  return c.html(<Policies policies={policies} />);
});

console.log(`🚀 OWS Dashboard active at http://localhost:${config.port}`);
open(`http://localhost:${config.port}`);

export default {
  port: config.port,
  fetch: app.fetch,
};
