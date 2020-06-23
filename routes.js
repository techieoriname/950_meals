var express = require("express");
var router = express.Router();
const ItemsController = require("./controllers/ItemsController");
const LocationsController = require("./controllers/LocationsController");
const UsersController = require("./controllers/UsersController");

router.get("/getitemcat", ItemsController.cat);
router.post("/itemcat/create", ItemsController.createcat);
router.post("/items/create", ItemsController.createitem);
router.get("/getitems", ItemsController.getitems);
router.post("/items/subitem/create/:id", ItemsController.createsubitem);

router.get("/locations", LocationsController.active);
router.post("/locations/create", LocationsController.create);

router.get("/user/profile", UsersController.profile);
router.get("/user/orders", UsersController.orders);

module.exports = router;
