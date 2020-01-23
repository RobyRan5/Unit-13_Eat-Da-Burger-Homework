
var Character = require("../models/orders.js");

module.exports = function(app) {
  app.get("/api/:orders?", function(req, res) {
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Character.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {
    var newOrder = req.body;

    var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    newOrder.create({
      routeName: routeName,
      name: newOrder.name,
    });

    res.status(204).end();
  });
};
