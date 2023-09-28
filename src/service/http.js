import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const http = axios.create({ baseURL: `${baseURL}/` });
function getAuthHeader() {
  // const accessToken = localStorage.getItem("prank_token");
  let authHeader = { "Content-Type": "application/json" };
  // if (accessToken) {
  //   authHeader = { Authorization: `Bearer ${accessToken}` };
  // }
  return authHeader;
}

function get(url, params = {}) {
  return http.get(url, {
    params,
    headers: { ...getAuthHeader() },
  });
}
function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}
function put(url, data, headers = {}) {
  return http.patch(url, data, { headers: { ...getAuthHeader(), ...headers } });
}

function remove(url, headers = {}) {
  return http.delete(url, {
    headers: { ...getAuthHeader(), ...headers },
  });
}

export { http, get, post, put, remove };
