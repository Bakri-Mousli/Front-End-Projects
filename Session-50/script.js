// document.write("At Method : "+"<br>");
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = 2;
// let fruit = fruits.at(index);
// fruit = fruits.at(-1);
// document.write(fruit+"<br>");
// // ====================================================
// document.write("Concat and Join Methods : "+"<br>");

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// document.write(children+"<br>"+"");
// document.write(children.join("--")+"<br>"+"<hr>");

// // ======================================================
// document.write("Every and Some Methods: "+"<br>");
// const ages = [32, 33, 16, 40];

// let result1=ages.every(age=>age>16);
// let result2=ages.some(age=>age>35);
// document.write(result1+"<br>");
// document.write(result2+"<br><hr>");
// // ======================================================
// document.write("Fill Method: "+"<br>");
// // fruits.fill("Kiwi");
// document.write(fruits+"<br>");
// fruits.fill("Kiwi", 1, 4);
// document.write(fruits+"<br><hr>");
// // ======================================================
// document.write("Filter and Map Methods: "+"<br>");
// document.write(ages.filter(age=>age>30)+"<br>");
// document.write(ages.map(age=>age*2)+"<br>");
// document.write(ages.map(age=>age-2)+"<br><hr>");
// // ======================================================
// document.write("Find and FindIndex Methods: "+"<br>");
// document.write(ages.find(age=>age==30)+"<br>");
// document.write(ages.find(age=>age==32)+"<br>");
// document.write(ages.find(age=>age>30)+"<br>");

// document.write(ages.findIndex(age=>age>30)+"<br>");
// document.write(ages.findIndex(age=>age==33)+"<br>");
// document.write(ages.lastIndexOf(16)+"<br>");
// document.write(ages.findIndex(age=>age==100)+"<br><hr>");
// // ======================================================
// document.write("Push and Pop and shift and unshift Methods: "+"<br>");
// fruits.push("Kiwi");
// document.write(fruits+"<br>");
// fruits.pop();
// document.write(fruits+"<br>");
// fruits.unshift("banana");
// document.write(fruits+"<br>");
// fruits.shift();
// document.write(fruits+"<br><hr>");
// // ======================================================
// document.write("Sort and reverse and slice and reduce Methods: "+"<br>");
// ages.reverse();
// document.write(ages+"<br>");
// document.write(ages.sort()+"<br>");
// document.write(fruits.sort()+"<br>");

// // ======================================================
// var people = [ 
// 	{ name: "John", age: 20 }, 
// 	{ name: "Mary", age: 35 }, 
// 	{ name: "Arthur", age: 78 }, 
// 	{ name: "Mike", age: 27 }, 
// 	{ name: "Judy", age: 42 }, 
// 	{ name: "Tim", age: 8 } ,
// 	{ name: "Ziad", age: 43 } ,
// ];

// // people.sort(function(a, b) {
// //     return a.name.localeCompare(b.name);
// // });

// using_arrow_function:
// people.sort((a,b)=>{return b.name.localeCompare(a.name)});
// people.sort((a,b)=>{return a.age - b.age});
// for (const key in people) {
//     document.write("Name : "+people[key].name+"------>"+` Age : ${people[key].age}`+"<br>");
// }
// document.write("<hr>");
// ======================================================
function Timer(){
    document.getElementById("time").innerHTML ="Events : "+"<br>"+ Date();
    setTimeout("Timer()",1000);    
    
};
setTimeout(Timer,1000);    
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================
// ======================================================

