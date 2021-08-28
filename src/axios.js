import axios from "axios";

const instance = axios.create({
  baseURL: "", // API url goes here
});

export default instance;
