function selectionSort(arr) {
let sorted = []
for(let i=arr.length - 1; i>=0; i--){
  for(let j=i; j >= 0; j--){
    if(arr[i] < arr[j]){
      let temp = arr[i]
      arr[i] = arr[j];
      arr[j] = temp
    }
  }
}
  return arr
}
