const { Comment } = require("../models");

const commentData = [
  {
    id: 1,
    content: "This is a test comment",
    created_by: 1,
    created_at: Date.now(),
    blog_id: 1,
  },
  {
    id: 2,
    content: "This is a new comment",
    created_by: 3,
    created_at: Date.now(),
    blog_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;
