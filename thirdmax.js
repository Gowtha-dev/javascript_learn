function thirdmax(arr)
{
//1
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
        }
    }
    console.log("third highest number=>", arr[2]);
//2
arr.sort((a,b)=>b-a);
console.log("third highest number=>", arr[2])
}
//function call
let arr = [12, 13, 1, 10, 34, 16];
thirdmax(arr)