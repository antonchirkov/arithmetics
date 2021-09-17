function robMessageMenu(){
  let pointsToday=localStorage.getItem(userName+'todayDateSetted').split(',')[1];
  let message = [
    `Добро пожаловать в Ментальную Арифметику, ${userName}! Не пора ли приступить к игре?`,
    `Тобой сегодня набрано всего ${pointsToday} балл${pointsEnd()}. Попробуй поиграть еще, нужно повысить результат!`,
    `Неплохо! ${pointsToday} балл${pointsEnd()} за сегодня. Сыграй еще, возможно, установишь новый рекорд!`,
    `Поздравляю, ${userName}! Сегодня установлен новый рекорд и набрано в общем ${pointsToday} балл${pointsEnd()}! Но не стоит расслабляться, нужно пройти все!`
  ]
  messagePublic.innerHTML='';
  if (Number(localStorage.getItem(userName + 'todayDateSetted').split(',')[1])==0) {messageContent.innerHTML = message[0]; oneEyeMove(eye1,8900);}
  else if (localStorage.getItem(userName + 'todayDateSetted').split(',')[2]=='1') messageContent.innerHTML = message[3];
  else if (Number(localStorage.getItem(userName + 'todayDateSetted').split(',')[1]) < 100) messageContent.innerHTML = message[1];
  else {messageContent.innerHTML = message[2];}
  let string = messageContent.innerHTML;
  let time=100;
  let blink=time+randomInteger(1700,5000);
  let blinkdown=setTimeout(() =>{eye1.style.visibility='hidden'; eye2.style.visibility='hidden'}, blink);
  let blinkup=setTimeout(() =>{eye1.style.visibility='visible'; eye2.style.visibility='visible'}, blink+300);
  let timeouts=[];
  for (let char of string){
    timeouts[time/100-1] = setTimeout(() => {
    if(sessionStorage.getItem(localStorage.getItem('matematika-user-name'))=='menu')
    {
      messageContent.innerHTML=messageContent.innerHTML.slice(1, string.length);
      messagePublic.innerHTML=messagePublic.innerHTML+char;
      if (mouth.innerHTML=='−' && messageContent.innerHTML.length % 3 != 0 && messageContent.innerHTML.length % 2 != 0 && messageContent.innerHTML.length % 5 != 0 ) mouth.innerHTML='=';
      else {mouth.innerHTML='−'}
    }
      else {
        for (timeout of timeouts) clearTimeout(timeout);
        clearTimeout(blinkdown);
      }
    }, time);
    time=time+100;
  }
  let robEmotions=[];
  robEmotions[0]=setTimeout(() =>{
    if(sessionStorage.getItem(userName)=='menu' && (Number(pointsToday)>100||Number(pointsToday)==0)) mouth.innerHTML='◡';}, time+2000)
  robEmotions[1]=setTimeout(() =>{
    if(sessionStorage.getItem(localStorage.getItem('matematika-user-name'))=='menu') {eye1.style.textAlign='left'; eye2.style.textAlign='left'}
    else {clearTimeout(robEmotions[2]); clearTimeout(robEmotions[3]); clearTimeout(robEmotions[4]);}}, time+300);
  robEmotions[2]=setTimeout(() =>{
    if(sessionStorage.getItem(localStorage.getItem('matematika-user-name'))=='menu'){eye1.style.textAlign='center'; eye2.style.textAlign='center'}
    else {clearTimeout(robEmotions[3]); clearTimeout(robEmotions[4]);}}, time+700);
  robEmotions[3]=setTimeout(() =>{
    if(sessionStorage.getItem(localStorage.getItem('matematika-user-name'))=='menu'){eye1.style.visibility='hidden'; eye2.style.visibility='hidden'}
    else {clearTimeout(robEmotions[4])}}, time+2700);
  robEmotions[4]=setTimeout(() =>{if(sessionStorage.getItem(localStorage.getItem('matematika-user-name'))=='menu'){eye1.style.visibility='visible'; eye2.style.visibility='visible'}}, time+3000);
}
function robMessageQuest(messages){
  let time=100;
  let num = 0;
  for (message of messages)
  {
    let string = message;
    let blink=time+randomInteger(1000,3000);
    let blinkdown=setTimeout(() =>{eye1Quest.style.visibility='hidden'; eye2Quest.style.visibility='hidden'}, blink);
    let blinkup=setTimeout(() =>{eye1Quest.style.visibility='visible'; eye2Quest.style.visibility='visible'}, blink+300);
    let blink2 = time+randomInteger(4000,6000);
    let blinkdown2=setTimeout(() =>{eye1Quest.style.visibility='hidden'; eye2Quest.style.visibility='hidden'}, blink2);
    let blinkup2=setTimeout(() =>{eye1Quest.style.visibility='visible'; eye2Quest.style.visibility='visible'}, blink2+300);
    timeoutsMessage[num++]=setTimeout(() =>{ messagePublicQuest.innerHTML =""; messageContentQuest.innerHTML = string;}, time-100);
    for (let char of string){
      timeoutsMessage[num++] = setTimeout(() => {
            messagePublicQuest.innerHTML= messagePublicQuest.innerHTML+char;
            messageContentQuest.innerHTML=messageContentQuest.innerHTML.slice(1, string.length);
            if (mouthQuest.innerHTML=='−' && messageContentQuest.innerHTML.length % 3 != 0 && messageContentQuest.innerHTML.length % 2 != 0 && messageContentQuest.innerHTML.length % 5 != 0 ) mouthQuest.innerHTML='=';
            else {mouthQuest.innerHTML='−';}
          }, time);
    time=time+100;
  }
  let eyesLeft = setTimeout(() =>{
    if(sessionStorage.getItem(userName)=='quest' ) {eye1Quest.style.textAlign='left'; eye2Quest.style.textAlign='left'}
    else {clearTimeout(eyesCenter);}}, time+300);
  let eyesCenter=setTimeout(() =>{
      eye1Quest.style.textAlign='center'; eye2Quest.style.textAlign='center';
    }, time+700);
  let blinkEnd = setTimeout(() =>{
        if(sessionStorage.getItem(userName)=='quest'){eye1Quest.style.visibility='hidden'; eye2Quest.style.visibility='hidden'}
        else {clearTimeout(blinkUpEnd)}}, time+4300);
  let blinkUpEnd = setTimeout(() =>{eye1Quest.style.visibility='visible'; eye2Quest.style.visibility='visible'}, time+4600);
  let blink3=time+randomInteger(200,4000);
  let blinkEnd2 = setTimeout(() =>{
        if(sessionStorage.getItem(userName)=='quest'){eye1Quest.style.visibility='hidden'; eye2Quest.style.visibility='hidden'}
        else {clearTimeout(blinkUpEnd)}}, 4600+blink3);
  let blinkUpEnd2 = setTimeout(() =>{eye1Quest.style.visibility='visible'; eye2Quest.style.visibility='visible'}, 4850+blink3);
  time=time+string.length*150;
}
}
function oneEyeMove(eye, time){
  setTimeout(() =>{eye.style.textAlign='right'; setTimeout(() => eye.style.textAlign='center', 800);}, time);
}
function pointsEnd(){
  let pointsToday=localStorage.getItem(userName+'todayDateSetted').split(',')[1];
  let pointsTodayEnd=Number(pointsToday)%10;
  if (Number(pointsTodayEnd)>1 && Number(pointsTodayEnd)<5 && (Number(pointsToday) - Number(pointsTodayEnd) - 100)%10!=0 && Number(pointsToday) - Number(pointsTodayEnd)!=10) return "а";
  else if (pointsTodayEnd==1) return "";
  else {return "ов";}
}
