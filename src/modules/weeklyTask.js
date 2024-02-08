import { projects } from "./project";

import { sortedTodayPriorityTask } from "./todayTask.js";

function isWeekly(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const todayDay = date.getDay();
}
