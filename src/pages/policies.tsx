/** @jsxImportSource hono/jsx */
import type { FC } from "hono/jsx";
import type { OwsPolicy } from "../utils/types";
import { Layout } from "./layout";

type Props = {
  policies: OwsPolicy[];
};

export const Policies: FC<Props> = (props) => {
  const { policies } = props;

  return (
    <Layout>
      <div className="dashboard-header">
        <h1>Policies</h1>
        <p className="subtitle">Declarative rules for your wallet operations</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Policies</span>
          <span className="stat-value">{policies.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">System Default</span>
          <span className="stat-value">Active</span>
        </div>
        <div className="stat-card accent-card">
          <span className="stat-label">Policy Status</span>
          <div className="status-container">
            <div className="status-dot"></div>
            <span className="status-text">Enforced</span>
          </div>
        </div>
      </div>

      <div className="policies-list">
        {policies.length > 0 ? (
          policies
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime(),
            )
            .map((policy) => (
              <div key={policy.id} className="wallet-card">
                <div className="wallet-card-header">
                  <div className="wallet-info">
                    <h3 className="wallet-name">{policy.name || policy.id}</h3>
                    <span className="wallet-id">{policy.id}</span>
                  </div>
                </div>

                <div className="accounts-section">
                  <h4 className="section-title">Rules</h4>
                  <div className="policy-rules-block">
                    <pre>{JSON.stringify(policy.rules, null, 2)}</pre>
                  </div>
                </div>

                <div className="key-footer">
                  <span className="created-at">
                    Created: {new Date(policy.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))
        ) : (
          <div className="empty-state">
            <p>No policies found in ~/.ows/policies/</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
