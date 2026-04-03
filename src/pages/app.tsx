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

  const openDetails = (details: OwsLog<any>["details"]) => {
    if (!dialogRef.current) return;

    setActiveDetails(details);
    dialogRef.current.showModal();
  };

  return (
    <Layout>
      <dialog ref={dialogRef}>
        <div className="log-details">
          <p>{activeDetails}</p>
        </div>

        <button onClick={() => dialogRef.current?.close()}>Close</button>
      </dialog>

      <div className="logs-container">
        <div
          style={{
            padding: "0.1rem 1rem",
            "border-bottom": "1px solid var(--accent-color)",
          }}
        >
          <h3>Activities</h3>
        </div>
        <div className="logs-header">
          <p>Time</p>
          <p>Wallet ID</p>
          <p>Activity</p>
          <p>Details</p>
        </div>
        <div className="logs">
          {Array.isArray(logs) ? (
            logs.map((log) => (
              <div key={log.timestamp} className="log">
                {log.timestamp}
              </div>
            ))
          ) : (
            <div className="log">
              <p>{new Date(logs.timestamp).toLocaleString()}</p>
              <p>{logs.wallet_id}</p>
              <p>{logs.operation}</p>
              <button onClick={() => openDetails(logs.details)}>
                See Details
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
