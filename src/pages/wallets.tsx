import type { FC } from "hono/jsx";
import type { OwsWallet } from "../utils/types";
import { Layout } from "./layout";

const EthereumIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 32 32"
  >
    <g fill="none" fill-rule="evenodd">
      <circle fill="#627EEA" cx="16" cy="15" r="15" />
      <g fill="#FFF" fill-rule="nonzero" transform="translate(9 3)">
        <polygon fill-opacity=".602" points="7.498 0 7.498 8.87 14.995 12.22" />
        <polygon points="7.498 0 0 12.22 7.498 8.87" />
        <polygon
          fill-opacity=".602"
          points="7.498 17.968 7.498 23.995 15 13.616"
        />
        <polygon points="7.498 23.995 7.498 17.967 0 13.616" />
        <polygon
          fill-opacity=".2"
          points="7.498 16.573 14.995 12.22 7.498 8.872"
        />
        <polygon
          fill-opacity=".602"
          points="0 12.22 7.498 16.573 7.498 8.872"
        />
      </g>
    </g>
  </svg>
);

const SolanaIcon: FC = () => (
  <svg
    viewBox="0 0 36 36"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="90.737%"
        y1="34.776%"
        x2="35.509%"
        y2="55.415%"
        id="sol-a"
      >
        <stop stop-color="#00FFA3" offset="0%" />
        <stop stop-color="#DC1FFF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="nonzero">
      <circle fill="#181E33" cx="18" cy="18" r="18" />
      <path
        d="M3.9 14.355a.785.785 0 0 1 .554-.23h19.153c.35 0 .525.423.277.67l-3.783 3.784a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67l3.783-3.784z"
        fill="url(#sol-a)"
        transform="translate(6 9)"
      />
      <path
        d="M3.9.23c.15-.146.35-.23.554-.23h19.153c.35 0 .525.422.277.67l-3.783 3.783a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67L3.899.229z"
        fill="url(#sol-a)"
        transform="translate(6 9)"
      />
      <path
        d="M20.1 7.247a.785.785 0 0 0-.554-.23H.393a.392.392 0 0 0-.277.67l3.783 3.784c.145.145.344.23.555.23h19.153c.35 0 .525-.423.277-.67l-3.783-3.784z"
        fill="url(#sol-a)"
        transform="translate(6 9)"
      />
    </g>
  </svg>
);

const BitcoinIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 32 32"
  >
    <g fill="none" fill-rule="evenodd">
      <circle fill="#F7931A" cx="16" cy="15" r="15" />
      <path
        fill="#FFF"
        d="M23.1889526,13.0201846 C23.5025526,10.9239385 21.9064911,9.79704615 19.7240911,9.04529231 L20.4320295,6.20566154 L18.7035372,5.77489231 L18.0143065,8.53969231 C17.5599065,8.42646154 17.0931988,8.31963077 16.6294449,8.21378462 L17.3235988,5.43076923 L15.5960911,5 L14.8876603,7.83864615 C14.5115372,7.75298462 14.1423065,7.66830769 13.7839065,7.5792 L13.7858757,7.57033846 L11.4021218,6.97513846 L10.9423065,8.82129231 C10.9423065,8.82129231 12.224768,9.1152 12.1976911,9.13341538 C12.8977526,9.30818462 13.0242757,9.77144615 13.0031065,10.1387077 L12.1967065,13.3736615 C12.2449526,13.3859692 12.3074757,13.4036923 12.3763988,13.4312615 C12.3187988,13.4169846 12.2572603,13.4012308 12.1937526,13.3859692 L11.0634142,17.9176615 C10.9777526,18.1303385 10.7606449,18.4493538 10.2712911,18.3282462 C10.2885218,18.3533538 9.01492185,18.0146462 9.01492185,18.0146462 L8.15682954,19.9932308 L10.4061834,20.5539692 C10.8246449,20.6588308 11.2347372,20.7686154 11.6384295,20.872 L10.9231065,23.7441231 L12.6496295,24.1748923 L13.3580603,21.3332923 C13.8296911,21.4612923 14.2875372,21.5794462 14.7355372,21.6907077 L14.029568,24.5190154 L15.7580603,24.9497846 L16.4733834,22.0830769 C19.4208295,22.6408615 21.6371988,22.4158769 22.5701218,19.7500308 C23.3218757,17.6035692 22.5327065,16.3654154 20.9819372,15.5580308 C22.1112911,15.2976 22.9619988,14.5547077 23.1889526,13.0201846 L23.1889526,13.0201846 Z M19.2396603,18.5581538 C18.7055065,20.7046154 15.0914757,19.5442462 13.9197834,19.2532923 L14.8689526,15.4482462 C16.0406449,15.7406769 19.7979372,16.3196308 19.2396603,18.5581538 Z M19.7743065,12.9891692 C19.2869218,14.9416615 16.2789218,13.9496615 15.303168,13.7064615 L16.1637218,10.2553846 C17.1394757,10.4985846 20.2818757,10.9524923 19.7743065,12.9891692 Z"
      />
    </g>
  </svg>
);

