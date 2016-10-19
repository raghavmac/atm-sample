function sortArr(a, b) {
  return a - b;
}

function round(a, b) {
  return Math.floor(a/b);
}

function findDenominations(amount, denominationArray) {
  var balance = amount;
  var counts = [];

  var revArr = denominationArray.sort(sortArr).reverse();

  revArr.forEach(function(denomination) {
    var n = round(balance, denomination);
    counts.push(n);
    balance -= (n * denomination);
  });

  if (balance !== 0) {
    console.error("Please enter the following denominations: ", revArr.join(', '));
    return;
  }

  return counts;
}

console.log(findDenominations(3800, [1000, 500, 100]));

/* Inputs  x y z */
// 3800 -> 3 1 3
// 1600 -> 1 1 1
// 2600 -> 2 1 1
// 22000 -> 22 0 0
