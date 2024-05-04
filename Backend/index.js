import express from "express"
import cors from "cors"
import { connectToDB } from "./Database/db.js"
import { SignupRoute } from "./Routes/Signup.js"
import { LoginRoute } from "./Routes/Login.js"
const app = express()


const port = 8080
const cors_options = {
    origin: ["https://shopcart-delta.vercel.app","http://192.168.84.94:5173"],

    methods:["GET","POST"],
    credentials: true,

};

connectToDB()
app.use(cors(cors_options))
app.use(express.json()) 


// app.get('/',(req,res)=>{
//   res.json({
//     message:'bad request'
//   })
// })

app.use(SignupRoute)
app.use(LoginRoute)

app.listen(port, () => console.log("server is on", port))
