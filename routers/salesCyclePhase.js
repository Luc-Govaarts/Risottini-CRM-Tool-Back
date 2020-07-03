const SalesCyclePhase = require("../models").salesCyclePhase
const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
    try {
        const salesCyclePhase = await SalesCyclePhase.findAll()
        res.send(salesCyclePhase)
    } catch(error) {    
        console.log(error)
    }
})

module.exports = router;