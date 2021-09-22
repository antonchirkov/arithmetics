function quest(){
  for (timeout of timeoutsMessage) clearTimeout(timeout);
  sessionStorage.setItem(userName, 'quest');
  container.style.display='none';
  questContainer.style.display='block';
  if (!localStorage.getItem(userName+"messageStep") || localStorage.getItem(userName+"messageStep")<0) localStorage.setItem(userName+"messageStep",0);
  let stepNumber = Number(localStorage.getItem(userName+"messageStep"));
  let level = Number(localStorage.getItem(userName+"messageStep")) < 19 ? 1 : Number(localStorage.getItem(userName+"messageStep") < 29) ? 2 : 3;
  continueQuest.style.display='none';
  let message = [
    `Приветствую в Ментальном Квесте, ${userName}! Меня зовут Роб и я робот-инструктор по Ментальной Арифметике. Более точно я - ИИ - Искусственный Интеллект.`,
    'О том, что такое ИИ, мы поговорим позже. Я здесь, чтобы помочь тебе разобраться в игре с самого начала. Для продвижения в Квесте используй кнопку "дальше" справа наверху. Нажимай!',
    'Сперва немного об Арифметике - это наука о числах, возникшая более 2000 лет назад в древней Греции. В основе этой науки лежат цифры.',
    `Сегодня люди используют систему счёта из десяти цифр от 0 до 9 - это называется Десятеричная Система Счисления. Возможно, ее популярность связана с количеством пальцев на руках. Но есть также и другие системы.`,
    "Для удобства счета часто используют пальцы рук. Для сложных вычислений люди придумали разные методы и устройства. Одно из самых простых таких устройств - это Русские Счеты.",
    "Это рама со спицами (разрядами), на которые надеты костяшки (единицы) - по десять на каждой спице. Чем выше спица, тем больше величина костяшки (с каждой больше в 10 раз). Время освоить этот инструмент!",
    'Отводи костяшки влево - cверху выводится получившееся число. Сначала набираются костяшки высшего разряда, потом разряда ниже.',
    'Заметь, что сумма всех костяшек на нижней спице равна одной костяшке на спице выше.',
    'Это свойство полезно при сложении и вычетании: когда разряд переполняется, нужно поменять его целиком на 1 костяшку выше.',
    'Поэксперементируй. Попробуй сложить и вычесть два числа, например 7+6 и 15-7. Потом жми "дальше" - предстоит игра!',
    'Сверху выводится число - нужно набрать его на счетах. Нужно набрать 30 чисел - это принесет тебе 30 очков!',
    `Ура! +30 очков! Жми "дальше" - к сложению на Cчетах, или используй "шаг назад" для повтора игры, чтобы набрать еще 30 очков.`,
    'Сверху выводится задание, ответ надо вычислить на счетах. Первыми складываются костяшки высшего разряда, затем следует разряд ниже.',
    'Помни про правило равного обмена всех костяшек ниже на одну костяшку выше!',
    'Еще +30 баллов! На очереди - вычитание на счетах. Жми "дальше"! ',
    'Используй правило обмена всего разряда на одну костяшку выше, как и при сложении, только в другую сторону. Вычетай сначала десятки, а потом единицы.',
    'Победа! +30 баллов и 1 уровень позади!',
    "Теперь ты владеешь счетами и можешь самостоятельно играть в игру Счеты. В нее можно войти из Меню. Можно лишь сделать пару заметок по поводу игры.",
    'Счеты обычно имеют 1 короткий разряд - спицу с 4 костяшками. Этот разряд, как и разряды ниже, нужны для чисел меньше 1. Целые числа, как 1, 2, 3 и больше идут со следующей по высоте спицы от "короткой".',
    'На простом и среднем уровнях игры в ходу только целые числа, короткий разряд и разряды ниже не участвуют, но их значения стоят после точки. Поэтому число 2 выглядит как 2.00. 11 как 11.00.',
    `Теперь мы, ${userName}, немного отойдем от устройств и займемся самими числами. На первом уровне я упомянул, что есть другие системы кроме десятеричной. Помнишь?`,
    'Например, индейцы Майя использовали Шестидесятеричную Систему Счисления, которая, как можно догадаться, состоит из 60 цифр. Моя же любимая - Двоичная Система, в ней всего 2 цифры: 1 и 0.',
    'В самом начале нашего знакомства я говорил, что я - Искусственный Интеллект - по сути я компьютерный код, состоящий из цифр 1 и 0. То есть выгляжу примерно так: 1 0 0 1 1 1 0 1 0 1 1 0 0...',
    'Я - куча единиц и нолей, огромное число в Двоичной Системе. Но есть система счисления еще проще Двоичной (или бинарной) - Единичная Система Счисления (или унарная). Да, это система из одной единственной цифры!',
    'Нетрудно догадаться, что эта цифра 1. В Унарной Системе число 5 будет выглядеть так: 11111. Когда ты считаешь на пальцах, ты, наверняка, используешь именно Унарную Систему!',
    'Унарная система используется, например, в игральных костях (кубиках). Кубик имеет 6 граней, на каждой грани точками обозначено число от 1 до 6. Сыграем?',
    'Разбей пример! Нужно написать цифрами ответ - сумму кубиков.',
    'Не так уж и сложно, не правда ли? Теперь ты немного умеешь играть в игру Ментал, в которую можно войти из Меню. Но нужно прорешать примеры посложнее со сложением и вычетанием.',
    'Нужно написать результат светящегося задания.',
    "Отлично! +30 баллов в кармане! Жми 'дальше'!",
    '',
    '',
    '',
    '',
    'Когда считают на пальцах, обычно используют Унарную Систему. ',
    'Это просто, но помогает досчитать только до 10. Но существуют методы, где можно получать результаты выше. Если использовать мою родную Двоичную Систему, то на 10 пальцах можно досчитать до... 1023!',
    'Давай разучим метод, который позволяет на пальцах рук досчитать до 99. Не так плохо для 10 пальцев!',
    'Допустим, что пальцы на правой руке - это единицы. Каждый палец значит 1, но кроме большого, - он имеет значение 5. Таким образом на пальцах правой руки ты сможешь досчитать до 9.',
    'По такому же принципу пальцы левой руки будут десятками.',
    'Все пальцы левой руки, кроме большого, значат 10, большой же имеет значение 50. Складывая пальцы обеих рук, ты получаешь любое число от 0 до 99. Попробуй сложить число 55 - это может порадовать.',
    'Поиграем!',
    'Я складываю пальцы, а ты пишешь получившееся число!',
    'Помни, что большой палец на единицах - это 5, а на десятках 50!',
    `Поздравляю, ${userName}! 2 Уровень пройден! Жми дальше, добро пожаловать на 3 уровень!`,
    'Игры в Пальцы нет в меню, но она довльно простая - и ты всегда можешь "прошагать" в Квесте, чтобы поиграть в нее еще.',
    'Система, которая используется в "палечном" методе, немного похожа на систему Абакуса (или Абака) - счетной доски, схожей со Счетами. Отличие Абакуса в том, что каждая спица-разряд разделена на две части.',
    'Костяшки левой части значат 1, костяшки правой - 5. Число набирается от краев к середине Абакуса.',
    'Костяшка каждого разряда-спицы в 10 раз больше стоящей ниже. Это касается и правой части разряда, где костяшка значит 5.',
    'Попробуй Абакус в работе! Сверху выводится набранное на нем значение. Костяшки сдвигаются от краев. Набирать следует от больших значений к меньшим.',
    '',
    'Заметь, что в отличие от Счет на нижнем разряде Абакуса можно досчитать только до 9.',
    'Поэтому при замене целого разряда на одну костяшку разряда выше нужно это учитывать. Можно назвать это правилом "+1".',
    'Если нужно сложить: 8+4, сперва набираешь 8, потом добавляешь 1 костяшку, нижний разряд переполняется.',
    'Плюсуешь в уме 1 к уже набранному числу (1), заменяя весь разряд на костяшку разряда выше. Добавляешь оставшиеся +2 костяшки, и получаешь ответ 12.',
    'То же самое правило +1 действует, когда мы переходим от левой части разряда к правой. Например, нужно сложить 3+2. ',
    'Добавляешь к 3 одну костяшку, меняешь всю левую часть на костяшку справа, при этом в уме прибавляешь 1 к уже добавленной единице. Получаешь ответ 5.',
    'Попробуй набрать выпавшее число на Абакусе. Помни, что нижняя костяшка справа - это 5, а верхняя костяшка справа - 50.',
    'Отлично! +30 очков на третьем уровне! Вперед к сложению на Абакусе!',
    'Сверху выводится пример - нужно его решить на Абакусе. Помни правило "+1"!',
    '"+1": при замене всего разряда (или части) на костяшку следующего прибавляешь значение костяшки заменяемого разряда (части) к уже добавленному числу.',
    'Еще +30 очков! Ты в одном шаге от прохождения всего Квеста! Жми дальше и пройди вычитание на Абакусе!',
    'Нужно решить примеры. При вычетании обмен разрядов и частей на костяшку происходит в другую сторону, но правило "+1" действует также.',
    'При обмене всего разряда (части) на костяшку нужно одновременно прибавлять значение костяшки заменяемого разряда (части) к уже отнятому числу.',
    '',
    '',
    '',
    `Ура! Весь квест пройден! Теперь, ${userName}, ты - Абакист! Так называют пользователей Абакуса.`,
    'Можно добавить, что обычно реальный Абак кладут горизонтально, справа низкие разряды, слева - высокие. При этом "пятерки" находятся сверху. В игре Абакус инструмент можно перевернуть.',
    'Ты также владеешь теорией и всеми инструментами Ментальной Арифметики - и можешь ставить рекорды во всех играх, доступных в Меню. Но сперва я покажу тебе мультик.',
    'Ха-ха - про мультик это шутка. Да и по сути я Роб - сам по себе один большой (или небольшой) мультик. Но раскрою тебе одну свою особенность, которая может вполне сгодиться за мультик.',
    'Как ты наверняка помнишь, я являюсь Искусственным Интеллектом - программой, состоящей из единиц и нолей. А любая программа может "глючить" - и я не исключение.',
    'Например, на каждом шаге Квеста я даю тебе определенную запрограммированную информацию. Но если ты быстро перескакиваешь от одного шага к другому, то я сбиваюсь и это отражается также на моем лице.',
    'Поэтому если ты несколько раз нажмешь быстро "шаг назад" - это меня может сильно смутить.',
    'Удачи!',
  ]
  borderQuest.style.display = stepNumber>3 && stepNumber<17 ? 'flex': 'none';
  mentalGame.style.display=stepNumber>25  && stepNumber<33 ? 'block': 'none';
  mentalButtonsQuest.style.display=(stepNumber==26 || stepNumber==30)? 'block': 'none';
  mentalButtons.style.display=(stepNumber>25 && stepNumber<39)? 'none': 'block';
  robContainer.style.bottom= stepNumber==40 ? '31vmin': '5vh';
  robContainer.style.right= stepNumber==40 ? '10vmin': '1vmin';
  mentalButtonsQuestFingers.style.display= stepNumber == 40 ? 'block': 'none';
  abacusQuest.style.display=(stepNumber>45 && stepNumber<67) ? 'flex':'none';
  stepNumber==40 ? setTimeout(() =>{if(Number(localStorage.getItem(userName+"messageStep"))==40)questContainer.querySelectorAll('.fingers').forEach(element => {element.style.display = 'block';})}, 500) : questContainer.querySelectorAll('.fingers').forEach(element => {element.style.display = 'none';});
  if (stepNumber>40 && stepNumber<48 || stepNumber>64) levelCenter.innerHTML='Квест-3';
  if (stepNumber<5) levelCenter.innerHTML='Квест-1';
  if (stepNumber<5 && stepNumber>1) {fall();}
  if (stepNumber>48 && stepNumber<56) playerAbacusQuest(0);
  stepBack.style.display = stepNumber > 0 ? 'inline-flex' : 'none';
  robContainer.querySelector(".robotMessage").style.marginBottom = stepNumber == 40 ? '17px': '5px';
  if (stepNumber==0) oneEyeMove(eye1Quest, 16500);
  switch (stepNumber) {
    case 6: //Счеты Демо
    robMessageQuest([message[6], message[7], message[8], message[9]]);
    schetyDemo();
    setTimeout(() =>mouthQuest.innerHTML='◡', message[6].length*100 + 3700);
    buttonactive = setTimeout(() =>{
      continueQuest.style.display='inline-flex';
    }, message[6].length*250 + message[7].length*250+message[8].length*250+message[9].length*100)
      break;
    case 8: //Счеты число
    robMessageQuest([message[10]]);
    playerSchetyDemo(0);
    break;
    case 10:
    levelCenter.innerHTML='Квест-1';
    robMessageQuest([message[11]]);
    continueQuest.style.display='inline-flex';
    break;
    case 12: // Счеты +
    robMessageQuest([message[12], message[13]]);
    playerSchetyDemo(0);
    break;
    case 14:
    robMessageQuest([message[14]]);
    levelCenter.innerHTML = `Квест-1`;
    buttonactive = setTimeout(() =>continueQuest.style.display='inline', message[14].length*100);
    break;
    case 16: // Счеты -
    robMessageQuest([message[15]]);
    playerSchetyDemo(0);
    break;
    case 18:
    robMessageQuest([message[16], message[17], message[18], message[19]]);
    buttonactive = setTimeout(() =>{
      continueQuest.style.display='inline-flex';
    }, message[16].length*100+15000 + message[17].length*150+message[18].length*150+message[19].length*150);
    levelCenter.innerHTML = `Квест-2`;
    break;
    case 24:
    robMessageQuest([message[24], message[25]]);
    removeEventListener('keydown', checkCifferQuest);
    buttonactive = setTimeout(() =>continueQuest.style.display='inline-flex', message[24].length*250 + message[25].length*100 - 1000);
    break;
    case 26: // Ментальный квест - кубики
    robMessageQuest([message[26]]);
    addEventListener('keydown', checkCifferQuest);
    playerMentalQuest(0);
    break;
    case 28:
    removeEventListener('keydown', checkCifferQuest);
    robMessageQuest([message[27]]);
    levelCenter.innerHTML = `Квест-2`;
    continueQuest.style.display='inline-flex';
    taskMental.innerHTML='+30 Очков!';
    break;
    case 30:   // Ментальный Квест Сложение-вычетание
    robMessageQuest([message[28]]);
    addEventListener('keydown', checkCifferQuest);
    playerMentalQuest(0);
    break;
    case 32:
    removeEventListener('keydown', checkCifferQuest);
    mentalButtonsQuest.style.display='none';
    robMessageQuest([message[29]]);
    continueQuest.style.display='inline-flex';
    levelCenter.innerHTML = `Квест-2`;
    break;
    case 40:  // Ментальный Квест Пальцы
    addEventListener('keydown', checkCifferQuest);
    robMessageQuest([message[40], message[41], message[42]]);
    playerFingers(0);
    levelCenter.innerHTML = `Квест-2`;
    break;
    case 42:
    removeEventListener('keydown', checkCifferQuest);
    robMessageQuest([message[43]]);
    continueQuest.style.display='inline-flex';
    levelCenter.innerHTML = `Квест-3`;
    break;
    case 48:
    robMessageQuest([message[48]]);
    continueQuest.style.display='inline-flex';
    playerAbacusQuest(0);
    break;
    case 56:
    robMessageQuest([message[56]]);
    playerAbacusQuest(0);
    break;
    case 58:
    robMessageQuest([message[57]]);
    continueQuest.style.display='inline-flex';
    levelCenter.innerHTML = `Квест-3`;
    break;
    case 60:
    robMessageQuest([message[58], message[59]]);
    playerAbacusQuest(0);
    break;
    case 62:
    robMessageQuest([message[60]]);
    continueQuest.style.display='inline-flex';
    levelCenter.innerHTML = `Квест-3`;
    break;
    case 64:
    robMessageQuest([message[61], message[62]]);
    playerAbacusQuest(0);
    break;
    default:
    robMessageQuest([message[stepNumber], message[stepNumber+1]]);
    smileTimeout = setTimeout(() =>mouthQuest.innerHTML='◡', message[stepNumber].length*100 + 3700);
    buttonactive = setTimeout(() =>continueQuest.style.display='inline-flex', message[stepNumber].length*250 + message[stepNumber+1].length*100 - 1000);
    eyeUpTimeout = setTimeout(() =>{eye1Quest.style.lineHeight='10px'; eye2Quest.style.lineHeight='10px';}, message[stepNumber].length*250+2500 + message[stepNumber+1].length*100);
    eyeMiddleTimeout = setTimeout(() =>{eye1Quest.style.lineHeight='16px'; eye2Quest.style.lineHeight='16px';}, message[stepNumber].length*250+3500 + message[stepNumber+1].length*100);
  }
}
function fall(){
  let ciffer = document.createElement('div');
ciffer.className='falling';
ciffer.style.left=randomInteger(0,100);
ciffer.innerHTML=randomInteger(0,9);
  questContainer.append(ciffer);
  if (Number(localStorage.getItem(userName+"messageStep"))<5) setTimeout(fall, 300);
}
function questNextStep(){
  localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))+2);
  quest();
}
function questStepBack(){
  if (typeof buttonactive!=='undefined') {clearTimeout(buttonactive);}
  localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))-2);
  quest();
}
function goToMenuQuest(){
  removeEventListener('keydown', checkCifferQuest);

  questContainer.style.display='none';
  mentalGame.style.display='none';
  mentalButtons.style.display='block';
  setUpMenu();
}
function checkCifferQuest(event){
  let key = event.key;
  if (Number(localStorage.getItem(userName+"messageStep"))==40)
  {
    if((key=='1'||key== '2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9'||key=='0') && answeredQuestFingers.innerHTML.length<9) answeredQuestFingers.innerHTML= answeredQuestFingers.innerHTML+key;
    else if(key=='Backspace')answeredQuestFingers.innerHTML= answeredQuestFingers.innerHTML.slice(0, answeredQuestFingers.innerHTML.length-1);
    else if(key=='Delete')answeredQuestFingers.innerHTML= '';
  }
  else
{  if((key=='1'||key== '2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9'||key=='0') && answeredQuest.innerHTML.length<9) answeredQuest.innerHTML= answeredQuest.innerHTML+key;
  else if(key=='Backspace')answeredQuest.innerHTML= answeredQuest.innerHTML.slice(0, answeredQuest.innerHTML.length-1);
  else if(key=='Delete')answeredQuest.innerHTML= '';}
}
function playerFingers(points){
  let step = Number(localStorage.getItem(userName+"messageStep"));
  if(points>3){
    for (timeout of timeoutsMessage) clearTimeout(timeout);
    let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
    newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + 10;
    localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
    localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))+2)
    quest();
    return;
  }
  finger1.style.display='none';
  finger2.style.display='none';
  finger3.style.display='none';
  finger4.style.display='none';
  finger5.style.display='none';
  finger10.style.display='none';
  finger20.style.display='none';
  finger30.style.display='none';
  finger40.style.display='none';
  finger50.style.display='none';
  let answer = randomInteger(1,99);
  console.log(answer);
  let ones = answer%10;
  let tens=(answer-ones)/10;
  let oneFingers;
  let tenFingers;
  if(ones>=5){
    finger5.style.display='inline';
    oneFingers=ones-5;
  }
  else{
    oneFingers=ones;
  }
  if(tens>=5){
      finger50.style.display = 'inline';
      tenFingers=tens-5;
  }
  else{
    tenFingers=tens;
  }
  switch (oneFingers) {
    case 4:
    finger4.style.display='inline';
    case 3:
    finger3.style.display='inline';
    case 2:
    finger2.style.display='inline';
    case 1:
    finger1.style.display='inline';
    break;
    default:
  }
  switch (tenFingers) {
    case 4:
    finger40.style.display='inline';
    case 3:
    finger30.style.display='inline';
    case 2:
    finger20.style.display='inline';
    case 1:
    finger10.style.display='inline';
    break;
    default:
    }
    compare();
    function compare(){
      console.log('x');
      if (step != Number(localStorage.getItem(userName+"messageStep")) || sessionStorage.getItem(userName)!='quest') return;
      let timer=setTimeout(compare,500);
      if (answeredQuestFingers.innerHTML==answer){
        clearTimeout(timer);
        answeredQuestFingers.innerHTML='';
        sound(440, 1);
        animationField.style.display='block';
        animationField.innerHTML= answer;
        animation('animationField', 100, 1000);
        finger1.style.display='none';
        finger2.style.display='none';
        finger3.style.display='none';
        finger4.style.display='none';
        finger5.style.display='none';
        finger10.style.display='none';
        finger20.style.display='none';
        finger30.style.display='none';
        finger40.style.display='none';
        finger50.style.display='none';
        points++;
        setTimeout(playerFingers,1000,points);
        }
      }
  }
