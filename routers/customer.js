const Customer = require("../models/").customer;
const { Router } = require("express");

const router = new Router();

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
        const newCustomer = await Customer.create({
            company_name, associated_company_name, 
        contact_person, phone, address, email, supplier
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;