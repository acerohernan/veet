import winston from 'winston';

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.metadata(),
        winston.format.timestamp({
          format: 'YY-MM-DD HH:mm:ss',
        }),
        winston.format.printf(
          (info) =>
            `[${info.timestamp}] [${info.level}] : ${info.message} ${
              info.metadata ? JSON.stringify(info.metadata) : ''
            }`,
        ),
      ),
    }),
  ],
});
