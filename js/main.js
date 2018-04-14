'use strict';
//const declaration
const ACTUAL_DATE = new Date();
const WEEK_DAYS = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//variable declaration
let taskList = document.querySelector('.task_list');
let addNewTask = document.querySelector('.btn__add');
let newTask = document.querySelector('.btn__add-new');
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

//Add new task
function addTask() {
  let newTask = {
    name: document.getElementById('new_task').value, //get input value
    check: false
  };

  taskList.innerHTML += `<li><input type="checkbox" name="check" value=${newTask.name}> ${newTask.name} </li>`;

  localTasks.push(newTask);
  saveLocalStorage(localTasks);
  document.querySelector('.principal__section').classList.remove('opacity');
  document.querySelector('.add__task').classList.remove('visible');

}

// save tasks in local Storage
function saveLocalStorage(localTasks){
  localStorage.setItem('dataTasks', JSON.stringify(localTasks));
}

function showTasks() {
  if (localTasks !== null) {
    for (let i = 0; i < localTasks.length; i++) {
      let checkedStr = '';
      if (localTasks[i].check) {
        checkedStr = 'checked';
      }
      taskList.innerHTML += `<li><input type="checkbox" name="check" value=${localTasks[i].check} ${checkedStr}> ${localTasks[i].name} </li>`;
    }
  }
}
//Mostrar formulario
function showAddTask() {
  document.querySelector('.principal__section').classList.add('opacity');
  document.querySelector('.add__task').classList.add('visible');
}

// function setTaskCheck(taskIndex) {
//   localTasks[taskIndex].check = !localTasks[taskIndex].check;
//   saveLocalStorage();
// }

// call events and functions
document.addEventListener('DOMContentLoaded', headerDate);
newTask.addEventListener('click', showAddTask);
addNewTask.addEventListener('click', addTask);

showTasks();
