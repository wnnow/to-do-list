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
  const taskContent = e.target.parentNode.parentNode;
  console.log("🚀 ~ renderTaskDetailPopup ~ taskContent:", taskContent);

  console.log(+taskContent.dataset.taskIndex);
  const projectId = projects.findIndex(
    (project) => project.id === +taskContent.dataset.projectIndex
  );
  console.log("🚀 ~ projectId ~ projectId:", projectId);

  const taskId = projects[projectId].tasks.findIndex(
    (task) => task.id === +taskContent.dataset.taskIndex
  );
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
  if (projects[projectId].tasks[taskId].priority === "3") {
    taskDetailPopupPriority.textContent = "High";
  }
  if (projects[projectId].tasks[taskId].priority === "2") {
    taskDetailPopupPriority.textContent = "Medium";
  }
  if (projects[projectId].tasks[taskId].priority === "1") {
    taskDetailPopupPriority.textContent = "Low";
  }

  taskDetailPopupDueDate.textContent = `${projects[projectId].tasks[taskId].duedate}`;
  taskDetailPopupDescription.textContent = `${projects[projectId].tasks[taskId].description}`;
}

function addEventListenerRenderTaskDetailPopup(button) {
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  button.addEventListener("click", (e) => {
    renderTaskDetailPopup(e);
    taskDetailContainer.style.display = "block";
  });
}
export {
  addEventListenerCloseTaskDetailBtn,
  renderTaskDetailPopup,
  addEventListenerRenderTaskDetailPopup,
};
