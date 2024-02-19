const express = require("express");
const userSchema = require("../model/es.js");
const router = express.Router();


router.post("/productos", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.get("/productos", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .find({id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, cantstock} = req.body;
  userSchema
    .updateOne({ id: id }, { $set: { nombre, descripcion, precio, cantstock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;