function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createMonthDays(){
  let monthDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayLi = document.createElement('li');
    
    if (day === 25) {
      dayLi.className = 'day holiday friday';
      dayLi.innerText = day;
      monthDays.appendChild(dayLi);
    } else if (day === 24 || day === 31) {
      dayLi.className = 'day holiday';
      dayLi.innerText = day;
      monthDays.appendChild(dayLi);
    } else if (day === 4 | day === 11 | day === 18){
      dayLi.className = 'day friday';
      dayLi.innerText = day;
      monthDays.appendChild(dayLi);
    } else {
      dayLi.className = 'day';
      dayLi.innerText = day;
      monthDays.appendChild(dayLi);
    }
  }
}
createMonthDays();
function createButton(param){
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = param;
  buttonContainer.appendChild(button);
}
createButton('Feriados');

function highlightHolidays(){
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');

  holidayButton.addEventListener('click', function(){ 
  for (let i = 0; i < holidays.length; i += 1){
    if (holidays[i].style.backgroundColor === 'pink'){
      holidays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[i].style.backgroundColor = 'pink';
    }
  }
})
}
highlightHolidays();

function createFridayButton(param){
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = param;
  buttonContainer.appendChild(button);
}
createFridayButton('Sexta-Feira');

let saveFridays = [4,11,18,25];
function highlightFridays(){
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newText = 'SEXTOUUUU';

  fridayButton.addEventListener('click', function(){ 
  for (let i = 0; i < fridays.length; i += 1){
    if (fridays[i].innerText !== newText){
      fridays[i].innerText = newText;
    } else {
      fridays[i].innerText = saveFridays[i];
    }
  }
})
}
highlightFridays();

