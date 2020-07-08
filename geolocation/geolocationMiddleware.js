const axios = require("axios");
const { googleURL } = require("../config/constants")
const key = process.env.GOOGLE_API_KEY

async function geolocation(req, res, next) {
    const address = req.body.company_address

    try {
        const resGoogle = await axios.get(`${googleURL}`, {
                                        params: {
                                        address: address,
                                        key: key}})                         
        const latitude = resGoogle.data.results[0].geometry.location.lat
        const longitude = resGoogle.data.results[0].geometry.location.lng

        req.body.lat = latitude
        req.body.lng = longitude                                    

        return next()                                            
    } catch(error) {
        console.log(error)
        return res.
            status(400).
            send({message: "Something went wrong, sorry"})
    }
}

module.exports = geolocation