"use strict"

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

let yearBirth = parseInt(prompt(`Введіть рік народження: `, ``))
let thisYear = parseInt(2023);

const differenceYears = thisYear - yearBirth;


document.write(` Кількість років   ${differenceYears} `)
