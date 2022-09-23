function minodd(arr)
{
    let odd = [];
    let even = [];
    arr.forEach(element => {
        if(element%2==0)
        even.push(element)
        else
        odd.push(element)
    });
    odd.sort((a,b)=>a-b);
    even.sort((a,b)=>b-a);
    setTimeout(() => {
        console.log(odd[0])
        console.log(even[0])
    }, 2000);
}
//
function minodd1(arr){
    let odd = [];
    for(var k=0 ; k <= arr.length ;k++){
        if(arr[k]%2==0)
        odd[odd.length]=arr[k]
    }
    for(var i=0;i<odd.length-1;i++){
        for(var j=0;j<odd.length-1-i;j++){
            if(odd[j]>odd[j+1]){
                let temp = odd[j];
                odd[j] = odd[j+1];
                odd[j+1] = temp;
            }
        }
    }
    console.log(odd)
}
//function call
let arr = [12, 13, 1, 10, 34, 16];
minodd1(arr)

