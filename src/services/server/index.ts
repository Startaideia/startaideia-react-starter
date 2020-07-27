import axios from "axios";

import CONFIG from "config/index";

export default axios.create({
    baseURL: CONFIG.SERVER_URL
});
