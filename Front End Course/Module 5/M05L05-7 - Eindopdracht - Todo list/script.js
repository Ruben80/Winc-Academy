const getTasks = async () => {
  const tasks = await getData();
  const ul = document.getElementById("todoList");

  const listItems = tasks.map((task) => {
    const li = document.createElement("li");
    li.innerText = task.description;
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.value = task.id;
    deleteTaskButton.className = "deleteIcon";
    deleteTaskButton.addEventListener("click", deleteTask);
    li.appendChild(deleteTaskButton);
    return li;

    function deleteTask() {
      deleteTaskData(task.id);
      setTimeout("window.location.reload();", 500);
    }
  });

  listItems.forEach((task) => {
    ul.appendChild(task);
  });
};

document
  .getElementById("addTaskButton")
  .addEventListener("click", addPostButton);

function addPostButton() {
  var taskInput = document.getElementById("getData").value;
  document.getElementById("getData").value = "";
  const inputData = { description: taskInput, done: false };

  postData(inputData);
  setTimeout("window.location.reload();", 500);
}

getTasks();
