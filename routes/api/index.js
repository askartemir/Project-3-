const router = require("express").Router();
const artistRoute = require("./artists");
const venueRoute = require("./venues");

// Book routes
router.use("/artists", artistRoute);
router.use("/venues", venueRoute);

//router.use("/venues", venueRoute);

module.exports = router;
