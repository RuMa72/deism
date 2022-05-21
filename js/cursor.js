let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + (30 + e.pageY - scrollY) + "px; left: " + (30 + e.pageX) + "px;");
});

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("gold");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("gold");
  });
});
