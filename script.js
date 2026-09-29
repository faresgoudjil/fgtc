
const button = document.querySelector("#menu-button");
const nav = document.querySelector(".site-nav");

if (button && nav) {
  button.addEventListener("click", function () {
    nav.classList.toggle("is-open");

    const isOpen = nav.classList.contains("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  }
);
}
