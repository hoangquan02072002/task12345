function maxelement(no_of_rows, arr) {
  var i = 0;
  var max = 0;
  var result = [];
  while (i < no_of_rows) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result[i] = max;
    max = 0;
    i++;
  }
  printArray(result);
}
function printArray(result) {
  for (var i = 0; i < result.length; i++) {
    document.write(result[i]);
  }
}
var arr = [
  [3, 4, 1, 8],
  [1, 4, 9, 11],
  [76, 34, 21, 1],
  [2, 1, 4, 5],
];

maxelement(4, arr);
