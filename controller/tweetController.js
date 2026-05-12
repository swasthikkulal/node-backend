import { text } from "express";
import tweet from "../model/tweet.js";
export const createTweet = async (req, res) => {
    try {
        const { tweetData, image } = req.body;
        const create = await tweet.create({
            tweetData,
            image
        })
        await create.save();
        res.status(201).json({ success: true, message: "tweet is created" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getAllTweets = async (req, res) => {
    try {
        const findTweet = await tweet.find();
        if (!findTweet) {
            res.status(400).json({ success: false, message: "tweets not found" })
        }
        res.status(200).json({ success: true, message: "tweets found", data: findTweet })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}