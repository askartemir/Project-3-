const router = require("express").Router();
const db = require("../../models");
//const artistController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(function(req, res) {
    db.Venue.findAll({}).then(function(dbVenue) {
      res.json(dbVenue);
    });

  });
  //.post(booksController.create);

// Matches with "/api/books/:id"
//router/
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
