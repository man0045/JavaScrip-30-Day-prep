 // TODO: Activity1
 function f(a){
  if(a%2 == 0){
   console.log("Even number");
  }
  else{
   console.log("Odd Number");
  }
 }
 f(45);

 function square(x){
  console.log(x*x)
 }

 square(45)

 //TODO: Activity 2

 function largest(a, b){
  if(a > b){
   console.log(a);
  }
  else{
   console.log(b);
  }
 }

 largest(45, 87);

 function concat(a, b){
  console.log(a+b);
 }
  concat("mannu ", "Chaurasiya");

  // TODO: Activity 3

  const sum = (a, b) => {
   console.log(a+b);
  }
a=45;
b = 67;

sum(a, b);

const check = (p, q)=>{
 
 const nx = p.length;
 for(var i =0; i<nx; i++){
  if(p[i] == q){
   console.log(true);
  }
  else{
   console.log("False");
   continue;
  }
 }
}
p = "mannu";
q="n";
check(p, q);

// TODO: Activity 4

function prod(a, b= 7){
 console.log(a*b);
}
prod(45);


function greetings(a, b = 17){
 console.log(`!greeting and welcome mr ${a} and my age is ${b}`);
}

greetings("Mannu");

// TODO: Activity 5 

// TODO: ACTIVITY 5: Higher order function


// A higher order function is a function that takes a argument as function and return function as output
function f(func, d){
 for(var i = 0; i< d; i++){
  func();
 }
}
const repeat = () => {
 console.log("Hello");
};
f(repeat, 7);


const fu = (func1, func2, value)=>{
 const res = func1(value);
 return func2(res);
}
const mul = (pu) => pu*2;
const mut = (pu) => pu+3;

const result = fu(mul, mut, 3);
console.log(result);
