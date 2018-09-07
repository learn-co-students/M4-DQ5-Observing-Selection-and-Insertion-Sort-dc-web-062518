function selectionSort(array) {

  let x = 0
  let n = 0
  for (var i = 0; i < array.length; i++) {
    x = array[i]
    n = i
    for (var j = i+1; j < array.length; j++) {
      if(x >= array[j]){
        x = array[j]
        n = j
      }
    }
    x = array[i]
    array[i] = array[n]
    array[n] = x
    
  }
}
