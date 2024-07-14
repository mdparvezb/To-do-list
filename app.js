const listItems = document.querySelector("#list-items");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector("#error");
const inputField = document.querySelector("#input-field");
showData();
taskComplete();
error.innerHTML = "";

// Invoke when users clicked on Add Task

addBtn.addEventListener("click", () => {
  addBtn.innerText = "ADD TASK";
  error.innerHTML = "";
  toDoList();
  saveData();
});

// Task complete, Update and Delete Function
function taskComplete() {
  listItems.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "IMG") {
      inputField.value = e.target.parentElement.textContent;
      e.target.parentElement.remove();
      addBtn.innerText = "UPDATE";
      saveData();
    }
  });
}

// Add Function
function toDoList() {
  error.innerHTML = "";
  if (inputField.value === "") {
    error.innerHTML = "You must enter something!";
  } else {
    error.innerHTML = "";
    let li = document.createElement("li");
    let span = document.createElement("span");
    let img = document.createElement("IMG");
    let text = document.createTextNode(inputField.value);
    li.appendChild(text);
    li.appendChild(span);
    li.appendChild(img);
    listItems.appendChild(li);
    error.innerHTML = "";
    inputField.value = "";
    saveData();
  }
}

// Save Data
function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}
// Retrieve Data
function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}
