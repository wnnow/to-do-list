// this is task.js
import {
  Project,
  createProject,
  deleteProject,
  updateProject,
  projects,
  renderProjectNavbar,
} from "./project.js";

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
// const showTaskFormBtn = document.querySelector(".show-task-form-btn");
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

// showTaskFormBtn.addEventListener("click", (e) => {
//   // e.preventDefault();
//   console.log("Show task");
//   toggleTaskForm();
// });

cancelTaskFormBtn.addEventListener("click", (e) => {
  console.log("cancel task");
  toggleTaskForm();
});

const addTaskBtn = document.querySelector("#add-task-btn");

function createTask(e) {
  const taskForm = document.querySelector("#task-form");
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  const projectTargetIndex = +document.querySelector(".project-header-name")
    .dataset.index;

  if (
    taskInputName.value === "" ||
    taskInputDesciption.value === "" ||
    taskInputDuedate.value === "" ||
    taskInputPriority.value === ""
  ) {
    return;
  }
  projects[projectTargetIndex].addTask(
    taskInputName.value,
    taskInputDesciption.value,
    taskInputDuedate.value,
    taskInputPriority.value,
    false
  );
}

function renderTask(task) {
  const taskContainer = document.querySelector(".task-container");
  const taskList = document.createElement("li");
  const taskCheckBoxContainer = document.createElement("div");
  const taskStatus = document.createElement("input");
  const taskName = document.createElement("div");
  const taskDes = document.createElement("div");
  const taskDuedate = document.createElement("div");
  const taskPriority = document.createElement("div");
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  const taskShowDetailBtn = document.createElement("button");
  const taskShowDetailBtnSpan = document.createElement("span");

  taskShowDetailBtn.setAttribute("type", "click");
  taskShowDetailBtnSpan.textContent = "info";
  taskShowDetailBtnSpan.classList.add("material-symbols-outlined");
  taskShowDetailBtn.appendChild(taskShowDetailBtnSpan);
  taskContainer.classList.add("task-container");
  taskList.classList.add("task-content");
  taskList.dataset.projectIndex = task.projectId;
  taskList.dataset.taskIndex = task.id;
  taskCheckBoxContainer.classList.add("task-checkbox");
  taskStatus.id = "task-status";
  taskStatus.setAttribute("type", "checkbox");

  taskName.classList.add("task-name");
  taskDes.classList.add("task-description");
  taskDuedate.classList.add("task-duedate");
  taskPriority.classList.add("task-priority");

  taskStatus.checked = task.status;
  taskName.textContent = task.name;
  taskDes.textContent = task.description;
  taskDuedate.textContent = task.duedate;

  if (task.priority === "1") {
    taskPriority.textContent = "High";
    taskList.classList.add("high-priority");
  }
  if (task.priority === "2") {
    taskPriority.textContent = "Medium";
    taskList.classList.add("medium-priority");
  }
  if (task.priority === "3") {
    taskPriority.textContent = "Low";
    taskList.classList.add("low-priority");
  }

  taskCheckBoxContainer.appendChild(taskStatus);
  taskList.appendChild(taskCheckBoxContainer);
  taskList.appendChild(taskName);
  taskList.appendChild(taskDes);
  taskList.appendChild(taskDuedate);
  taskList.appendChild(taskPriority);
  taskList.appendChild(taskShowDetailBtn);
  taskShowDetailBtn.addEventListener("click", (e) => {
    // console.log(e.target.dataset);
    taskDetailContainer.style.display = "block";
  });
  taskContainer.appendChild(taskList);
}

function renderNewTask() {
  const projectId = +document.querySelector(".project-header-name").dataset
    .index;
  renderTask(projects[projectId].tasks[projects[projectId].tasks.length - 1]);
}

addTaskBtn.addEventListener("click", (e) => {
  console.log("add");
  createTask();
  toggleTaskForm();
  clearTaskFormValue();
  renderNewTask();
});

export { Task, toggleTaskForm, clearTaskFormValue, renderTask };
