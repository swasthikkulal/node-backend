import express from "express";
import connectTODB from "./db.js";
import userRoute from "./router/userRoute.js";
import tweetRoute from "./router/tweetRoute.js"
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())
connectTODB();
app.use("/api", userRoute)
app.use("/tweet", tweetRoute)
app.get("/", (req, res) => {
    res.send("server is running")
})
const PORT = 7000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})