/* eslint-disable max-lines-per-function */
import axios from 'axios';
// axios.default.withCredentials = true;
const urlBase = 'http://localhost:3000/'
const instance = axios.create({
  withCredentials: true,
});
const responseBody = (response) => response.data;
const getUrl = (url) => urlBase + url;
const requests = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  put: (url, state) => instance.put(url, state).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
};

export const service = {
  get: (url) => requests.get(getUrl(url)),
  post: (url, data) => requests.post(getUrl(url), data),
  put: (url, state) => requests.put(getUrl(url), state),
  patch: (url, data) => requests.patch(getUrl(url), data),
};
export default {
  install: (Vue) => {
    Vue.prototype.$service = service;
  },
};
