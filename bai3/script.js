let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7];

let uniqueValues = arr.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueValues); 
