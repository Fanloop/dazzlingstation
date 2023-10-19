const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
   let img = document.getElementById("img-toggle");
   nav.classList.toggle("hidden");
   if (nav.classList.contains("hidden")) {
      img.removeAttribute("src");
      img.setAttribute("src", "./src/img/logo/menu.svg");
   } else {
      img.removeAttribute("src");
      img.setAttribute("src", "./src/img/logo/close.svg");
   }
});

window.addEventListener("load", () => {
   top.classList.add("active");
   transparent.classList.add("bg-transparent");
   transparent.classList.add("bg-color5");
});

window.addEventListener("scroll", () => {
   let transparent = document.getElementById("transparent");
   let top = document.getElementById("on-top");

   if (window.scrollY > 200) {
      transparent.classList.remove("bg-transparent");
      top.classList.remove("opacity-0");
      top.classList.remove("active");
   } else if (window.scrollY > 30) {
      transparent.classList.remove("bg-transparent");
   } else {
      top.classList.add("active");
      transparent.classList.add("bg-transparent");
      transparent.classList.add("bg-color5");
   }
});
