const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contactsControllers');
const { isValidId, authenticate, validateBody } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', authenticate, getAllContacts);

router.get('/:id', authenticate, isValidId, getOneContact);

router.post(
  '/',
  authenticate,
  validateBody(schemas.createContactSchema),
  createContact
);

router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemas.updateContactSchema),
  updateContact
);

router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

router.delete('/:id', authenticate, isValidId, deleteContact);

module.exports = router;
