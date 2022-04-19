import axios from "axios";
import paramsSerializer from "./paramsSerializer";

const DemoAPI = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  paramsSerializer,
});

export default DemoAPI;
