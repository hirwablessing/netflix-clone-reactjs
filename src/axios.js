import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL
});

export const fetchData = async requestUrl => await instance.get(requestUrl);
