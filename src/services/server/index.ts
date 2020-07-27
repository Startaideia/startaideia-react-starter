import axios from "axios";

import CONFIG from "config";

export default axios.create({
    baseURL: CONFIG.SERVER_URL
});
