import { css } from "hono/css";

export const rootCss = css`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

  :root {
    --bg-zinc-50: #fafafa;
    --bg-zinc-900: #18181b;
    --bg-zinc-950: #09090b;
    --text-zinc-900: #18181b;
    --text-zinc-400: #a1a1aa;
    --text-zinc-500: #71717a;
    --border-zinc-200: #e4e4e7;
    --border-zinc-800: #27272a;
    --emerald-500: #10b981;
    --emerald-600: #059669;
    --emerald-700: #047857;

    /* Theme-aware variables */
    --background: var(--bg-zinc-50);
    --surface: #ffffff;
    --text-primary: var(--text-zinc-900);
    --text-secondary: var(--text-zinc-500);
    --border: var(--border-zinc-200);
    --accent: var(--emerald-600);
    --accent-hover: var(--emerald-700);
    --shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
    --card-shadow: 0 10px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -4px rgba(0,0,0,0.04);
    --scrollbar-thumb: #d4d4d8;
  }

  .dark {
    --background: var(--bg-zinc-950);
    --surface: var(--bg-zinc-900);
    --text-primary: var(--bg-zinc-50);
    --text-secondary: var(--text-zinc-400);
    --border: var(--border-zinc-800);
    --accent: var(--emerald-500);
    --accent-hover: #34d399;
    --shadow: none;
    --card-shadow: none;
    --scrollbar-thumb: #3f3f46;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) transparent;
  }

  /* Webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-secondary);
  }

  body {
    all: unset;
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s;
    display: block;
    min-height: 100vh;
  }

  /* Reset Hono/css default root if necessary */
  :root {
    all: unset;
    font-family: "Plus Jakarta Sans", sans-serif;
    padding: 0;
  }

  .nav-bar {
    background-color: var(--surface);
    border-bottom: 1px solid var(--border);
    height: 64px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
    color: var(--accent);
  }

  .brand-name {
    font-weight: 800;
    font-size: 18px;
    letter-spacing: -0.025em;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .nav-link {
    all: unset;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    transition: color 0.2s;
  }

  .nav-link:hover, .nav-link.active {
    color: var(--accent);
  }

  .theme-toggle {
    all: unset;
    cursor: pointer;
    background: var(--background);
    padding: 6px;
    border-radius: 8px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sun-icon { display: block; }
  .moon-icon { display: none; }
  .dark .sun-icon { display: none; }
  .dark .moon-icon { display: block; }

  .main-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .dashboard-header {
    margin-bottom: 32px;
  }

  .dashboard-header h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.025em;
  }

  .dashboard-header .subtitle {
    margin: 4px 0 0 0;
    color: var(--text-secondary);
    font-size: 16px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }

  .stat-card {
    background-color: var(--surface);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .stat-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-value {
    font-size: 32px;
    font-weight: 800;
  }

  .accent-card {
    background: linear-gradient(135deg, var(--accent), #047857);
    color: white;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
  }

  .accent-card .stat-label {
    color: rgba(255, 255, 255, 0.8);
  }

  .status-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(74, 222, 128, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
    }
    100% {
      box-shadow: 0 0 0 0px rgba(74, 222, 128, 0);
    }
  }

  .status-text {
    font-size: 18px;
    font-weight: 700;
  }

  .logs-container {
    all: unset; /* Reset old styles */
    display: block;
    background-color: var(--surface);
    border-radius: 16px;
    border: 1px solid var(--border);
    box-shadow: var(--card-shadow);
    overflow: hidden;
    max-height: 600px;
    display: flex;
    flex-direction: column;
  }

  .logs-header-row {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }

  .logs-title {
    font-weight: 800;
    color: var(--text-primary);
    font-size: 16px;
  }

  .logs-status {
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 600;
  }

  .logs-table-container {
    overflow-y: auto;
    flex: 1;
  }

  .logs-table {
    width: 100%;
    border-collapse: collapse;
  }

  .logs-table th {
    background-color: var(--background);
    text-align: left;
    font-size: 11px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 14px 24px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .logs-table td {
    padding: 18px 24px;
    border-bottom: 1px solid var(--border);
    font-size: 14px;
  }

  .time-col {
    color: var(--text-secondary);
  }

  .wallet-col {
    font-family: monospace;
    font-weight: 500;
    color: var(--text-primary);
  }

  .badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
  }

  .badge.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--accent);
  }

  .badge.info {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  .wallets-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .wallet-card {
    background-color: var(--surface);
    border-radius: 16px;
    border: 1px solid var(--border);
    box-shadow: var(--card-shadow);
    overflow: hidden;
  }

  .wallet-card-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wallet-name {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
  }

  .wallet-id {
    font-size: 12px;
    color: var(--text-secondary);
    font-family: monospace;
  }

  .accounts-section {
    padding: 24px;
  }

  .section-title {
    margin: 0 0 16px 0;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
  }

  .accounts-table-container {
    border-radius: 12px;
    border: 1px solid var(--border);
    overflow-y: auto;
    max-height: 300px;
  }

  .accounts-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  .accounts-table th {
    background-color: var(--background);
    text-align: left;
    padding: 12px 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--text-secondary);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .accounts-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
  }

  .accounts-table tr:last-child td {
    border-bottom: none;
  }

  .address-col {
    font-family: monospace;
    color: var(--accent);
  }

  .path-col {
    color: var(--text-secondary);
    font-family: monospace;
    font-size: 12px;
  }

  .text-right { text-align: right; }
  .text-center { text-align: center; }

  .details-btn {
    all: unset;
    cursor: pointer;
    color: var(--accent);
    font-weight: 700;
    font-size: 13px;
    transition: opacity 0.2s;
  }

  .details-btn:hover {
    opacity: 0.8;
  }

  .modern-dialog {
    all: unset;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modern-dialog[open] {
    display: flex;
  }

  .dialog-content {
    background: var(--surface);
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    border: 1px solid var(--border);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }

  .dialog-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dialog-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
  }

  .close-btn {
    all: unset;
    cursor: pointer;
    font-size: 18px;
    color: var(--text-secondary);
  }

  .log-details-block {
    padding: 24px;
    background-color: var(--background);
    margin: 20px;
    border-radius: 12px;
    border: 1px solid var(--border);
  }

  .log-details-block pre {
    margin: 0;
    font-family: monospace;
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-all;
    color: var(--text-primary);
  }

  .keys-list, .policies-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .key-details-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 8px;
  }

  .key-detail-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .key-detail-item .label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .key-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--border);
    background-color: var(--background);
    display: flex;
    justify-content: flex-end;
  }

  .created-at {
    font-size: 11px;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .policy-rules-block {
    background-color: var(--background);
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
    max-height: 400px;
    overflow-y: auto;
  }

  .policy-rules-block pre {
    margin: 0;
    font-family: monospace;
    font-size: 12px;
    color: var(--accent);
  }

  .empty-state {
    text-align: center;
    padding: 60px 24px;
    background-color: var(--surface);
    border-radius: 16px;
    border: 1px dashed var(--border);
    color: var(--text-secondary);
  }

  .badge.accent {
    background-color: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
  }

  .badge.warning {
    background-color: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }

  .warning-banner {
    background-color: rgba(245, 158, 11, 0.05);
    border: 1px solid rgba(245, 158, 11, 0.2);
    border-radius: 16px;
    padding: 20px 24px;
    margin-bottom: 32px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .warning-icon {
    font-size: 24px;
  }

  .warning-title {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 800;
    color: #f59e0b;
  }

  .warning-list {
    margin: 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .warning-list li {
    margin-bottom: 4px;
  }
`;
