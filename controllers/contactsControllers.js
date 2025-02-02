const { Contact } = require('../models/contact');
const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = true } = req.query;
  const skip = (page - 1) * limit;
  const list = await Contact.find({ owner }, '-createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'name email');
  res.json(list);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const el = await Contact.findById(id);
  if (!el) {
    throw HttpError(404, 'Not found');
  }
  res.json(el);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const deleteEl = await Contact.findByIdAndDelete(id);
  if (!deleteEl) {
    throw HttpError(404, 'Not found');
  }
  res.json(deleteEl);
};

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedEl = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedEl) {
    throw HttpError(404, 'Not found');
  }
  res.json(updatedEl);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const updatedEl = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedEl) {
    throw HttpError(404, 'Not found');
  }
  res.json(updatedEl);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
