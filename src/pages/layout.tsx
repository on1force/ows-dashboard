import type { FC } from "hono/jsx";
import { Style } from "hono/css";
import { rootCss } from "./css";

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <title>OWS Dashboard</title>
        <Style>{rootCss}</Style>
        <script dangerouslySetInnerHTML={{ __html: `
          function toggleTheme() {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
          }
          document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.body.classList.add('dark');
            }
          });
        `}} />
      </head>
      <body>
        <nav className="nav-bar">
          <div className="nav-container">
            <div className="logo-section">
              <div className="logo-box"></div>
              <span className="brand-name">OWS Dash</span>
            </div>
            <div className="nav-links">
              <a href="#" className="nav-link active">Dashboard</a>
              <a href="#" className="nav-link">Wallets</a>
              <button className="theme-toggle" onClick="toggleTheme()">
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
