"use strict"

// Задача 6.   З клавіатури вводиться номер дня тижня. <br> 
//  Вивести на екран назву дня.

    // 1. Вводимо необхідні дані
   let weekday = parseInt(prompt('Введіть номер дня тижня'))
    // 2. Виводимо результат
   switch (weekday) {
      case 1:
      document.write(`<div class="title">Понеділок - це ${weekday} день тижня</div>`)
      break;
      case 2:
      document.write(`<div class="title">Вівторок - це ${weekday} день тижня</div>`)
      break;
      case 3:
      document.write(`<div class="title">Середа - це ${weekday} день тижня</div>`)
      break;
      case 4:
      document.write(`<div class="title">Четвер - це ${weekday} день тижня</div>`)
      break;
      case 5:
      document.write(`<div class="title">П'ятниця - це ${weekday} день тижня</div>`)
      break;
      case 6:
      document.write(`<div class="title">Субота - це ${weekday} день тижня</div>`)
      break;
      case 7:
      document.write(`<div class="title">Неділя - це ${weekday} день тижня</div>`)
      break;
      default:
      document.write('Введіть правильний номер дня тижня (від 1 до 7).')
      break;
   }