function schetyDemo(){
      // Игра
  let step = Number(localStorage.getItem(userName+"messageStep"));
  if (step==6) {
    let timer = setTimeout(schetyDemo, 200);
    levelCenter.innerHTML = calculateSchetyQuest();
  }
  else{return;}
}
function playerSchetyDemo(points){
  let rightAnswer = randomInteger(1, 100);
  let step=Number(localStorage.getItem(userName+"messageStep"));
  step==8 ? levelCenter.innerHTML=rightAnswer  : rightAnswer=setTaskSchetyDemo(step)
  console.log(rightAnswer);
  compare();
  function compare()
  {
      if (step != Number(localStorage.getItem(userName+"messageStep")) || sessionStorage.getItem(userName)!='quest') return;
      if (points > 2){
        for (timeout of timeoutsMessage) clearTimeout(timeout);
        let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
        newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + 30;
        localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
        localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))+2)
        quest();
        return;
      }
      console.log('x');
      let timer = setTimeout(compare,1000);
      let answer = calculateSchetyQuest();
      if (rightAnswer == answer) {
        clearTimeout(timer);
        sound(440, 1);
        animationField.style.display='block';
        animationField.innerHTML=Number(localStorage.getItem(userName+"messageStep"))==8 ? '+1': rightAnswer;
        animation('animationField', 100, 1000);
        points++;
        playerSchetyDemo(points);
        return;
      }
}}
function setTaskSchetyDemo(step){
      let number1 = randomInteger(2, 50);
      let rightAnswer;
      let symbol;
      let number2;
      if (step == 16)
      {
            symbol = "-";
            number2 = randomInteger(1, number1-1);
            rightAnswer = number1 - number2;
      }
      else if (step == 12) {
            symbol = "+";
            number2 = randomInteger(1, 50);
            rightAnswer = number1 + number2;
      }
      levelCenter.innerHTML=`${number1} ${symbol} ${number2}`;
      return rightAnswer;
}
function moveSiblingsSchetyQuest (touched, newLeft)
{
      //  Правый сосед
      let that = touched;
      let sibling = touched.nextElementSibling;
      let moving = newLeft;
      while (sibling && that.getBoundingClientRect().left/schetyQuest.offsetWidth* 100>= sibling.getBoundingClientRect().left/schetyQuest.offsetWidth * 100- 5)
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
      while (sibling && that.getBoundingClientRect().left/schetyQuest.offsetWidth*100<= sibling.getBoundingClientRect().left/schetyQuest.offsetWidth * 100+ 5)
          {
              sibling.style.left = moving - 5 + '%';
              that = sibling;
              sibling = sibling.previousElementSibling;
              moving = moving - 5;
          }
  }
