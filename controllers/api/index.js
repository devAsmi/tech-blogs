const router = require("express").Router();
const loginRoute = require("./user-routes");
const signUpRoute = require("./signup");
const logoutRoute = require("./logout");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);

module.exports = router;
