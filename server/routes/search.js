const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Post } = require("../models"); // Adjust the path as necessary

router.get("/search", async (req, res) => {
  const searchTerm = req.query.q;

  try {
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { content: { [Op.like]: `%${searchTerm}%` } },
        ],
      },
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error occurred while searching" });
  }
});

module.exports = router;
