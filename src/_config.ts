const MyConfig = {} as any;

//Value development | production
const environment = process.env.NODE_ENV;

if (environment == "development") {
    MyConfig.defaultRouter = "/";
    MyConfig.host = "http://test-api";
}

if (environment == "production") {
    MyConfig.defaultRouter = "/";
    MyConfig.host = "http://prod-api";
}

export default MyConfig;
