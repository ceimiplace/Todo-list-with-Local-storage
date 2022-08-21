let input = document.querySelector("input");
let list = document.querySelector(".list-container");
let addButton = document.querySelector(".add");
addButton.addEventListener("click", function () {
  if (input.value !== "") {
    list.innerHTML = list.innerHTML + `<li>${input.value}</li>`;
    input.value = "";
  }
});
