// import "./style.css";

let projects = [];

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

class Task {
  constructor(projectId, id, name, description, duedate, priority) {
    this.projectId = projectId;
    this.id = id;
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
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
  console.log("hah");
  if (inputProjectName.value === "") {
    return;
  }
  createProject(inputProjectName.value);
  inputProjectName.value = "";
  projectFormContainer.style.display = "none";
  renderNewProjectNavbar();
  e.preventDefault();
});

function renderNewProjectNavbar() {
  const projectNavListContainer = document.querySelector(
    ".project-list-container"
  );
  const project = document.createElement("div");

  project.textContent = `${projects[projects.length - 1].name}`;
  project.dataset.index = `${projects.length - 1}`;
  project.classList.add("project-nav-item");
  projectNavListContainer.appendChild(project);
}

// add task

const taskForm = document.querySelector("#task-form");
const showTaskFormBtn = document.querySelector(".dummy-add-task");
const cancelTaskFormBtn = document.querySelector("#cancel-task-btn");

function toggleTaskForm() {
  if (taskForm.style.display === "" || taskForm.style.display === "none") {
    taskForm.style.display = "block";
  } else if (taskForm.style.display === "block") {
    taskForm.style.display = "none";
  }
}

function clearTaskFormValue(e) {}

showTaskFormBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("Show task");
  toggleTaskForm();
});

cancelTaskFormBtn.addEventListener("click", (e) => {
  console.log("cancel task");
  toggleTaskForm();
});

const addTaskBtn = document.querySelector("#add-task-btn");

addTaskBtn.addEventListener("click", (e) => {
  console.log("add");
  toggleTaskForm();
});
