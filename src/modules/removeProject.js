import { projects, updateProject } from "./project.js";

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
  console.log("🚀 ~ removeProject ~ projectId:", projectId);
  deleteProject(projectId);
}

function addEventListenerRemoveProject(button) {
  button.addEventListener("click", (e) => {
    removeProject();
  });
}

export { removeProject, addEventListenerRemoveProject };
