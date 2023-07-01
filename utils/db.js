import mongoose from "mongoose";

let isConnected = false;

export async function db(){
    mongoose.set("strictQuery", true)

    if(isConnected){
        console.log(`Database connected`)
        return;
    }
    try {
        await mongoose.connect(process.env.MOGNODB_LOCAL_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true

        console.log(`MongoDB connected`)
    } catch(err){
        console.log(err);
    }
}
