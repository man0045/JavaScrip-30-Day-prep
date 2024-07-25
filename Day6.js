// TODO: Activity 1
const arr = [9, 8, 4, 6];
console.log(arr);
const n = arr.length;

console.log(arr[0], arr[n-1])

// TODO: Activity 2
arr.push(45);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(2)
console.log(arr);
arr.unshift(2);
console.log(arr);

// TODO: Activity 3
const res = arr.map((x) => x*2);
console.log(res);

const ans = arr.map((p)=> p*p);
console.log(ans);

const pro = arr.filter((a) => (a%2 == 0));
console.log(pro);

const prequentination = arr.filter((v) => (v%2 == 1));

console.log(prequentination);

let sum =0
const total = arr.reduce((sun , mon) => {
 return sun + mon
}, 0);
console.log(total);


// TODO: Activity 4

for(var i =0; i< n; i++){
 console.log(arr[i]);
}

arr.forEach((element) => console.log(element));

var  str = ["Mannu", "chaurasiya"];

str.forEach((x) => console.log(x));

// TODO: Activity 5

let arr2 = [[1,2,4,5,6],
 [5,6,7,2,3],[4, 5,6,7,8]]
console.log(arr2);


let prop = []; // Initialize prop as an empty array

for (var i = 0; i < arr2.length; i++) {
  prop[i] = []; // Initialize each element of prop as an empty array
  for (var j = 0; j < arr2[i].length; j++) { // Correct the inner loop condition
    prop[i][j] = arr2[i][j];

   }
  }

  console.log(arr2[1][2]);

console.log(prop);


