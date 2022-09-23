var orderalpha = function (string) {
//    var arr= [...new Set(string.split(''))]
   var arr= string.split('')
   var arr1 = arr.filter((e,i)=>arr.indexOf(e)==i);
   arr1.sort((a,b)=>a-b)
   console.log(arr1)
//    arr.sort((a,b)=>a-b)
//    return arr
//sorting manually
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
        }
    }
    return arr;
};

//output
console.log(orderalpha("dcbbacefai"))