import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await(mongoose.connect(process.env.MONGO_URI));
        console.log(`WOHOOOOO!!!: ${conn.connection.host}`);
    } catch(error){
        console.log(`nahhhh!!!: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;