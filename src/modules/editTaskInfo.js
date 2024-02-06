import { projects } from "./project.js";
import { findProjectIndexFromProjectHeaderName } from "./editProjectName.js";

function toggleEditTaskForm() {
  const editTaskForm = document.querySelector("#edit-task-form");

  if (
    editTaskForm.style.display === "none" ||
    editTaskForm.style.display === ""
  ) {
    editTaskForm.style.display = "block";
  } else if (editTaskForm.style.display === "block") {
    editTaskForm.style.display = "none";
  }
}

function addEventListenerToggleEditTaskForm(button) {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    toggleEditTaskForm();
    findIndexFromTaskDataset(e);
  });
}

function assignEditTaskFormValueToInput() {
  const editTaskNameInput = document.querySelector("#edit-task_name");
  const editTaskDesInput = document.querySelector("#edit-task_description");
  const editTaskDueDateInput = document.querySelector("#edit_task_due_date");
  const editTaskPriorityInput = document.querySelector("#edit_task_priority");
}

function findIndexFromTaskDataset(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskDatasetIndex = +taskContent.dataset.taskIndex;
  const projectDatasetIndex = +taskContent.dataset.projectIndex;
  const projectIndex = findProjectIndex(projectDatasetIndex);
  const taskIndex = findTaskIndex(projectDatasetIndex, taskDatasetIndex);
}

function findProjectIndex(projectDatasetIndex) {
  const projectIndex = projects.findIndex(
    (project) => project.id === projectDatasetIndex
  );

  return projectIndex;
}

function findTaskIndex(projectDatasetIndex, taskDatasetIndex) {
  const projectIndex = findProjectIndex(projectDatasetIndex);
  const taskIndex = projects[projectIndex].tasks.findIndex(
    (task) => task.id === taskDatasetIndex
  );

  return taskIndex;
}

function addEventListenerEditCancelBtn() {
  const editCancelBtn = document.querySelector("#edit-task-cancel-btn");
  editCancelBtn.addEventListener("click", (e) => {
    toggleEditTaskForm();
  });
}
addEventListenerEditCancelBtn();
export { addEventListenerToggleEditTaskForm };
