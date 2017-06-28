function reverseString(str) {
  var newArray = [];
  for (var i = 0; i < str.length; i++) {
    newArray.push(str[i]);
  }
  return newArray.reverse().join('');
}

reverseString("hello");
