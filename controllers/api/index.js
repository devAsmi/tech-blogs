const router = require("express").Router();
const loginRoute = require("./user-routes");
const signUpRoute = require("./signup");
const logoutRoute = require("./logout");
const blogRoute = require("./blogRoute");
const commentRoute = require("./comment");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/blogs", blogRoute);
router.use("/comments", commentRoute);

module.exports = router;
