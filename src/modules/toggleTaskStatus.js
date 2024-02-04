import { projects, updateProject } from "./project.js";

function toggleTaskStatus(e) {
  const taskContentContainer = e.target.parentNode.parentNode;
  const projectId = taskContentContainer.dataset.projectIndex;
  const taskId = taskContentContainer.dataset.taskIndex;

  projects[projectId].tasks[taskId].status = e.target.checked;
  updateProject();
  if (projects[projectId].tasks[taskId].status === false) {
    taskContentContainer.classList.remove("task-status-true");
  } else {
    taskContentContainer.classList.add("task-status-true");
  }
}

function addEventListenerToggleTaskStatus(button) {
  button.addEventListener("click", (e) => {
    toggleTaskStatus(e);
  });
}
export { toggleTaskStatus, addEventListenerToggleTaskStatus };
