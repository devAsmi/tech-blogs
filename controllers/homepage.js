const router = require("express").Router();

router.get("/", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.redirect("/homepage");
  }
});

router.get("/homepage", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.render("homepage");
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
