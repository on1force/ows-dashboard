import { $ } from "bun";
import { existsSync, mkdirSync } from "node:fs";

async function main() {
  const distDir = "./dist";
  if (!existsSync(distDir)) {
    mkdirSync(distDir);
  }

  const targets = [
    {
      name: "linux-x64",
      target: "bun-linux-x64",
      outfile: "dist/owsd-linux-x64",
    },
    {
      name: "macos-arm64",
      target: "bun-darwin-arm64",
      outfile: "dist/owsd-macos-arm64",
    },
    {
      name: "macos-x64",
      target: "bun-darwin-x64",
      outfile: "dist/owsd-macos-x64",
    },
    {
      name: "windows-x64",
      target: "bun-windows-x64",
      outfile: "dist/owsd-windows-x64.exe",
    },
  ];

  console.log("🚀 Starting OWS Dashboard Multi-Platform Build...\n");

  for (const t of targets) {
    try {
      console.log(`📦 Building for ${t.name}...`);
      await $`bun build ./src/index.tsx --compile --target=${t.target} --outfile ${t.outfile}`;
      console.log(`✅ ${t.name} complete.\n`);
    } catch (e) {
      console.error(`❌ Failed to build for ${t.name}:`, e);
    }
  }

  console.log("✨ All builds complete! Check the /dist folder.");
}

main();
