function abacus(){
  container.style.display='none';
  navAbacus.style.display='flex';
  sessionStorage.setItem(userName, 'abacus');
if(!localStorage.getItem(userName+'abacusPosition'))localStorage.setItem(userName+'abacusPosition','0');
localStorage.getItem(userName+'abacusPosition') == '0' ? containerAbacus.style.display='flex': abacusContainerHorisontal.style.display='flex';
turnAbacus.innerHTML=localStorage.getItem(userName+'abacusPosition') == '0' ? '&#8634;' : '&#8635;'
let playGameAbacus = false;
let quit = false;
levelAbacus.disabled=false;
// Изначальное расположение костяшек
let spokesAbacus = leftField.getElementsByClassName("spica1");
for (spoke of spokesAbacus)
    {
        let bonesAbacus = spoke.getElementsByClassName("kost1")
        let distance = 0;
        for (boneAbacus of bonesAbacus)
            {
                boneAbacus.style.left = distance+ "%";
                distance = distance + 13;
            }
    }
    writeActionAbacus();
// Игра
function writeActionAbacus()
{
    if (!playGameAbacus) {
      actionAbacus.innerHTML = localStorage.getItem(userName+'abacusPosition')==0 ? calculateAbacus() : calculateAbacusHorisontal();
      if(quit==false) setTimeout(writeActionAbacus, 200);
      return;
    }
    else {
      startStopAbacus.innerHTML = '❌';
      levelAbacus.disabled=true;
        if (!localStorage.getItem(userName+"recordAbacus"+ levelAbacus.value)){
          localStorage.setItem(userName+"recordAbacus"+ levelAbacus.value, "0");
        }
        playerAbacus(0, false);
        return;
    }
}
function playerAbacus(points, writeRecord){
    let rightAnswer = setTaskAbacus();
    let answer;
    let counter = 0;
    ochkiAbacus.innerHTML =`<font>очки: </font>${points}`;
    if (points>=1000){
      actionAbacus.innerHTML='Победа!';
      return;
    }
    compare();
    return;
    function compare()
    {
      if (playGameAbacus){
        let timer = setTimeout(compare,1000);
        counter++;
        answer = localStorage.getItem(userName+'abacusPosition')=='0' ? calculateAbacus() : calculateAbacusHorisontal();
        if (rightAnswer == answer) {
          let newPoints = Math.round(1/counter*100);
          clearTimeout(timer);
           if (writeRecord) localStorage.setItem(userName+"recordAbacus"+ levelAbacus.value, points + newPoints);
            else if (Number(localStorage.getItem(userName+"recordAbacus"+ levelAbacus.value)) < points + newPoints) {
              setTimeout(sound, 100, 87, 0.5);
              setTimeout(sound, 400, 87, 0.5);
              setTimeout(sound, 700, 87, 0.5);
              writeRecord=true;
              animationRecord.innerHTML= 'Рекорд!';
              animationRecord.style.display='block';
              localStorage.setItem(userName+"recordAbacus"+ levelAbacus.value, points + newPoints);
              animation('animationRecord', 300, 1500);
            }
            sound(440, 0.5);
            animationField.style.display='block';
            animationField.innerHTML= rightAnswer;
            animation('animationField', 100, 1000);
            let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
            newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + Math.round(1/counter*100);
            localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
            playerAbacus(points + Math.round(1/counter*100), writeRecord);
            return;
        }
        else if (counter > 90){
            actionAbacus.innerHTML="геймовер";
            rightAnswer=-1;
          }
      }
      else{
        levelAbacus.disabled=false;
        startStopAbacus.innerHTML = '►';
        writeActionAbacus();
        return;
      }
    }
  }
startStopAbacus.onclick = function() {
    playGameAbacus = !playGameAbacus;
}
goToMenuAbacus.onclick=function(){
  playGameAbacus = false;
  quit = true;
  startStopAbacus.innerHTML = '►';
  navAbacus.style.display='none';
  containerAbacus.style.display='none';
  abacusContainerHorisontal.style.display='none';
  container.style.display="block";
  setUpMenu();
  return;
}
}
turnAbacus.onclick=function(){
  if (localStorage.getItem(userName+'abacusPosition')=='0'){
    localStorage.setItem(userName+'abacusPosition', '1');
    turnAbacus.innerHTML='&#8635;';
    abacusContainerHorisontal.style.display='flex';
    containerAbacus.style.display='none';
  }
  else{
    localStorage.setItem(userName+'abacusPosition', '0');
    turnAbacus.innerHTML='&#8634;';
    abacusContainerHorisontal.style.display='none';
    containerAbacus.style.display='flex';
  }
}
function setTaskAbacus(){
    // Легкий уровень
    if (levelAbacus.selectedIndex == 0)
    {
        let number1 = randomInteger(2, 100);
        let operator = randomInteger(0, 1);
        let rightAnswer;
        if (operator == 0)
        {
              operator = "-";
              number2 = randomInteger(1, number1-1);;
              rightAnswer = number1 - number2;
        }

        if (operator == 1) {
              operator = "+";
              number2 = randomInteger(1, 100);
              rightAnswer = number1 + number2;
        }
        actionAbacus.innerHTML=`${number1} ${operator} ${number2}`;
        return rightAnswer;
    }
    // Нормальный уровень
    if (levelAbacus.selectedIndex == 1)
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
        actionAbacus.innerHTML=`${number1} ${operator} ${number2}`;
        return rightAnswer;
    }
    // Сложный уровень
    if (levelAbacus.selectedIndex == 2)
    {
        let number1 = randomInteger(2, 40000000);
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
              number2 = randomInteger(1, 40000000);
              rightAnswer = number1 + number2;
        }
        actionAbacus.innerHTML=`${number1} ${operator} ${number2}`;
        return rightAnswer;
    }
}

