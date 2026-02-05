import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/UserRoute.js"


const app=express();
app.use(bodyParser.json())
app.use(cors());
dotenv.config();

app.use("/api",route)

const PORT=process.env.PORT || 8009
const MONGOURL=process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>{
    console.log("mongodb connection success")
    app.listen(PORT,()=>{
        console.log(`server listening ${PORT}...`)
    })
}).catch((err)=>{
    console.log("Error connection",err.toString())
})

