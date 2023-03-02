const router = require("express").Router();
const apiRoutes = require("./api");
const homepageRoute = require("./homepage");
const signupRoutes = require("./signupRoutes");

router.use("/api", apiRoutes);
router.use("/", homepageRoute);
router.use("/signUp", signupRoutes);

module.exports = router;
