const { isNullOrUndefined, isString, isNumber } = require("util");

function isNotEmptyAndIsString(value) {
    return !isNullOrUndefined(value) && isString(value);
}

function isNotEmptyAndIsNumber(value) {
    return !isNullOrUndefined(value) && isNumber(value);
}

exports.body = (req, res, next) => {
    let method = req.method;
    if (method == "POST" || method == "PUT") {
        let data = req.body;
        if (
            (method == "POST"
            ? isNullOrUndefined(bookings.id)
            : isNotEmptyAndIsNumber(bookings.id)) &&
            isNotEmptyAndIsString(bookings.name) &&
            isNotEmptyAndIsString(bookings.description) &&
            isNotEmptyAndIsNumber(bookings.price)
            ) {
                next();
            } else {
                res.status(400).send({
                    error: { status: 400, description: "Invalid object format." },
                });
            }
        }
        next();
    };