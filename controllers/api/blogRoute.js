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

router.post("/", async (req, res) => {
  // create a new blog
  try {
    const blogData = await Blog.create({ ...req.body, created_at: Date.now() });
    if (blogData) {
      res.send(200);
    } else {
      res.send(400);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // create a new blog
  try {
    const blogData = await Blog.update(
      { ...req.body, created_at: Date.now() },
      { where: { id: req.params.id } }
    );
    if (blogData) {
      res.send(200);
    } else {
      res.send(400);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // create a new blog
  try {
    const blogData = await Blog.destroy({ where: { id: req.params.id } });
    if (blogData) {
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
