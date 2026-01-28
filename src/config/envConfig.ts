
function setAppConfig(){}

export const appConfig = {
    port: process.env.PORT || 5001,
    nodeEnv: process.env.NODE_ENV || "dev",
    microserviceName: process.env.MICROSERVICE_NAME ? process.env.MICROSERVICE_NAME + "microservice" : "server"
}

