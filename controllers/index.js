exports.index = function (req, res, next) {
  res.render("index", { title: "Express" });
};
//controllers allow us to separate handler logic from route handler logic
