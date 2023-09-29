const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

function displayList(item) {
  const newLi = document.createElement("li");
  const deleteButton = document.createElement("button");

  newLi.textContent = input.value;
  deleteButton.textContent = "❌";

  newLi.append(deleteButton);
  list.append(newLi);

  deleteButton.addEventListener("click", () => {
    list.removeChild(newLi);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value) {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    input.focus();
  }
});
