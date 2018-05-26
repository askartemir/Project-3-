const router = require("express").Router();
const artistRoute = require("./artists");
const venueRoute = require("./venues");
const userRoute = require("./users");

router.use("/artists", artistRoute);
router.use("/venues", venueRoute);
router.use("/users", userRoute);

module.exports = router;
