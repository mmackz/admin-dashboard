const menu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// opens sidebar when hamburger menu is clicked
menu.addEventListener("click", (event) => {
   event.stopPropagation();
   sidebar.classList.toggle("open");
   setSidebarHeight();
});

// stop event from bubbling up to the body
sidebar.addEventListener("click", (event) => {
   event.stopPropagation();
});

// closes sidebar when body outside sidebar is clicked
document.body.addEventListener("click", () => {
   if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
   }
});

// closes sidebar when "X" button is clicked
closeBtn.addEventListener("click", () => {
   if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
   }
});

// sets sidebar to full size of content on short screens
window.addEventListener("resize", () => {
   setSidebarHeight();
});

function setSidebarHeight() {
   const size = document.body.getBoundingClientRect();
   const windowHeight = window.innerHeight;
   if (size.width <= 740 && windowHeight <= 610) {
      sidebar.style.minHeight = size.height + "px";
   } else {
      sidebar.style = "";
   }
};
