const express = require("express");

const authController = require("../controllers/AuthController");

const router = express.Router();

router.get("/login", authController.GetLogin);
router.post("/login", authController.PostLogin);
router.post("/logout", authController.Logout);
router.get("/signup", authController.GetSignup);
router.post("/signup", authController.PostSignup);

module.exports = router;
