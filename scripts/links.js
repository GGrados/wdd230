const baseURL = "https://ggrados.github.io/wdd230/";
const linksURL = "https://ggrados.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayLinks(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getLinks();

const ul = document.querySelector("ul");

const displayLinks = function (weeks) {
  weeks.weeks.forEach((week) => {
    const li = document.createElement("li");
    li.textContent = week.week;

    week.links.forEach((link) => {
      const a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.textContent = link.title;

      li.appendChild(a);
      ul.appendChild(li);
    });
  });
};
