import { css } from "hono/css";

export const rootCss = css`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

  :root {
    all: unset;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-optical-sizing: auto;
    padding: 0;

    --background-color: oklch(0.1569 0.018 195.48);
    --primary-color: oklch(0.9969 0.005 145.54);
    --secondary-color: oklch(0.6441 0.1712 147.39);
    --muted-color: oklch(0.3368 0.0172 196.37);
    --accent-color: oklch(0.5345 0.1453 145.49);
  }

  a {
    all: unset;
    cursor: pointer;
  }

  button {
    all: unset;
    cursor: pointer;
    background-color: var(--accent-color);
    color: var(--primary-color);
    padding: 0rem 1rem;
    border-radius: 0.5rem;
    height: 2.4rem;
    width: fit-content;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  button:hover {
    background-color: var(--primary-color);
    color: var(--accent-color);
  }

  button:active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  .muted {
    color: var(--muted-color);
  }

  .dark {
    background-color: var(--background-color);
    color: var(--primary-color);
  }

  .nav {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    align-items: center;
  }

  .logo-container {
    flex: 1;
  }

  .logo {
    height: 2.4rem;
    filter: invert(1);
  }

  .link-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .logs-container {
    margin: 0rem 6rem;
    background-color: var(--muted-color);
    border-radius: 0.5rem;
    height: calc(100% - 15vh);
    overflow: clip;
  }

  .logs-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0px 1rem;
    border-bottom: 1px solid var(--accent-color);
  }

  .logs {
    height: 100%;
    overflow: auto;
  }

  .log {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0rem 1rem;
    align-items: center;
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
