//eiti per array ir surasti maziausia skaiciu ir ji ideti i nauja array
//panaikinti maziausia is array ir tada vel ieskoti maziausio?

console.log('===SORT TREE===');

// let tree = [10, 4, 5, 7, 4, 8, 9, 12, 54, 64, 84, 5, 34, 3, 46, 34];
let tree = [
  2, 4, 6, 8, 3, 1, 5, 7, 9, 23, 5, 4, 13, 41, 35, 4, 624, 5, 234, 2, 35, 2, 42,
  4, 1, 43, 4, 35, 5, 2, 342, 34, 2, 6, 62, 5, 45, 46, 46, 2, 5, 24, 52, 34,
  235, 4, 6, 46, 24, 52, 54, 23, 41, 2, 312, 4, 1, 5, 46, 57, 4, 7, 59, 67, 98,
  567, 4, 56, 43, 4563, 45, 2, 45, 4, 53, 46, 3, 45, 53, 45, 23, 5, 45, 4, 6,
  433, 45, 34, 5, 34, 6, 346, 3, 45, 34, 52, 3, 4,
];

let arrayLength = tree.length;
let sortedArr = [];
let smallestNumber = 0;

for (a = 0; a < arrayLength; a++) {
  smallestNumber = findSmallestNumber(tree);
  sortedArr.push(smallestNumber);
  deleteNumberFromArray(tree, getNumberPosition(tree, smallestNumber));
}

console.log(sortedArr);

function findSmallestNumber(array) {
  //   console.log('===findSmallestNumber===');
  let maziausiasSkaicius = array[0];

  for (i = 0; i < array.length; i++) {
    // console.log(`array[${i}]= `, array[i]);
    if (array[i] < maziausiasSkaicius) {
      maziausiasSkaicius = array[i];
      //   console.log('i', i);
    }
    // array[i] < maziausiasSkaicius ? (maziausiasSkaicius = array[i]) : nothing;
  }
  //   console.log('maziausias skaicius=', maziausiasSkaicius);
  return maziausiasSkaicius;
}

function deleteNumberFromArray(deleteArray, position) {
  deleteArray.splice(position, 1);
  return deleteArray;
}

function getNumberPosition(numberArray, delNumber) {
  for (i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] === delNumber) {
      return i;
    }
  }
}
