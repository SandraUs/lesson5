let userText = prompt("Введите текст");
userText = userText.trim();
let fragmentOfText = prompt("Введите слово из текста");
fragmentOfText = fragmentOfText.trim();

indexOfFragment = userText.indexOf(fragmentOfText);

console.log(indexOfFragment);

string = userText.substring(0, indexOfFragment);

alert(`${"Результат:"} ${string}`);