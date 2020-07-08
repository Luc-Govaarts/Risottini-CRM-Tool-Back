const Contact = require("../models").contact
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
    try {
        const contacts = await Contact.findAll()
        res.send(contacts)
    } catch(error) {
        console.log(error)
    }
})

router.post("/", async (req, res , next) => {
    const {contact_name, contact_email, contact_phone} = req.body

    if (!contact_name, !contact_email, !contact_phone) {
        return res.
        status(400).
        send(`Please provide a name, email and phone number`);}
    try {
        const newContact = await Contact.create({
            name: contact_name, 
            email: contact_email, 
            phone: contact_phone})
        res.status(200).send(newContact)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;

