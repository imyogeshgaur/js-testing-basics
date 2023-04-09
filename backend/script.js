import express, { json, urlencoded } from "express"
import connectToDb from "./db/config.js"
import User from "./models/User.js";

connectToDb();

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())

app.get("/", async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).send(users)
    } catch (error) {
        console.log("Some Error Occurred : ", error)
    }
})

app.post("/signup", async (req, res) => {
    try {
        const userEmailExistence = User.find({ email: req.body.email });
        const userNameExistence = User.find({ email: req.body.userName });
        if (userEmailExistence || userNameExistence) {
            return res.status(200).send("User Already Exist !!!")
        }
        const newUserToSave = new User({
            ...req.body,
        })
        const user = await newUserToSave.save();
        return res.status(201).send(user)
    } catch (error) {
        console.log("Some Error Occurred : ", error)
    }
})

app.put("/update/:email", async (req, res) => {
    try {
        const email = req.params.email;
        console.log(email)
        const userToUpdate = await User.findOne({ email })
        console.log(userToUpdate)
        if (userToUpdate) {
            const data = await userToUpdate.updateOne(req.body)
            if (data.matchedCount) {
                return res.status(200).send("Details Updated !!!")
            } else {
                return res.status(200).send("Details not Updated !!!")
            }
        }
    } catch (error) {
        console.log("Some Error Occurred : ", error)
    }
})

app.delete("/delete/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const userToDelete = await User.findOne({ email })
        if (userToDelete) {
            const data = await userToDelete.deleteOne()
            if (data === userToDelete) {
                return res.status(200).send("User Deleted !!!")
            } else {
                return res.status(200).send("User is not Deleted !!!")
            }
        }
    } catch (error) {
        console.log("Some Error Occurred : ", error)
    }
})

app.listen(4000);