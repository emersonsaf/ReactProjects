// Index Route for application when using /api/...
const router = require('express').Router();

require('../db/mongoConnection');

const portfolio = require('./portfolio')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: "Please, do not call /api it is our server"
    })
});

router.use('/portfolio', portfolio);

module.exports = router