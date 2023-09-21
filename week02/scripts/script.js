const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value) {
    const newLi = document.createElement("li");
    const deleteButton = document.createElement("button");

    newLi.textContent = input.value;
    deleteButton.textContent = "❌";

    newLi.append(deleteButton);
    list.append(newLi);

    deleteButton.addEventListener("click", () => {
      list.removeChild(newLi);
      input.focus();

      input.value = "";
    });
  } else {
    input.focus();
  }
});
