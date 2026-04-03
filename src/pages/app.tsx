import type { FC } from "hono/jsx";
import type { OwsLog, VaultHealth } from "../utils";
import { Layout } from "./layout";

type Props = {
  logs: OwsLog<any> | OwsLog<any>[];
  wallets: string[];
  health: VaultHealth;
};

export const App: FC<Props> = (props) => {
  const { logs, wallets, health } = props;
  const totalLogs = Array.isArray(logs) ? logs.length : logs ? 1 : 0;

  return (
    <Layout>
      <dialog id="details-dialog" className="modern-dialog">
        <div className="dialog-content">
          <div className="dialog-header">
            <h3>Operation Details</h3>
            <button className="close-btn" onclick="closeDetails()">
              ✕
            </button>
          </div>
          <div className="log-details-block">
            <pre></pre>
          </div>
        </div>
      </dialog>

      <div className="dashboard-header">
        <h1>Activities</h1>
        <p className="subtitle">Monitor your wallet operations in real-time</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Active Wallets</span>
          <span className="stat-value">{wallets.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Logs</span>
          <span className="stat-value">{totalLogs}</span>
        </div>
        <div className="stat-card accent-card">
          <span className="stat-label">Vault Status</span>
          <div className="status-container">
            <div className="status-dot"></div>
            <span className="status-text">
              {health.warnings.length === 0 ? "Secure" : "Warning"}
            </span>
          </div>
        </div>
      </div>

      {health.warnings.length > 0 && (
        <div className="warning-banner">
          <div className="warning-icon">⚠️</div>
          <div className="warning-content">
            <h4 className="warning-title">Security Recommendation</h4>
            <ul className="warning-list">
              {health.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="logs-container">
        <div className="logs-header-row">
          <span className="logs-title">Log Stream</span>
          <span className="logs-status">Live Updates Enabled</span>
        </div>

        <div className="logs-table-container">
          <table className="logs-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Wallet ID</th>
                <th>Chain</th>
                <th>Activity</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const logArray = Array.isArray(logs)
                  ? logs
                  : logs
                    ? [logs]
                    : [];
                if (logArray.length === 0) {
                  return (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center"
                        style={{
                          padding: "40px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        No activity recorded in audit.jsonl
                      </td>
                    </tr>
                  );
                }
                return logArray.map((log, index) => (
                  <tr key={`${log.timestamp}-${index}`}>
                    <td className="time-col">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="wallet-col">
                      {log.wallet_id.slice(0, 8)}...
                    </td>
                    <td className="chain-col">
                      {log.chain_id ? (
                        <span className="badge info">{log.chain_id}</span>
                      ) : (
                        <span style={{ opacity: 0.3 }}>—</span>
                      )}
                    </td>
                    <td>
                      <span
                        className={`badge ${log.error ? "warning" : "success"}`}
                      >
                        {log.operation}
                      </span>
                    </td>
                    <td className="text-right">
                      <button
                        className="details-btn"
                        data-details={JSON.stringify({
                          details: log.details,
                          error: log.error,
                        })}
                        onclick="openDetails(this.dataset.details)"
                      >
                        Details →
                      </button>
                    </td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
