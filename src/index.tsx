import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { config, OwsLog } from "./utils";
import { App } from "./pages/app";
import { execSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";

function main() {
  const haveOws = execSync("which ows", { encoding: "utf8" });
  if (!haveOws.includes(".ows/bin/ows")) {
    throw new Error(
      "ows not found.\nFollow the installation instructions at https://openwallet.sh/#quickstart",
    );
  }

  const owsDir = readdirSync(config.owsPath);
  if (!owsDir.includes("logs") || !owsDir.includes("wallets")) {
    throw new Error(
      "ows wallets not found.\nFollow the installation instructions at https://openwallet.sh/#quickstart",
    );
  }
}

main();

const app = new Hono();

app.get("/healthz", (c) => {
  return c.text("OK");
});

app.use("/assets/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  const owsLogs = JSON.parse(
    readFileSync(config.logsPath + "/audit.jsonl", {
      encoding: "utf-8",
    }),
  ) as OwsLog<any> | OwsLog<any>[];

  const owsWallets = readdirSync(config.walletsPath);

  return c.html(<App logs={owsLogs} wallets={owsWallets} />);
});

export default {
  port: config.port,
  fetch: app.fetch,
};
