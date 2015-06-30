
var chosen = [];

function generateDoors() {
	'use strict';

	var doorsArray = [false, false, false];

	var winningIndex = chooseRandomArrayIndex(doorsArray);

	doorsArray[winningIndex] = true;

	return doorsArray;

}

function chooseRandomArrayIndex(array) {
	return Math.floor(Math.random()*array.length);
}

function chooseDoor(choice, chosen, doorsArray) {
	var notUsed = chosen.indexOf(choice) === -1;

	if (!notUsed) {
		throw new Error("Already Chosen");
	}

	chosen.push(choice);
	
	var allFalseDoorArray = []; 

	for (var i = 0; i < 3; i++){
		if (doorsArray[i] !== true){
			allFalseDoorArray.push[i]
			
		}
	}
	var remainingFalseDoorArray = allFalseDoorArray.filter(function(element){
		return chosen.indexOf(element) === -1;
	});


	var remainingFalseDoorIndex = chooseRandomArrayIndex(remainingFalseDoorArray);

}



