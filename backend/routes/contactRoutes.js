import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

/* Create Contact */

router.post("/", async (req, res) => {

try {

const { name, email, message } = req.body;

const newContact = new Contact({
name,
email,
message
});

await newContact.save();

res.json({
message: "Message saved successfully",
data: newContact
});

} catch (error) {

res.status(500).json({
error: error.message
});

}

});

/* Get All Messages */

router.get("/", async (req, res) => {

try {

const contacts = await Contact.find();

res.json(contacts);

} catch (error) {

res.status(500).json({
error: error.message
});

}

});

export default router;