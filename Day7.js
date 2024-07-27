// TODO: Activity 1

const book = {
 name: "Class of 83",
 Author: "Mr Garvit tyagi",
 year: "1990"
}

console.log(book);

const newe = book.name;
const Auth = book.Author;
console.log(newe, Auth);






// TODO: Activit2

const res = {
 booktitle: "To kill a Mocking bird",
AuthorName: "Hopper Yadev",

getdetails: function(){
 console.log(`${this.booktitle} by ${this.AuthorName}`)
}
}
console.log(res.getdetails());

const ans = {
 booktitle: "To kill a mocking bird",
 AuthorName: "Hopper Sharma",
 year : "2004",
 UpdateYear: function(newYear){
  this.year = newYear;
  console.log(this);
 }
}

ans.UpdateYear(2024);

// TODO: Activity 3 NestedObject


const library = {
 book : {
  name: "Fucking Life",
  books:[
   "glovebobs", "Simplelife","A seems of Happiness"
  ]
 }
}

for(var i  = 0; i< 3; i++){
 console.log(library.book.books[i]);
};

// TODO:Activity 4

const pro = {
 name: "Mannu",
 Age: "21",
 Dob: "25-11-2003",
 getdetails: function(dob){
  this.Dob = dob;
  console.log(this);
 }
}

pro.getdetails(2001);

// TODO: Acctivity 5

for(let property in pro){
 console.log(`${property}: ${pro[property]}`);
}


console.log(Object.keys(pro));

console.log(Object.values(pro));



