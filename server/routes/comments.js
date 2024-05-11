const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Get all comments
router.get("/", async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

// Create a new comment
router.post("/", async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
});

// Update a comment
router.put("/:id", async (req, res) => {
  await Comment.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Comment updated successfully" });
});

// Delete a comment
router.delete("/:id", async (req, res) => {
  await Comment.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "Comment deleted successfully" });
});

module.exports = router;
