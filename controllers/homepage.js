const router = require("express").Router();

router.get("/", async (req, res) => {
  res.redirect("/homepage");
});

router.get("/homepage", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
  });
});

router.get("/dashboard", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
