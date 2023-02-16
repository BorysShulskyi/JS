"use strict"

// Задача 1.   Випадковим чином генерується число від 1 до 5. 
//           Спробуйте вгадати число за 2 спроби.

      let randomNumber = Math.floor(Math.random() * 5) + 1
      let minNumber = parseInt(prompt("Перша спроба відгадати число, ведіть число від 1 до 5"))
      let maxNumber

      if (minNumber >= 1 && minNumber <= 5) {
         if (randomNumber != minNumber) {
            maxNumber = parseInt(prompt("Ви не вгадали число. Друга спроба відгадати число"))
              if (maxNumber >= 1 && maxNumber <= 5) {
                 if (randomNumber != maxNumber)
                    document.write(`<div class="title">Ви не вгадали число. <br> Правильне число було: ${randomNumber}</div>`)
                 else 
                 document.write(`<div class="title">Ви вгадали число!</div>`)
              } 
              else 
              document.write("Неправильно ведено число")
  
           } 
           else 
           document.write(`<div class="title">Ви вгадали число!</div>`)
        } 
        else 
        document.write("Неправильно ведено число")
     
