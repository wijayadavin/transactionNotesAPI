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

module.exports = (credentials = []) => {
    return (req, res, next) => {
        // Allow string:
        if (typeof credentials === "string") {
            credentials = [credentials]
        }

        const token = fromHeaderOrQuerystring(req)
        if (!token) {
            res.status(401).send("Error: access denied")
        }
        else {

            // JWT validation:
            jwt.verify(token, jwtConfigurations.secret, (err, decoded) => {
                if (err) {
                    console.log(`JWT errur: ${err}`)
                    return res.status(401).send("Error: access denied")
                }

                // Check the credentials
                if (credentials.length > 0) {
                    if (
                        decoded.permissions &&
                        decoded.permissions.length &&
                        credentials.some(cred => decoded.permissions.indexOf(cred) >= 0)
                    ) {
                        next()
                    } else {
                        return res.status(401).send("Error: access denied")
                    }
                } else {

                    // no credentials needed
                    next()
                }


            })

        }
    }
}