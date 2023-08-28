const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../models/contacts");

router.get("/", ctrl.getAllContacts);

// router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addContactSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteContactById);

// router.put("/:contactId", validateBody(schemas.addContactSchema), ctrl.updateContactById);

module.exports = router;
