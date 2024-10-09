import mongoose from "mongoose";

const db = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log(error);
    }
}

export default db;