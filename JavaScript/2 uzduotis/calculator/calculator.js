function addition() {
  let num1 = getNumberValue(1);
  let num2 = getNumberValue(2);

  document.getElementById('result').value = num1 + num2;

  return num1 + num2;
}

function substraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 * num2;
}

function kelimasLaipsniu(num1, laipsnis) {
  let grazintinas = num1;
  for (let i = 1; (i = laipsnis); i++) {
    grazintinas = num1 * grazintinas;
  }
}

function getNumberValue(nrId) {
  console.log('===getNumberValue===');
  let selectedBtn = document.getElementById('number' + nrId);

  console.log('number= number' + nrId);

  console.log(selectedBtn.valueAsNumber);

  return Number(selectedBtn.value);
}

// //trying to sort medis
// let medis = [2, 24, 54, 23, 21, 9, 5, 6, 43];
// let biggestNr = 0;
// let position = -1;

// for (let i = 0; i < medis.length; i++) {
//   if (medis[i] > biggestNr) {
//     biggestNr = medis[i];
//     position = position + 1;
//   } else {
//     position = position - 1;
//   }
// }

// // console.log('biggestNr=', biggestNr);

// //callback stuff
// console.log('===');
// let itemArr = [2, 4, 5, 6, 7];

// function iterateArr(times) {
//   for (i = 0; i <= times; i++) {
//     console.log('itemNr=', itemArr[i]);
//   }
// }

// let skaicius = 2;

// iterateArr((skaicius) => {
//   skaicius * 5;
//   console.log('ter');
// });