// Десктоп/Ноут
schetyQuest.onmousedown = function (event){
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
    let newLeft = (event.clientX - schetyQuest.getBoundingClientRect().left)*100/schetyQuest.offsetWidth - 2.5;
    // Положение костяшки в конце и начале поля
    if (newLeft >= 95 - rightSiblings*5) newLeft = 95 - rightSiblings*5;
    else if (newLeft <= leftSiblings*5) newLeft = leftSiblings*5;
    touched.style.left = newLeft + '%';
    moveSiblingsSchetyQuest(touched, newLeft);
}
function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
}}
// Тач-девайс
schetyQuest.ontouchstart = function (event){
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
    let newLeft = event.changedTouches[event.changedTouches.length-1].pageX/schetyQuest.offsetWidth * 100 - schetyQuest.getBoundingClientRect().left/schetyQuest.offsetWidth * 100 - 2.5;
    // Положение костяшки в конце и начале поля
    if (newLeft <= leftSiblings*5) newLeft = leftSiblings*5;
    else if (newLeft >= 100 - rightSiblings*5 - 5) newLeft = 100 - rightSiblings*5 - 5;
    touched.style.left = newLeft + '%';
   moveSiblingsSchetyQuest(touched, newLeft);
}
  function onMouseUp() {
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
  }
}
// Высчитываются число на счетах
function calculateSchetyQuest(){
    let spokes = schetyQuest.querySelectorAll(".spica");
    let j = 100;
    let answer=0;
    for (spoke of spokes){
        bones = spoke.querySelectorAll(".kost");
        for (bone of bones){
            if (bone.getBoundingClientRect().left - schetyQuest.getBoundingClientRect().left < schetyQuest.offsetWidth/2-bone.offsetWidth/1.5) answer = answer+j;
        }
        if(bones.length != 4) j = j / 10;
    }
    return answer;
}
function playerMentalQuest(points){
    rightAnswer = setTaskMentalQuest();
    let answer = 0;
    step = Number(localStorage.getItem(userName+"messageStep"));
    compare();
    function compare()
    {
      console.log(points);
      if (step != Number(localStorage.getItem(userName+"messageStep")) || sessionStorage.getItem(userName)!='quest') return;
        let timer = setTimeout(compare,300);
        let answer = answeredQuest.innerHTML;
          if (rightAnswer == answer) {
            points++;
            explode();
            answeredQuest.innerHTML='';
            clearTimeout(timer);
            if (points == 1 && Number(localStorage.getItem(userName+"messageStep"))==26) {
              for (timeout of timeoutsMessage) clearTimeout(timeout);
              robMessageQuest(["Ага!", "Хорошо бомбануло!", "Нужно разбить 10 примеров, чтобы пройти дальше."]);}
              playerMentalQuest(points);
          }
          else if (points > 2){
            for (timeout of timeoutsMessage) clearTimeout(timeout);
            clearTimeout(timer);
            taskMental.innerHTML="Победа!";
            smileTimeout = setTimeout(() =>mouthQuest.innerHTML='◡', 2600);
            continueQuest.style.display='inline-flex';
            let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
            newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + 10;
            localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
            localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))+2)
            quest();
            return;
            }
    }
  }
