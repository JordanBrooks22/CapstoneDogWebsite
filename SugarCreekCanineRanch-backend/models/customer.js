const { Email } = require('@material-ui/icons');
const mongoose = require('mongoose');
const router = require('../routes/bookings');
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
const CustomerSchema = mongoose.model('CustomerSchema', customerSchema);

function validateCustomerReview(customerReview){
    const schema = Joi.object({
        body: Joi.string().min(15).max(100).required(),
        image:
    })
    return schema.validate(customerReview);
}

function validateCustomerSchema(customerSchema){
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(15).required(),
        lastName: Joi.string().min(1).max(15).required(),
        number: Joi.number().required(),
        email: Joi.string().min(1).required(),
        address:  Joi.string().min(1).max(15).required(),
        petInfo: Joi.string().min(1).max(15).required(),
        dateModified: Joi.string().min(1).max(15).required(),
        
    })
    return schema.validate(customerSchema);
}






router.post('/', async (req, res) => {
    try {
   
    const bookings = new Bookings({
    name: 'Jordan Brooks',
    description: `Grooming apt`,
    price: 25.00,
    });

    await bookings.save();

    return res.send(bookings);

    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
   });

module.exports = Bookings;
module.exports.CustomerReview = CustomerReview;
module.exports.validateCustomerReview = validateCustomerReview;
module.exports.CustomerSchema = CustomerSchema;
module.exports.validateCustomerSchema = validateCustomerSchema;
module.exports.customerSchema = customerSchema;
module.exports.customerReview = customerReview;
