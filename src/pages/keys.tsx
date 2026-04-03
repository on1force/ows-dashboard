import type { FC } from "hono/jsx";
import type { OwsKey } from "../utils/types";
import { Layout } from "./layout";

type Props = {
  keys: OwsKey[];
};

export const Keys: FC<Props> = (props) => {
  const { keys } = props;

  return (
    <Layout>
      <div className="dashboard-header">
        <h1>API Keys</h1>
        <p className="subtitle">Manage and monitor your OWS API keys</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Keys</span>
          <span className="stat-value">{keys.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Active Policies</span>
          <span className="stat-value">
            {new Set(keys.flatMap((k) => k.policy_ids)).size}
          </span>
        </div>
        <div className="stat-card accent-card">
          <span className="stat-label">Key Security</span>
          <div className="status-container">
            <div className="status-dot"></div>
            <span className="status-text">HKDF-SHA256</span>
          </div>
        </div>
      </div>

      <div className="keys-list">
        {keys.length > 0 ? (
          keys.map((key) => (
            <div key={key.id} className="wallet-card">
              <div className="wallet-card-header">
                <div className="wallet-info">
                  <h3 className="wallet-name">{key.name || "Unnamed Key"}</h3>
                  <span className="wallet-id">{key.id}</span>
                </div>
                <div className="wallet-meta">
                  <span className={`badge ${key.expires_at ? 'warning' : 'success'}`}>
                    {key.expires_at ? `Expires: ${new Date(key.expires_at).toLocaleDateString()}` : 'No Expiry'}
                  </span>
                </div>
              </div>

              <div className="accounts-section">
                <h4 className="section-title">Authorized Access</h4>
                <div className="key-details-grid">
                  <div className="key-detail-item">
                    <span className="label">Wallets</span>
                    <div className="tag-container">
                      {key.wallet_ids.map(id => (
                        <span key={id} className="badge info">{id.slice(0, 8)}...</span>
                      ))}
                    </div>
                  </div>
                  <div className="key-detail-item">
                    <span className="label">Policies</span>
                    <div className="tag-container">
                      {key.policy_ids.map(id => (
                        <span key={id} className="badge accent">{id}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="key-footer">
                <span className="created-at">Created: {new Date(key.created_at).toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No API keys found in ~/.ows/keys/</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
