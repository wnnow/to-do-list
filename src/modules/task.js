// this is task.js
import { projects } from "./project.js";
import { addEventListenerRenderTaskDetailPopup } from "./taskDetailPopup.js";
import { addEventListenerToggleTaskStatus } from "./toggleTaskStatus.js";
import { addEventListenerRemoveTask } from "./removeTask.js";
import { addEventListenerToggleEditTaskForm } from "./editTaskInfo.js";

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

function toggleTaskForm() {
  const taskForm = document.querySelector("#task-form");
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

function addEventListenerAddTaskBtn(button) {
  button.addEventListener("click", (e) => {
    createTask();
    toggleTaskForm();
    clearTaskFormValue();
    renderNewTask();
  });
}

addEventListenerAddTaskBtn(document.querySelector("#add-task-btn"));

function addEventListenerCancelTaskForm(button) {
  button.addEventListener("click", (e) => {
    toggleTaskForm();
    clearTaskFormValue();
  });
}
addEventListenerCancelTaskForm(document.querySelector("#cancel-task-btn"));

function createTask(e) {
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  const projectTargetIndex = projects.findIndex(
    (project) =>
      project.id ===
      +document.querySelector(".project-header-name").dataset.index
  );

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
  const taskShowDetailBtn = document.createElement("button");
  const taskShowDetailBtnSpan = document.createElement("span");
  const taskEditDetailBtn = document.createElement("button");
  const taskEditDetailBtnSpan = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");
  const taskDeleteBtnSpan = document.createElement("span");

  taskShowDetailBtn.setAttribute("type", "click");
  taskEditDetailBtn.setAttribute("type", "click");
  taskDeleteBtn.setAttribute("type", "click");

  taskShowDetailBtnSpan.textContent = "info";
  taskEditDetailBtnSpan.textContent = "edit";
  taskDeleteBtnSpan.textContent = "close";

  taskShowDetailBtnSpan.classList.add("material-symbols-outlined");
  taskEditDetailBtnSpan.classList.add("material-symbols-outlined");
  taskDeleteBtnSpan.classList.add("material-symbols-outlined");

  taskShowDetailBtn.appendChild(taskShowDetailBtnSpan);
  taskEditDetailBtn.appendChild(taskEditDetailBtnSpan);
  taskDeleteBtn.appendChild(taskDeleteBtnSpan);

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
  if (task.status === true) {
    taskList.classList.add("task-status-true");
  }
  taskStatus.checked = task.status;
  taskName.textContent = task.name;
  taskDes.textContent = task.description;
  taskDuedate.textContent = task.duedate;

  if (task.priority === "1") {
    taskPriority.textContent = "Low";
    taskList.classList.add("low-priority");
  }
  if (task.priority === "2") {
    taskPriority.textContent = "Medium";
    taskList.classList.add("medium-priority");
  }
  if (task.priority === "3") {
    taskPriority.textContent = "High";
    taskList.classList.add("high-priority");
  }

  taskCheckBoxContainer.appendChild(taskStatus);
  taskList.appendChild(taskCheckBoxContainer);
  taskList.appendChild(taskName);
  taskList.appendChild(taskDes);
  taskList.appendChild(taskDuedate);
  taskList.appendChild(taskPriority);
  taskList.appendChild(taskShowDetailBtn);
  taskList.appendChild(taskEditDetailBtn);
  taskList.appendChild(taskDeleteBtn);

  addEventListenerToggleTaskStatus(taskStatus);
  addEventListenerRenderTaskDetailPopup(taskShowDetailBtn);
  addEventListenerRemoveTask(taskDeleteBtn);
  addEventListenerToggleEditTaskForm(taskEditDetailBtn);
  taskContainer.appendChild(taskList);
}

function renderNewTask() {
  const projectIndex = projects.findIndex(
    (project) =>
      project.id ===
      +document.querySelector(".project-header-name").dataset.index
  );
  renderTask(
    projects[projectIndex].tasks[projects[projectIndex].tasks.length - 1]
  );
}

export { Task, toggleTaskForm, clearTaskFormValue, renderTask };
