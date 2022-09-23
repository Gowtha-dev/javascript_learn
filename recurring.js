var getMax = function (string) {
    var max = 0,maxChar = '';
     string.split('').forEach(function(char){
       if(string.split(char).length > max) {
           max = string.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
};

//output
console.log(getMax("harshininnni"))