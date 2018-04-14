'use strict';

//Add header date
function headerDate() {
  const ACTUAL_DATE = new Date();
  //get actual number day
  let actualDay = ACTUAL_DATE.getDate();
  document.querySelector('.actual__day-number').innerHTML = actualDay;
  //get day of the week
  let weekDays = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  document.querySelector('.actual__day').innerHTML = weekDays[ACTUAL_DATE.getDay()];
  //get month and year
  let months = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  let month = months[ACTUAL_DATE.getMonth()];
  let year = ACTUAL_DATE.getFullYear();
  document.querySelector('.actual__month-year').innerHTML = `${month}, ${year}`;
}
document.addEventListener('DOMContentLoaded', headerDate);
