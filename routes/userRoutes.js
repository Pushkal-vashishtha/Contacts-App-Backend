const express = require("express");
const { registerUsers, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTOkenHandler");

const router = express.Router();

router.post("/register",registerUsers)

router.post("/login",loginUser)
router.get("/current",validateToken, currentUser)

module.exports  = router