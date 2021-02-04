const mongoose = require('mongoose');
const router = require('../routes/customers');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
 firstName: { type: String, required: true, minlength: 2, maxlength: 255 },
 lastName: { type: String, required: true, minlength: 1, maxlength: 15 },
 number: { type: Number, required: true },
 email: { type: String, required: true },
 address:  { type: String, required: true },
 petInfo:  { type: String, required: true },
 dateModified: { type: Date, default: Date.now },
});


const customerReview = new mongoose.Schema({
    body: {type: String, minlength: 1, maxlength: 240, required: true},
    image: [imageSchema],



});

const CustomerReview = mongoose.model('CustomerReview', customerReview);
const Customer = mongoose.model('Customer', customerSchema);




module.exports = CustomerReview;
module.exports = Customer;
