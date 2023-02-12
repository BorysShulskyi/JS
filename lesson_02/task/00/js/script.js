"use strict"

// Задача 0. Обчислити значення виразів 

// 1
let a = parseFloat(prompt(`Введіть значення змінної - a`, ``)) 
let b = parseFloat(prompt(`Введіть значення змінної - b`, ``))
let s1 = a + 12 + b

document.write(` Значення виразу 1 = ${s1} <br> `)

// 2
let s2 = Math.sqrt((a + b)/ (2 * a))
document.write(` Значення виразу 2 = ${s2} <br> `)

// 3
let c = parseFloat(prompt(`Введіть значення змінної - c`, ``))
let s3 = Math.cbrt((a + b)* c)
document.write(` Значення виразу 3 = ${s3} <br> `)

// 4
let s4 = Math.sin(a / -b)
document.write(`Значення виразу 4 = ${s4} `)