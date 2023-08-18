var arr =[1, 10, 4, 5, 7];
var newNumber = 3;
 
var arr = arr.sort(function(a, b){
          if(b>a){
            return -1;
          }
});
arr[arr.length] = newNumber;
arr = arr.sort(function(a, b){
  if(b>a){
    return -1;
  }
});
console.log(arr);


