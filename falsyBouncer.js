function bouncer(arr) {
  var filteredArray = arr.filter(function(val){
    return !(
      val === false || 
      val === null ||
      val === 0 ||
      val === "" || 
      typeof val == "undefined"  || 
      Number.isNaN(val));
  });
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
