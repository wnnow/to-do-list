import { projects, updateProject, reRenderAllTaskContent } from "./project.js";

function createDeleteProjectBtn() {
  const removeProjectFormBtn = document.createElement("button");
  removeProjectFormBtn.setAttribute("type", "submit");
  removeProjectFormBtn.id = "delete-project-form-btn";
  removeProjectFormBtn.textContent = "Delete Project";
  removeProjectFormBtn.addEventListener("click", toggleDelProjectPopup);
  // addEventListenerRemoveProject(removeProjectFormBtn);
  return removeProjectFormBtn;
}
function deleteProject(projectId) {
  let projectIndex = projects.findIndex((project) => project.id === projectId);

  projects.splice(projectIndex, 1);
  updateProject();
}

function removeProject() {
  const deleteProjectBtn = document.querySelector("#delete-project-form-btn");
  const projectBtnWrapper = deleteProjectBtn.parentNode;
  const projectContentContainer = projectBtnWrapper.parentNode;
  const projectId = +projectContentContainer.firstChild.dataset.index;

  deleteProject(projectId);
}

function addEventListenerRemoveProject(button) {
  button.addEventListener("click", (e) => {
    if (isDelProject) {
      removeProject();
    }
  });
}

function toggleDelProjectPopup() {
  const delProjectContainer = document.querySelector(".del-project-popup");

  if (
    delProjectContainer.style.display === "none" ||
    delProjectContainer.style.display === ""
  ) {
    delProjectContainer.style.display = "block";
  } else if (delProjectContainer.style.display === "block") {
    delProjectContainer.style.display = "none";
  }
}

function addEventListenerDelProjectYesBtn() {
  const delProjectYesBtn = document.querySelector("#del-project-yes-btn");
  delProjectYesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDelProjectPopup();

    removeProject();
    removeProjectFromDOM();
    reRenderAllTaskContent();
  });
}

function addEventListenerDelProjectNoBtn() {
  const delProjectNoBtn = document.querySelector("#del-project-no-btn");
  delProjectNoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDelProjectPopup();
  });
}

function removeProjectFromDOM() {
  const projectListNav = document.querySelector(".project-list-container");
  const projectDatasetIndex = +document.querySelector(".project-header-name")
    .dataset.index;
  const projectIndex = Array.from(projectListNav.childNodes).findIndex(
    (element) => +element.dataset.index === projectDatasetIndex
  );
  projectListNav.removeChild(projectListNav.childNodes[projectIndex]);
}
addEventListenerDelProjectYesBtn();
addEventListenerDelProjectNoBtn();

export {
  removeProject,
  addEventListenerRemoveProject,
  toggleDelProjectPopup,
  createDeleteProjectBtn,
};
