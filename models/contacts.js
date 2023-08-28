const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const contactShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    }
  },
  { versionKey: false, timestamps: true }
);

contactShema.post("save", handleMongooseError);
const Contact = model("contact", contactShema);

const addContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .min(5)
    .required()
    .messages({ "any.required": "missing required phone field" }),
  favorite: Joi.boolean(),
});



const updFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `missing field favorite` }),
});

const schemas = {
  addContactSchema,
  updFavoriteSchema,
};

module.exports = {
  Contact,
  schemas,
};
