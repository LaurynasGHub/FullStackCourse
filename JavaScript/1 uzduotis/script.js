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

// let keliamasSkaicius = 5; //skaicius kuri keliam laipsniu
// let kelimoLaipsnis = 5; //laipsnis kuriuo kelsime skaiciu

// let pakeltasSkaicius = kelimasLaipsniu(keliamasSkaicius, kelimoLaipsnis);

function kelimasLaipsniu() {
  let keliamasSkaicius = document.getElementById('keliamasSkaicius').value; //skaicius kuri keliam laipsniu
  let kelimoLaipsnis = document.getElementById('keliamasLaipsnis').value; //laipsnis kuriuo kelsime skaiciu

  // console.log('keliamasSkaicius= ' + keliamasSkaicius);
  // console.log('keliamasSkaicius= ' + keliamasSkaicius);

  let rezultatas = 1;

  for (let i = 0; i < kelimoLaipsnis; i++) {
    // console.log('i= ' + i);
    rezultatas = rezultatas * keliamasSkaicius;
    // console.log('rezultatas- ' + rezultatas);
  }
  console.log('pakeltas skaicius= ' + rezultatas);

  document.getElementById('gautasRezultatas').value = rezultatas;

  return rezultatas;
}
