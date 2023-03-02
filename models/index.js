const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment");

// A blog belongs to a user
Blog.belongsTo(User, { foreignKey: "created_by" });

// A comment belongs to a user and a Blog
Comment.belongsTo(Blog, { foreignKey: "blog_id" });

Comment.belongsTo(User, { foreignKey: "created_by" });

User.hasMany(Comment);
Blog.hasMany(Comment);

module.exports = {
  User,
  Blog,
  Comment,
};
