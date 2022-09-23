var sortlarge =(arr)=>{
    if(arr.length>=4){
    arr.forEach((element,index) => {
        for(j=0;j<arr.length-1;j++){
            if(arr[j]<arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
           }
    }
   })
 return arr?.[3];
}else{
    return 'Define the array with more than 3 elements'
}
}
var arr=[9, 3, 59, 100, 65, 2, 1, 45, 7]
console.log(sortlarge(arr))

// //observable,pure and impure pipe,,directive vs component, restAPI,crud
// @pipe  
// transform(value,pare){
//     logic
//     return
// }

// {05-09-2022|dateformat :YYYY-MM}