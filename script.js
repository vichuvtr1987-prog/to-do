document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Add task
  addBtn.addEventListener("click", () => {
    addTask();
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    // Buttons
    const btnGroup = document.createElement("div");

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-success btn-sm me-2";
    doneBtn.textContent = "✔";
    doneBtn.onclick = () => {
      span.classList.toggle("completed");
    };

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.textContent = "✖";
    delBtn.onclick = () => {
      li.remove();
    };

    btnGroup.appendChild(doneBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
