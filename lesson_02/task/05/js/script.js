"use strict"

// Задача 5.Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин


let seconds = parseFloat(prompt(`Введіть кількість секунд що пройшла від початку доби : `, ``))
let minutes = seconds /60 
let hours = seconds/ 3600

document.write(`Значення в хвилинах = ${minutes.toFixed(2)} <br>`);
document.write(`Значення в годинах = ${hours.toFixed(2)} `);
