/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   renderProjectNavbar: () => (/* binding */ renderProjectNavbar),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");


let projects;
class Project {
  static #id = 0;
  #taskId = 0;
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
    localStorage.setItem("projectsId", Project.getId());
  }

  static clearProjectsId() {
    Project.#id = 0;
  }

  getId() {
    return this.id;
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
    Project.clearProjectsId();
    Project.setLocalStorageProjectsId();
  } else {
    projects = JSON.parse(localStorage.getItem("projectCollection"));
    Project.getLocalStorageProjectsId();
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
    });

    projectNavListContainer.appendChild(projectDiv);
  });
}

function renderProjectContent(e) {
  e.stopPropagation();
  const contentContainer = document.querySelector(".content-container");
  const projectContentContainer = document.createElement("div");
  const projectHeaderName = document.createElement("div");
  // const showTaskFormBtn = document.createElement("button");
  // showTaskFormBtn.setAttribute("type", "click");
  // showTaskFormBtn.classList.add("show-task-form-btn");
  // showTaskFormBtn.textContent = "Show Task";
  clearContentContainer();

  projectContentContainer.classList.add("project-content-container");
  projectHeaderName.textContent = `${projects[e.target.dataset.index].name}`;
  projectHeaderName.classList.add("project-header-name");
  projectContentContainer.appendChild(projectHeaderName);
  projectContentContainer.appendChild(createShowTaskFormBtn());
  contentContainer.appendChild(projectContentContainer);
}

function createShowTaskFormBtn() {
  const showTaskFormBtn = document.createElement("button");
  showTaskFormBtn.setAttribute("type", "click");
  showTaskFormBtn.classList.add("show-task-form-btn");
  showTaskFormBtn.textContent = "Show Task";
  showTaskFormBtn.addEventListener("click", (e) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskForm)();
  });
  return showTaskFormBtn;
}

function clearContentContainer() {
  const contentContainer = document.querySelector(".content-container");

  while (contentContainer.firstElementChild) {
    contentContainer.removeChild(contentContainer.firstElementChild);
  }
}




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   clearTaskFormValue: () => (/* binding */ clearTaskFormValue),
/* harmony export */   toggleTaskForm: () => (/* binding */ toggleTaskForm)
/* harmony export */ });
class Task {
  constructor(projectId, id, name, description, duedate, priority, status) {
    this.projectId = projectId;
    this.id = id;
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.status = status;
  }
}

// add task

const taskForm = document.querySelector("#task-form");
const showTaskFormBtn = document.querySelector(".show-task-form-btn");
const cancelTaskFormBtn = document.querySelector("#cancel-task-btn");

function toggleTaskForm() {
  if (taskForm.style.display === "" || taskForm.style.display === "none") {
    taskForm.style.display = "block";
  } else if (taskForm.style.display === "block") {
    taskForm.style.display = "none";
  }
}

function clearTaskFormValue(e) {
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  taskInputName.value = "";
  taskInputDesciption.value = "";
  taskInputDuedate.value = "";
  taskInputPriority.value = "1";
}

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
  clearTaskFormValue();
});




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
// import "./style.css";


