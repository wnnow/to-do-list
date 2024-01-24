import "./style.css";

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
  constructor(id, name, description, duedate, priority) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

createProject("p1");
createProject("p2");
// console.log(projects);
projects[1].addTask("task1", "lorem", new Date(), 2);
projects[1].addTask("task2", "lorem", new Date(), 1);
projects[1].addTask("task3", "lorem", new Date(), 2);
projects[1].addTask("task4", "lorem", new Date(), 3);
projects[1].addTask("task5", "lorem", new Date(), 2);
projects[1].addTask("task6", "lorem", new Date(), 1);
projects[1].addTask("task7", "lorem", new Date(), 3);
projects[1].addTask("task8", "lorem", new Date(), 1);
// console.log(projects);
// console.log(projects[1]);
// console.log(projects[1].tasks);
projects[1].updateTask(7, "Buwaaaa", "555", "2040-12-5", 4);
projects[1].deleteTask(4);
projects[1].updateTask(2, "Gwaa", "222", "2040-12-5", 7);
// console.log(projects[1].tasks);
createProject("p3");
createProject("p4");
createProject("p5");
createProject("p6");
createProject("p7");
createProject("p8");
console.log(projects);
deleteProject(3);
console.log(projects);
deleteProject(6);
console.log(projects);
