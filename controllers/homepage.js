const { User, Blog, Comment } = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.redirect("/homepage");
});

router.get("/homepage", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ["user_name"],
      },
    ],
  });
  const blogs = blogData
    .map((blog) => blog.get({ plain: true }))
    .map((blog) => {
      blog.created_at = blog.created_at.toLocaleString();
      return blog;
    });
  res.render("homepage", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
    blogs,
  });
});

router.get("/dashboard", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  }
});

router.get("/dashboard/create", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    res.render("createblogpage", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  }
});

router.get("/blog/:id", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    blog.created_at = blog.created_at.toLocaleString();

    const commentsData = await Comment.findAll({
      where: { blog_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });

    const comments = commentsData
      .map((comment) => comment.get({ plain: true }))
      .map((comment) => {
        comment.created_at = comment.created_at.toLocaleString();
        return comment;
      });

    res.render("blogpage", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      blog,
      comments,
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
