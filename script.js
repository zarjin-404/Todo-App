const inputBox = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "Deleted";
    li.appendChild(span);
  }
  inputBox.value = "";
}

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
  }
});
