function mental(){
  container.style.display='none';
  mentalGame.style.display='block';
  navMental.style.display='flex';
  levelMental.disabled=false;
  sessionStorage.setItem(userName, 'mental');
  let rightAnswer=randomInteger(11,1000);
  let playGameMental=false;
  let quit = false;
  addEventListener('keydown', checkCiffer);
  taskMental.innerHTML = rightAnswer;
  fillInTextQuest();
  writeActionMental();
  function writeActionMental()
  {
    if (!playGameMental) {
      if(quit==false) setTimeout(writeActionMental, 300);
      if (rightAnswer==answered.innerHTML) {
        answered.innerHTML='';
        explode();
        taskMental.innerHTML = rightAnswer;
        fillInTextQuest();
      }
    }
    else {
      levelMental.disabled=true;
      startStopMental.innerHTML="✖";
      answered.innerHTML="";
        if (!localStorage.getItem(userName+"recordMental"+ levelMental.value)){
          localStorage.setItem(userName+"recordMental"+ levelMental.value, "0");
        }
        playerMental(0, false);
  }
  }
  function playerMental(points, writeRecord){
      rightAnswer = setTaskMental();
      let answer = 0;
      let counter = 0;
      pointsFieldMental.innerHTML =`<font style="color:white;">очки: </font>${points}`;
      if (points>=1000){
        taskMental.innerHTML='Победа!';
        rightAnswer=-1;
      }
      compare();
      function compare()
      {

        if (playGameMental && quit==false){
          let timer = setTimeout(compare,300);
          counter++;
          let answer = answered.innerHTML;
            if (rightAnswer == answer) {
              explode();
              answered.innerHTML='';
              let newPoints = Math.round(1/counter*100);
              clearTimeout(timer);
               if (writeRecord) localStorage.setItem(userName+"recordMental"+ levelMental.value, points + newPoints);
               else if (Number(localStorage.getItem(userName+"recordMental"+ levelMental.value)) < points + newPoints) {
                  writeRecord=true;
                  animationRecord.innerHTML= 'Рекорд!';
                  setTimeout(sound, 100, 87, 1);
                  setTimeout(sound, 400, 87, 1);
                  setTimeout(sound, 700, 87, 1);
                  animationRecord.style.display='block';
                  let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
                  newTodayDateSetted[2]='1';
                  localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
                  localStorage.setItem(userName+"recordMental"+ levelMental.value, points + newPoints);
                  animation('animationRecord', 300, 1500);
                  console.log(localStorage.getItem(userName+"recordMental"+ levelMental.value));
                }
                let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
                newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + newPoints;
                localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
                playerMental(points + newPoints, writeRecord);
                return;
            }
            else if (counter > 180){
                taskMental.innerHTML="геймовер";
                rightAnswer=-1;
              }
          }
          else{
            levelMental.disabled=false;
            startStopMental.innerHTML = '►';
            taskMental.innerHTML = rightAnswer;
            if(quit==false) mental();
            return;
          }
      }
    }
  startStopMental.onclick = function() {
      playGameMental = !playGameMental;
    }
  goToMenuMental.onclick=function(){
    quit = true;
    playGameMental = false;
    startStopMental.innerHTML = '►';
    mentalGame.style.display='none';
    navMental.style.display='none';
    container.style.display="block";
    removeEventListener('keydown', checkCiffer);
    setUpMenu();
    return;
  }
}
function checkCiffer(event){
  let key = event.key;
  if((key=='1'||key== '2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9'||key=='0') && answered.innerHTML.length<9) answered.innerHTML= answered.innerHTML+key;
  else if(key=='Backspace')answered.innerHTML= answered.innerHTML.slice(0, answered.innerHTML.length-1);
  else if(key=='Delete')answered.innerHTML= '';
}
function setTaskMental(){
    // Легкий уровень
    if (levelMental.selectedIndex == 0)
    {
      let cubes = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;","&#9861;"]
      let number1 = randomInteger(1, 6);
      let number2 = randomInteger(1, 6);
      let number3 = randomInteger(1, 6);
      let number4 = randomInteger(1, 6);
      let rightAnswer = number1 + number2 + number3 + number4;
      taskMental.innerHTML=`${cubes[number1-1]} ${cubes[number2-1]} ${cubes[number3-1]} ${cubes[number4-1]}`;
      setTimeout(fillInTextQuest,500);
      return rightAnswer;
    }
    // Нормальный уровень
    if (levelMental.selectedIndex == 1)
    {
      let number1 = randomInteger(2, 500);
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
            number2 = randomInteger(1, 500);
            rightAnswer = number1 + number2;
      }
        taskMental.innerHTML=`${number1} ${operator} ${number2}`;
        setTimeout(fillInTextQuest,500);
        return rightAnswer;
    }
    // Сложный уровень
    if (levelMental.selectedIndex == 2)
    {
      let number1 = randomInteger(2, 5000000);
      let operator = randomInteger(0,1);
      let rightAnswer;
      if (operator == 0)
      {
            operator = "-";
            number2 =randomInteger(1, number1-1);
            rightAnswer = number1 - number2;
      }
      if (operator == 1) {
            operator = "+";
            number2 = randomInteger(1, 5000000);
            rightAnswer = number1 + number2;
      }
        taskMental.innerHTML=`${number1} ${operator} ${number2}`;
        setTimeout(fillInTextQuest,500);
        return rightAnswer;
    }
}
function explode(){
let context = new AudioContext();
bang(context, 0);
snare(context,0.1);
hat(context, 0.63);
hat(context, 0.7);
hat(context, 0.79);
hat(context, 0.9);
hat(context, 1);
hat(context, 1.07);
setTimeout(taskBack1,400);
setTimeout(taskBack2,1300);
document.querySelectorAll('.text').forEach(element => {element.style.display = 'flex';});
taskMental.style.display='none';
}
function taskBack1(){
taskMental.style.display='flex';
}
function taskBack2(){
document.querySelectorAll('.text').forEach(element => {element.style.display = 'none';});
}
