const input = document.querySelector("input");
const list = document.querySelector(".list-container");
const addButton = document.querySelector(".add");
const clear = document.querySelector(".clear");

if (localStorage.getItem("tasks") !== null) {
  storage = JSON.parse(localStorage.getItem("tasks"));
  storage.forEach((item) => {
    list.innerHTML =
      list.innerHTML + `<li>${item}<i class="fa-solid fa-trash-can"></i></li>`;
  });
}
let deleteBtns = document.querySelectorAll(".fa-trash-can");
function remover() {
  deleteBtns = document.querySelectorAll(".fa-trash-can");
  deleteBtns.forEach((elem) => {
    elem.addEventListener("click", function () {
      let content = elem.parentElement.textContent;
      let array = JSON.parse(localStorage.getItem("tasks"));
      let index = array.indexOf(content);
      let final = array.splice(index, 1);
      console.log(array);
      localStorage.setItem("tasks", JSON.stringify(array));

      elem.parentElement.remove();
      elem.remove();
      deleteBtns = document.querySelectorAll(".fa-trash-can");
    });
  });
}
remover();
function loader() {
  if (input.value !== "") {
    list.innerHTML =
      list.innerHTML +
      `<li>${input.value} <i class="fa-solid fa-trash-can"></i></li>`;

    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem("tasks"));
    storage.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(storage));
    remover();
  }
  input.value = "";
}
addButton.addEventListener("click", loader);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    loader();
  }
});
// make clear butn
clear.addEventListener("click", () => {
  localStorage.clear();
  list.innerHTML = "";
});
