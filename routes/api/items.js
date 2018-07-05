const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Location");

//@route GET api/items
//@desc Get all items
//@access Public
router.get("/", (req, res) => {
  Item.find()
    .sort()
    .then(item => res.json(item));
});

//@route POST api/items
//@desc Create An Item
//@access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    date: req.body.date
  });

  newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Delete an Item
//@access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item =>
      item.remove().then(() =>
        res.json({
          success: true
        })
      )
    )
    .catch(err => res.status(404).json({ success: false }));
});

//@route PUT api/items/:id
//@desc PUT an Item
//@access Public
router.put("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item =>
      item.update().then(() =>
        res.json({
          success: true
        })
      )
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