//desktop
leftField.onmousedown = function (event){
    let touched = event.target;
    let rightSiblings;
    let leftSiblings;
    if (touched.className=="kost1"){
      rightSiblings = countRightSiblings(touched);
      leftSiblings = countLeftSiblings(touched);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
          }
        function onMouseMove(event) {
            let newLeft = (event.clientX - leftField.getBoundingClientRect().left)*100/leftField.offsetWidth- 6.5;
            if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
            else if (newLeft >= 87 - rightSiblings*13) newLeft = 87 - rightSiblings*13;
            touched.style.left = newLeft + '%';
            moveSiblingsAbacus(touched, newLeft);
 }
          function onMouseUp() {
              document.removeEventListener('mouseup', onMouseUp);
              document.removeEventListener('mousemove', onMouseMove);
      }}
rightField.onmousedown = function (event){
        let touched = event.target;
        if (touched.className=="kost2"){
            document.addEventListener('mouseup', onMouseUp);
            document.addEventListener('mousemove', onMouseMove2);
            }
            function onMouseMove2(event) {
              let newLeft = (event.clientX - rightField.getBoundingClientRect().left)* 100/rightField.offsetWidth - 17;
              if (newLeft <= 0) newLeft = 0;
              else if (newLeft >= 66) newLeft = 66;
              touched.style.left = newLeft + '%';
                 }
              function onMouseUp() {
                     document.removeEventListener('mouseup', onMouseUp);
                     document.removeEventListener('mousemove', onMouseMove2);
             }}
             // Тач-девайс
leftfield.ontouchstart = function (event){
  let touched = event.target;
  let rightSiblings;
  let leftSiblings;
  if (touched.className=="kost1"){
    rightSiblings = countRightSiblings(touched);
    leftSiblings = countLeftSiblings(touched);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
        }
      function onMouseMove(event) {
          let newLeft = event.changedTouches[event.changedTouches.length-1].pageX/schety.offsetWidth * 100 - leftField.getBoundingClientRect().left)*100/leftField.offsetWidth- 6.5;
          if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
          else if (newLeft >= 87 - rightSiblings*13) newLeft = 87 - rightSiblings*13;
          touched.style.left = newLeft + '%';
          moveSiblingsAbacus(touched, newLeft);
}
        function onMouseUp() {
            document.removeEventListener('touchend', onMouseUp);
            document.removeEventListener('touchmove', onMouseMove);
    }
         }

         rightField.ontouchstart = function (event){
                 let touched = event.target;
                 if (touched.className=="kost2"){
                     document.addEventListener('touchend', onMouseUp);
                     document.addEventListener('touchmove', onMouseMove2);
                     }
                     function onMouseMove2(event) {
                       let newLeft = event.changedTouches[event.changedTouches.length-1].pageX/schety.offsetWidth * 100- rightField.getBoundingClientRect().left)* 100/rightField.offsetWidth - 17;
                       if (newLeft <= 0) newLeft = 0;
                       else if (newLeft >= 66) newLeft = 66;
                       touched.style.left = newLeft + '%';
                          }
                       function onMouseUp() {
                              document.removeEventListener('mouseup', onMouseUp);
                              document.removeEventListener('mousemove', onMouseMove2);
                      }}
