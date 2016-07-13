// var msg ='Sign up to recieve our newsletter for 10% off!';
// var msg1 = "Hello";
// var msg2 = "Thanks for visiting my page";
// var msg3 = "Goodbye, Have a great day!";
var tit = "Three things that I want out of this class"
var un = "1. I want to be able to understand code"
var write = "2. I want to be able to write my own code"
var web = "3. I want to be able to create my own websites"
function updateMessages(){

	// var el8 = document.getElementById('message');
	// var el1 = document.getElementById('helloUser');
	// var el2 = document.getElementById('howAreYou');
	// var el3 = document.getElementById('goodbye');
	var el4 = document.getElementById('title');
	var el5 = document.getElementById('Understand');
	var el6 = document.getElementById('wr');
	var el7 = document.getElementById('webs');
	// el8.textContent = msg;
	// el1.textContent = msg1;
	// el2.textContent = msg2;
	// el3.textContent = msg3;
	el4.textContent = tit;
	el5.textContent = un;
	el6.textContent = write;
	el7.textContent = web;
}

updateMessages();




var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) + 1);

el.innerHTML = '<h1>random number</h1><h2>' + randomNum + '</h2>';