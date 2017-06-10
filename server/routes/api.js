const express = require('express');
const router = express.Router();

// Environment vars
var dotenv = require('dotenv');
dotenv.load();

//Auth0 authentication
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Auth0
// Authentication middleware. When used, the
// access token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_PUBLIC_KEY,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_API_ID,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ['RS256']
});

const jwtAuthz = require('express-jwt-authz');
//const checkScopes = jwtAuthz([ 'write:food' ]);


var db_handler = require('../data/db_handler');


/* GET api listing. */
router.get('/', checkJwt, /*checkScopes,*/ (req, res) => {
  res.send('api works');
  db_handler.add();
});

module.exports = router;