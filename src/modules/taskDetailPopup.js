import { projects } from "./project.js";

function addEventListenerCloseTaskDetailBtn() {
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  const taskDetailCloseBtn = document.querySelector("#task-popup-close-btn");
  taskDetailCloseBtn.addEventListener("click", (e) => {
    taskDetailContainer.style.display = "none";
  });
}

function renderTaskDetailPopup(e) {
  const projectId = e.target.parentNode.parentNode.dataset.projectIndex;
  const taskId = e.target.parentNode.parentNode.dataset.taskIndex;
  const taskDetailPopupHeaderText = document.querySelector(
    "#task-popup-detail-header-text"
  );
  const taskDetailPopupProjectName = document.querySelector(
    "#task-popup-project-name-value"
  );
  const taskDetailPopupPriority = document.querySelector(
    "#task-popup-priority-value"
  );

  const taskDetailPopupDueDate = document.querySelector(
    "#task-popup-duedate-value"
  );
  const taskDetailPopupDescription = document.querySelector(
    "#task-popup-description-value"
  );
  taskDetailPopupHeaderText.textContent = `${projects[projectId].tasks[taskId].name}`;
  taskDetailPopupProjectName.textContent = `${projects[projectId].name}`;
  if (projects[projectId].tasks[taskId].priority === "1") {
    taskDetailPopupPriority.textContent = "High";
  }
  if (projects[projectId].tasks[taskId].priority === "2") {
    taskDetailPopupPriority.textContent = "Medium";
  }
  if (projects[projectId].tasks[taskId].priority === "3") {
    taskDetailPopupPriority.textContent = "Low";
  }

  taskDetailPopupDueDate.textContent = `${projects[projectId].tasks[taskId].duedate}`;
  taskDetailPopupDescription.textContent = `${projects[projectId].tasks[taskId].description}`;
}

export { addEventListenerCloseTaskDetailBtn, renderTaskDetailPopup };
