const { celebrate, Joi, Segments } = require('celebrate');

const create = celebrate({
  [Segments.BODY] :{
    name: Joi.string().required(),
    price: Joi.number(),
    stock: Joi.number(),
  }
});

module.exports = {
  create
}