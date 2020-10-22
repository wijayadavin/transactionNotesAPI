const jwt = require("jsonwebtoken")
const jwtConfigurations = require("../config/jwtConfigurations")

function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}

function authorization(req, res, next) {
    const token = fromHeaderOrQuerystring(req)
    if (!token) {
        res.status(401).send("Error: access denied")
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