const commentForm = document.getElementById("comment-form");
const contentEl = document.getElementById("comment-content");

const addComment = async (event) => {
  event.preventDefault();
  const content = contentEl.value.trim();
  const created_by = document.getElementById("created-by").value.trim();
  const path = window.location.pathname;
  const blog_id = path.split("/")[2];
  if (content && created_by && blog_id) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ created_by, blog_id, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.error("error adding comment");
    }
  }
};

commentForm.addEventListener("submit", addComment);
