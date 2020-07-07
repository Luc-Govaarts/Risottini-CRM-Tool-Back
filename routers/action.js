const Action = require("../models").action;
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
    }
})


module.exports = router;