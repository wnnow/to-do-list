function addEventListenerCloseTaskDetailBtn() {
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  const taskDetailCloseBtn = document.querySelector("#task-popup-close-btn");
  taskDetailCloseBtn.addEventListener("click", (e) => {
    taskDetailContainer.style.display = "none";
  });
}

export { addEventListenerCloseTaskDetailBtn };
