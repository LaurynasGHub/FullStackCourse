let a = 2;
let b = 25;
let c = 7;

if (a > b) {
  if (a > c) {
    console.log('a yra didziausias');
  } else {
    console.log('c yra didziausias');
  }
}

if (a < b) {
  if (b > c) {
    console.log('b yra didziausias');
  } else {
    console.log('c yra didziausias');
  }
}
