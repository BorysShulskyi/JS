"use strict"

// Задача 1.  З клавіатури вводиться ціна товару і кількість грошей. <br>
//   Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.         </div>

//Вхідні дані :
const productPrice = parseFloat(prompt('Введіть ціну товару', ''))
const quantityMoney = parseFloat(prompt('Введіть кількість грошей', ''))
const lotteryPrice = 4
var quantityLottery

//Вивід вхідних даних :
document.write(`Вхідні дані :<br>`)
document.write(`ціну товару ${productPrice}<br>`)
document.write(`кількість грошей ${quantityMoney} <br>`)

//remnantsMoney = quantityMoney - productPrice

//console.log('remnantsMoney');
quantityLottery = Math.floor((quantityMoney - productPrice) / lotteryPrice)


if((quantityMoney - productPrice) > lotteryPrice)
document.write(`<div class="title"> У вас вистачає коштів на товар і можете придбати ${quantityLottery} лотерей</div>`)
else
   switch (true) {
      case (quantityMoney - productPrice) <= productPrice:
         document.write(`<div class="title"> У вас вистачає коштів тільки на товар</div>`)
         break
   default:
   document.write(`<div class="title"> У вас не вистачає коштів  на товар</div>`)
   break

}



/*

switch (true) {
   case productPrice < quantityMoney:
      

   document.write (`<div class="title">Кількість цукерок є більшою  у ${nameFirstChild}</div>`)
   break

   default:
      document.write(`<div class="title"> Кількість цукерок є більшою  у ${nameSecondChild}</div>`)
      break
   }



if (quantityMoney % productPrice >= lotteryPrice)
document.write(`
<h3>У вас залишок коштів! Пропонуемо придбати лотерейний квиток за 4 грн.</h3>
`)
else
document.write(`
<h3>Дякуемо за покупку! Приходьте ще!</h3>
`)

      

      /*
      
    //1. Вводимо необхідні данні.
   
    //2. Знаходимо результат.
    if (productPrice > quantityMoney)
      document.write(`
      <h3>Вибачте! У вас не вистачае коштів</h3>
      `)
    else if (quantityMoney % productPrice >= lotteryPrice)
      document.write(`
      <h3>У вас залишок коштів! Пропонуемо придбати лотерейний квиток за 4 грн.</h3>
      `)
    else
      document.write(`
      <h3>Дякуемо за покупку! Приходьте ще!</h3>
      `)
  */