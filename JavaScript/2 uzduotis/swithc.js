let skaicius1 = 3;
let skaicius2 = 2;
let skaicius3 = 3;

switch (skaicius1) {
  case 1:
    console.log('suma= ' + (skaicius1 + skaicius2 + skaicius3));
    break;
  case 2:
    console.log('sandauga= ' + skaicius2 * skaicius3);
    break;
  case 3:
    console.log('kvadratas= ' + skaicius1 * skaicius1);
    break;
  default:
    console.log('klaida');
    break;
}
