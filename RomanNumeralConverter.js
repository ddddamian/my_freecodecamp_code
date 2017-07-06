function convertToRoman(num) {
  var stringNum = String(num);
  var arr = stringNum.split("");
  var x;
  var char1;
  var char2;
  var char3;
  var result = "";
  var j;
  
  if (stringNum.length == 4) {
    j = 4;
  } else if (stringNum.length == 3) {
    j = 3;
  } else if (stringNum.length == 2) {
    j = 2;
  } else if (stringNum.length == 1) {
    j = 1;
  }

  
  for (var i = 0; i < stringNum.length ; i++) {
    
    
    if (j == 1) {
      char1 = "X";
      char2 = "V";
      char3 = "I";
    } else if (j == 2) {
      char1 = "C";
      char2 = "L";
      char3 = "X";
    } else if (j == 3) {
      char1 = "M";
      char2 = "D";
      char3 = "C";
    } else {
      char1 = "X";
      char2 = "V";
      char3 = "M";
    }
    x = arr[i];
    switch (x) {
      case "1":
        result += char3;
        break;
      case "2":
        result += char3 + char3;
        break;
      case "3":
        result += char3 + char3 + char3;
        break;
      case "4":
        result += char3 + char2;
        break;
      case "5":
        result += char2;
        break;
      case "6":
        result += char2 + char3;
        break;
      case "7":
        result += char2 + char3 + char3;
        break;
      case "8":
        result += char2 + char3 + char3 + char3;
        break;
      case "9":
        result += char3 + char1;
        break;
    }
    j--;
  }
  return result;
}

convertToRoman(2);
