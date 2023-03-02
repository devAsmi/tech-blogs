const router = require("express").Router();
const { Blog, User } = require("../../models");

router.get("/", async (req, res) => {
  // get all the blogs
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.send(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
