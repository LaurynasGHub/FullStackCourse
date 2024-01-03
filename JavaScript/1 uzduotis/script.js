// let vardas = 'laurynas';
// let kazkas = 123;

// console.log(vardas + kazkas);

// console.log('sveiki is .js failo');

// console.log('+--------+--------+');
// console.log('| Vardas | Amzius |');
// console.log('+--------+--------+');
// console.log('|  Tomas |   24   |');
// console.log('|  Jonas |   26   |');
// console.log('|  Juste |   25   |');
// console.log('+--------+--------+');

let keliamasSkaicius = 5; //skaicius kuri keliam laipsniu
let kelimoLaipsnis = 5; //laipsnis kuriuo kelsime skaiciu

let pakeltasSkaicius = kelimasLaipsniu(keliamasSkaicius, kelimoLaipsnis);

console.log('pakeltas skaicius- ' + pakeltasSkaicius);

function kelimasLaipsniu(skaicius, laipsnis) {
  let rezultatas = 1;

  for (let i = 0; i < laipsnis; i++) {
    // console.log('i= ' + i);
    rezultatas = rezultatas * skaicius;
    // console.log('rezultatas- ' + rezultatas);
  }

  return rezultatas;
}
