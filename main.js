/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import "./style.css";

let projects = [];

function createProject(name) {
  projects.push(new Project(name));
  //   localStorage.setItem("projectCollection", JSON.stringify(projects));
}

function deleteProject(projectId) {
  let projectIndex = projects.findIndex((project) => project.id === projectId);
  projects.splice(projectIndex, 1);
  //   localStorage.setItem("projectCollection", JSON.stringify(projects));
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

createProject("p1");
createProject("p2");

projects[0].addTask("task0", "lorem", new Date(), 2);
projects[0].addTask("task2", "lorem", new Date(), 0);
projects[0].addTask("task3", "lorem", new Date(), 2);
projects[0].addTask("task4", "lorem", new Date(), 3);

projects[1].addTask("task1", "lorem", new Date(), 2);
projects[1].addTask("task2", "lorem", new Date(), 1);
projects[1].addTask("task3", "lorem", new Date(), 2);
projects[1].addTask("task4", "lorem", new Date(), 3);

console.log(projects[0].tasks);
console.log(projects[1].tasks);
// projects[1].addTask("task5", "lorem", new Date(), 2);
// projects[1].addTask("task6", "lorem", new Date(), 1);
// projects[1].addTask("task7", "lorem", new Date(), 3);
// projects[1].addTask("task8", "lorem", new Date(), 1);
// console.log(projects);
// console.log(projects[1]);
// console.log(projects[1].tasks);
// projects[1].updateTask(7, "Buwaaaa", "555", "2040-12-5", 4);
// projects[1].deleteTask(4);
// projects[1].updateTask(2, "Gwaa", "222", "2040-12-5", 7);
// console.log(projects[1].tasks);
// createProject("p3");
// createProject("p4");
// createProject("p5");
// createProject("p6");
// createProject("p7");
// createProject("p8");
// console.log(projects[1]);
// console.log(projects);
// deleteProject(3);
// console.log(projects);
// deleteProject(6);
// console.log(projects);

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
  e.preventDefault();
  console.log("hah");
  createProject(inputProjectName.value);
  projectFormContainer.style.display = "none";
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgI2lkID0gMDtcbiAgI3Rhc2tJZCA9IDA7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmlkID0gUHJvamVjdC5uZXh0SWQoKTtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgc3RhdGljIG5leHRJZCgpIHtcbiAgICByZXR1cm4gUHJvamVjdC4jaWQrKztcbiAgfVxuXG4gIG5leHRUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Rhc2tJZCsrO1xuICB9XG5cbiAgZ2V0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrSWQ7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2goXG4gICAgICBuZXcgVGFzayhcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5uZXh0VGFza0lkKCksXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tEdWVkYXRlLFxuICAgICAgICB0YXNrUHJpb3JpdHlcbiAgICAgIClcbiAgICApO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG5cbiAgdXBkYXRlVGFzayh0YXNrSWQsIHRhc2tOYW1lLCB0YXNrRGVzLCB0YXNrRHVlZGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5uYW1lID0gdGFza05hbWU7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gdGFza0RlcztcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZSA9IHRhc2tEdWVkYXRlO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJZCwgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jcmVhdGVQcm9qZWN0KFwicDFcIik7XG5jcmVhdGVQcm9qZWN0KFwicDJcIik7XG5cbnByb2plY3RzWzBdLmFkZFRhc2soXCJ0YXNrMFwiLCBcImxvcmVtXCIsIG5ldyBEYXRlKCksIDIpO1xucHJvamVjdHNbMF0uYWRkVGFzayhcInRhc2syXCIsIFwibG9yZW1cIiwgbmV3IERhdGUoKSwgMCk7XG5wcm9qZWN0c1swXS5hZGRUYXNrKFwidGFzazNcIiwgXCJsb3JlbVwiLCBuZXcgRGF0ZSgpLCAyKTtcbnByb2plY3RzWzBdLmFkZFRhc2soXCJ0YXNrNFwiLCBcImxvcmVtXCIsIG5ldyBEYXRlKCksIDMpO1xuXG5wcm9qZWN0c1sxXS5hZGRUYXNrKFwidGFzazFcIiwgXCJsb3JlbVwiLCBuZXcgRGF0ZSgpLCAyKTtcbnByb2plY3RzWzFdLmFkZFRhc2soXCJ0YXNrMlwiLCBcImxvcmVtXCIsIG5ldyBEYXRlKCksIDEpO1xucHJvamVjdHNbMV0uYWRkVGFzayhcInRhc2szXCIsIFwibG9yZW1cIiwgbmV3IERhdGUoKSwgMik7XG5wcm9qZWN0c1sxXS5hZGRUYXNrKFwidGFzazRcIiwgXCJsb3JlbVwiLCBuZXcgRGF0ZSgpLCAzKTtcblxuY29uc29sZS5sb2cocHJvamVjdHNbMF0udGFza3MpO1xuY29uc29sZS5sb2cocHJvamVjdHNbMV0udGFza3MpO1xuLy8gcHJvamVjdHNbMV0uYWRkVGFzayhcInRhc2s1XCIsIFwibG9yZW1cIiwgbmV3IERhdGUoKSwgMik7XG4vLyBwcm9qZWN0c1sxXS5hZGRUYXNrKFwidGFzazZcIiwgXCJsb3JlbVwiLCBuZXcgRGF0ZSgpLCAxKTtcbi8vIHByb2plY3RzWzFdLmFkZFRhc2soXCJ0YXNrN1wiLCBcImxvcmVtXCIsIG5ldyBEYXRlKCksIDMpO1xuLy8gcHJvamVjdHNbMV0uYWRkVGFzayhcInRhc2s4XCIsIFwibG9yZW1cIiwgbmV3IERhdGUoKSwgMSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0c1sxXSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0c1sxXS50YXNrcyk7XG4vLyBwcm9qZWN0c1sxXS51cGRhdGVUYXNrKDcsIFwiQnV3YWFhYVwiLCBcIjU1NVwiLCBcIjIwNDAtMTItNVwiLCA0KTtcbi8vIHByb2plY3RzWzFdLmRlbGV0ZVRhc2soNCk7XG4vLyBwcm9qZWN0c1sxXS51cGRhdGVUYXNrKDIsIFwiR3dhYVwiLCBcIjIyMlwiLCBcIjIwNDAtMTItNVwiLCA3KTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzWzFdLnRhc2tzKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwM1wiKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwNFwiKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwNVwiKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwNlwiKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwN1wiKTtcbi8vIGNyZWF0ZVByb2plY3QoXCJwOFwiKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzWzFdKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vIGRlbGV0ZVByb2plY3QoMyk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyBkZWxldGVQcm9qZWN0KDYpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4vLyBhZGQgcHJvamVjdFxuXG5jb25zdCBzaG93UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctcHJvamVjdC1mb3JtLWJ0blwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgY2FuY2VsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLXByb2plY3QtYnRuXCIpO1xuXG5zaG93UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jYW5jZWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0X25hbWVcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIik7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJoYWhcIik7XG4gIGNyZWF0ZVByb2plY3QoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9