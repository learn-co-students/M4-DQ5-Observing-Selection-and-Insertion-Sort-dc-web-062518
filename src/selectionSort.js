function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++) {
    let min = i;

      //check the rest of the array to see if anything is smaller
      for (j=i+1; j < arr.length; j++){
          if (arr[j] < arr[min]){
              min = j;
          }
      }

      //if the minimum isn't in the position, swap it
      if (i != min){
          swap(arr, i, min);
      }
  }

  return arr;


}
