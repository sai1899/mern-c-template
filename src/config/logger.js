const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "auth-service",
    },

    transports: new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
        ),
    }),
});

module.exports = logger;
