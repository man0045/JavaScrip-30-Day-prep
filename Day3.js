// TODO: Activity1
const a = 1;
const b = 1;
const c = 1;

if(a < 0){
 console.log("Negative value never support")
}
else{
 console.log("Support positive value");
}

const age = 90;
if(age > 18){
 console.log("Eligible to vote");
}
else{
 console.log("Not eligible");
}


// TODO: Activity 2

if(a > b){
 if( a > c){
  console.log(a);
 }
 else if( b > c){
  if(c > a){
   console.log(b);
  }

 }
}
else{
 console.log(c);
}

// TODO: Activity 3

var text;

var fruits = "Banana";

switch(fruits){
 case "Banana":
  text = "Banana is good";
  break;
 case "Orange":
  text = "Orange is better";
  break;
 default:
  text = "Every fruits is better for health";
}
console.log(text);

const marks = 67;
let gradeCategory = 0;

if (marks > 90) {
    gradeCategory = 1;
} else if (marks > 80 && marks <= 90) {
    gradeCategory = 2;
} else if (marks > 70 && marks <= 80) {
    gradeCategory = 3;
} else if (marks > 60 && marks <= 70) {
    gradeCategory = 4;
} else {
    gradeCategory = 5;
}

switch (gradeCategory){
 case 1:
   {
    console.log("Grade: A")
   }
  break;
 case 2:
  {
   console.log("Grade: B")
  }
  break;
 case 3: 
 {
  console.log("Grade: C")
 }
  break;
 case 4: 
 {
  console.log("Grade: D")
 }
  break;
 default:
  console.log("Fail");
}

// TODO: Activity 4

const val = 90;
console.log((val%2==0) ? "Even": "Odd");

const year = 2016;

if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
 console.log("Leap year");
}
else{
 console.log("Not a leap year");
}
