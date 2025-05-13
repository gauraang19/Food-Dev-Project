import mongoose from "mongoose";

export  const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gauraang:01062002%40Gp@cluster0.qemci.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}