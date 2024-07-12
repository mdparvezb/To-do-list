const listItems = document.querySelector("#list-items");

const addBtn = document.querySelector("#addBtn");
const error = document.querySelector("#error");
const inputField = document.querySelector("#input-field");
showData();
toDoList();
taskComplete();

function taskComplete() {
  listItems.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });
}

function toDoList() {
  addBtn.addEventListener("click", () => {
    if (inputField.value === "") {
      error.innerHTML = "You must enter something!";
      saveData();
    } else {
      error.innerHTML = "";
      let li = document.createElement("li");
      let span = document.createElement("span");
    //   let img = document.createElement("IMG");
      let text = document.createTextNode(inputField.value);
      li.appendChild(text);
      li.appendChild(span);
    //   li.appendChild(img);
      listItems.appendChild(li);
    }
    inputField.value = "";
    saveData();
  });
}

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}
