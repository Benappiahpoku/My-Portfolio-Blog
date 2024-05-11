const express = require("express");
const router = express.Router();
const UserActivity = require("../models/UserActivity");

// Get all user activities
router.get("/", async (req, res) => {
  const userActivities = await UserActivity.findAll();
  res.json(userActivities);
});

// Create a new user activity
router.post("/", async (req, res) => {
  const newUserActivity = await UserActivity.create(req.body);
  res.json(newUserActivity);
});

// Update a user activity
router.put("/:id", async (req, res) => {
  await UserActivity.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "User activity updated successfully" });
});

// Delete a user activity
router.delete("/:id", async (req, res) => {
  await UserActivity.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "User activity deleted successfully" });
});

module.exports = router;
