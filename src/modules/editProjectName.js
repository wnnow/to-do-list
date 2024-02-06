import { projects, updateProject } from "./project.js";

function createEditProjectBtn() {
  const editProjectFormBtn = document.createElement("button");

  editProjectFormBtn.setAttribute("type", "submit");
  editProjectFormBtn.id = "edit-project-form-btn";
  editProjectFormBtn.classList.add("project-form-btn");
  editProjectFormBtn.textContent = "Edit Project";
  editProjectFormBtn.addEventListener("click", (e) => {
    toggleEditProjectForm();
    assignEditProjectInputValue();
  });
  return editProjectFormBtn;
}

function toggleEditProjectForm() {
  const editProjectForm = document.querySelector(".edit-project-popup");
  if (
    editProjectForm.style.display === "none" ||
    editProjectForm.style.display === ""
  ) {
    editProjectForm.style.display = "block";
  } else if (editProjectForm.style.display === "block") {
    editProjectForm.style.display = "none";
  }
}

function findProjectIndexFromProjectHeaderName() {
  const projectHeaderName = document.querySelector(".project-header-name");
  const projectIndex = projects.findIndex(
    (project) => project.id === +projectHeaderName.dataset.index
  );
  return projectIndex;
}

function assignEditProjectInputValue() {
  const editProjectInput = document.querySelector("#edit_project_name");
  const projectIndex = findProjectIndexFromProjectHeaderName();

  editProjectInput.value = projects[projectIndex].name;
}

function addEventListenerCancelEditProjectForm() {
  const cancelProjectFormBtn = document.querySelector(
    "#edit-project-cancel-btn"
  );

  cancelProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleEditProjectForm();
  });
}

function addEventListenerSubmitEditProjectForm() {
  const submitProjectFormBtn = document.querySelector(
    "#edit-project-submit-btn"
  );

  submitProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editProjectName();
    toggleEditProjectForm();
  });
}

function editProjectName() {
  const projectIndex = findProjectIndexFromProjectHeaderName();
  const projectEditName = document.querySelector("#edit_project_name").value;
  projects[projectIndex].name = projectEditName;
  console.log(projects);
  updateProjectHeaderNameTextContent(projectIndex);
  updateProjectNavbarNameTextContent(projectIndex);
  updateProject();
}

function updateProjectHeaderNameTextContent(projectIndex) {
  const projectHeaderName = document.querySelector(".project-header-name");
  projectHeaderName.textContent = projects[projectIndex].name;
}

function updateProjectNavbarNameTextContent(projectIndex) {
  console.log(
    "🚀 ~ updateProjectNavbarNameTextContent ~ projectIndex:",
    projectIndex
  );
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );
  projectListContainer.childNodes[projectIndex].textContent =
    projects[projectIndex].name;
}
addEventListenerCancelEditProjectForm();
addEventListenerSubmitEditProjectForm();

export { createEditProjectBtn, findProjectIndexFromProjectHeaderName };
