const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("open");
  button.classList.toggle("open");
});

/*Dark mode*/
const body = document.querySelector("body");
const main = document.querySelector("main");
const h2 = document.querySelector("main h2");
const li = document.querySelectorAll("main section ul li");
const a = document.querySelectorAll("main section ul li a");
const cards = document.querySelectorAll(".card");

const darkMode = document.querySelector("#darkMode");
darkMode.addEventListener("click", () => {
  body.classList.toggle("background-Black");
  h2.classList.toggle("white-letter");

  li.forEach((li) => {
    li.classList.toggle("white-letter");
  });

  a.forEach((a) => {
    a.classList.toggle("white-letter");
  });

  cards.forEach((card) => {
    card.classList.toggle("white-border");
  });
});
