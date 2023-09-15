//setting the year

const todaysDate = new Date();
document.getElementById("year").textContent = todaysDate.getFullYear();

const options = {
  weekDay: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.getElementById("lastModified").textContent = document.lastModified;
