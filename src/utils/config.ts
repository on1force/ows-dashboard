import "dotenv/config";
import { homedir } from "node:os";

export const config = {
  owsPath: `${homedir()}/.ows`,
  logsPath: `${homedir()}/.ows/logs`,
  walletsPath: `${homedir()}/.ows/wallets`,
  keysPath: `${homedir()}/.ows/keys`,
  policiesPath: `${homedir()}/.ows/policies`,
  configPath: `${homedir()}/.ows/config.json`,
  port: process.env.PORT || 3000,
};
