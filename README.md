# owsd 🚀

The Un-official local dashboard for [OpenWallet Standard (OWS)](https://openwallet.sh).

`owsd` provides a clean, visual interface to monitor your OWS vault activities, manage wallets, and inspect API keys and policies—all while keeping your keys safely encrypted on your local machine.

## Quick Start

You can run the dashboard instantly without installing:

```sh
npx owsd
```

## Global Installation

Install globally to have the `owsd` command available anywhere:

```sh
npm install -g owsd
```

Then simply run:
```sh
owsd
```

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

3. **Build**:
   ```sh
   bun build ./src/index.tsx --compile --outfile owsd
   ```

## Requirements

- [Bun](https://bun.sh) (recommended) or Node.js
- [OWS Core](https://openwallet.sh/#quickstart) (installed at `~/.ows`)

## License

MIT
