function goToCreatePage() {
  window.location.href = "/dashboard/create";
}

async function createNewBlog(e) {
  e.preventDefault();

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
      window.location.reload();
    } else {
      console.error("error creating blog");
    }
  }
}

const createBlogForm = document.getElementById("new-blog-form");

if (createBlogForm) {
  createBlogForm.addEventListener("submit", createNewBlog);
}
