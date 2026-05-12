import user from "../model/user.js";
import bcrypt from "bcrypt"
export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        const hashpassword = await bcrypt.hash(password, 10)
        const createUser = await user.create({
            name,
            email,
            password: hashpassword
        })
        await createUser.save()
        res.status(201).json({ success: true, mesaage: "registration successful" })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await user.findOne({ email })
        console.log(findUser, "1233")
        if (!findUser) {
            res.json({ success: false, message: "user not found" })
        }
        const comparePassword = await bcrypt.compare(password, findUser.password)
        res.status(200).json({ success: true, message: "login successful" })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}