// import "./style.css";
import { renderProjectNavbar } from "./modules/project.js";

renderProjectNavbar();
class Task {
  constructor(projectId, id, name, description, duedate, priority, status) {
    this.projectId = projectId;
    this.id = id;
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.status = status;
  }
}

// add task

const taskForm = document.querySelector("#task-form");
const showTaskFormBtn = document.querySelector(".dummy-add-task");
const cancelTaskFormBtn = document.querySelector("#cancel-task-btn");

function toggleTaskForm() {
  if (taskForm.style.display === "" || taskForm.style.display === "none") {
    taskForm.style.display = "block";
  } else if (taskForm.style.display === "block") {
    taskForm.style.display = "none";
  }
}

function clearTaskFormValue(e) {
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  taskInputName.value = "";
  taskInputDesciption.value = "";
  taskInputDuedate.value = "";
  taskInputPriority.value = "1";
}

showTaskFormBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("Show task");
  toggleTaskForm();
});

cancelTaskFormBtn.addEventListener("click", (e) => {
  console.log("cancel task");
  toggleTaskForm();
});

const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.addEventListener("click", (e) => {
  console.log("add");
  toggleTaskForm();
  clearTaskFormValue();
});
