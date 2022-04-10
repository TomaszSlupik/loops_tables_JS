// Pętla for

const food = ["🍌", "🧀", "🥗", "🍍", "🍨"];

for (let i = 0; i < food.length; i++) {
	console.log(food[i]);
}

const city = ["Warszawa", "Kraków", "Tarnów", "Gdańsk", "Szczecin"];
for (let i = 0; i < city.length; i++) {
	console.log(`To miasto nawzywa się: ${city[i].toUpperCase()}`);
}

// Pętla for of
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
	console.log(number * 2);
}

let small = ["jeden", "dwa", "trzy", "cztery", "pięć"];

for (big of small) {
	console.log(`${big}`.toUpperCase());
}

let seconds = [5, 8, 10, 23, 48, 60];

for (const second of seconds) {
	console.log(second / 5);
	if (second % 2 == 0) {
		console.log("%cLiczba parzysta", "background-color: lime; color: black;");
	} else {
		console.log(`%c Liczba nieparzysta`, "background-color: red; color: black");
	}
}

//  while
let x = 0;

while (x < 10) {
	x += 2;
	console.log(x);
}

//  do while

let y = 20;
console.log(`${y}`);
do {
	y = y - 2;
	console.log(`${y}`);
} while (y > 0);

// TABLICE

// Dodanie imienia do tablicy (na początku)
const first_name = ["Jan", "Tomasz", "Wiesław", "Florian"];
first_name.unshift("Piotr");
console.log(first_name);

// Usunięcie pierwszego
first_name.shift();
console.log(first_name);

// Dodanie elementu na koniec tablicy:

first_name.push("Max");
console.log(first_name);

// Usunięcie elementu z końca tablicy:
first_name.pop();
console.log(first_name);

// Metoda MAP

const numberS = [1, 2, 3, 4, 5, 6, 7, 8];

function multiply(x) {
	return x * 2;
}

const newnumberS = numberS.map(multiply);
console.log(numberS);
console.log(newnumberS);

// METODA CONCAT

const sport = ["⚽️", "🎱", "🏓", "🏸 "];

const game = ["🤾‍♀️", "⛹️‍♀️", "🏇"];

const sportgame = sport.concat(game);

console.log(sportgame);

// OPERATOR SPREAD

const abcde = ["a", "b", "c", "d", "e"];
console.log(...abcde);

const drinks = ["kawa", "pepsi", "monster"];
const meals = ["schabowy", "zupa", "deser"];
console.log(...drinks, ...meals);

// Zadanie slice i splice

const onetwo = [0, 0, 1, 1, 2, 2, 2];
const colors = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

const newonetwo = onetwo.slice(0, 2);
const nextonetwo = onetwo.slice(-3);

console.log(newonetwo);
console.log(nextonetwo);

const newcolors = colors.splice(0, 3);
console.log(newcolors);

const randomStuff = colors.splice(0, 2);
console.log(randomStuff);

const newcars = cars.splice(2, 4, "test");
console.log(cars);
console.log(newcars);

// Metoda filter

const numbers1 = [0, 25, 14, 2, 10, 20];

function number(numbers1) {
	return numbers1 % 2 == 0;
}

console.log(numbers1.filter(number));

function bigger(big) {
	return big > 15;
}
console.log(numbers1.filter(bigger));

// Metoda forEach

numbers1.forEach((check) => console.log(check * 4));

// Metoda includes
console.log(numbers1.includes(14));

// Metoda IndexOf

console.log(numbers1.indexOf(10));

// Metoda forEach vs Metoda Map

const numbertest = [14, 20, 30, 35, 50];

console.log(numbertest.forEach((x) => x * 2));
console.log(numbertest.map((x) => x * 2));

// Zadanie 1
const letters = ["c", "d"];
letters.unshift("a", "b");
letters.push("e", "f");

console.log(letters);
console.log(letters.includes("c"));

// Zadanie 2
const numertask2 = [1, 2, 3];
const foodtask2 = ["🍕", "🥪", "🥩"];

const newnumberfood = numertask2.concat(foodtask2);

console.log(newnumberfood);

// Zadanie 3

const numertask3 = [1, 5, 13, 26, 48];

let ynumbers = numertask3.map((y) => y * 5);

console.log(ynumbers);

for (let y of ynumbers) {
	if (y % 2 == 0) console.log(`Liczba parzysta: ${y}`);
	else {
		console.log(`Liczba nieparzysta: ${y}`);
	}
}

// Zadania 4

let colortask4 = ["czerwony"];
colortask4.unshift("żółty");
colortask4.push("niebieski");

for (let i = 0; i < colortask4.length; i++) {
	console.log(`Mój ulubiony kolor to: ${colortask4[i].toUpperCase()}`);
}

for (let i = 0; i < colortask4.length; i++) {
	console.log(
		`Mój ulubiony kolor to: ${colortask4[i][0].toUpperCase()}${colortask4[
			i
		].substr(1, 10)}`
	);
}

//  Zadanie 5

const cartask5 = "Audi,Mercedes,BMW,Nissan,Doge";
const tabletask5 = cartask5.split(",");
console.log(tabletask5);

if (tabletask5.length > 3) {
	console.log(`Jest OK`);
} else {
	console.log(`Nie jest OK`);
}

if (tabletask5.includes("Audi")) {
	tabletask5.push("Mazda");
} else {
	tabletask5.pop();
}
console.log(tabletask5);
