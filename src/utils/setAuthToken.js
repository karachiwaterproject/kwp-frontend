import axios from "axios";

const setAuthToken = (token) => {
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = true;
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
