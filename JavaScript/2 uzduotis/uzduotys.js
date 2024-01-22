//eur to dolar

// let eurai = 10;
// const kursas = 1.1;

// console.log(eurai + ' paversti i dolerius= ' + eurai * kursas);

//visi skaiciai

let pirmasSk = 0;
let antrasSk = 0;

for (let i = 1; i <= 100; i++) {
  pirmasSk = pirmasSk + 1;
  if (pirmasSk == 10) {
    pirmasSk = 0;
    antrasSk = antrasSk + 1;
  }
  //   console.log('pirmasSk= ' + antrasSk + ' antrasSk= ' + pirmasSk);
  console.log(antrasSk + ' ' + pirmasSk);
}
