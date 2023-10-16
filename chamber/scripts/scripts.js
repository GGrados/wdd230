const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

const options = {
  weekDay: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.getElementById("lastModified").textContent = document.lastModified;

const button = document.querySelector("#menu");
const navList = document.querySelector("nav");
button.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// LAST VISITS

const theDateToday = new Date();
const msToDays = 84600000;

if (localStorage.getItem("lastVisitDate")) {
  const lastVisitDate = new Date(localStorage.getItem("lastVisitDate"));

  let timeDifference = todaysDate - lastVisitDate;

  // Calculate the number of days

  let daysDifference = timeDifference / msToDays;

  let message = "";
  if (daysDifference === 0) {
    message = "Back so soon! Awesome!";
  } else if (daysDifference === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = "You last visited " + daysDifference + " days ago.";
  }

  document.getElementById("last-visit").textContent = message;
} else {
  // If this is the first visit, display a welcome message
  document.getElementById("last-visit").textContent =
    "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisitDate", todaysDate);

/*Form*/

/*Time Stamp */

function setTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toLocaleString();
  timestampElement.value = formattedTimestamp;
}

setTimestamp();

// Members Dinamically

const mainDirectory = document.querySelector("#main-directory");
const membersUrl = "https://ggrados.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersUrl);
    if (response.ok) {
      const data = await response.json();
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(membersData) {
  membersData.companies.forEach((company) => {
    const divContainer = document.createElement("div");
    const h2 = document.createElement("h2");
    const address = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const website = document.createElement("p");
    const memberShipLevel = document.createElement("p");
    const img = document.createElement("img");
  });
}
