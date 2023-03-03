const currentPage = window.location.pathname;

let pageEl;
if (currentPage.includes("homepage")) {
  pageEl = document.getElementById("homepage-link");
}

if (currentPage.includes("dashboard")) {
  pageEl = document.getElementById("dashboard-link");
}

pageEl.classList.add("active");
