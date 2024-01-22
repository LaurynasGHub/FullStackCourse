const duomenys = ['vanduo', 'kola', 'sprite', 'fanta', 'alus'];

console.log(
  'pirmas duomuo= ' +
    duomenys[0] +
    ' paskutinis domuo= ' +
    duomenys[duomenys.length - 1]
);
let arrLength = duomenys.length / 2 - 1;

console.log('vidurinis duomuo= ' + duomenys[Math.round(arrLength)]);
