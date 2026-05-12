import express from "express";
import { createTweet, getAllTweets } from "../controller/tweetController.js";

const router = express.Router()

router.post("/post", createTweet)
router.get("/get-tweet", getAllTweets)


export default router;