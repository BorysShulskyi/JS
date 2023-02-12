"use strict"
// Задача 7. Знайти суму випадкового номера 
// місяця(від 1 до 12) та випадкового номера дня(від 0 до 6).

let maxMonth = 12
let minMonth = 1


let randomMount = minMonth + Math.floor(Math.random() * (maxMonth - minMonth +1))

let minDay = 0 
let maxDay = 6
let randomDay = minDay + Math.floor(Math.random() * (maxDay - minDay + 1))

let sumRandom = randomDay + randomMount

document.write(`Cумa випадкового номера місяця та випадкового номера дня  = ${sumRandom} `);
