import { Project, projects } from "./project.js";
function isLocalStorageProjectsEmpty() {
  if (JSON.parse(localStorage.getItem("projectCollection") === null)) {
    return true;
  }
  return false;
}

function setProjectLocalStorage() {
  if (isLocalStorageProjectsEmpty()) {
    localStorage.setItem("projectCollection", JSON.stringify(projects));
    Project.clearProjectsId();
    Project.setLocalStorageProjectsId();
  } else {
    loadProjectsFromLocalStorage();
    Project.getLocalStorageProjectsId();
  }
}

function loadProjectsFromLocalStorage() {
  const storeProjects = JSON.parse(localStorage.getItem("projectCollection"));

  storeProjects.forEach((storeProject, index) => {
    const project = new Project(storeProject.name);
    project.id = storeProject.id;
    project.tasks = storeProject.tasks;
    project.taskId = storeProject.taskId;

    projects[index] = project;
  });
}

export { setProjectLocalStorage };
