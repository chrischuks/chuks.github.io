
var myImage = document.querySelector("img");

myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === "images/moz_icon.jpg") {
	myImage.setAttribute("src", "images/app.jpg");
} else if (mySrc === "images/app.jpg") {
	myImage.setAttribute("src", "images/nice.jpg");
} else {myImage.setAttribute("src", "images/moz_icon.jpg");
} }

var button = document.querySelector("button");
var heading = document.querySelector('h1');

function setUserName() {
var myName = prompt('please Enter your name.');
localStorage.setItem('name', myName);
heading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
heading.textContent = 'Mozilla is cool, ' + storedName;
} 

button.onclick = function() {
setUserName();
}