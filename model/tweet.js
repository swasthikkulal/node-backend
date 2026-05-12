import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    tweetData: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
}, { timestamps: true })
export default mongoose.model("tweet", tweetSchema)