let projects;

function isLocalStorageProjectsEmpty() {
  if (JSON.parse(localStorage.getItem("projectCollection") === null)) {
    return true;
  }
  return false;
}

function setProjectLocalstorage() {
  if (isLocalStorageProjectsEmpty()) {
    projects = [];
    localStorage.setItem("projectCollection", JSON.stringify(projects));
  } else {
    projects = JSON.parse(localStorage.getItem("projectCollection"));
  }
}
setProjectLocalstorage();
function createProject(name) {
  projects.push(new Project(name));
  updateProject();
}

function deleteProject(projectId) {
  let projectIndex = projects.findIndex((project) => project.id === projectId);
  projects.splice(projectIndex, 1);
  updateProject();
}

function updateProject() {
  localStorage.setItem("projectCollection", JSON.stringify(projects));
}

class Project {
  static #id = 0;
  #taskId = 0;
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = Project.nextId();
  }

  getId() {
    return this.id;
  }

  static nextId() {
    return Project.#id++;
  }

  nextTaskId() {
    return this.#taskId++;
  }

  getTaskId() {
    return this.#taskId;
  }

  addTask(taskName, taskDescription, taskDuedate, taskPriority) {
    this.tasks.push(
      new Task(
        this.id,
        this.nextTaskId(),
        taskName,
        taskDescription,
        taskDuedate,
        taskPriority
      )
    );
    // localStorage.setItem("projectCollection", JSON.stringify(projects));
  }

  deleteTask(taskId) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
    // localStorage.setItem("projectCollection", JSON.stringify(projects));
  }

  updateTask(taskId, taskName, taskDes, taskDuedate, taskPriority) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[taskIndex].name = taskName;
    this.tasks[taskIndex].description = taskDes;
    this.tasks[taskIndex].duedate = taskDuedate;
    this.tasks[taskIndex].priority = taskPriority;
    // localStorage.setItem("projectCollection", JSON.stringify(projects));
  }
}
// add project

const showProjectFormBtn = document.querySelector("#show-project-form-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const cancelFormBtn = document.querySelector("#cancel-project-btn");

showProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "block";
});

cancelFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "none";
});

const inputProjectName = document.querySelector("#project_name");
const addProjectBtn = document.querySelector("#add-project-btn");

addProjectBtn.addEventListener("click", (e) => {
  console.log("Add project");
  if (inputProjectName.value === "") {
    return;
  }
  createProject(inputProjectName.value);
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
  project.dataset.index = `${projects.length - 1}`;
  project.classList.add("project-nav-item");
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
    projectNavListContainer.appendChild(projectDiv);
  });
}

export {
  Project,
  createProject,
  deleteProject,
  updateProject,
  projects,
  renderProjectNavbar,
};
