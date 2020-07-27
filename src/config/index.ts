import * as PRODUCTION from "./production";
import * as DEVELOPMENT from "./development";

const isDevelopment = () => {
    return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
};

const CONFIGURATION = isDevelopment() ? DEVELOPMENT : PRODUCTION;

export default CONFIGURATION;
