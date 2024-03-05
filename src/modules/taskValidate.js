import { Project } from './project';
const taskForm = document.querySelector('#task-form');
const taskInputName = document.querySelector('#task_name');
const taskInputNameErrorText = document.querySelector(
  '#task_name+.task-input-error-text'
);
const taskInputDes = document.querySelector('#task_description');
const taskInputDesErrorText = document.querySelector(
  '#task_description+.task-input-error-text'
);
const taskInputDate = document.querySelector('#task_due_date');
const taskInputDateErrorText = document.querySelector(
  '#task_due_date+.task-input-error-text'
);

function addEventListenerTaskInputError(
  inputElement,
  errorShowElement,
  errorText
) {
  inputElement.addEventListener('input', (event) => {
    if (!inputElement.validity.valid) {
      errorShowElement.style.visibility = 'visible';
      errorShowElement.textContent = errorText;
    }
    if (inputElement.validity.valid) {
      errorShowElement.style.visibility = 'hidden';
    }
  });
}

addEventListenerTaskInputError(
  taskInputName,
  taskInputNameErrorText,
  `You can't skip this part`
);

export {
  addEventListenerTaskInputError,
  taskInputName,
  taskInputNameErrorText,
  taskInputDes,
  taskInputDesErrorText,
  taskInputDate,
  taskInputDateErrorText,
  taskForm,
};
