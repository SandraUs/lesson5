const myName = 'Александра';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен';
const reasonText = 'Нравится направление';
const numberOfMonth = '2';

const result = `${"Всем привет! Меня зовут"} ${myName} ${"Сейчас я изучаю язык программирования"} ${programmingLanguage} 
${"на курсе по"} ${programmingLanguage} ${"у"} ${courseCreatorName} ${"Я хочу стать веб-разработчиком, потому что"} ${reasonText}
${"До этого я изучал(а) programmingLanguage"} ${numberOfMonth} ${"месяцев(а). Я уверен(а), что пройду данный курс до конца!"}`;

console.log(result);

let myInfoText = result;
myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
console.log(myInfoText, myInfoText.length);
console.log(myInfoText[0], myInfoText[283-1]);

