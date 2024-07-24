// TODO: Acctivity 1
for(var i = 1; i<=10; i++){
 console.log(i);
}
for(var i = 1; i<=10; i++){
 console.log(5*i);
}

// TODO: Activity 2

var i =0;
sum = 0;
while( i < 11){
 sum = sum+i;
 i++;
}
console.log(sum);

var j = 10;

while(j > 0){
 console.log(j);
 j--;
}

//TODO:  Activity
let string = "";
let n = 6
for(var i = 0; i< n; i++){
 for(var j = 0; j  < n - i; j++){
  string += " ";
 }
 for(var k =0; k < i; k++){
  string += "*"
 }
 string+="\n";
}

console.log(string);

// TODO: Activity 5


var k =0;

while( k < 11){
 k = k+1;
 if(k == 7){
  continue;
 }
 console.log(k);
}

var l = 0;
while(l < 11){
 l = l+1;
 if(l == 7){
  break;
 }
 console.log(l);
}

var x = 1;
var k = 6;
for(var i = 0; i < k; i++){
 x = x*(k-i);
}
console.log(x);

// TODO: Activity2

var c = 1;
do{
 console.log(c);
 c++;
}while(c <= 5);


function factorial(n) {
 if (n < 0) {
     return "Factorial is not defined for negative numbers.";
 }
 let result = 1;
 let i = n;

 do {
     result *= i;
     i--;
 } while (i > 0);

 return result;
}

let number = 5; // You can change this to any number you want to calculate the factorial for
console.log(`Factorial of ${number} is ${factorial(number)}`);
