const express = require("express");
const router = express.Router();
const User = require("../Model/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveUrl} = require("../middleware.js");

const userController = require("../controllers/user.js");


router
.route("/signup")
.get(userController.renderSignup)
.post(wrapAsync(userController.signup));

router
.route("/login")
.get(userController.renderLogin)
.post(saveUrl,userController.login);


router.get("/logout",userController.renderLogout);


module.exports = router;