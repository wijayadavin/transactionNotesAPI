const hyperId = require("hyperid")


function authorization(req, res, next) {
    const authorization = req.headers.authorization
    const isValidToken = hyperId.decode(authorization)
    if (isValidToken) {
        next()
    } else {
        res.status(401).send("Unauthorized")
    }
}


module.exports = authorization