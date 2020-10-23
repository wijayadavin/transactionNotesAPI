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


    try {
      if (!token) {
        res.status(401).send('Error: access denied');
      } else {
      // JWT validation:
        jwt.verify(token, jwtConfigurations.secret, (err, decodedPayload) => {
        // Return error if error:
          if (err) {
            return res.status(401).send(err);
          }
          // Otherwise, check the credentials:
          if (credentials.length > 0) {
            if (
            // Is any permission needed?
              decodedPayload.permissions &&
            // Is the required permission is not empty?
            decodedPayload.permissions.length &&
            // Is the required permission is fulfilled?
            credentials.some(
                (credential) => decodedPayload.permissions.indexOf(
                    credential,
                ) >= 0,
            )
            ) { // Credentials are okay:
              req.user = decodedPayload;
              next();
            } else {
            // Credentials are not okay:
              return res.status(401).send('Error: access denied');
            }
          } else {
          // If no credentials needed:
            req.user = decodedPayload;
            next();
          }
        });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
};
