var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/allitems", function(req, res) {
    var allItemsObj = { shirts: null, shoes: null, pants: null, dresses: null };
    db.Shirt.findAll({}).then(function(dbShirt) {
      allItemsObj.shirts = dbShirt;
      db.Dress.findAll({}).then(function(dbDress) {
        allItemsObj.dresses = dbDress;
        db.Shoes.findAll({}).then(function(dbShoes) {
          allItemsObj.shoes = dbShoes;
          db.Pants.findAll({}).then(function(dbPants) {
            allItemsObj.pants = dbPants;
            res.json(allItemsObj);
            console.log(allItemsObj);
          });
        });
      });
    });
  });

  app.get("/api/shirt", function(req, res) {
    db.Shirt.findAll({}).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Create a new example
  app.post("/api/shirt", function(req, res) {
    db.Shirt.create(req.body).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Delete an example by id
  app.delete("/api/shirt/:id", function(req, res) {
    db.Shirt.destroy({ where: { id: req.params.id } }).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  app.get("/api/dress", function(req, res) {
    db.Dress.findAll({}).then(function(dbDress) {
      res.json(dbDress);
    });
  });

  // Create a new example
  app.post("/api/dress", function(req, res) {
    db.Dress.create(req.body).then(function(dbDress) {
      res.json(dbDress);
    });
  });

  // Delete an example by id
  app.delete("/api/dress/:id", function(req, res) {
    db.Dress.destroy({ where: { id: req.params.id } }).then(function(dbDress) {
      res.json(dbDress);
    });
  });

  app.get("/api/shoes", function(req, res) {
    db.Shoes.findAll({}).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  // Create a new example
  app.post("/api/shoes", function(req, res) {
    db.Shoes.create(req.body).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  // Delete an example by id
  app.delete("/api/shoes/:id", function(req, res) {
    db.Shoes.destroy({ where: { id: req.params.id } }).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  app.get("/api/pants", function(req, res) {
    db.Pants.findAll({}).then(function(dbPants) {
      res.json(dbPants);
    });
  });

  // Create a new example
  app.post("/api/pants", function(req, res) {
    db.Pants.create(req.body).then(function(dbPants) {
      res.json(dbPants);
    });
  });

  // Delete an example by id
  app.delete("/api/pants/:id", function(req, res) {
    db.Pants.destroy({ where: { id: req.params.id } }).then(function(dbPants) {
      res.json(dbPants);
    });
  });
};
