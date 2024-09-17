const Item = require("../models/itemModel");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(201).json(items);
  } catch (err) {
    console.log("error retrieving data", err);
    res.status(500).send("server error");
  }
};

exports.getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    res.status(201).json(item);
  } catch (err) {
    console.log("error finding item", err);
    res.status(500).send("server error");
  }
};

exports.postItem = async (req, res) => {
  try {
    const newItem = await Item.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(201).json(newItem);
  } catch (err) {
    console.log("error", err);
    res.status(500).send("server error");
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteItem = await Item.findByIdAndDelete(id);
    res.status(201).json({ message: "item deleted", item: deleteItem });
  } catch (err) {
    console.log("error deleting item", err);
    res.status(500).send("error deleting item");
  }
};

exports.updateItem = async (req, res) => {
  try {
    const id = req.params.id;

    const updateItem = await Item.updateOne(
      { _id: id },
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
      }
    );
    res
      .status(201)
      .json({ message: "Item successfully updated", item: updateItem });
  } catch (err) {
    res.status(500).send("error updating item", err);
  }
};
