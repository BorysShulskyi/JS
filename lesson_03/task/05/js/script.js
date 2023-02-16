"use strict"

// Задача 1.   З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
//   Вивести на екран назву транспортного засобу, яким він може керувати.

    // 1. Вводимо необхідні дані 
      let driverCategories = prompt('Введіть назва категорії водія (А, В, С)', 'C')

    // 2. Виводимо результат
      switch (driverCategories) {
      case 'A':
      document.write(`<div class="title">Водій може керувати мотоциклом.</div>`)
      break;
      case 'B':
      document.write(`<div class="title">Водій може керувати легковим автомобілем.</div>`)
      break;
      case 'C':
      document.write(`<div class="title">Водій може керувати вантажним автомобілем.</div>`)
      break;
      default:
      document.write(`<div class="title">Введіть правильно назву категорії водія (тільки А, В або С).</div>`)
      break;
      }
