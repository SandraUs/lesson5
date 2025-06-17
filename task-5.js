let userString = prompt("Введите текст для обрезки");
userString = userString.trim();

let startSliceIndex = prompt("Введите индекс, с которого нужно начать обрезку строки");
startSliceIndex = startSliceIndex.trim();

let endSliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки");
endSliceIndex = endSliceIndex.trim();

string = userString.slice(startSliceIndex, endSliceIndex);

alert(`${"Результат:"} ${string}`);
