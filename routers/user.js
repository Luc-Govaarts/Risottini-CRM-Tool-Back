const User = require("../models").user
const { Router } = require("express");

const router = new Router();

router.get("/:id", async (req,res,next) => {
    const id = req.params.id
    try {
        const user = await User.findByPk(id)
        const UserName = user.dataValues.name
        return res.status(200).send(UserName)
      } catch(error) {
        console.log(error)
    }
})

router.get("/:email", async (req, res, next) => {
    const email = req.params.email
    try {
        const user = await User.findOne({where: {email}})
        const userId = user.datavalues.id
        if(!user) {
            return res.status(404).send("No user found matching this email")
        }
        return res.status(200).send(userId)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router; 