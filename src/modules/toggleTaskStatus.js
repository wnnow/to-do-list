import { projects } from "./project.js";

function toggleTaskStatus(e) {
  const taskContentContainer = e.target.parentNode.parentNode;
  const projectId = taskContentContainer.dataset.projectIndex;
  const taskId = taskContentContainer.dataset.taskIndex;
  console.log(e.target.checked);
  console.log(projectId);
  console.log(taskId);
  projects[projectId].tasks[taskId].status = e.target.checked;
  console.log(projects[projectId].tasks[taskId]);
  if (projects[projectId].tasks[taskId].status === false) {
    taskContentContainer.classList.remove("task-status-true");
  } else {
    taskContentContainer.classList.add("task-status-true");
  }
}

export { toggleTaskStatus };
