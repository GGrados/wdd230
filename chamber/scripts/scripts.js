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

// Call the setTimestamp function to set the initial timestamp
setTimestamp();
