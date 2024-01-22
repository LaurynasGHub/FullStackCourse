// let zodziai = ['tvora', 'vartai', 'automobilis', 'durys', 'dviratis'];
// let indeksas = 0;

// for (let daiktai of zodziai) {
//   console.log('indeksas', indeksas, 'zodis', daiktai);
//   indeksas++;
// }

//-------

// let pirkiniai = ['pienas', 'kiausiniai', 'mesa', 'duona', 'obuoliai'];

// console.log('pirkiniu kiekis=', pirkiniai.length);

// for (let i = 0; i < pirkiniai.length; i++) {
//   console.log('---', pirkiniai[i]);
// }

//------

let pazymiai = [5, 6, 7, 8, 9];

let vidurkis;
let suma = 0;

for (let pazymis of pazymiai) {
  suma = suma + pazymis;
  console.log('pazymis=', pazymis);
}

vidurkis = suma / pazymiai.length;

console.log('vidurkis=', vidurkis);
