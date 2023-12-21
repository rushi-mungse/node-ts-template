import app from "./app";
import { PORT } from "./config";

const startServer = () => {
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

startServer();
