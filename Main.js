'use strict';
(function(){

var BasicCard = require('./BasicCard.js');
var ClozeCard=  require('./ClozeCard');
	
var firstTech = new BasicCard("Who were the founders of Microsoft?", "Bill Gates, Steve Balmer, Paul Allen");
// Who were the founders of Microsoft?
console.log(firstTech.front);
console.log(firstTech.back);


var secondTech = new BasicCard("Who is the founder of Linux?", "Linus Torvalds");
// Who is the founder of Linux?
console.log(secondTech.front);
console.log(secondTech.back);


var thirdTech = new BasicCard("What company is Alexas from", "Amazon");
// What company is Alexas from?
console.log(thirdTech.back);

var fourthTech = new BasicCard("Will Artifical Intelligence end humanity", "Yes");
// Will Artifical Intelligence end humanity?
console.log(fourthTech.front);

//Partial of Microsoft
var secondTechCloze = new ClozeCard("....were the...of Microsoft?")
	

var thirdTechCloze = new ClozeCard("Bill Gates, Steve Balmer, Paul Allen, were the founders of Microsoft")
console.log(thirdTechCloze.fulltext);


})();