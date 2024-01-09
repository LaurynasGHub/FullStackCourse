let matematika = 8;
let anglu = 9;
let fizika = 8;

let vidurkis = (matematika + anglu + fizika) / 3;

console.log('vidurkis ' + vidurkis);

if (vidurkis >= 8) {
  console.log('vidurkis yra 8-10');
}

if (vidurkis >= 5 && vidurkis <= 8) {
  console.log('vidurkis yra 5-8');
}

if (vidurkis < 5) {
  console.log('vidurkis maziau uz 5');
}
