const { ctrlWrapper } = require("../helpers");
const { Contact } = require("../models/contacts");

const getAllContacts = async (_, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const deleteContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.json({ message: "contact deleted" });
// };

// const updateContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result =  await contacts.updateContact(contactId, req.body)
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.json(result)
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  // deleteContactById: ctrlWrapper(deleteContactById),
  // updateContactById: ctrlWrapper(updateContactById)
};
