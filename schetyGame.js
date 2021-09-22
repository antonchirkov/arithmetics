function schetyGame(){
container.style.display='none';
navSchety.style.display='flex';
border.style.display='flex';
document.getElementById("levelSchety").disabled=false;
sessionStorage.setItem(userName, 'schetyGame');
let playGameSchety = false;
let quit = false;
// Игра
writeActionSchety();
function writeActionSchety()
{
    if (!playGameSchety) {
      actionSchety.innerHTML = calculateSchety();
      if(quit==false) setTimeout(writeActionSchety, 200);
      return;
    }
    else {
      startStopSchety.innerHTML = '✖';
      document.getElementById("levelSchety").disabled=true;
        if (!localStorage.getItem(userName+"recordSchety"+ levelSchety.value)){
          localStorage.setItem(userName+"recordSchety"+ levelSchety.value, "0");
        }
        playerSchety(0, false);
        return;
    }}
function playerSchety(points, writeRecord){
    let rightAnswer = setTaskSchety();
    let counter = 0;
    pointsField.innerHTML =`<font>очки:</font> ${points}`;
    compare();
    return;
    function compare(){
      if(playGameSchety){
        let timer = setTimeout(compare,1000);
        counter++;
        let answer = calculateSchety();
        if (rightAnswer == answer) {
          let newPoints = Math.round(1/counter*100);
            clearTimeout(timer);
            if (writeRecord) localStorage.setItem(userName+"recordSchety"+levelSchety.value, points + newPoints);
             else if (Number(localStorage.getItem(userName+"recordSchety"+levelSchety.value)) < points + newPoints) {
               writeRecord=true;
               let newTodayDateSetted = localStorage.getItem(userName + 'todayDateSetted').split(',');
               newTodayDateSetted[2]='1';
               localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
               localStorage.setItem(userName+"recordSchety"+levelSchety.value, points + newPoints);
             }
            let animBlock = document.createElement('div');
            animBlock.innerHTML = rightAnswer;
            animBlock.className = 'animationFieldStart';
            border.after(animBlock);
            setTimeout(()=>{animBlock.className='animationField'},10);
            let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
            newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + Math.round(1/counter*100);
            localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
            playerSchety(points + Math.round(1/counter*100), writeRecord);
            return;
        }
        else if (counter > 90){
            actionSchety.innerHTML="геймовер";
            rightanswer=-1;
            return;
        }
      }
      else{
        startStopSchety.innerHTML = '►';
        document.getElementById("levelSchety").disabled=false;
        writeActionSchety();
        return;
      }
    }}
goToMenuSchety.onclick=function(){
          playGameSchety = false;
          quit=true;
          navSchety.style.display='none';
          border.style.display='none';
          container.style.display="block";
          setUpMenu();
          return;
        }
startStopSchety.onclick = function() {
            playGameSchety = !playGameSchety;
            }
      }
      // Высчитываются число на счетах
      function calculateSchety(){
          let spokes = schety.querySelectorAll(".spica");
          let j = 100000;
          let answer=0;
          for (spoke of spokes){
              bones = spoke.querySelectorAll(".kost");
              for (bone of bones){
                  if (bone.getBoundingClientRect().left - schety.getBoundingClientRect().left < schety.offsetWidth/2-bone.offsetWidth/1.5 && bones.length!=4) answer = answer+j;
                  else if (bone.getBoundingClientRect().left- schety.getBoundingClientRect().left < schety.offsetWidth/2-bone.offsetWidth/1.5) answer = answer + 0.25;
              }
              if(bones.length != 4) j = j / 10;
          }
          return answer.toFixed(2);
                }
      // Десктоп/Ноут
      schety.onmousedown = function (event){
          let touched = event.target;
          let leftSiblings;
          let rightSiblings;
        if (touched.className=="kost"){
          leftSiblings = countLeftSiblings(touched);
          rightSiblings = countRightSiblings(touched);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            }

            function onMouseMove(event) {
                let newLeft = event.clientX/schety.offsetWidth*100 - schety.getBoundingClientRect().left/schety.offsetWidth*100 - 2.5;
                // Положение костяшки в конце и начале поля
                if (newLeft >= 95 - rightSiblings*5) newLeft = 95 - rightSiblings*5;
                else if (newLeft <= leftSiblings*5) newLeft = leftSiblings*5;
                touched.style.left = newLeft + '%';
                moveSiblingsSchety(touched, newLeft);
            }
            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
          }
      // Тач-девайс
      schety.ontouchstart = function (event){
          let touched = event.target;
          let rightSiblings;
          let leftSiblings;
        if (touched.className=="kost"){
          rightSiblings = countRightSiblings(touched);
           leftSiblings = countLeftSiblings(touched);
            document.addEventListener('touchmove', onMouseMove);
            document.addEventListener('touchend', onMouseUp);
}
function onMouseMove(event) {
    // Считываем координату X курсора относительно поля счетов
    let newLeft = event.changedTouches[event.changedTouches.length-1].pageX/schety.offsetWidth * 100 - schety.getBoundingClientRect().left/schety.offsetWidth * 100 - 2.5;
    // Положение костяшки в конце и начале поля
    if (newLeft <= leftSiblings*5) newLeft = leftSiblings*5;
    else if (newLeft >= 95 - rightSiblings*5) newLeft = 95 - rightSiblings*5;
    touched.style.left = newLeft + '%';
   moveSiblingsSchety(touched, newLeft);
}
  function onMouseUp() {
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
  }}
