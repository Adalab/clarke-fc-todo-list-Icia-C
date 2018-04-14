'use strict';
//const declaration


//Add header date
const headerDate = () => {
  const ACTUAL_DATE = new Date();
  const WEEK_DAYS = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const MONTHS = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  //get actual number day
  document.querySelector('.actual__day-number').innerHTML = ACTUAL_DATE.getDate();
  //get day of the week
  document.querySelector('.actual__day').innerHTML = WEEK_DAYS[ACTUAL_DATE.getDay()];
  //get month and year
  document.querySelector('.actual__month-year').innerHTML = `${MONTHS[ACTUAL_DATE.getMonth()]}, ${ACTUAL_DATE.getFullYear()}`;
};
document.addEventListener('DOMContentLoaded', headerDate);


//paint tasks
function paintTasks() {
  let taskList = document.querySelector('.task_list');
  let newTask = document.getElementById('new_task').value;

  taskList.innerHTML += `<li> ${newTask} </li>`;
}

let addNewTask = document.querySelector('.btn__add');
addNewTask.addEventListener('click', paintTasks);
