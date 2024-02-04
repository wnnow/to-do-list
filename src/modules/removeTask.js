import { projects, renderProjectTask } from "./project.js";

function removeTask(e) {
  const taskContent = e.target.parentNode.parentNode;
  const projectIndex = projects.findIndex(
    (project) => project.id === +taskContent.dataset.projectIndex
  );
  const taskIndex = projects[projectIndex].tasks.findIndex(
    (task) => task.id === +taskContent.dataset.taskIndex
  );
  const taskId = projects[projectIndex].tasks[taskIndex].id;
  projects[projectIndex].deleteTask(taskId);
  removeTaskFromDOM(taskId);
}

function removeTaskFromDOM(taskId) {
  const taskContainer = document.querySelector(".task-container");
  const taskIdIndex = Array.from(taskContainer.childNodes).findIndex(
    (task) => +task.dataset.taskIndex === taskId
  );
  taskContainer.removeChild(taskContainer.childNodes[taskIdIndex]);
}

function addEventListenerRemoveTask(button) {
  button.addEventListener("click", (e) => {
    removeTask(e);
  });
}

export { addEventListenerRemoveTask };
