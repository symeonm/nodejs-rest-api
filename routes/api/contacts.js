const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {validateBody, isValidId} = require("../../middlewares");
const {schemas} = require("../../models/contacts")

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addContactSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.put("/:contactId", isValidId, validateBody(schemas.addContactSchema), ctrl.updateContactById);

router.patch("/:contactId/favorite", isValidId, ctrl.updateFavorite, validateBody(schemas.updFavoriteSchema));

module.exports = router;
