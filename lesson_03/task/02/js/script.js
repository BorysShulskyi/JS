"use strict"

// Задача 1.  З клавіатури вводиться ціна товару і кількість грошей. <br>
//   Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.         </div>

//Вхідні дані :
const productPrice = parseFloat(prompt('Введіть ціну товару', ''))
const quantityMoney = parseFloat(prompt('Введіть кількість грошей', ''))
const lotteryPrice = 4

const remnantsMoney = quantityMoney - productPrice

if(remnantsMoney >= lotteryPrice)
{
const quantityLottery = Math.floor(remnantsMoney / lotteryPrice)
document.write(`<div class="title"> У вас вистачає коштів на товар і можете придбати ${quantityLottery} лотерей</div>`)
}
else
   if (quantityMoney >= productPrice)
         document.write(`<div class="title"> У вас вистачає коштів тільки на товар</div>`)
         else
         document.write(`<div class="title"> У вас не вистачає коштів  на товар</div>`)
  

