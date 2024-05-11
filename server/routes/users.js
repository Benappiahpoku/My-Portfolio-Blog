const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Create a new user
router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// Update a user
router.put("/:id", async (req, res) => {
  await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "User updated successfully" });
});

// Delete a user
router.delete("/:id", async (req, res) => {
  await User.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "User deleted successfully" });
});

module.exports = router;
