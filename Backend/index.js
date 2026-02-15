import express from "express"
import cors from "cors"
import { connectToDB } from "./Database/db.js"
import { SignupRoute } from "./Routes/Signup.js"
import { LoginRoute } from "./Routes/Login.js"
const app = express()

const port = 8080
const cors_options = {
    // origin: ["https://shopcart-delta.vercel.app"],
    origin: ["http://192.168.40.94:5173","http://10.136.57.251:5173","https://shopcart-delta.vercel.app"],
   
    methods:["GET","POST"],
    credentials: true,

};

connectToDB()
app.use(cors(cors_options))
app.use(express.json()) 
app.set("trust proxy", true)

app.get("/ipCheck", (req, res) => {

    const clientIP =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    const cleanIP = clientIP?.replace(/^::ffff:/, "");

    console.log("Client IP", cleanIP)
    

    res.status(200).json({
        ip: cleanIP
    })
})

app.get("/", (req, res) => {

   
       const clientIP =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    const cleanIP = clientIP?.replace(/^::ffff:/, "");

    res.status(200).json({
        msg: "Running ",
        ip:clientIP
    })
})


app.use(SignupRoute)
app.use(LoginRoute)

app.listen(port, () => console.log("server is on", port))
