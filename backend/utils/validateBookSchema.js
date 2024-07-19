
// only custom validations occurs this way


// const joi=require('joi')
// const isNotFutureYear = (value, helpers) => {
//     const currentYear = new Date().getFullYear();
//     if (value > currentYear) {
//         return helpers.message('Publish year cannot be a future year');
//     }
//     if(value<0)return helpers.message('Publish year cannot be less than 0');
//     return value;
// };
// const isPriceGreaterThanZero = (value, helpers) => {
//     if (value <= 0) {
//         return helpers.message('Price must be greater than 0');
//     }
//     return value;
// };
// const validateBookSchema=joi.object({
//     title:joi.string().required(),
//     author:joi.string().required(),
//     publishYear:joi.string().required().min(0).custom(isNotFutureYear),
//     price:joi.number().required().min(0).custom(isPriceGreaterThanZero)
// })
// module.exports=validateBookSchema;

// both custom defined and joi default error caught this way

const Joi = require('joi');

const isNotFutureYear = (value, helpers) => {
    const currentYear = new Date().getFullYear();
    if (value > currentYear) {
        return helpers.message('Publish year cannot be a future year');
    }
    if (value < 0) return helpers.message('Publish year cannot be less than 0');
    return value;
};

const isPriceGreaterThanZero = (value, helpers) => {
    if (value <= 0) {
        return helpers.message('Price must be greater than 0');
    }
    return value;
};

const validateBookSchema = Joi.object({
    title: Joi.string().required().trim().messages({
        'string.base': 'Title should be a type of text',
        'string.empty': 'Title is required',
        'any.required': 'Title is required'
    }),
    author: Joi.string().required().trim().messages({
        'string.base': 'Author should be a type of text',
        'string.empty': 'Author is required',
        'any.required': 'Author is required'
    }),
    publishYear: Joi.number().required().custom(isNotFutureYear).messages({
        'number.base': 'Publish year should be a number',
        'number.empty': 'Publish year is required',
        'any.required': 'Publish year is required'
    }),
    price: Joi.number().required().custom(isPriceGreaterThanZero).messages({
        'number.base': 'Price should be a number',
        'number.empty': 'Price is required',
        'any.required': 'Price is required'
    })
});

module.exports = validateBookSchema;
