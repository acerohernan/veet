import { Server } from '@/server';
import { logger } from '@/config/logger';

let server: Server | undefined;

try {
  server = new Server();
  server.run();
} catch (error) {
  logger.error('[Main] unexpected error happened', { error });
  if (!server) process.exit(1);
  server.stop();
}

const signals = ['SIGINT', 'SIGTERM'] as NodeJS.Signals[];
signals.forEach((s) => {
  process.on(s, () => {
    logger.info(`[Main] ${s} signal received, shutting down gracefully...`);
    if (!server) return process.exit(1);
    server.stop();
  });
});
