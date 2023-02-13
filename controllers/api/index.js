const router = require("express").Router();
const loginRoute = require("./user-routes");
const signUpRoute = require("./signup");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);

// router.use("/categories", categoryRoutes);
// router.use("/products", productRoutes);
// router.use("/tags", tagRoutes);

module.exports = router;