(0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectNavbar)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQ0FBbUM7QUFDOUQsNkJBQTZCLG9CQUFvQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQ0FBZ0MsYUFBYTtBQUM3QyxrQ0FBa0MsV0FBVztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxzQ0FBc0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUQ7Ozs7Ozs7VUN6RHBEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFROEI7QUFDVztBQUN6Qyx3RUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2dnbGVUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybVZhbHVlIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5sZXQgcHJvamVjdHM7XG5jbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljICNpZCA9IDA7XG4gICN0YXNrSWQgPSAwO1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5pZCA9IFByb2plY3QubmV4dElkKCk7XG4gIH1cblxuICBzdGF0aWMgbmV4dElkKCkge1xuICAgIHJldHVybiBQcm9qZWN0LiNpZCsrO1xuICB9XG5cbiAgc3RhdGljIGdldElkKCkge1xuICAgIHJldHVybiBQcm9qZWN0LiNpZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCkge1xuICAgIFByb2plY3QuI2lkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzSWRcIikpO1xuICB9XG4gIHN0YXRpYyBzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNJZFwiLCBQcm9qZWN0LmdldElkKCkpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUHJvamVjdHNJZCgpIHtcbiAgICBQcm9qZWN0LiNpZCA9IDA7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIG5leHRUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Rhc2tJZCsrO1xuICB9XG5cbiAgZ2V0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrSWQ7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2goXG4gICAgICBuZXcgVGFzayhcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5uZXh0VGFza0lkKCksXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tEdWVkYXRlLFxuICAgICAgICB0YXNrUHJpb3JpdHlcbiAgICAgIClcbiAgICApO1xuICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB1cGRhdGVQcm9qZWN0KCk7XG4gIH1cblxuICB1cGRhdGVUYXNrKHRhc2tJZCwgdGFza05hbWUsIHRhc2tEZXMsIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0ubmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IHRhc2tEZXM7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLmR1ZWRhdGUgPSB0YXNrRHVlZGF0ZTtcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlUHJvamVjdHNFbXB0eSgpIHtcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiKSA9PT0gbnVsbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RMb2NhbHN0b3JhZ2UoKSB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZVByb2plY3RzRW1wdHkoKSkge1xuICAgIHByb2plY3RzID0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIFByb2plY3QuY2xlYXJQcm9qZWN0c0lkKCk7XG4gICAgUHJvamVjdC5zZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIikpO1xuICAgIFByb2plY3QuZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICB9XG59XG5cbnNldFByb2plY3RMb2NhbHN0b3JhZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmFtZSkpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG5cbiAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHVwZGF0ZVByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdCgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBhZGQgcHJvamVjdFxuXG5jb25zdCBzaG93UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctcHJvamVjdC1mb3JtLWJ0blwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgY2FuY2VsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLXByb2plY3QtYnRuXCIpO1xuY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdF9uYW1lXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnRuXCIpO1xuXG5zaG93UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jYW5jZWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBQcm9qZWN0LmdldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgY3JlYXRlUHJvamVjdChpbnB1dFByb2plY3ROYW1lLnZhbHVlKTtcbiAgUHJvamVjdC5zZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIGlucHV0UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgYWRkTmV3UHJvamVjdE5hdmJhcigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdE5hdmJhcigpIHtcbiAgY29uc3QgcHJvamVjdE5hdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ubmFtZX1gO1xuICBwcm9qZWN0LmRhdGFzZXQuaW5kZXggPSBgJHtQcm9qZWN0LmdldElkKCkgLSAxfWA7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmF2LWl0ZW1cIik7XG5cbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0Q29udGVudChlKTtcbiAgfSk7XG5cbiAgcHJvamVjdE5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3ROYXZiYXIoKSB7XG4gIGNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIpKTtcbiAgY29uc3QgcHJvamVjdE5hdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIlxuICApO1xuXG4gIHByb2plY3REYXRhLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBgJHtwcm9qZWN0LmlkfWA7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYXYtaXRlbVwiKTtcblxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0Q29udGVudChlKTtcbiAgICB9KTtcblxuICAgIHByb2plY3ROYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdENvbnRlbnQoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vIGNvbnN0IHNob3dUYXNrRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIC8vIHNob3dUYXNrRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2xpY2tcIik7XG4gIC8vIHNob3dUYXNrRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvdy10YXNrLWZvcm0tYnRuXCIpO1xuICAvLyBzaG93VGFza0Zvcm1CdG4udGV4dENvbnRlbnQgPSBcIlNob3cgVGFza1wiO1xuICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcblxuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1tlLnRhcmdldC5kYXRhc2V0LmluZGV4XS5uYW1lfWA7XG4gIHByb2plY3RIZWFkZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyTmFtZSk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNob3dUYXNrRm9ybUJ0bigpKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dUYXNrRm9ybUJ0bigpIHtcbiAgY29uc3Qgc2hvd1Rhc2tGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2hvd1Rhc2tGb3JtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjbGlja1wiKTtcbiAgc2hvd1Rhc2tGb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRhc2stZm9ybS1idG5cIik7XG4gIHNob3dUYXNrRm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiU2hvdyBUYXNrXCI7XG4gIHNob3dUYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICB9KTtcbiAgcmV0dXJuIHNob3dUYXNrRm9ybUJ0bjtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgUHJvamVjdCxcbiAgY3JlYXRlUHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgdXBkYXRlUHJvamVjdCxcbiAgcHJvamVjdHMsXG4gIHJlbmRlclByb2plY3ROYXZiYXIsXG59O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJZCwgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbi8vIGFkZCB0YXNrXG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG5jb25zdCBzaG93VGFza0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctdGFzay1mb3JtLWJ0blwiKTtcbmNvbnN0IGNhbmNlbFRhc2tGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtdGFzay1idG5cIik7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tGb3JtKCkge1xuICBpZiAodGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiB8fCB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSBpZiAodGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm1WYWx1ZShlKSB7XG4gIGNvbnN0IHRhc2tJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfbmFtZVwiKTtcbiAgY29uc3QgdGFza0lucHV0RGVzY2lwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza19kZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgdGFza0lucHV0RHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza19kdWVfZGF0ZVwiKTtcbiAgY29uc3QgdGFza0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJpb3JpdHlcIik7XG5cbiAgdGFza0lucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUgPSBcIlwiO1xuICB0YXNrSW5wdXREdWVkYXRlLnZhbHVlID0gXCJcIjtcbiAgdGFza0lucHV0UHJpb3JpdHkudmFsdWUgPSBcIjFcIjtcbn1cblxuc2hvd1Rhc2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKFwiU2hvdyB0YXNrXCIpO1xuICB0b2dnbGVUYXNrRm9ybSgpO1xufSk7XG5cbmNhbmNlbFRhc2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNhbmNlbCB0YXNrXCIpO1xuICB0b2dnbGVUYXNrRm9ybSgpO1xufSk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coXCJhZGRcIik7XG4gIHRvZ2dsZVRhc2tGb3JtKCk7XG4gIGNsZWFyVGFza0Zvcm1WYWx1ZSgpO1xufSk7XG5cbmV4cG9ydCB7IFRhc2ssIHRvZ2dsZVRhc2tGb3JtLCBjbGVhclRhc2tGb3JtVmFsdWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIFByb2plY3QsXG4gIGNyZWF0ZVByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIHByb2plY3RzLFxuICByZW5kZXJQcm9qZWN0TmF2YmFyLFxufSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2suanNcIjtcbnJlbmRlclByb2plY3ROYXZiYXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==