"use strict";

// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Вхідні дані :
const nameFirstChild = prompt("Введіть ім’я першої дитини");
const numberCandiesFirstChild = parseInt(
  prompt("Введіть кількість цукерок у першої дитини")
);
const nameSecondChild = prompt("Введіть ім’я другої дитини");
const numberCandiesSecondChild = parseInt(
  prompt("Введіть кількість цукерок у другої дитини")
);

if (numberCandiesFirstChild === numberCandiesSecondChild)
  document.write(
    `<div class="title">У дітей кількість цукерок є однакова. </div>`
  );
else if (numberCandiesFirstChild > numberCandiesSecondChild)
  document.write(
    `<div class="title"> Кількість цукерок є більшою  у ${nameFirstChild}</div>`
  );
else
  document.write(
    `<div class="title"> Кількість цукерок є більшою  у ${nameSecondChild}</div>`
  );
