let userName = prompt('Как вас зовут?');
userName = userName.trim().toLowerCase();
alert(`${"Вас зовут"} ${userName}` );


let userAge = prompt("Сколько вам лет?");
userAge = Number(userAge.trim());
alert(`${"Вас зовут"} ${userName} ${"и вам"} ${userAge}`);