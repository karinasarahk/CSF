function minSum(arr) {
    arr = arr.sort();
    let sum = 0;
    if (arr.length == 1) {
        return sum = arr
      }
    for (i = 0 ; i < arr.length ; i++) {
      return sum += (arr[i] * arr[arr.length-(i+1)]);
    }    
}