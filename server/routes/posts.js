const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { upload } = require('../server'); // Import the upload middleware

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});
// Get a single post
router.get("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});
// Create a new post
router.post("/", upload.single('image'), async (req, res) => { // Use the upload middleware
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file was uploaded.' });
      return;
    }

    const newPost = await Post.create({
      ...req.body,
      imageUrl: '/uploads/' + req.file.filename // Assuming 'imageUrl' is the field in your Post model for the image URL
    });

    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  await Post.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: "Post updated successfully" });
});

// Delete a post
router.delete("/:id", async (req, res) => {
  await Post.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: "Post deleted successfully" });
});

module.exports = router;
