// Selection Sort: unstable sorting algo
function selectionSort(arr) {
  try {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let iMin = i;
      for (let j = i + 1; j <= n - 1; j++) {
        if (arr[iMin] < arr[j]) {
          iMin = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[iMin];
      arr[iMin] = temp;
    }
    console.log(arr);
  } catch (e) {
    console.log(e);
    throw e;
  }
}
selectionSort([3, 1, 8, 7, 2, 20]);

//Bubble Sort: stable sorting algo
function BubbleSort(arr) {
  try {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 2 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  } catch (e) {
    throw e;
  }
}
// BubbleSort([3, 1, 8, 7, 2, 40])
