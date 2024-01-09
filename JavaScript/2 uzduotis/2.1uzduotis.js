let a = 20;
let b = 2;
let c = 70;

if (a < b) {
  if (a < c) {
    console.log('a yra maziausias');
  } else {
    console.log('c yra maziausias');
  }
}

if (a > b) {
  if (b < c) {
    console.log('b yra maziausias');
  } else {
    console.log('c yra maziausias');
  }
}
