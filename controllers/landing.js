exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Express" });
};
//controllers allow us to separate handler logic from route handler logic
