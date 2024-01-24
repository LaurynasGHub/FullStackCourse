// const testArrow = (a, b) => a * b;

// console.log(testArrow(2, 3));

// let arrowVerte = testArrow(3, 5);

// console.log(`arrow verte ${arrowVerte}`);
// console.log(`test`);

let pazymiai = [5, 6, 7, 8, 9, 6];
let pazymiai1 = [4, 5, 6, 2, 4, 6];

convertavimas(testArray(pazymiai));
convertavimas(testArray(pazymiai1));

function testArray(pazymiuArray) {
  for (let i = 0; i <= pazymiuArray.length; i++) {
    if (pazymiuArray[i] < 4) {
      return false;
    }
  }
  return true;
}

// let atsakymas = testArray(pazymiai);

// console.log(atsakymas);

function convertavimas(torf) {
  torf == true
    ? console.log('visi studento pazymiai teigiami')
    : console.log('studentas turi bent viena neigiama pazymi');
}
