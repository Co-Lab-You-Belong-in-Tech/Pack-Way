import Item from "../models/itemModel.js";

export const addItem = async (req, res) => {
  try {
    const item = await Item.create({
      itemName: req.body.itemName,
      category: req.body.category,
    });

    if (item) {
      res.status(201).json({
        status: "success",
        data: item,
      });
    }
  } catch (error) {
    return res.status(400).json({ status: "error", message: error.message });
  }
};
