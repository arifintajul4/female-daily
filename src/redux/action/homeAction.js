import axios from "axios";

export const setDataHome = () => (dispacth) => {
  axios
    .get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
    .then((result) => {
      dispacth({
        type: "UPDATE_DATA_HOME",
        payload: result?.data,
        loading: false,
      });
    })
    .catch((err) => {
      dispacth({
        type: "UPDATE_DATA_HOME",
        loading: false,
        error: true,
      });
      console.log(err);
    });
};
