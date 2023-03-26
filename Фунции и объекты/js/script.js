// Задание 1
/* let arr = [1, 6, null, 8, undefined, 0, 11];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;

function getArraysOddAndEvenCount() {

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number" || !isNaN(arr[i])) {
			numbercount += 1;
			if (arr[i] === 0) {
				zerocount += 1;
			} else if (arr[i] % 2 === 0) {
				evencount += 1;
			} else {
				oddcount += 1;
			}
		}
	}
	console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных`);
}

getArraysOddAndEvenCount(); */

// Задание 2
/* function primeNumb(num) {
	if (!Number.isInteger(num) || num > 1000) return "данные неверны";
	if (num > 1) {
		for (let i = 2; i < num; i++) {
			if (num % i == 0) {
				return "Составное число";
			}
		}
		return "Простое число";
	} else {
		return "Число должно быть больше 1";
	}
}

console.log(primeNumb(5)); */

// Задание 3
/* function getSum(x) {
	return function (y) {
		return x + y;
	};
}

let iternalFunction = getSum(2);
console.log(iternalFunction(5)); */ //принимает число как аргумент и возвращает сумму этих двух чисел

// Задание 4
/* function numInterval(a, b) {
	let i = setInterval(function () {
		console.log(a++);
		if (a > b) clearInterval(i);
	}, 1000)
}

numInterval(5, 15); */

// Задание 5
// const pow = (x, n) => {
// 	return x ** n;
// }

// console.log(pow(6, 3));

// Задание 6
/* const valueRandom = {
	name: "Vitalii",
	num: 20,
	boolean: true,
	func: function () {
		console.log(2 + 2);
	}
};
valueRandom.address = 'Bratsk';
console.log(valueRandom);

delete valueRandom.num;
console.log(valueRandom);

console.log('num' in valueRandom);

for (let key in valueRandom) {
	console.log(valueRandom[key]);
} */
