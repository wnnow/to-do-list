// import "./style.css";
import {
  Project,
  createProject,
  deleteProject,
  updateProject,
  projects,
  renderProjectNavbar,
} from "./modules/project.js";
import { Task } from "./modules/task.js";
import { addEventListenerCloseTaskDetailBtn } from "./modules/taskDetailPopup.js";
renderProjectNavbar();
addEventListenerCloseTaskDetailBtn();
