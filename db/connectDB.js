import mongoose from "mongoose"



const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected succesfully');
    } catch (error) {
        console.log("Error connecting to database",error);
    }
}

export default connectDB;