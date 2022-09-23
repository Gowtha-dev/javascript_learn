// function minmax(arr)
// {
//     //1
//     console.log("Min:", Math.min(...arr));
//     console.log("Max:", Math.max(...arr));
//     //2
//     let max = arr[0], min = arr[0];
//     arr.forEach(element => {
//         if (element > max) { max = element }
//         if (element < min) { min = element }
//     });
//     console.log("max = " + max);
//     console.log("min = " + min);

// }
// //function call
// let arr = [12, 13, 1, 10, 34, 16];
// minmax(arr)

const minMaxWords = (arr) => {
    if (arr.length > 0) {
      var min = arr[0], max = arr[0]; arr.forEach((element) => {
        if (element.length > max.length) max = element;
        if (element.length < min.length) min = element;
      })
      console.log(min)
      return (min + " " + max)
    }
  }
  
  console.log(minMaxWords(['abc', 'abcde', 'ab', 'abcd']))