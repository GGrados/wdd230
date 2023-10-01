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
const placeHolders = document.querySelectorAll(".information p");

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

  placeHolders.forEach((placeHolder) => {
    placeHolder.classList.toggle("white-letter");
  });
});

// counter

function updateCounter() {
  let count = localStorage.getItem("pageVisitCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("pageVisitCount", count.toString());
  document.getElementById("counter").textContent = count;
}

// Check if localStorage is available
if (typeof Storage !== "undefined") {
  // Check if the counter exists in localStorage
  if (localStorage.getItem("pageVisitCount") === null) {
    localStorage.setItem("pageVisitCount", "0");
  }

  // Update the counter and display it
  updateCounter();
} else {
  // If localStorage is not available, display an error message
  document.getElementById("counter").textContent =
    "LocalStorage is not supported.";
}
