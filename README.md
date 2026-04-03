# owsd 🚀

The Un-official local dashboard for [OpenWallet Standard (OWS)](https://openwallet.sh).

`owsd` provides a clean, visual interface to monitor your OWS vault activities, manage wallets, and inspect API keys and policies—all while keeping your keys safely encrypted on your local machine.

## Installation

### From GitHub (npm/npx)

If you don't want to wait for the npm registry, you can install directly from source:

```sh
# Install globally
npm install -g github:on1force/ows-dashboard

# Or run instantly without installing
npx github:on1force/ows-dashboard
```

### Standalone Binaries (Recommended)

Download the pre-compiled, zero-dependency binary for your platform from the [Releases](https://github.com/on1force/ows-dashboard/releases) section.

1. Download the binary (e.g., `owsd-linux-x64`)
2. Make it executable: `chmod +x owsd-linux-x64`
3. Run it: `./owsd-linux-x64`

No Node.js or Bun required!

## Quick Start

Once installed, simply run:
```sh
owsd
```

Or run without installing:
```sh
npx github:on1force/ows-dashboard
```

## Tech Stack

`owsd` is built to be lightweight, fast, and dependency-minimal:

- **Runtime**: [Bun](https://bun.sh) for high-performance execution and built-in bundling.
- **Web Framework**: [Hono](https://hono.dev) with JSX for type-safe, server-side rendered components.
- **Styling**: Vanilla CSS (via `hono/css`) for zero-runtime overhead and complete design control.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust type safety across storage and signing logic.
- **CLI Integration**: Native Node/Bun APIs for secure filesystem interaction and process management.

## Features

- **Activity Stream**: Real-time view of signing operations, wallet creation, and broadcasts.
- **Wallet Manager**: Visual breakdown of your multi-chain accounts and derivation paths.
- **API Key Inspector**: Monitor which agents have access to which wallets and under what policies.
- **Policy Viewer**: Review your declarative security rules.
- **Security Audit**: Automatic health checks for vault directory permissions (700/600).

## Development

If you want to contribute or run from source:

1. **Install Dependencies**:
   ```sh
   bun install
   ```

2. **Run in Development Mode**:
   ```sh
   bun dev
   ```

3. **Build Binaries**:
   ```sh
   mkdir -p dist

   # Linux (x64)
   bun build ./src/index.tsx --compile --target=bun-linux-x64 --outfile dist/owsd-linux-x64

   # macOS (Apple Silicon)
   bun build ./src/index.tsx --compile --target=bun-darwin-arm64 --outfile dist/owsd-macos-arm64

   # macOS (Intel)
   bun build ./src/index.tsx --compile --target=bun-darwin-x64 --outfile dist/owsd-macos-x64

   # Windows (x64)
   bun build ./src/index.tsx --compile --target=bun-windows-x64 --outfile dist/owsd-windows-x64.exe
   ```

## Requirements

- [Bun](https://bun.sh) (recommended) or Node.js
- [OWS Core](https://openwallet.sh/#quickstart) (installed at `~/.ows`)

## License

MIT
