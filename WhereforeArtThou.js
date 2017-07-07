function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var y;
  
  for (var key in source) {
    y = key;
  }
  for (var obj = 0; obj < collection.length; obj++) {
    if (collection[obj].hasOwnProperty(y)) {
      if ( collection[obj][y] == source[y]) {
        arr.push(collection[obj]);
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
