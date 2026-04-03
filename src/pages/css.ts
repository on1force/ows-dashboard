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
  }

  body.dark {
    --background: var(--bg-zinc-950);
    --surface: var(--bg-zinc-900);
    --text-primary: var(--bg-zinc-50);
    --text-secondary: var(--text-zinc-400);
    --border: var(--border-zinc-800);
    --accent: var(--emerald-500);
    --accent-hover: #34d399;
    --shadow: none;
    --card-shadow: none;
  }

  * {
    box-sizing: border-box;
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

  .logo-box {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, var(--accent), #059669);
    border-radius: 6px;
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
  body.dark .sun-icon { display: none; }
  body.dark .moon-icon { display: block; }

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
  }

  .logs-header-row {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .text-right { text-align: right; }

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
`;
