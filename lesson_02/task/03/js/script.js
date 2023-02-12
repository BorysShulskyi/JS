"use strict"

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)

let quantityProduct = parseInt(prompt(`Введість кількість товару: `, ``))
let priceProduct = parseFloat(prompt(`Введіть ціну за одиницю товару: `, ``))
const tax = 0.05

let totalPrice = quantityProduct * priceProduct
let totalPriceTax = totalPrice * tax 

document.write(`Загальна вартість = ${totalPrice} <br/>`);
document.write(`ПДВ  = ${totalPriceTax.toFixed(2)} <br/>`);



  