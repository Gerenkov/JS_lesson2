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
function primeNumb(num) {
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

console.log(primeNumb(2000));