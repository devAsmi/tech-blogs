const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
  // get all the blogs
  try {
    const comment = { ...req.body, created_at: Date.now() };
    const commentData = await Comment.create(comment);
    if (commentData) {
      res.send(200);
    } else {
      res.send(400);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