function moveSiblingsAbacus(touched,newLeft)
{            //  Правый сосед
            let that = touched;
            let sibling = touched.nextElementSibling;
            let moving = newLeft;
            while (sibling && that.getBoundingClientRect().left >= sibling.getBoundingClientRect().left - 0.13*leftField.offsetWidth)
                {
                    sibling.style.left = moving + 13 + '%';
                    that = sibling;
                    sibling = sibling.nextElementSibling;
                    moving = moving + 13;
                }
            // Левый сосед
            that = touched;
            sibling = touched.previousElementSibling;
            moving = newLeft;
            while (sibling && that.getBoundingClientRect().left  <= sibling.getBoundingClientRect().left  + 0.13*leftField.offsetWidth)
                {
                    sibling.style.left = moving - 13 + '%';
                    that = sibling;
                    sibling = sibling.previousElementSibling;
                    moving = moving - 13;
                } }
// Тач-девайсы
leftField.ontouchstart = function (event){
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
      let newLeft = event.changedTouches[event.changedTouches.length-1].clientX/document.documentElement.clientWidth * 100 - leftField.getBoundingClientRect().left/document.documentElement.clientWidth * 100 - 6.5;
      if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
      else if (newLeft >= 87 - rightSiblings*13) newLeft = 87 - rightSiblings*13;
      touched.style.left = newLeft + '%';
      moveSiblingsAbacus(touched, newLeft);
      }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
}}
rightField.ontouchstart = function (event){
  let touched = event.target;
  let rightSiblings;
  let leftSiblings;
  if (touched.className=="kost2"){
      document.addEventListener('touchmove', onMouseMove2);
      document.addEventListener('touchend', onMouseUp);
  }
  function onMouseMove2(event) {
    let newLeft = event.changedTouches[event.changedTouches.length-1].clientX/rightField.clientWidth * 100 - rightField.getBoundingClientRect().left/rightField.clientWidth * 100 - 6.5;
    if (newLeft >= 87- rightSiblings*13) newLeft = 87- rightSiblings*13;
    if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
    touched.style.left = newLeft + '%';
       }
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove2);
   }
}
// Высчитывается результат абака
function calculateAbacus(){
    let spokesAbacus = leftField.querySelectorAll(".spica1");
    let j = 10000000;
    let answer=0;
    for (spoke of spokesAbacus){
        let bonesAbacus = spoke.querySelectorAll(".kost1");
        for (boneAbacus of bonesAbacus){
            if (boneAbacus.getBoundingClientRect().left - leftField.getBoundingClientRect().left > (leftField.offsetWidth-boneAbacus.offsetWidth)/2) answer = answer+j;
        }
       j = j / 10;
    }
    spokesAbacus = rightField.querySelectorAll(".spica2");
    j = 50000000
    for (spoke of spokesAbacus){
        let boneAbacus= spoke.querySelector(".kost2");
        if (boneAbacus.getBoundingClientRect().left - rightField.getBoundingClientRect().left < (rightField.offsetWidth - boneAbacus.offsetWidth)/2) answer = answer+j;
        j = j / 10;
    }
    return answer;
}
function calculateAbacusHorisontal(){
    let spokesAbacus = downerField.querySelectorAll(".spica2Horisontal");
    let j = 10000000;
    let answer=0;
    for (spoke of spokesAbacus){
        let bonesAbacus = spoke.querySelectorAll(".kost2Horisontal");
        for (boneAbacus of bonesAbacus){
            if (boneAbacus.getBoundingClientRect().top - downerField.getBoundingClientRect().top < (downerField.offsetHeight-boneAbacus.offsetHeight)/2) answer = answer+j;
        }
       j = j / 10;
    }
    spokesAbacus = upperField.querySelectorAll(".spica1Horisontal");
    j = 50000000
    for (spoke of spokesAbacus){
        let boneAbacus= spoke.querySelector(".kost1Horisontal");
        if (boneAbacus.getBoundingClientRect().top - upperField.getBoundingClientRect().top > (upperField.offsetHeight - boneAbacus.offsetHeight)/2) answer = answer+j;
        j = j / 10;
    }
    return answer;
}
downerField.onmousedown = function (event){
        let touched = event.target;
        let rightSiblings;
        let leftSiblings;
        if (touched.className=="kost2Horisontal"){
          rightSiblings = countRightSiblings(touched);
          leftSiblings = countLeftSiblings(touched);
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
}
function onMouseMove(event) {
    let newHeight = (event.clientY  - downerField.getBoundingClientRect().top)*100/downerField.offsetHeight - 6.5;
    if (newHeight < leftSiblings*13) newHeight = leftSiblings*13;
    else if (newHeight > 87 - rightSiblings*13) newHeight = 87 - rightSiblings*13;
    touched.style.top= newHeight + '%';
    moveSiblingsAbacusHorisontal(touched,newHeight);
    }
  function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }}
      upperField.onmousedown = function (event){
            let touched = event.target;
            if (touched.className=="kost1Horisontal"){
                document.addEventListener('mouseup', onMouseUp);
                document.addEventListener('mousemove', onMouseMove2);
                function onMouseMove2(event) {
                  let newHeight = (event.clientY - upperField.getBoundingClientRect().top)*100/upperField.offsetHeight - 20;
                  if (newHeight < 0) newHeight = 0;
                  else if (newHeight > 60) newHeight = 60;
                  touched.style.top = newHeight + '%';
                     }
                  function onMouseUp() {
                         document.removeEventListener('mouseup', onMouseUp);
                         document.removeEventListener('mousemove', onMouseMove2);
                 }}}
