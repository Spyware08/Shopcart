import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const User = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String }

})

export const Usermodel = mongoose.model("user", User)

export async function connectToDB() {
   try{
    await mongoose.connect(process.env.Database_url)
    console.log("DB Connected");
   }catch(err){
    console.log("error is ",err);
   }
}
