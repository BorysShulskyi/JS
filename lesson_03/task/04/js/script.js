"use strict"

// Задача 1.    З клавіатури вводиться вік людини. <br>
//   Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).


    let userAge = parseInt(prompt('Введіть Ваш вік '))

   if (userAge < 6)
      document.write(`<div class="title">Ви - дитина у садочку і Вам  ${userAge} років</div>`)
   else if (userAge < 18)
      document.write(`<div class="title">Ви - школяр і Вам ${userAge} років</div>`)
   else if (userAge < 23)
      document.write(`<div class="title">Ви - студент і Вам ${userAge} років</div>`)
   else if (userAge < 66)
      document.write(`<div class="title">Ви - працівник і Вам ${userAge} років</div>`)
   else 
      document.write(`<div class="title">Ви - пенсіонер і Вам  ${userAge} років</div>`) 