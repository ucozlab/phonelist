import axios from "axios";
import {API_BASE_URL} from "../../config";

const headers = {
  "accept": "text/plain",
  "Content-Type": "application/json-patch+json"
};

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,
  headers: {
    ...headers,
    common: {
      ...__authHeaders()
    }
  }
});

AxiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Do something with response error
  if (error && error.response && error.response.status === 401) {
    console.log('401 error, not authorized...');
    clearAuthToken();
  }
  return Promise.reject(error.response);
});

export default AxiosInstance;

function __authHeaders() {
  const token = localStorage.getItem('authToken');
  if (!token)
    return {
      Authorization: null
    };
  return {
    Authorization: `Bearer ${token}`
  }
}

export const setAuthToken = token => {
  localStorage.setItem('authToken', token);
  AxiosInstance.defaults.headers.common = {...__authHeaders()};
};

export const clearAuthToken = () => {
  localStorage.removeItem('authToken');
  AxiosInstance.defaults.headers.common = {...__authHeaders()};
};


export const apiResponseError = response => {
  // console.log("apiResponseError", response);
  if (response && response.data && response.data.errors) {
    return Object.keys(response.data.errors)
      .map(k => `${k} - ${response.data.errors[k]}`)
      .join('<br />');
  }
  if (response && response.error) {
    return response.error;
  }

  return null;
};

export const apiGet = async url => {
  try {
    const response = await AxiosInstance.get(url);
    return {data: {...response.data}, error: apiResponseError(response)};
  } catch (error) {
    return {error: apiResponseError(error)};
  }
};

export const apiPost = async (url, data) => {
  console.log("url to post", url);
  console.log("data to post", data);
  try {
    const response = await AxiosInstance.post(url, data);
    console.log("response1", response);
    return {data: {...response.data}, error: apiResponseError(response)};
  } catch (error) {
    console.log("response1 error", error);
    return {error: apiResponseError(error)};
  }
}

