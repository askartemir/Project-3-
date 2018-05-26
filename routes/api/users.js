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
        routeName: 'user-2',
        name: 'Joe Schmoe',
        details: 'I am a great arteest, bye my stuff',
        email: 'joe@demo.com',
        username: 'bibimbop007',
        password: '****',
        favorites: 'Venue-example2',
        userType: 'artist'
    }).then(function(dbTodo) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
    });
  
});

// Matches with "/api/books/:id"
//router/
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
