

const date = new Date();

// Displaying current year after the copyright symbol

let year = date.getFullYear();
document.querySelector("#currentYear").textContent = year;


// Displaying the last modified Date
let oLastModif = new Date(document.lastModified);
let modifdate = oLastModif.toLocaleDateString();
let modiftime = oLastModif.toLocaleTimeString();


document.querySelector(".lastModifiedDate").textContent = `${modifdate} ${modiftime}`;

