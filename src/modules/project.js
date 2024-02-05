import { Task, toggleTaskForm, renderTask } from "./task.js";

import { createDeleteProjectBtn } from "./removeProject.js";

import { setProjectLocalStorage } from "./setProjectLocalStorage.js";
let projects = [];
class Project {
  static #id = 0;
  taskId = 0;
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = Project.nextId();
  }

  static nextId() {
    return Project.#id++;
  }

  static getId() {
    return Project.#id;
  }

  static getLocalStorageProjectsId() {
    Project.#id = JSON.parse(localStorage.getItem("projectsId"));
  }
  static setLocalStorageProjectsId() {
    localStorage.setItem("projectsId", JSON.stringify(Project.getId()));
  }

  static clearProjectsId() {
    Project.#id = 0;
  }

  getId() {
    return this.id;
  }

  nextTaskId() {
    return this.taskId++;
  }

  getTaskId() {
    return this.taskId;
  }

  setLocalStorageProjectId() {
    localStorage.setItem("projectId", JSON.stringify(this.getId()));
  }

  getLocalStorageProjectId() {
    this.taskId = JSON.parse(localStorage.getItem("projectId"));
  }

  addTask(taskName, taskDescription, taskDuedate, taskPriority) {
    this.tasks.push(
      new Task(
        this.id,
        this.nextTaskId(),
        taskName,
        taskDescription,
        taskDuedate,
        taskPriority,
        false
      )
    );
    updateProject();
  }

  deleteTask(taskId) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    this.tasks.splice(taskIndex, 1);
    updateProject();
  }

  updateTask(taskId, taskName, taskDes, taskDuedate, taskPriority) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    this.tasks[taskIndex].name = taskName;
    this.tasks[taskIndex].description = taskDes;
    this.tasks[taskIndex].duedate = taskDuedate;
    this.tasks[taskIndex].priority = taskPriority;
    updateProject();
  }
}

setProjectLocalStorage();

function createProject(name) {
  let project = new Project(name);
  projects.push(project);
  updateProject();
}

function updateProject() {
  localStorage.setItem("projectCollection", JSON.stringify(projects));
}

// add project

const showProjectFormBtn = document.querySelector("#show-project-form-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const cancelFormBtn = document.querySelector("#cancel-project-btn");
const inputProjectName = document.querySelector("#project_name");
const addProjectBtn = document.querySelector("#add-project-btn");

showProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "block";
});

cancelFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "none";
});

addProjectBtn.addEventListener("click", (e) => {
  if (inputProjectName.value === "") {
    return;
  }
  Project.getLocalStorageProjectsId();
  createProject(inputProjectName.value);
  Project.setLocalStorageProjectsId();
  inputProjectName.value = "";
  projectFormContainer.style.display = "none";

  addNewProjectNavbar();
  e.preventDefault();
});

function addNewProjectNavbar() {
  const projectNavListContainer = document.querySelector(
    ".project-list-container"
  );
  const project = document.createElement("div");

  project.textContent = `${projects[projects.length - 1].name}`;
  project.dataset.index = `${Project.getId() - 1}`;
  project.classList.add("project-nav-item");

  project.addEventListener("click", (e) => {
    renderProjectContent(e);
    renderProjectTask(e);
  });

  projectNavListContainer.appendChild(project);
}

function renderProjectNavbar() {
  const projectData = JSON.parse(localStorage.getItem("projectCollection"));
  const projectNavListContainer = document.querySelector(
    ".project-list-container"
  );

  projectData.forEach((project) => {
    const projectDiv = document.createElement("div");

    projectDiv.textContent = `${project.name}`;
    projectDiv.dataset.index = `${project.id}`;
    projectDiv.classList.add("project-nav-item");

    projectDiv.addEventListener("click", (e) => {
      renderProjectContent(e);
      renderProjectTask(e);
    });

    projectNavListContainer.appendChild(projectDiv);
  });
}

function renderProjectContent(e) {
  e.stopPropagation();
  const contentContainer = document.querySelector(".content-container");
  const projectContentContainer = document.createElement("div");
  const projectBtnWrapper = document.createElement("div");
  clearContentContainer();
  projectBtnWrapper.classList.add("project-btn-wrapper");

  projectBtnWrapper.appendChild(createShowTaskFormBtn());
  projectBtnWrapper.appendChild(createDeleteProjectBtn());
  projectContentContainer.classList.add("project-content-container");
  projectContentContainer.appendChild(createProjectHeaderContent(e));
  projectContentContainer.appendChild(projectBtnWrapper);
  projectContentContainer.appendChild(createTaskContainer());
  contentContainer.appendChild(projectContentContainer);
}

function createProjectHeaderContent(e) {
  const projectHeaderName = document.createElement("div");
  const projectIndex = projects.findIndex(
    (project) => project.id === +e.target.dataset.index
  );

  projectHeaderName.textContent = `${projects[projectIndex].name}`;
  projectHeaderName.dataset.index = `${e.target.dataset.index}`;
  projectHeaderName.classList.add("project-header-name");
  return projectHeaderName;
}

function createTaskContainer() {
  const taskContainer = document.createElement("ul");
  taskContainer.classList.add("task-container");
  return taskContainer;
}

function createShowTaskFormBtn() {
  const showTaskFormBtn = document.createElement("button");
  showTaskFormBtn.setAttribute("type", "submit");
  showTaskFormBtn.classList.add("show-task-form-btn");
  showTaskFormBtn.textContent = "Add Task";
  showTaskFormBtn.addEventListener("click", (e) => {
    toggleTaskForm();
  });
  return showTaskFormBtn;
}

function clearContentContainer() {
  const contentContainer = document.querySelector(".content-container");

  while (contentContainer.firstElementChild) {
    contentContainer.removeChild(contentContainer.firstElementChild);
  }
}

function renderProjectTask(e) {
  let projectIndex;
  if (typeof e === "number") {
    projectIndex = projects.findIndex((project) => project.id === e);
  } else {
    projectIndex = projects.findIndex(
      (project) => project.id === +e.target.dataset.index
    );
  }

  const project = projects[projectIndex];

  project.tasks.forEach((task) => {
    renderTask(task);
  });
}

function renderDefaultAllTaskContent() {
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      renderTask(task);
    });
  });
}

renderDefaultAllTaskContent();

function clearTaskContainer() {
  const taskContainer = document.querySelector(".task-container");
  while (taskContainer.firstElementChild) {
    taskContainer.removeChild(taskContainer.firstElementChild);
  }
}

function createAllTaskHeader() {
  const contentContainer = document.querySelector(".content-container");
  const taskContainer = document.createElement("ul");
  const projectHeaderName = document.createElement("div");
  taskContainer.classList.add("task-container");
  projectHeaderName.classList.add("project-header-name");
  projectHeaderName.textContent = "All Task";
  contentContainer.appendChild(projectHeaderName);
  contentContainer.appendChild(taskContainer);
}

const allTaskBtn = document.querySelector(".all-task");

function reRenderAllTaskContent() {
  clearContentContainer();
  createAllTaskHeader();
  renderDefaultAllTaskContent();
}
allTaskBtn.addEventListener("click", (e) => {
  reRenderAllTaskContent();
});

export {
  Project,
  createProject,
  updateProject,
  projects,
  renderProjectNavbar,
  reRenderAllTaskContent,
  renderProjectTask,
};
