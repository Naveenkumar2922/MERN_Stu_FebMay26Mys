const express = require("express");
const router = express.Router();
const showController = require("../controllers/movie.controller");
const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",showController.getshows);
router.get("/",showController.getshowsbyid);

// Admin only route
router.post("/",protect,authorize("admin"),showController.createshow);
router.put("/:id",protect,authorize("admin"),showController.updateshow);
router.delete("/:id",protect,authorize("admin"),showController.deleteshow);
module.exports = router;