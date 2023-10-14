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

const visitsDisplay = document.querySelector("#counter");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// Display Current Weather Data

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-12.09&lon=-77.06&appid=76cd0cc1ffbcb7fcbc8193cf2c4758e5&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp} °F`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  captionDesc.textContent = data.weather[0].description;
}

apiFetch();
