import fetch from 'isomorphic-fetch';
import config from '../../config';

const fireRequest = async (method, url, data) => {

  const fullUrl = `${config.hostUrl}${url}`;
  const options = {
    method,
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(fullUrl, options);
  const json = await response.json();
  return response.ok ? json : Promise.reject(1);
};

export default {
  get(url, query) {
    // const qs = queryString.stringify(query, { arrayFormat: 'index' });
    return fireRequest('GET', `${url}?${query}`);
  },

  post(url, data) {
    return fireRequest('POST', url, data);
  },

  put(url, data) {
    return fireRequest('PUT', url, data);
  },

  delete(url) {
    return fireRequest('DELETE', url);
  },
};
