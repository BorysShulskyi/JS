"use strict"

// Задача 7.   З клавіатури вводиться номер місяця. 
//  Вивести до якої пори він відноситься.


    // 1. Вводимо необхідні дані
   let  numberMonth = parseInt(prompt('Введіть номер місяця (від 1 до 12)'))
    // 2. Виводимо результат
   switch (numberMonth) {
      case 1:
      document.write(`<div class="title"> ${numberMonth} місяць січень - пора року зима</div>`)
      break;
      case 2:
      document.write(`<div class="title"> ${numberMonth} місяць лютий - пора року зима</div>`)
      break;
      case 3:
      document.write(`<div class="title"> ${numberMonth} місяць березень - пора року весна</div>`)
      break;
      case 4:
      document.write(`<div class="title"> ${numberMonth} місяць квітень - пора року весна</div>`)
      break;
      case 5:
      document.write(`<div class="title"> ${numberMonth} місяць травень - пора року весна</div>`)
      break;
      case 6:
      document.write(`<div class="title"> ${numberMonth} місяць червень - пора року літо</div>`)
      break;
      case 7:
      document.write(`<div class="title"> ${numberMonth} місяць липень - пора року літо</div>`)
      break;
      case 1:
      document.write(`<div class="title"> ${numberMonth} місяць серпень - пора року літо</div>`)
      break;
      case 1:
         document.write(`<div class="title"> ${numberMonth} місяць вересень - пора року осінь</div>`)
      break;
      case 1:
         document.write(`<div class="title"> ${numberMonth} місяць жовтень - пора року осінь</div>`)
      break;
      case 1:
         document.write(`<div class="title"> ${numberMonth} місяць листопад - пора року осінь</div>`)
      break;
      case 12:
      document.write(`<div class="title"> ${numberMonth} місяць грудень - пора року зима</div>`)
      break;
      default:
      document.write('Введіть правильний номер номер місяця (від 1 до 12).')
      break;
   }
