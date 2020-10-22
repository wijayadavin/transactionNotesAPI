const jwt = require("jsonwebtoken")
const jwtConfigurations = require("../config/jwtConfigurations")


function authorization(req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).send("Unauthorized")
    } else {
        // JWT validation:
        const tokenBody = token.slice(7)
        jwt.verify(tokenBody, jwtConfigurations.secret, (err, decoded) => {
            if (err) {
                return res.status(401).send("Error: access denied")
            }
            next()
        })

    }
}


module.exports = authorization