function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  // let array = Object.values(arr)
  // let min = Math.min(...array)
  // console.log(min)

    //looping over the whole array once for each spot in array
    for(var i=0; i < arr.length; i++) {
      //finding min index
      var min = i
      for( var x= i+1; x < arr.length; x++) {
        if(arr[x] < arr[min]) {
          min = x
        }
      }
      //swapping
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  return arr
}
