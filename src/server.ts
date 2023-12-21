import app from "./app";
import { PORT } from "./config";
import logger from "./config/logger";

const startServer = () => {
    try {
        app.listen(PORT, () => {
            logger.info(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) logger.error(error.message);
        else logger.error("Internal Server Error");
    }
};

startServer();
