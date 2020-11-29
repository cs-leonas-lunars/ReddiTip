const router = require("express").Router();
const { User } = require("../db/models");

module.exports = router;

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

router.get("/", (req, res, next) => {
  try {
    console.log("LOG PLEASE");
    res.render("index", { user: req.user });
  } catch (err) {
    next(err);
  }
});

router.get("/login", (req, res, next) => {
  try {
    res.render("login", { user: req.user });
  } catch (err) {
    next(err);
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/account", ensureAuthenticated, (req, res, next) => {
  try {
    res.render("account", { user: req.user });
  } catch (err) {
    next(err);
  }
});

// do reddit auth here and remove local sign in option
router.use("/reddit", require("./reddit"));
