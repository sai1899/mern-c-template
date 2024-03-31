require("dotenv").config();
const logger = require("./config/logger");
const app = require("./app");

function startSeverr() {
    try {
        
        logger.info(`port is ${process.env.PORT}`);
        app.listen(process.env.PORT);
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
}

startSeverr();
