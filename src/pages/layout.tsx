import type { FC } from "hono/jsx";
import { Style } from "hono/css";
import { rootCss } from "./css";

export const Layout: FC = (props) => {
  return (
    <html lang="en">
      <head>
        <title>OWS Dashboard</title>
        <link rel="icon" type="image/svg+xml" href="/assets/icon.svg" />
        <Style>{rootCss}</Style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (savedTheme === 'dark' || (!savedTheme && supportDarkMode)) {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          })();

          function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
          }
          function openDetails(detailsStr) {
            let details;
            try {
              details = JSON.parse(detailsStr);
            } catch (e) {
              details = detailsStr;
            }
            const dialog = document.getElementById('details-dialog');
            const pre = dialog.querySelector('.log-details-block pre');
            pre.textContent = typeof details === 'object' ? JSON.stringify(details, null, 2) : details;
            dialog.showModal();
          }
          function closeDetails() {
            document.getElementById('details-dialog').close();
          }
        `,
          }}
        />
      </head>
      <body>
        <nav className="nav-bar">
          <div className="nav-container">
            <div className="logo-section">
              <svg
                className="logo-icon"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.89453 3.39233L17.6757 11.1735L24.296 4.55325L30.9163 11.1735L38.6975 3.39233"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.3047 9.99902L37.5235 17.7802L44.1438 24.4005L37.5235 31.0208L45.3047 38.802"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.6973 45.4082L30.9161 37.627L24.2958 44.2473L17.6755 37.627L9.8943 45.4082"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.28906 38.8015L11.0703 31.0203L4.44998 24.4L11.0703 17.7797L3.28907 9.99855"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="brand-name">OWS Dash</span>
            </div>
            <div className="nav-links">
              <a href="/" className="nav-link">
                Dashboard
              </a>
              <a href="/wallets" className="nav-link">
                Wallets
              </a>
              <a href="/keys" className="nav-link">
                Keys
              </a>
              <a href="/policies" className="nav-link">
                Policies
              </a>
              <button className="theme-toggle" onclick="toggleTheme()">
                <span className="sun-icon">☀️</span>
                <span className="moon-icon">🌙</span>
              </button>
            </div>
          </div>
        </nav>
        <main className="main-content">{props.children}</main>
      </body>
    </html>
  );
};
