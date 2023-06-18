///////////////// Q1 - i ///////////////////////
let firSt1 = document.getElementById("main-content");
console.log(firSt1);



///////////////// Q1 - ii ///////////////////////

let str2 = firSt1.childNodes;
console.log(str2);


///////////////// Q1 - iii ///////////////////////
let renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
  }



///////////////// Q1 - iv /////////////////////// 
document.getElementById("first-name").value = "Farkhunda"; 



///////////////// Q1 - v /////////////////////// 
document.getElementById("last-name").value = "Saleem";
document.getElementById("email").value = "farkhunda2108@gmail.com";






////////////////////////// Q2 /////////////////////////


///////i////////
var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);


/////ii/////////
var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.childNodes[0].nodeType);


/////iii/////////////
var lastNameElement = document.getElementById("lastName");
lastNameElement.childNodes[0].nodeValue = "New Last Name";



/////iv/////////////
var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;

console.log(firstChild);
console.log(lastChild);



//////////v/////////////
var lastNameElement = document.getElementById("lastName");
var nextSibling = lastNameElement.nextSibling;
var previousSibling = lastNameElement.previousSibling;

console.log(nextSibling);
console.log(previousSibling);


/////vi/////////////
var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
var nodeType = emailElement.nodeType;

console.log(parentNode);
console.log(nodeType);