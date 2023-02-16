"use strict"

// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Вхідні дані :
const nameFirstChild = prompt('Введіть ім’я першої дитини','')
let numberCandiesFirstChild = parseInt(prompt('Введіть кількість цукерок у першої дитини',''))
const nameSecondChild = prompt('Введіть ім’я другої дитини','')
let numberCandiesSecondChild = parseInt(prompt('Введіть кількість цукерок у другої дитини',''))

//Вивід вхідних даних :
document.write(`У першої дитини ${nameFirstChild} є ${numberCandiesFirstChild} цукерок. <br>`)
document.write(`У другої дитини ${nameSecondChild} є ${numberCandiesSecondChild} цукерок.<br>`)

if(numberCandiesFirstChild === numberCandiesSecondChild)
document.write(`<div class="title">У дітей кількість цукерок є однакова. </div>`)
else
   switch (true) {
      case numberCandiesFirstChild > numberCandiesSecondChild:
      document.write (`<div class="title"> Кількість цукерок є більшою  у ${nameFirstChild}</div>`)
      break

      default:
         document.write(`<div class="title"> Кількість цукерок є більшою  у ${nameSecondChild}</div>`)
         break
      }
      
