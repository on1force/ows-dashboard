import "dotenv/config";
import { homedir } from "node:os";

export const config = {
  owsPath: `${homedir()}/.ows`,
  logsPath: `${homedir()}/.ows/logs`,
  walletsPath: `${homedir()}/.ows/wallets`,
  port: process.env.PORT || 3000,
};
