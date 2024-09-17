const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");

router.get("/", ItemController.getItems).post("/", ItemController.postItem);
router
  .get("/:id", ItemController.getItem)
  .put("/:id", ItemController.updateItem)
  .delete("/:id", ItemController.deleteItem);

module.exports = router;
