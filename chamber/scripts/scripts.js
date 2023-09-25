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
