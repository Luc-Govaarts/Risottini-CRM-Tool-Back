const Action = require("../models").action;
const User = require("../models").user
const { Router } = require("express");

const router = new Router();

router.post("/", async (req, res, next) => {
    const { leadId, userId, action, date, note } = req.body
    try {
        if(leadId, action, date, note) {
            const newAction = await Action.create({leadId, userId, action, due_date: date, note})
            return res.
                status(200).
                send(newAction)
        } else {
            return res.
                status(400).
                send(`Missing parameters`)
        }
    } catch(error){
        console.log(error)
        return res.status(400).send(`something went wrong`)
    }
})

router.get("/:id", async (req, res, next) => {
    const leadId = parseInt(req.params.id)
    console.log("LEAD ID A:", leadId)
    try {
        const actions = await Action.findAll({where: {leadId}})
        return res.
        status(200).send(actions)    
    } catch(error) {
        console.log(error)
        return res.status(400).send(`something went wrong`)
    }
})


module.exports = router;