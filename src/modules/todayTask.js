import { projects } from "./project.js";
import {
  reRenderProjectHeaderName,
  clearContentContainer,
  createHeaderName,
} from "./project.js";
import { renderTask } from "./task.js";

function isToday(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const today = new Date().getDate();
  if (today === date.getDate()) {
    return true;
  }
  return false;
}

function renderTodayTask() {
  const today = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isToday(task.duedate)) {
        today.push(task);
      }
    });
  });
  const sortedTodayPriorityTask = sortTaskPriorityHighToLow(today);
  sortedTodayPriorityTask.forEach((task) => {
    renderTask(task);
  });
}

function sortTaskPriorityHighToLow(arr) {
  arr.sort(function (a, b) {
    return Number(a.priority) - Number(b.priority);
  });
  arr.reverse();
  return arr;
}

function addEventListenerTodayTask() {
  const todayTaskNav = document.querySelector(".today-task");
  todayTaskNav.addEventListener("click", (e) => {
    console.log("hey");
    clearContentContainer();
    createHeaderName("Today Task");
    renderTodayTask();
  });
}

addEventListenerTodayTask();

export { addEventListenerTodayTask };
