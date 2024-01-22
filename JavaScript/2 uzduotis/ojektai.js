// let studentas = {
//   vardas: 'Laurynas',
//   pavarde: 'Laurinaitis',
//   amzius: 25,
//   ugis: 198,
// };

// let automobilioDuomenys = {};

// automobilioDuomenys.marke = 'volvo';
// automobilioDuomenys.modelis = 's60';
// automobilioDuomenys.rida = 216758;
// automobilioDuomenys.gamybosMeta = 2019;
// automobilioDuomenys.spalva = 'raudona';
// automobilioDuomenys.darbinisTuris = 3.2;

// for (const objektas of automobilioDuomenys) {
//   console.log(objektas);
// }

//object with function inside
//sukuriam objekta
let studentas = {
  vardas: 'Laurynas', //objekto vertes, kintamieji
  pavarde: 'Laurynaitys',

  //funkcija objekte, kazka galima grazinti, nepamirsti 'this' kai referinam i funkcija
  vardPav: function () {
    let vardasPavarde = this.vardas + ' ' + this.pavarde;

    return vardasPavarde; //grazina funkcijos reiksme
  },
};

let rezultatas = studentas.vardPav();
console.log(rezultatas);