function setTaskMentalQuest(){
  if (Number(localStorage.getItem(userName+"messageStep"))==26)
      {
        let cubes = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;","&#9861;"]
        let number1 = randomInteger(1, 6);
        let number2 = randomInteger(1, 6);
        let number3 = randomInteger(1, 6);
        let rightAnswer = number1 + number2+number3;
        taskMental.innerHTML=`${cubes[number1-1]} + ${cubes[number2-1]} + ${cubes[number3-1]}`;
        setTimeout(fillInTextQuest,500);
        return rightAnswer;
    }

    if (Number(localStorage.getItem(userName+"messageStep"))==30)
    {
      let number1 = randomInteger(2, 50);
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
            number2 = randomInteger(1, 50);
            rightAnswer = number1 + number2;
      }
        taskMental.innerHTML=`${number1} ${operator} ${number2}`;
        setTimeout(fillInTextQuest,500);
        return rightAnswer;
    }
}
function fillInTextQuest(){
  ui.querySelectorAll('.text').forEach(element => {element.innerHTML=taskMental.innerHTML;});
}
leftFieldQuest.onmousedown = function (event){
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
            let newLeft =(event.pageX- leftFieldQuest.getBoundingClientRect().left)*100/leftFieldQuest.offsetWidth - 6.5;
            if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
            else if (newLeft >= 87 - rightSiblings*13) newLeft = 87 - rightSiblings*13;
            touched.style.left = newLeft + '%';
            // Передвижение соседних костяшек
           //  Правый сосед
           let that = touched;
           let sibling = touched.nextElementSibling;
           let moving = newLeft;
           while (sibling && that.getBoundingClientRect().left >= sibling.getBoundingClientRect().left- 0.13*leftFieldQuest.offsetWidth )
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
           while (sibling && that.getBoundingClientRect().left <= sibling.getBoundingClientRect().left + 0.13*leftFieldQuest.offsetWidth)
               {
                   sibling.style.left = moving - 13 + '%';
                   that = sibling;
                   sibling = sibling.previousElementSibling;
                   moving = moving - 13;
               }  }
          function onMouseUp() {
              document.removeEventListener('mouseup', onMouseUp);
              document.removeEventListener('mousemove', onMouseMove);
      }}
