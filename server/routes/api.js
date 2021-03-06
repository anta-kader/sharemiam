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

var db_handler = require('../data/db_handler');


/* GET api listing. */
router.get('/', checkJwt, (req, res) => {
  res.send('The API works :D');
});

router.get('/fridges', checkJwt, (req, res) => {
  db_handler.getAllFridges(res);
});

router.get('/fridges_with_last_items', checkJwt, (req, res) => {
  db_handler.getAllFridgesWithLastItemAdded(res);
});

router.post('/items', function (req, res) {
  db_handler.addItem(res, req.body);
});

module.exports = router;