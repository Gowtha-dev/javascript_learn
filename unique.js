function unique(arr)
{
    //1
    let unique = [...new Set(arr)];
    console.log(unique)
    //2
    var uniqueArray = [];
        
        for(var value of arr){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
    console.log(uniqueArray)
}
//function call
let arr = ['A', 'B', 'A', 'C', 'B'];
unique(arr)
