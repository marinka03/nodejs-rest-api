const upload = require('./upload');
const { validateBody } = require('./validateBody');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');


module.exports = {
  upload,
  isValidId,
  authenticate,
  validateBody,
};
