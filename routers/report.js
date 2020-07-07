const Report = require("../models").report
const User = require("../models").user
const { Router } = require("express");

const router = new Router();

router.post("/", async (req, res, next) => {
    const { name, leadId, note } = req.body
    try {
        const user = await User.findOne({where: {name}})
        const userId = user.dataValues.id
        const newReport = await Report.create({userId, leadId, note})
        return res.status(200).send(newReport)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;