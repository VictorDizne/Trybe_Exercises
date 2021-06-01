window.onload = function () {
  let text = document.getElementById('paragrafo')
  let bgColor = localStorage.getItem('backgroundColor');
  document.body.style.backgroundColor = bgColor;

  let textColor = localStorage.getItem('textColor');
  text.style.color = textColor;

  let textSize = localStorage.getItem('fontSize');
  text.style.fontSize = textSize;

  let fontSpace = localStorage.getItem('fontSpace');
  text.style.lineHeight = fontSpace;
}
function changeBackgroundColor () {
  let buttons = document.getElementsByClassName("backgroundButtons");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(){
      if (buttons[i] === buttons[0]){
        setBackgroundColor('blue');
      } else if (buttons[i] === buttons[1]){
        setBackgroundColor('pink');
      } else {
        setBackgroundColor('white');
      }
    })
  }
}
changeBackgroundColor();
function setBackgroundColor (color) {
  document.body.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}
function changeTextColor () {
  let buttons = document.getElementsByClassName("textColorButtons");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(){
      if (buttons[i] === buttons[0]){
        setTextColor('red');
      } else if (buttons[i] === buttons[1]){
        setTextColor('purple');
      } else {
        setTextColor('black');
      }
    })
  }
}
changeTextColor();
function setTextColor (color) {
  document.getElementById('paragrafo').style.color = color;
  localStorage.setItem('textColor', color);
}
function changeTextSize() {
  let buttons = document.getElementsByClassName("textSizeButtons");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(){
      if (buttons[i] === buttons[0]){
        setFontSize('small');
      } else if (buttons[i] === buttons[1]){
        setFontSize('medium');
      } else {
        setFontSize('large');
      }
    })
  }
}
changeTextSize();
function setFontSize (size) {
  document.getElementById('paragrafo').style.fontSize = size;
  localStorage.setItem('fontSize', size)
}
function changeFontSpace() {
  let buttons = document.getElementsByClassName("fontSpaceButtons");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(){
      if (buttons[i] === buttons[0]){
        setFontSpace('20px');
      } else if (buttons[i] === buttons[1]){
        setFontSpace('25px');
      } else {
        setFontSpace('30px');
      }
    })
  }
}
changeFontSpace();
function setFontSpace(space){
  document.getElementById('paragrafo').style.lineHeight = space;
  localStorage.setItem('fontSpace', space);
}
function changeFontFamily() {
  let buttons = document.getElementsByClassName("fontFamilyButtons");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", function(){
      if (buttons[i] === buttons[0]){
        setFontFamily('helvetica');
      } else if (buttons[i] === buttons[1]){
        setFontFamily('sans-serif');
      } else {
        setFontFamily('arial');
      }
    })
  }
}
changeFontFamily()
function setFontFamily (font) {
  document.body.style.fontFamily = font;
  localStorage.setItem('fontFamily', font);
}