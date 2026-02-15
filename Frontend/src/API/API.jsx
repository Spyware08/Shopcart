import axios from "axios";
const API = axios.create({
    // baseURL: "https://shopcart-backend-pearl.vercel.app",
    baseURL: "http://10.136.57.251:8080",


    timeout: 10000, // 10 seconds in milliseconds
    headers: {
        "Content-Type": "application/json",
        
    },
    withCredentials: true
});
export default API;
