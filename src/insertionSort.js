function insertionSort(arr) {
  let x = 0
  for (var i = 0; i < arr.length; i++) {
    if(i > 0){
      if(arr[i] < arr[i-1]){
        x = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = x
        i = i-2
      }
    }
  }
}
