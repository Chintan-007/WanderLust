const express = require("express");
const wrapAsync = require("../util/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirecUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


//SignUp
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signUp));



//Login
router.route("/login")
.get(userController.renderLoginForm)
.post(
        saveRedirecUrl,
        passport.authenticate("local",{failureRedirect:"/login", failureFlash:true}), //middleware to authenticate
        wrapAsync(userController.login)
    );


//Log Out
router.get("/logout",userController.logOut);

module.exports = router;