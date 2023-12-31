const express = require("express");

const userSchema = require("../model/es.js");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
    
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.render("index",{data:data}))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.render("index",{data:data}))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({_isbn : isbn})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:idUser", (req, res) => {
  const { idUser } = req.params;
  const { titulo, autor, genero, cantPaginas,año,isbn} = req.body;
  userSchema
    .updateOne({ _id: idUser }, { $set: { titulo, autor, genero, cantPaginas,año,isbn}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;