const jwt = require('jsonwebtoken');
const jwtConfigurations = require('../config/jwtConfigurations');
/**
 * A function to accept a request either from header or query
 * @param {Object} req - the incoming request object
 * @return {Object|null} asd - asd
 */
function fromHeaderOrQuerystring(req) {
  if (req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

module.exports = (credentials = []) => {
  return (req, res, next) => {
    // Convert string credentials into array:
    if (typeof credentials === 'string') {
      credentials = [credentials];
    }
    // Allow request from header or query:
    const token = fromHeaderOrQuerystring(req);

    if (!token) {
      res.status(401).send('Error: access denied');
    } else {
      // JWT validation:
      jwt.verify(token, jwtConfigurations.secret, (err, decoded) => {
        // Return error if error:
        if (err) {
          console.log(`JWT error: ${err}`);
          return res.status(401).send('Error: access denied');
        }

        // Otherwise, check the credentials:
        if (credentials.length > 0) {
          if (
            decoded.permissions &&
            decoded.permissions.length &&
            credentials.some((cred) => decoded.permissions.indexOf(cred) >= 0)
          ) {
            // Credentials are okay:
            req.user = decoded;
            next();
          } else {
            // Credentials are not okay:
            return res.status(401).send('Error: access denied');
          }
        } else {
          // If no credentials needed:
          req.user = decoded;
          next();
        }
      });
    }
  };
};
