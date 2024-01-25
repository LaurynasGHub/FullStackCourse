let tree = [2, 4, 5, 8, 1, 3, 6, 7, 9];
let sortedArr = [];

for (i = 0; i <= tree.length; i++) {
  let tikrinamasSkaicius = tree[i];

  for (a = 0; a < tree.length; a++) {
    if (tree[a] > tikrinamasSkaicius) {
      sortedArr.splice(a, 0, tikrinamasSkaicius);
      break;
    }
  }
}

console.log(sortedArr);
