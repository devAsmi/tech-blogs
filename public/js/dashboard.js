function goToCreatePage() {
  window.location.href = "/dashboard/create";
}

async function createOrUpdate(e) {
  e.preventDefault();
  const blogId = document.getElementById("blog-id").value.trim();
  if (blogId) {
    updateBlog(blogId);
  } else {
    createNewBlog();
  }
}

async function createNewBlog() {
  // get data from form
  const title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-content").value.trim();
  const user = document.getElementById("blog-user").value.trim();

  if (title && description && user) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ created_by: user, title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      console.error("error creating blog");
    }
  }
}

async function updateBlog(blogId) {
  // get data from form
  const title = document.getElementById("blog-title").value.trim();
  const description = document.getElementById("blog-content").value.trim();
  const user = document.getElementById("blog-user").value.trim();

  if (title && description && user) {
    const response = await fetch(`/api/blogs/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ created_by: user, title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      console.error("error updating blog");
    }
  }
}

async function deleteBlog(blogId) {
  const response = await fetch(`/api/blogs/${blogId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.href = "/dashboard";
  } else {
    console.error("error deleting blog");
  }
}

const createBlogForm = document.getElementById("new-blog-form");

if (createBlogForm) {
  createBlogForm.addEventListener("submit", createOrUpdate);
}

// get all the blog elements for the user
const blogs = document.querySelectorAll(".blog");

// add event listener to all of them
blogs.forEach((blog) => {
  blog.addEventListener("click", () => {
    const blogId = blog.attributes.getNamedItem("data-id").value;
    window.location.href = `/dashboard/edit/${blogId}`;
  });
});
