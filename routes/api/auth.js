const express = require('express');

const authRouter = express.Router();
const { validateBody, authenticate } = require('../../middlewares');
const { userSchemas } = require('../../models/user');
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require('../../controllers/auth');

const { upload } = require('../../middlewares');

authRouter.post(
  '/register',
  validateBody(userSchemas.registerSchema),
  register
);
authRouter.post('/login', validateBody(userSchemas.logInSchema), login);
authRouter.get('/current', authenticate, getCurrent);
authRouter.post('/logout', authenticate, logout);
authRouter.patch('/subscription', authenticate, updateSubscription);
authRouter.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  updateAvatar
);

module.exports = authRouter;
