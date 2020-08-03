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
    const {contact_name, contact_email, contact_phone, job_title} = req.body

    if (!contact_name, !contact_email, !contact_phone) {
        return res.
        status(400).
        send(`Please provide a name, email and phone number`);}
    try {
        const newContact = await Contact.create({
            job_title: job_title,
            name: contact_name, 
            email: contact_email, 
            phone: contact_phone})
        res.status(200).send(newContact)
    } catch(error) {
        console.log(error)
    }
})

// router.delete("/:id", async (req, res, next) => {
//     try {
//         const id = parseInt(req.params.id)
//         const leadToDelete = await Lead.findByPk(id)
//         if(!leadToDelete){
//             return res.
//                 status(404).send(`No lead found with id ${id}`)
//         } else {
//             const deleted = await leadToDelete.destroy();
//             res.json(deleted);
//         }
//     } catch {
//         console.log(error)
//         return res.status(400).send(`something went wrong`)
//     }
// })

module.exports = router;

