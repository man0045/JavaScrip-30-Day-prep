// TODO: Activity 1


let name = "Mannu chaurasiya";
let Professions = "Sr. Software Engineer"


let createProfession = (Name, Auda) => `my Name is ${Name} I m working as ${Auda} India`

let msg = createProfession(name, Professions);


console.log(msg);


let PersonsName = "Mannu Chaurasiya";
let Profession  = "Sr Software Engineer";
let age = "21";

let location = "Benglore"

let res = `my name is ${PersonsName} and I'm working as ${Profession} in ${location} my age is ${age}`

console.log(res);


// TODO: Activity 2

// Destructuring is used to unpack the values from the  array and object, into distincrt varible;

let a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);


[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]


const obj = {
 author: "My name is mannu",
 title: "Along side",
 year: "1993"
};

const {author, title} = obj;
console.log(`${author} title is ${title}`)

// TODO: Activity 3

const oldArr = [1,2 , 4];

const newArr = [3, 5,6 ];

const resu = [...oldArr, ...newArr];
console.log(resu);


// Rest parameter is used to take indefinite nuber of parameter in as argument and it easily whatsoever operation we are performing
function sum(...args){
 let sum = 0;
 for(var arg of args){
  sum+=arg;
 }
 console.log(sum);
}

sum(1,2,3,4);



// TODO: Activity 4

function prod(b, a=6){
 res = b*a;
 console.log(res);
}

prod(4);

// TODO: Activity 5

const nam = "Mannu";
const Aage = 7;


const person = {
 nam,
 Aage,
 greet(){
  console.log(`my name is ${this.nam}, and my age is ${this.Aage}`)
 },

 extend(year){
  this.Aage = year;

  console.log(`my name is ${this.nam} and i m going to ${this.Aage} this year`);

 }


};

console.log(person);

person.greet();
person.extend(21)

const prop1 = "firstName";
const prop2 = "lastName";
const prop3 = "age";

const perso = {
    [prop1]: "John",
    [prop2]: "Doe",
    [prop3]: 30
};

console.log(perso);
