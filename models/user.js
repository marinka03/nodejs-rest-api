const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      minlength: 6,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const logInSchema = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const userSchemas = {
  registerSchema,
  logInSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  userSchemas,
};
