export const appConfig = {
    port: process.env.PORT || 5001,
    nodeEnv: process.env.NODE_ENV || "development",
    microserviceName: process.env.MICROSERVICE_NAME ? process.env.MICROSERVICE_NAME + "microservice" : "server"
}