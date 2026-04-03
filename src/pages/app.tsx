import { useRef, useState, type FC } from "hono/jsx";
import type { OwsLog } from "../utils";
import { Layout } from "./layout";

type Props = {
  logs: OwsLog<any> | OwsLog<any>[];
  wallets: string[];
};

export const App: FC<Props> = (props) => {
  const { logs, wallets } = props;
  const [activeDetails, setActiveDetails] = useState<
    OwsLog<any>["details"] | null
  >(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const totalLogs = Array.isArray(logs) ? logs.length : (logs ? 1 : 0);

  const openDetails = (details: OwsLog<any>["details"]) => {
    if (!dialogRef.current) return;

    setActiveDetails(details);
    dialogRef.current.showModal();
  };

  return (
    <Layout>
      <dialog ref={dialogRef} className="modern-dialog">
        <div className="dialog-content">
          <div className="dialog-header">
            <h3>Operation Details</h3>
            <button className="close-btn" onClick={() => dialogRef.current?.close()}>✕</button>
          </div>
          <div className="log-details-block">
            <pre>{typeof activeDetails === 'object' ? JSON.stringify(activeDetails, null, 2) : activeDetails}</pre>
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
          <span className="stat-label">System Status</span>
          <div className="status-container">
            <div className="status-dot"></div>
            <span className="status-text">Operational</span>
          </div>
        </div>
      </div>

      <div className="logs-container">
        <div className="logs-header-row">
          <span className="logs-title">Log Stream</span>
          <span className="logs-status">Live Updates Enabled</span>
        </div>
        
        <table className="logs-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Wallet ID</th>
              <th>Activity</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(logs) ? (
              logs.map((log) => (
                <tr key={log.timestamp}>
                  <td className="time-col">{new Date(log.timestamp).toLocaleTimeString()}</td>
                  <td className="wallet-col">{log.wallet_id}</td>
                  <td>
                    <span className="badge success">{log.operation}</span>
                  </td>
                  <td className="text-right">
                    <button className="details-btn" onClick={() => openDetails(log.details)}>
                      Details →
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="time-col">{new Date(logs.timestamp).toLocaleTimeString()}</td>
                <td className="wallet-col">{logs.wallet_id}</td>
                <td>
                  <span className="badge success">{logs.operation}</span>
                </td>
                <td className="text-right">
                  <button className="details-btn" onClick={() => openDetails(logs.details)}>
                    Details →
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
