{
// For:
for (i = 1; i <= 10; i++) {  
    document.write("Text " + i + "<br>");
}

document.write("<hr>");
let courses= ["HTML", "CSS", "JavaScript", "CSS"];
for (let i = 0;i < courses.length;i++){ 
     document.write((i + 1) + "- " + courses[i] + "<br>");
}
}
document.write("<hr>");
{ 
// For in:
var numbers = [11, 13, 9, 17, 23];
var x;
for (x in numbers) {
    document.write(numbers[x] + "<br>"); 
}

document.write("<hr>");

var student = {fname:"Ahmed", lname:"Mostafa", age:26};
var x;
for (x in student) {
    document.write(x+" : "+student[x] + " <br>");
}
document.write("<hr>");
// For of:
for (const iterator of numbers) {
    document.write(iterator + "--");
}
}
document.write("<hr>");
{
// Foreach :
let courses=["HTML", "CSS", "JS", "PHP","HTML", "CSS", "JS", "PHP"];
courses.forEach(function(course){
    document.write("<b>"+course+"</b><br>");
});
document.write("<hr>");
courses.forEach((course,index)=>{
    document.write("<b>"+index+" : ");
    document.write(course+"</b><br>");
})
}
document.write("<hr>");



