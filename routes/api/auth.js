const express = require('express');

const authRouter = express.Router();
const {validateBody} = require('../../helpers')
const {userSchemas} = require('../../models/user')
const {register, login} = require("../../controllers/auth")

authRouter.post('/register', validateBody(userSchemas.registerSchema), register );
authRouter.post('/login', validateBody(userSchemas.logInSchema), login)

module.exports = authRouter;