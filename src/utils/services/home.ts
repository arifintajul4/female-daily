import axios from "axios";

const instance = axios.create();

export const getHomeData = () => {
  return instance
    .get(`https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp`)
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err.response));
};
