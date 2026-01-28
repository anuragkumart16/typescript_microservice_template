import app from "./app";
import { appConfig } from "./config/envConfig";

const port = appConfig.port
const microserviceName = appConfig.microserviceName

app.listen(port, () => {
    console.log(`${microserviceName} is up and running on http://localhost:${port}`);
});