const upload = require('./upload');
const { validateBody } = require('./validateBody');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const resizeImage = require('./resizeImage')

module.exports = {
  upload,
  isValidId,
  authenticate,
  validateBody,
  resizeImage
};
