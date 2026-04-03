import type { FC } from "hono/jsx";
import { Style } from "hono/css";
import { rootCss } from "./css";

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <title>OWS Dashboard</title>
        <Style>{rootCss}</Style>
      </head>
      <body className={"dark"}>
        <div className={"nav"}>
          <div className="logo-container">
            <img
              src={"/assets/logo.svg"}
              className="logo"
              alt="OWS Dashboard Logo"
            />
          </div>

          <div className="link-container">
            <p className="">Dashboard</p>
            <p className="muted">|</p>
            <p className="muted">Active</p>
          </div>
        </div>
        <main>{props.children}</main>
      </body>
    </html>
  );
};