function moveSiblingsSchety (touched, newLeft)
              {
                    //  Правый сосед
                    let that = touched;
                    let sibling = touched.nextElementSibling;
                    let moving = newLeft;
                    while (sibling && that.getBoundingClientRect().left >= sibling.getBoundingClientRect().left - 0.05*schety.offsetWidth)
                        {
                            sibling.style.left = moving + 5 + '%';
                            that = sibling;
                            sibling = sibling.nextElementSibling;
                            moving = moving + 5;
                        }
                    // Левый сосед
                    that = touched;
                    sibling = touched.previousElementSibling;
                    moving = newLeft;
                    while (sibling && that.getBoundingClientRect().left<= sibling.getBoundingClientRect().left + 0.05*schety.offsetWidth)
                        {
                            sibling.style.left = moving - 5 + '%';
                            that = sibling;
                            sibling = sibling.previousElementSibling;
                            moving = moving - 5;
}}
function setTaskSchety(){
  // Легкий уровень
  if (levelSchety.selectedIndex == 0)
  {
      let number1 = randomInteger(2, 100);
      let operator = randomInteger(0, 1);
      let rightAnswer;
      if (operator == 0)
      {
            operator = "-";
            number2 = randomInteger(1, number1-1);
            rightAnswer = number1 - number2;
      }

      if (operator == 1) {
            operator = "+";
            number2 = randomInteger(1, 100);
            rightAnswer = number1 + number2;
      }
      actionSchety.innerHTML=`${number1} ${operator} ${number2}`;
      return rightAnswer;
  }
  // Нормальный уровень
  if (levelSchety.selectedIndex == 1)
  {
      let number1 = randomInteger(2, 10000);
      let operator = randomInteger(0, 1) ;
      let rightAnswer;
      if (operator == 0)
      {
            operator = "-";
            number2 = randomInteger(1, number1-1);
            rightAnswer = number1 - number2;
      }
      if (operator == 1) {
            operator = "+";
            number2 = randomInteger(1, 10000);
            rightAnswer = number1 + number2;
      }
      actionSchety.innerHTML=`${number1} ${operator} ${number2}`;
      return rightAnswer;
  }
    // Сложный уровень
    if (levelSchety.selectedIndex == 2)
    {
        let number1 = randomInteger(2, 400000) + parseFloat(Math.random().toFixed(2));
        let operator = randomInteger(0, 1) ;
        let rightAnswer;
        if (operator == 0)
        {
              operator = "-";
              number2 = randomInteger(1, number1-1) + parseFloat(Math.random().toFixed(2));
              rightAnswer = number1 - number2;
        }
        if (operator == 1) {
              operator = "+";
              number2 = randomInteger(1, 400000) + parseFloat(Math.random().toFixed(2));
              rightAnswer = number1 + number2;
        }
        actionSchety.innerHTML=`${number1} ${operator} ${number2}`;
        return rightAnswer;
    }}

    function countRightSiblings(element){
        let rightSiblings=0;
        while (element.nextElementSibling) {
              rightSiblings++;
              element = element.nextElementSibling;
          }
        return rightSiblings;
    }
    function countLeftSiblings(element){
        let leftSiblings=0;
        while (element.previousElementSibling){
            leftSiblings++;
            element = element.previousElementSibling;
        }
        return leftSiblings;
    }
