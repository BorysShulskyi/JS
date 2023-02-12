"use strict"

    // Задача 6. З клавіатури вводяться вартість товару 
    // та кількість одиниць 3 товарів.Обчислити вартість
    // кожного товару окремо та загальну вартість.Вивести
    // чек(як у супермаркеті) використовуючи елементи розмітки.

   let priceFirstProduct = parseFloat(prompt('Введіть вартісь першого продукта'))
   let quantityFirstProduct = parseInt(prompt('Введіть кількість першого продукта'))

   let priceSecondProduct = prompt('Введіть вартісь другого продукта')
   let quantitySecondProduct = prompt('Введіть кількість другого продукта')

   let priceThirdProduct = prompt('Введіть вартісь третього продукта')
   let quantityThirdProduct = prompt('Введіть кількість третього продукта')


   const tax = 0.05

   let totalPriceFirstProduct = priceFirstProduct * quantityFirstProduct
   let totalPriceFirstProductTax=totalPriceFirstProduct * tax
   
   let totalPriceSecondProduct = priceSecondProduct * quantitySecondProduct
   let totalPriceSecondProductTax=totalPriceSecondProduct * tax

   let totalPriceThirdProduct = priceThirdProduct * quantityThirdProduct
   let totalPriceThirdProductTax=totalPriceThirdProduct * tax

   let totalPriceProducts = totalPriceFirstProduct + totalPriceSecondProduct + totalPriceThirdProduct
   let totalPriceProductsTax=totalPriceFirstProductTax + totalPriceSecondProductTax + totalPriceThirdProductTax

   document.write(` Чек(як у супермаркеті)<br>******************<br><br><br>`)

document.write(` Назва першого продукта  <br>`)

document.write(`  Кількість      ${quantityFirstProduct} шт. <br>`)
document.write(`  Ціна     ${priceFirstProduct} грн <br>`)
document.write(`   Сума     ${totalPriceFirstProduct} грн <br>`)
document.write(`  ПДВ в т.ч.   ${totalPriceFirstProductTax.toFixed(2)} грн <br> *************** <br><br>`)

document.write(` Назва другого продукта  <br>`)
document.write(`  Кількість      ${quantitySecondProduct} шт. <br>`)
document.write(`  Ціна     ${priceSecondProduct} грн <br>`)
document.write(`   Сума     ${totalPriceSecondProduct} грн <br>`)
document.write(`  ПДВ в т.ч.   ${totalPriceSecondProductTax.toFixed(2)} грн <br> *************** <br><br>`)

document.write(` Назва третього продукта  <br>`)
document.write(`  Кількість      ${quantityThirdProduct} шт. <br>`)
document.write(`  Ціна     ${priceThirdProduct} грн <br>`)
document.write(`   Сума     ${totalPriceThirdProduct} грн <br>`)
document.write(`  ПДВ в т.ч.   ${totalPriceThirdProductTax.toFixed(2)} грн <br> *************** <br><br>`)

document.write(`Вартість всіх продуктів = ${totalPriceProducts.toFixed(2)} грн<br>`);
document.write(`  ПДВ в т.ч.   ${totalPriceProductsTax.toFixed(2)} грн <br>*************** <br> ДЯКУЄМО ЗА ПОКУПКУ!!!`)

