import axios from "axios";
const API = axios.create({
    baseURL: "https://shopcart-51mp.onrender.com",

    timeout: 10000, // 10 seconds in milliseconds
    headers: {
        "Content-Type": "application/json",
        // You can add other headers as needed
    },
    withCredentials: true
});
export default API;
