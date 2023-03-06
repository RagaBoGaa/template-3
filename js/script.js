// =============== Setup Elements
const scrollBar = document.querySelector(".scroll-bar");
const scrollTopBtn = document.querySelector(".scroll-top");

// =============== Events
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", showScrollBar);
});
scrollTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", showScrollBtn);

// =============== Functions
function showScrollBar() {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  let final = Math.floor((scrollTop / height) * 100);

  scrollBar.style.width = final + "%";
}

function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

function showScrollBtn() {
  if (window.scrollY > 500) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
