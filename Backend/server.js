import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'; // This will automatically load the .env file
import userModel from "./models/userModel.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



// app config

const app = express()
const port = 4000

// Middleware

app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

//API Endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

