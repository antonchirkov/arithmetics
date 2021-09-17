let userName=localStorage.getItem('matematika-user-name');
let timeoutsMessage = [];
window.onload=function(){
if (localStorage.getItem('matematika-user-name')){
      contentInst.style.display="none";
      contentLogInn.style.display="none";
      switch (sessionStorage.getItem(localStorage.getItem('matematika-user-name'))) {
      case 'menu':
        setUpMenu();
        break;
      case 'abacus':
        abacus();
        break;
      case 'schetyGame':
        schetyGame();
        break;
      case 'mental':
        mental();
        break;
      case 'quest':
        quest();
        break;
      default:
        setUpMenu();
    }}
  else{
    container.style.display='flex';
    conpyright.style.display="block";
  }
}
function login(){
  if (logInnName.value == '') alert('Введи свое имя в игре');

  else {
  localStorage.setItem('matematika-user-name', logInnName.value);
  copyright.style.display='none';
  userName=localStorage.getItem('matematika-user-name');
  contentInst.style.display='none';
  contentLogInn.style.display='none';
  setUpMenu();
  }
}
function logOut(){
  sessionStorage.removeItem(localStorage.getItem('matematika-user-name'));
  copyright.style.display='block';
  localStorage.removeItem('matematika-user-name');
  userName=null;
  contentInst.style.display='block';
  contentLogInn.style.display='flex';
  contentGame.style.display='none';
  contentGameRecords.style.display='none';
  questContent.style.display='none';
}

function setUpMenu(){
  userName=localStorage.getItem('matematika-user-name');
  sessionStorage.setItem(userName, 'menu');
  let today = new Date();
  let todayDate = today.getDate().toString()+'.'+today.getMonth().toString()+'.'+today.getFullYear().toString();
  let lastPlay = localStorage.getItem(userName + 'lastPlay');
  let stepNumber = Number(localStorage.getItem(userName+"messageStep"));
  if(!lastPlay && !localStorage.getItem(userName + 'todayDateSetted')){
    localStorage.setItem(userName + 'lastPlay', '0,0,0');
    localStorage.setItem(userName + 'todayDateSetted', [todayDate, 0, 0]);
    questMessage.innerHTML='Новичок? Попробуй пройти квест!';
  }
  else if(lastPlay.split(',')[0]=='0'){
    if (localStorage.getItem(userName + 'todayDateSetted')=='0') questMessage.innerHTML='Ты новичок? Начни квест!';
    else {
      questMessage.innerHTML=(stepNumber<19)? `В квесте ты на первом уровне.`: (stepNumber<40 && stepNumber<64)? `В квесте ты на втором уровне.`:`В квесте ты на третьем уровне.`;
    }
    }
  else {
    if (localStorage.getItem(userName + 'todayDateSetted').split(',')[0] != todayDate){
      localStorage.setItem(userName + 'lastPlay', localStorage.getItem(userName + 'todayDateSetted'));
      localStorage.setItem(userName + 'todayDateSetted', [todayDate, 0, 0]);
    }
    questMessage.innerHTML=`Прошлая игра была ${localStorage.getItem(userName + 'lastPlay').split(',')[0]}, и в тот день набрано ${localStorage.getItem(userName + 'lastPlay').split(',')[1]} баллов. `;
    questMessage.innerHTML=(stepNumber<19)? questMessage.innerHTML+`В квесте ты на первом уровне.`: (stepNumber<40 && stepNumber<64)? questMessage.innerHTML+`В квесте ты на втором уровне.`: questMessage.innerHTML+`В квесте ты на третьем уровне.`;
}
  container.style.display='flex';
  contentGame.style.display='flex';
  questContent.style.display='flex';
  contentGameRecords.style.display='block';
  if (localStorage.getItem(userName+"recordSchetyEasy")) schetyEasy.innerHTML=localStorage.getItem(userName+"recordSchetyEasy");
  if (localStorage.getItem(userName+"recordSchetyMiddle")) schetyMiddle.innerHTML=localStorage.getItem(userName+"recordSchetyMiddle");
  if (localStorage.getItem(userName+"recordSchetyDifficult")) schetyDifficult.innerHTML=localStorage.getItem(userName+"recordSchetyDifficult");
  if (localStorage.getItem(userName+"recordAbacusEasy")) abacusEasy.innerHTML=localStorage.getItem(userName+"recordAbacusEasy");
  if (localStorage.getItem(userName+"recordAbacusMiddle")) abacusMiddle.innerHTML=localStorage.getItem(userName+"recordAbacusMiddle");
  if (localStorage.getItem(userName+"recordAbacusDifficult")) abacusDifficult.innerHTML=localStorage.getItem(userName+"recordAbacusDifficult");
  if (localStorage.getItem(userName+"recordMentalEasy")) mentalEasy.innerHTML=localStorage.getItem(userName+"recordMentalEasy");
  if (localStorage.getItem(userName+"recordMentalMiddle")) mentalMiddle.innerHTML=localStorage.getItem(userName+"recordMentalMiddle");
  if (localStorage.getItem(userName+"recordMentalDifficult")) mentalDifficult.innerHTML=localStorage.getItem(userName+"recordMentalDifficult");
  robMessageMenu();
}
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
