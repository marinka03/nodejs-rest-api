const express = require('express');

const authRouter = express.Router();
const { validateBody, authenticate } = require('../../helpers');
const { userSchemas } = require('../../models/user');
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require('../../controllers/auth');

authRouter.post(
  '/register',
  validateBody(userSchemas.registerSchema),
  register
);
authRouter.post('/login', validateBody(userSchemas.logInSchema), login);
authRouter.get('/current', authenticate, getCurrent);
authRouter.post('/logout', authenticate, logout);
authRouter.patch('/subscription', authenticate, updateSubscription);

module.exports = authRouter;
