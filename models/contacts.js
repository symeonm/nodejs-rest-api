const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
const { nanoid } = require("nanoid");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contactID = data.find((obj) => obj.id === contactId);
  return contactID || null;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const contactIndex = data.findIndex((obj) => obj.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const [deleteContacts] = data.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 3));
  return deleteContacts;
};

const addContact = async (body) => {
  const data = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };

  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 3));
  return newContact;
};

const updateContact = async (id, body) => {
  const data = await listContacts();
  const indexContacts = data.findIndex((obj) => obj.id === id);
  if (indexContacts === -1) {
    return null;
  }
  data[indexContacts] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 3));
  return data[indexContacts];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
