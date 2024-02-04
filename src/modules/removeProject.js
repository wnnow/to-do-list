import { projects, updateProject, reRenderAlltaskContent } from "./project.js";
import { toggleTaskForm } from "./task.js";
let isDelProject = false;
function deleteProject(projectId) {
  let projectIndex = projects.findIndex((project) => project.id === projectId);

  projects.splice(projectIndex, 1);
  updateProject();
}

function removeProject() {
  const deleteProjectBtn = document.querySelector("#edit-project-form-btn");
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
    isDelProject = true;
    removeProject();
    reRenderAlltaskContent();
    console.log(isDelProject);
  });
}
function addEventListenerDelProjectNoBtn() {
  const delProjectNoBtn = document.querySelector("#del-project-no-btn");
  delProjectNoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDelProjectPopup();
    isDelProject = false;

    console.log(isDelProject);
  });
}
addEventListenerDelProjectYesBtn();
addEventListenerDelProjectNoBtn();
export { removeProject, addEventListenerRemoveProject, toggleDelProjectPopup };
