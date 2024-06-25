const express= require("express")
const router = express.Router();
const {getContacts,createContact,getConatct,updateContact,deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTOkenHandler");



router.use(validateToken)
router.route("/").get(getContacts).post(createContact)

router.route("/:id").get(getConatct).put(updateContact).delete(deleteContact)

module.exports  =router;
