var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Shirt.findAll({}).then(function(dbShirt) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     shirt: dbShirt
    //   });
    // });
    res.render("index");
  });

  app.get("/userhome", function(req, res) {
    res.render("userhome");
    // db.Shirt.findAll({}).then(function(dbShirt) {
    //   res.render("userhome", {
    //     msg: "Welcome!",
    //     shirt: dbShirt
    // });
    // console.log(dbShirt);
  });

  // Load example page and pass in an example by id
  app.get("/shirt/:id", function(req, res) {
    db.Shirt.findOne({ where: { id: req.params.id } }).then(function(dbShirt) {
      res.render("shirt", {
        shirt: dbShirt
      });
    });
  });

  app.get("/items", function(req, res) {
    res.render("example");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
