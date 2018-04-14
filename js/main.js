'use strict';
//const declaration
const ACTUAL_DATE = new Date();
const WEEK_DAYS = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//variable declaration
let taskList = document.querySelector('.task_list');
let addNewTask = document.querySelector('.btn__add');

//Add header date
function headerDate() {
  //get actual number day
  document.querySelector('.actual__day-number').innerHTML = ACTUAL_DATE.getDate();
  //get day of the week
  document.querySelector('.actual__day').innerHTML = WEEK_DAYS[ACTUAL_DATE.getDay()];
  //get month and year
  document.querySelector('.actual__month-year').innerHTML = `${MONTHS[ACTUAL_DATE.getMonth()]}, ${ACTUAL_DATE.getFullYear()}`;
}

// look if I have elements in local Storage
const localTasks = (localStorage.getItem('dataTasks') ? JSON.parse(localStorage.getItem('dataTasks')) : []);

//paint tasks
function addTask() {
  let newTask = document.getElementById('new_task').value; //get input value

  taskList.innerHTML += `<li><input type="checkbox"> ${newTask} </li>`;

  localTasks.push(newTask);
  saveLocalStorage(localTasks);
}

// save tasks in local Storage
function saveLocalStorage(localTasks){
  localStorage.setItem('dataTasks', JSON.stringify(localTasks));
}

function showTasks() {
  if (localTasks !== null) {
    for (let i = 0; i < localTasks.length; i++) {
      taskList.innerHTML += `<li><input type="checkbox"> ${localTasks[i]} </li>`;
    }
  }
}

// call events and functions
document.addEventListener('DOMContentLoaded', headerDate);
addNewTask.addEventListener('click', addTask);
showTasks();