rightFieldQuest.onmousedown = function (event){
    let touched = event.target;
    if (touched.className=="kost2"){
          document.addEventListener('mouseup', onMouseUp);
          document.addEventListener('mousemove', onMouseMove2);
        }
        function onMouseMove2(event) {
          let newLeft = (event.pageX - rightFieldQuest.getBoundingClientRect().left)*100/rightFieldQuest.offsetWidth - 17;
          if (newLeft <= 0) newLeft = 0;
          else if (newLeft >= 66) newLeft = 66;
          touched.style.left = newLeft + '%';
             }
          function onMouseUp() {
                 document.removeEventListener('mouseup', onMouseUp);
                 document.removeEventListener('mousemove', onMouseMove2);
         }
      }
// Тач-девайсы
leftFieldQuest.ontouchstart = function (event){
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
      let newLeft = (event.changedTouches[event.changedTouches.length-1].pageX- leftFieldQuest.getBoundingClientRect().left)*100/leftFieldQuest.clientWidth - 6.5;
      if (newLeft > 87 - rightSiblings*13) newLeft = 87 - rightSiblings*13;
      if (newLeft < leftSiblings*13) newLeft = leftSiblings*13;
      touched.style.left = newLeft + '%';
       // Передвижение соседних костяшек
      //  Правый сосед
      let that = touched;
      let sibling = touched.nextElementSibling;
      let moving = newLeft;
      while (sibling && that.getBoundingClientRect().left>= sibling.getBoundingClientRect().left - 0.13*leftFieldQuest.clientWidth)
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
      while (sibling && that.getBoundingClientRect().left <= sibling.getBoundingClientRect().left + 0.13*leftFieldQuest.clientWidth )
          {
              sibling.style.left = moving - 13 + '%';
              that = sibling;
              sibling = sibling.previousElementSibling;
              moving = moving - 13;
          }  }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
}}
rightFieldQuest.ontouchstart = function (event){
if (touched.className=="kost2"){
    document.addEventListener('touchmove', onMouseMove2);
    document.addEventListener('touchend', onMouseUp);
}
function onMouseMove2(event) {
  let newLeft = (event.changedTouches[event.changedTouches.length-1].clientX- rightFieldQuest.getBoundingClientRect().left)*100/rightField.clientWidth - 6.5;
  if (newLeft >= 87- rightSiblings*13) newLeft = 87- rightSiblings*13;
  else if (newLeft <= leftSiblings*13) newLeft = leftSiblings*13;
  touched.style.left = newLeft + '%';
}}
function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove2);
}
function playerAbacusQuest(points){
  let step=Number(localStorage.getItem(userName+"messageStep"));
  let rightAnswer = step<56? -1 : step==56? randomInteger(1,99) : setTaskAbacusQuest();
  if(step==56) levelCenter.innerHTML=rightAnswer;
  compare();
  function compare(){
    rightAnswer;
    let changedStep = Number(localStorage.getItem(userName+"messageStep"));
    console.log('x');
    if (step != changedStep && changedStep < 59 || sessionStorage.getItem(userName)!='quest') return;
    let answer = calculateAbacusQuest();
    let timer=setTimeout(compare,300);
    if(step<55){
      levelCenter.innerHTML=answer;
    }
    else if(answer == rightAnswer){
      clearTimeout(timer);
      sound(440, 1);
      points++;
      animationField.style.display='block';
      animationField.innerHTML=Number(localStorage.getItem(userName+"messageStep"))==56 ? '+1': rightAnswer;
      animation('animationField', 100, 1000);
      if (points == 1 && Number(localStorage.getItem(userName+"messageStep"))==56) {
        for (timeout of timeoutsMessage) clearTimeout(timeout);
        robMessageQuest(["Хорошо! Но нужно решить 30 примеров, чтобы пройти дальше."], userName);
      }
      playerAbacusQuest(points);
      return;
    }
    else if (points>2){
      for (timeout of timeoutsMessage) clearTimeout(timeout);
      clearTimeout(timer);
      let newTodayDateSetted =localStorage.getItem(userName + 'todayDateSetted').split(',');
      newTodayDateSetted[1]=Number(newTodayDateSetted[1]) + 10;
      localStorage.setItem(userName + 'todayDateSetted', newTodayDateSetted);
      localStorage.setItem(userName+"messageStep", Number(localStorage.getItem(userName+"messageStep"))+2)
      quest();
      return
    }
  }
}
function calculateAbacusQuest(){
    let spokesAbacus = leftFieldQuest.querySelectorAll(".spica1");
    let j = 10;
    let answer=0;
    for (spoke of spokesAbacus){
        let bonesAbacus = spoke.querySelectorAll(".kost1");
        for (boneAbacus of bonesAbacus){
            if (boneAbacus.getBoundingClientRect().left - leftFieldQuest.getBoundingClientRect().left > leftFieldQuest.offsetWidth/2-boneAbacus.offsetWidth/2) answer = answer+j;
        }
       j = j / 10;
    }
    spokesAbacus = rightFieldQuest.querySelectorAll(".spica2");
    j = 50;
    for (spoke of spokesAbacus){
        let boneAbacus= spoke.querySelector(".kost2");
        if (boneAbacus.getBoundingClientRect().left - rightFieldQuest.getBoundingClientRect().left < rightFieldQuest.offsetWidth/2 - boneAbacus.offsetWidth/2) answer = answer+j;
        j = j / 10;
    }
    return answer;
}
function setTaskAbacusQuest(){
        // Легкий уровень
        let number1 = randomInteger(2, 50);
        if (Number(localStorage.getItem(userName+"messageStep"))==64)
        {
              let number2 = randomInteger(1, number1-1);;
              let rightAnswer = number1 - number2;
              levelCenter.innerHTML=`${number1} - ${number2}`;
              return rightAnswer;
        }
        else {
              let number2 = randomInteger(1, 49);
              let rightAnswer = number1 + number2;
              levelCenter.innerHTML=`${number1} + ${number2}`;
              return rightAnswer;
        }
}