function moveSiblingsAbacusHorisontal(touched,newHeight){
 //  Правый сосед
 let that = touched;
 let sibling = touched.nextElementSibling;
 let moving = newHeight;
 while (sibling && that.getBoundingClientRect().top/downerField.offsetHeight >= sibling.getBoundingClientRect().top/downerField.offsetHeight - 0.13)
     {
         sibling.style.top = moving + 13 + '%';
         that = sibling;
         sibling = sibling.nextElementSibling;
         moving = moving + 13;
     }
 // Левый сосед
 that = touched;
 sibling = touched.previousElementSibling;
 moving = newHeight;
 while (sibling && that.getBoundingClientRect().top/downerField.offsetHeight  <= sibling.getBoundingClientRect().top/downerField.offsetHeight + 0.13)
     {
         sibling.style.top = moving - 13 + '%';
         that = sibling;
         sibling = sibling.previousElementSibling;
         moving = moving - 13;
     }
}
    // Тач-девайсы
    downerField.ontouchstart = function (event){
        let touched = event.target;
        let rightSiblings;
        let leftSiblings;
        if (touched.className=="kost2Horisontal"){
          rightSiblings = countRightSiblings(touched);
          leftSiblings = countLeftSiblings(touched);
          document.addEventListener('touchmove', onMouseMove);
          document.addEventListener('touchend', onMouseUp);
            }
        function onMouseMove(event) {
          let newHeight = (event.changedTouches[event.changedTouches.length-1].clientY  - downerField.getBoundingClientRect().top)*100/downerField.offsetHeight  - 6.5;
          if (newHeight > 87 - rightSiblings*13) newLeft = 87- rightSiblings*13 ;
          if (newHeight < leftSiblings*13) newHeight = leftSiblings*13;
          touched.style.top = newHeight + '%';
          moveSiblingsAbacusHorisontal(touched,newHeight);}
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
    }}
    upperField.ontouchstart = function (event){
      let touched = event.target;
      let rightSiblings;
      let leftSiblings;
      if (touched.className=="kost1Horisontal"){
         rightSiblings = countRightSiblings(touched);
         leftSiblings = countLeftSiblings(touched);
        document.addEventListener('touchmove', onMouseMove2);
        document.addEventListener('touchend', onMouseUp);
      }
      function onMouseMove2(event) {
        let newHeight = (event.changedTouches[event.changedTouches.length-1].clientY - upperField.getBoundingClientRect().top) * 100/upperField.offsetHeight - 6.5;
        if (newHeight >  87 - rightSiblings*13) newHeight = 87 - rightSiblings*13 ;
        if (newHeight < leftSiblings*13) newHeight = leftSiblings*13;
        touched.style.top = newHeight + '%';
           }
           function onMouseUp() {
               document.removeEventListener('mouseup', onMouseUp);
               document.removeEventListener('mousemove', onMouseMove2);
       }
    }
