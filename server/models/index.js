// models/index.js or models/relationships.js

const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const UserActivity = require("./UserActivity");

// Define relationships
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

User.hasMany(UserActivity, { foreignKey: "userId" });
UserActivity.belongsTo(User, { foreignKey: "userId" });

// Sync models with database
sequelize.sync({ force: false });

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  UserActivity,
};
