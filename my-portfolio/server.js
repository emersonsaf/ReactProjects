const express = require("express");

const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./back-end/routes/');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "message": "Deu bom"
    })
})

app.use('/api', api);

const PORT = 3080;
app.listen(PORT);

// teste


