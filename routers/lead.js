const Lead = require("../models").lead;
const Report = require("../models").report;
const Action = require("../models").action;
const Contact = require("../models").contact;
const User = require("../models").user
const SalesCyclePhase = require("../models").salesCyclePhase
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
    try {
        const leads = await Lead.findAll({include: [Report, 
            Action, Contact, User, SalesCyclePhase]})
        res.send(leads)
    } catch(error) {
        console.log(error)
    }
})

router.post("/", async (req, res, next) => {
    const {company_name, associated_company_name, 
        contact_person, company_phone, 
        company_address, company_email, 
        supplier, contactId, 
        userId} = req.body
    const salesCyclePhaseId = 1
    if (!company_name, !company_phone, !company_address, !company_email, !contactId) {
        return res.
            status(400).
            send(`Please provide a company name, an address, 
            an email, a phone number and a contact person`);
    }
    try {
        const newLead = await Lead.create({
            company_name, associated_company_name, 
            contact_person, company_phone, 
            company_address, company_email, supplier,
            userId, contactId, salesCyclePhaseId})
        return res.
            status(200).
            send(newLead)
    } catch (error) {
        next(error)
    }
})

router.patch("/:id/phase", async (req, res, next) => {
    const id = parseInt(req.params.id)
    const newSalesCyclePhaseId = req.body.newPhaseId
    try {
        const leadToUpdate = await Lead.findByPk(id)
    if (!leadToUpdate) {
        return res.
        status(404).send(`No lead found with id ${id}`)
    } else {
        const updateLead = await leadToUpdate.update({salesCyclePhaseId: newSalesCyclePhaseId})
        const updatedLead = await Lead.findByPk(id, {include: [Report, 
            Action, Contact, User, SalesCyclePhase]})
        return res.
        status(200).
        send(updatedLead)
    }
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;