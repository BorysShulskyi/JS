"use strict"

// Задача 4.Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів

let length = parseFloat(prompt(`Введість довжину у СМ: `, ``))

let meters = length / 100
let kilometers = length / 100000

document.write(` Довжина у сантиметрах = ${length} см <br>`)
document.write(` Довжина у метрах = ${meters} м <br>`)
document.write(` Довжина у кілометрах = ${kilometers} км `)
