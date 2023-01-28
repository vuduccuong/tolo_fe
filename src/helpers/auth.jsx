import axios from "axios";

export const setAuthToken = (access_token, token_type) => {
  if (access_token) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `${token_type} ${access_token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const hasAuth = () => {
  return !!localStorage.getItem("access_token");
};
