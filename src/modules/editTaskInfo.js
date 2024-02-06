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
    toggleEditTaskForm();
    assignEditTaskFormValueToInput(e);
  });
}

function assignEditTaskFormValueToInput(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskId = taskContent.dataset.taskIndex;
  const projectId = taskContent.dataset.projectIndex;
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const editTaskNameInput = document.querySelector("#edit_task_name");
  const editTaskDesInput = document.querySelector("#edit_task_description");
  const editTaskDueDateInput = document.querySelector("#edit_task_due_date");
  const editTaskPriorityInput = document.querySelector("#edit_task_priority");
  const projectIndex = findIndexFromTaskDataset(e).projectIndex;
  const taskIndex = findIndexFromTaskDataset(e).taskIndex;

  taskLabelName.dataset.projectId = projectId;
  taskLabelName.dataset.taskId = taskId;
  editTaskNameInput.value = projects[projectIndex].tasks[taskIndex].name;
  editTaskDesInput.value = projects[projectIndex].tasks[taskIndex].description;
  editTaskDueDateInput.value = projects[projectIndex].tasks[taskIndex].duedate;
  editTaskPriorityInput.value =
    projects[projectIndex].tasks[taskIndex].priority;
}

function findIndexFromTaskDataset(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskDatasetIndex = +taskContent.dataset.taskIndex;
  const projectDatasetIndex = +taskContent.dataset.projectIndex;
  const projectIndex = findProjectIndex(projectDatasetIndex);
  const taskIndex = findTaskIndex(projectDatasetIndex, taskDatasetIndex);
  return { projectIndex: projectIndex, taskIndex: taskIndex };
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

function updateTaskInfo() {
  const editTaskNameInputValue =
    document.querySelector("#edit_task_name").value;
  const editTaskDesInputValue = document.querySelector(
    "#edit_task_description"
  ).value;
  const editTaskDueDateInputValue = document.querySelector(
    "#edit_task_due_date"
  ).value;
  const editTaskPriorityInputValue = document.querySelector(
    "#edit_task_priority"
  ).value;
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const projectId = +taskLabelName.dataset.projectId;
  const taskId = +taskLabelName.dataset.taskId;
  projects[projectId].updateTask(
    taskId,
    editTaskNameInputValue,
    editTaskDesInputValue,
    editTaskDueDateInputValue,
    editTaskPriorityInputValue
  );
}

function addEventListenerEditSubmitBtn() {
  const editSubmitBtn = document.querySelector("#edit-task-submit-btn");
  editSubmitBtn.addEventListener("click", (e) => {
    updateTaskInfo();
    toggleEditTaskForm();
  });
}
addEventListenerEditSubmitBtn();
export { addEventListenerToggleEditTaskForm };
