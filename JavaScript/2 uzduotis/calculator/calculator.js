function addition() {
  let num1 = getNumberValue(1);
  let num2 = getNumberValue(2);

  document.getElementById('result').value = num1 + num2;

  return num1 + num2;
}

function substraction() {
  let num1 = getNumberValue(1);
  let num2 = getNumberValue(2);

  document.getElementById('result').value = num1 - num2;

  return num1 - num2;
}

function multiplication() {
  let num1 = getNumberValue(1);
  let num2 = getNumberValue(2);

  document.getElementById('result').value = num1 * num2;

  return num1 * num2;
}

function division() {
  let num1 = getNumberValue(1);
  let num2 = getNumberValue(2);

  document.getElementById('result').value = num1 / num2;

  return num1 / num2;
}

function times() {
  let num1 = getNumberValue(1);
  let laipsnis = getNumberValue(2);

  console.log(`times`);
  let grazintinas = num1;
  for (let i = 1; i < laipsnis; i++) {
    grazintinas = num1 * grazintinas;

    console.log('grazintinas=', grazintinas);
  }
  document.getElementById('result').value = grazintinas;
}

function getNumberValue(nrId) {
  console.log('===getNumberValue===');
  let selectedBtn = document.getElementById('number' + nrId);

  console.log('number= number' + nrId);

  console.log(selectedBtn.valueAsNumber);

  return Number(selectedBtn.value);
}

//add event listener for when the button is clicked? then change the background
