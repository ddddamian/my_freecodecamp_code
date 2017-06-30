function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for (var i = 0; i < arr.length; i+= size) {
    newArray.push(arr.slice(i, i + size));
  }
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
