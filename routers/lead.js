const Lead = require("../models").lead;
const Report = require("../models").report;
const Action = require("../models").action;
const Contact = require("../models").contact;
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
    try {
        const leads = await Lead.findAll({include: Report})
        res.send(leads)
    } catch(error) {
        console.log(error)
    }
})

router.post("/", async (req, res, next) => {
    const {company_name, associated_company_name, 
        contact_person, phone, address, email, supplier} = req.body
    if (!company_name, !contact_person, !phone, !address, !email) {
        return res.
        status(400).
        send(`Please provide a company name, a contact person, an address, 
        an email and a phone number`);
    }
    try {
        const newLead = await Lead.create({
            company_name, associated_company_name, 
        contact_person, phone, address, email, supplier
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;