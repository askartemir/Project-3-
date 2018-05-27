const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/users"
router.route("/")
  .get(function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  }).post(function(req, res) {
      // todo replace hard coded values with req.body.name, etc.
    db.User.create({
        routeName: req.body.routeName,
        name: req.body.name,
        details: req.body.details,
        email: req.body.emails,
        username: req.body.username,
        password: '****',
        favorites: req.body.favorites,
        userType: req.body.userType
    }).then(function(dbUser) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbUser);
    });

});

router.route("/:id")
.delete(function(req, res) {
  db.User.destroy({
    where: {
      id: req.query.id,
    }
  });
});


// Matches with "/api/books/:id"
//router/
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
