import mongoose from "mongoose";
const MONGO_URL = "mongodb://admin:qwerty@localhost:27017/mydb?authSource=admin";

const connectTODB = async (req, res) => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("mongodb connected")
    } catch (error) {
        console.log("mongodb error")
    }
}

export default connectTODB;
