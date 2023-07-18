const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);
    
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = completeTask;
    taskItem.appendChild(completeButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = deleteTask;
    taskItem.appendChild(deleteButton);

    pendingList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function completeTask() {
  const taskItem = this.parentNode;
  taskItem.classList.add("completed");
  completedList.appendChild(taskItem);
  this.remove();
}

function deleteTask() {
  this.parentNode.remove();
}