const CosmosIcon: FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#2E3148"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="white"
    />
    <path
      d="M12 18C16.4183 18 20 15.3137 20 12C20 8.68629 16.4183 6 12 6C7.58172 6 4 8.68629 4 12C4 15.3137 7.58172 18 12 18ZM12 17C8.68629 17 6 14.7614 6 12C6 9.23858 8.68629 7 12 7C15.3137 7 18 9.23858 18 12C18 14.7614 15.3137 17 12 17Z"
      fill="white"
      fill-opacity="0.5"
    />
  </svg>
);

const TronIcon: FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L3 19.5H21L12 2ZM12 5.5L18.5 18H5.5L12 5.5Z" fill="#EF0027" />
    <path d="M12 8L16 16.5H8L12 8Z" fill="#EF0027" />
  </svg>
);

const TonIcon: FC = () => (
  <svg
    viewBox="0 0 56 56"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="28" cy="28" r="28" fill="#0088CC" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.199 18.4844H35.9034C37.5944 18.8365 39.4338 20.1403 39.4338 21.8931C39.4338 23.7068 29.0424 40.7665 27.986 41.3714C27.15 41.1364 17.1943 23.7518 16.558 22.0696C16.6541 20.7202 18.4547 18.7941 20.199 18.4844ZM26.7729 20.9192H20.199L26.7729 35.5785V20.9192ZM29.2077 20.9192V35.643L36.8542 22.5079C36.999 21.8931 35.9034 20.9192 29.2077 20.9192Z"
      fill="white"
    />
  </svg>
);

const FilecoinIcon: FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#0090FF"
    />
    <path
      d="M13 7H7V17H9V13H12V11H9V9H13V7ZM17 11H14V13H17V15H14V17H12V7H17V9H14V11H17Z"
      fill="#0090FF"
    />
  </svg>
);

const SuiIcon: FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2Z"
      fill="#4DA2FF"
    />
    <path
      d="M12 6C12 6 7 11 7 15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15C17 11 12 6Z"
      fill="white"
      fill-opacity="0.3"
    />
  </svg>
);

const ChainIcon: FC<{ id: string }> = ({ id }) => {
  const normalizedId = id.toLowerCase();
  if (normalizedId.includes("eip155")) return <EthereumIcon />;
  if (normalizedId.includes("sol")) return <SolanaIcon />;
  if (normalizedId.includes("bip122") || normalizedId.includes("bitcoin"))
    return <BitcoinIcon />;
  if (normalizedId.includes("cosmos") || normalizedId.includes("atom"))
    return <CosmosIcon />;
  if (normalizedId.includes("tron") || normalizedId.includes("trx"))
    return <TronIcon />;
  if (normalizedId.includes("ton")) return <TonIcon />;
  if (normalizedId.includes("fil") || normalizedId.includes("filecoin"))
    return <FilecoinIcon />;
  if (normalizedId.includes("sui")) return <SuiIcon />;
  return <span style={{ fontSize: "10px", opacity: 0.5 }}>🔗</span>;
};

type Props = {
  wallets: OwsWallet[];
};

export const Wallets: FC<Props> = (props) => {
  const { wallets } = props;

  return (
    <Layout>
      <div className="dashboard-header">
        <h1>Wallets</h1>
        <p className="subtitle">Manage and view your stored wallets</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Wallets</span>
          <span className="stat-value">{wallets.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Accounts</span>
          <span className="stat-value">
            {wallets.reduce((acc, w) => acc + w.accounts.length, 0)}
          </span>
        </div>
        <div className="stat-card accent-card">
          <span className="stat-label">Storage Status</span>
          <div className="status-container">
            <div className="status-dot"></div>
            <span className="status-text">Encrypted</span>
          </div>
        </div>
      </div>

      <div className="wallets-list">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="wallet-card">
            <div className="wallet-card-header">
              <div className="wallet-info">
                <h3 className="wallet-name">
                  {wallet.name || "Unnamed Wallet"}
                </h3>
                <span className="wallet-id">{wallet.id}</span>
              </div>
              <div className="wallet-meta">
                <span className="badge info">{wallet.key_type}</span>
              </div>
            </div>

            <div className="accounts-section">
              <h4 className="section-title">Accounts</h4>
              <div className="accounts-table-container">
                <table className="accounts-table">
                  <thead>
                    <tr>
                      <th style={{ width: "100px" }}>Chain</th>
                      <th>Address</th>
                      <th>Path</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wallet.accounts.map((account) => (
                      <tr key={account.account_id}>
                        <td className="chain-cell">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <ChainIcon id={account.chain_id} />
                            <span style={{ fontSize: "12px", fontWeight: 600 }}>
                              {account.chain_id.split(":")[0].toUpperCase()}
                            </span>
                          </div>
                        </td>
                        <td className="address-col">{account.address}</td>
                        <td className="path-col">{account.derivation_path}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
