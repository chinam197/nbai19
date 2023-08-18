let numBer = [11, 2, 3, 12, 3, 44,44,44,88];
let max = numBer[0], min = numBer[0];
let indexMax=0;indexMin=0;
for (let i in numBer){
   if(max<numBer[i]){
    max = numBer[i];
   }
   if(min>numBer[i]){
    min = numBer[i];
   }
}
// tim vi tri max va in ra cac vi tri cua max bang nhau;

for(let i in numBer){
if (numBer[i]===max){
    indexMax++;
    console.log('giá trị max = ',max," index :",i);

}
if (numBer[i]===min){
    indexMin++;
    console.log('giá trị min =',min," index :",i);
}
}



