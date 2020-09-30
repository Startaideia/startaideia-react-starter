import axios from "axios";

export default function () {
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
}
