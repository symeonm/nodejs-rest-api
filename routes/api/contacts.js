const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {validateBody, isValidId, authenticate} = require("../../middlewares");
const {schemas} = require("../../models/contacts")

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addContactSchema), ctrl.addContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addContactSchema), ctrl.updateContactById);

router.patch("/:contactId/favorite", authenticate, isValidId, ctrl.updateFavorite, validateBody(schemas.updFavoriteSchema));

module.exports = router;
