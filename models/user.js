const { Schema, model } = require('mongoose');
const Joi = require('joi');

const handleMongooseError = require('../helpers/handleMongooseError');

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
      minlength: 6,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: {
        values: ['starter', 'pro', 'business'],
        message: 'Subscription error',
      },
      default: 'starter',
    },
    token: String,
    avatarURL: {
      type: String,
      required: [true, 'Avatar is required'],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
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

const verifySchema = Joi.object({
  email: Joi.string().required(),
});

const logInSchema = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const userSchemas = {
  registerSchema,
  verifySchema,
  logInSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  userSchemas,
};
