import axios from "axios";

const BASE_URL = "http://138.2.87.246:1996";
const client = () => {
  const defaultOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  return {
    get: (endpoint, options = {}) =>
      axios.get(`${BASE_URL}${endpoint}`, { ...defaultOptions, ...options }),
    post: (endpoint, data, options = {}) =>
      axios.post(`${BASE_URL}${endpoint}`, data, {
        ...defaultOptions,
        ...options,
      }),
    put: (endpoint, data, options = {}) =>
      axios.put(`${BASE_URL}${endpoint}`, data, {
        ...defaultOptions,
        ...options,
      }),
    delete: (endpoint, options = {}) =>
      axios.delete(`${BASE_URL}${endpoint}`, { ...defaultOptions, ...options }),
  };
};

export const clientAPI = client();
