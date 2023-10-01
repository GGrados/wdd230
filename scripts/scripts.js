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

function incrementCounter() {
  // Check if the counter exists in localStorage
  if (localStorage.getItem("pageVisitCount") === null) {
    localStorage.setItem("pageVisitCount", "0");
  }

  // Get the current count from localStorage
  let count = parseInt(localStorage.getItem("pageVisitCount"));

  // Increment the count
  count++;

  // Update the counter display
  document.getElementById("counter").textContent = count;

  // Store the updated count in localStorage
  localStorage.setItem("pageVisitCount", count.toString());
}

// Initialize the counter when the page loads
window.onload = function () {
  if (localStorage.getItem("pageVisitCount") !== null) {
    let count = parseInt(localStorage.getItem("pageVisitCount"));
    document.getElementById("counter").textContent = count;
  }
};
