import { logger } from "./config/logger";
import { Server } from "./server";

let server: Server;

try {
  server = new Server();
  server.run();
} catch (error) {
  logger.error("Unexpected error happened", { error });
  process.exit(1);
}

const signals = ["SIGINT", "SIGTERM"] as NodeJS.Signals[];
signals.forEach((s) => {
  process.on(s, () => {
    logger.info(`${s} signal received, shutting down gracefully...`);
    if (!server) return process.exit(1);

    server.stop().then(() => process.exit(1));
  });
});
