const validators = require("./validators/custom-validations.js");
var cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const connectDB = require('./startup/db');
const customers = require('./routes/customers');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));
app.use('/api/customers', customers);








app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server started on port: ${port}`);
});
