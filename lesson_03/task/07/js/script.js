"use strict"

// Задача 7.   З клавіатури вводиться номер місяця. 
//  Вивести до якої пори він відноситься.


    // 1. Вводимо необхідні дані
   let  numberMonth = parseInt(prompt('Введіть номер місяця (від 1 до 12)'))
    // 2. Виводимо результат
   switch (numberMonth) {
      case 12:
      case 1:
      case 2:
      document.write(`<div class="title"> ${numberMonth} місяць - пора року зима</div>`)
      break;
      case 3:
      case 4:
      case 5:
      document.write(`<div class="title"> ${numberMonth} місяць - пора року весна</div>`)
      break;
      case 6:
      case 7:
      case 8:
      document.write(`<div class="title"> ${numberMonth} місяць - пора року літо</div>`)
      break;
      case 9:
      case 10:
      case 10:
         document.write(`<div class="title"> ${numberMonth} місяць  - пора року осінь</div>`)
      break;

      default:
      document.write('Введіть правильний номер  місяця (від 1 до 12).')
      break;
   }


  