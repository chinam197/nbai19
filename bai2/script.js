function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
let a = [1 ,3, 5, 6];
let sum=0,count=0;
let hasprime = false;
for (let i = 0 ; i < a.length; i++){
    
    if (isPrime(a[i]) == true){
        sum+=a[i];
        count++;
        hasprime = true;
    }
}
if(hasprime){
    console.log(sum/count);
}else{
    console.log("khong co so nguyen to");
}