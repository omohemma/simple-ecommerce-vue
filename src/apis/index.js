import axios from "axios";

const apiClient =  axios.create({
  baseURL:"https://api.escuelajs.co/api/v1",
  withCredentials:false,
  headers:{
    "Accept" : "application/json",
    "Content-Type" : "application/json",
  }
})
export default apiClient;






