const Report = require("../models").report
const User = require("../models").user
const { Router } = require("express");

const router = new Router();

router.get("/:id", async (req, res, next) => {
    const leadId = parseInt(req.params.id)
    console.log("LEAD ID B:", leadId)
    try {
        const reports = await Report.findAll({where: {leadId}})
        return res.
            status(200).send(reports)    
    } catch(error) {
        console.log(error)
        return res.status(400).send(`something went wrong`)
    }
})

router.post("/", async (req, res, next) => {
    const { name, leadId, note } = req.body
    try {
        const user = await User.findOne({where: {name}, include: User})
        const userId = user.dataValues.id
        const newReport = await Report.create({userId, leadId, note})
        return res.status(200).send(newReport)
    } catch(error) {
        console.log(error)
        return res.status(400).send(`something went wrong`)
    }
})

module.exports = router;