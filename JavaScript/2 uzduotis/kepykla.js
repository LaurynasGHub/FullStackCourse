let darboH = 8;
let darbuotojoTempas = 2;
let darbuotojuKiekis = 4;
let savikaina = 0.75;
let pardavimoKaina = 1;
let uzsakymai = 200;

let iskeptiPerDiena = darboH * darbuotojoTempas * darbuotojuKiekis;
console.log('iskepti per diena= ' + iskeptiPerDiena);

let kepaluSavikaina = iskeptiPerDiena * savikaina;
console.log('visu kepalu savikaina= ' + kepaluSavikaina);

let pardavimoPajamos = pardavimoKaina * iskeptiPerDiena;
console.log('pardavimo pajamos= ' + pardavimoPajamos);

let gautosPajamos = pardavimoKaina * iskeptiPerDiena - kepaluSavikaina;
console.log('gautos pajamos= ' + gautosPajamos);

if (uzsakymai > iskeptiPerDiena) {
  let nespetiIskepti = uzsakymai - iskeptiPerDiena;
  console.log('nespeta iskepti= ' + nespetiIskepti);
}

let parduotiKepalai = 10;
pardavimoPajamos = pardavimoKaina * parduotiKepalai;
console.log('pardavimo pajamos nuo parduotu= ' + pardavimoPajamos);

gautosPajamos = pardavimoPajamos - parduotiKepalai * savikaina;
console.log('gautos pajamos nuo parduotu= ' + gautosPajamos);
