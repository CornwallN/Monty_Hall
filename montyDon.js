
var chosenDoor;
var doorToOpen;
var doorsArray = ["Door-One", "Door-Two", "Door-Three"];
var winningDoor;
var secondTime = false;
var theLoserDoor;

function chooseRandom(array) {
	return array[Math.floor(Math.random()*array.length)];
}

function generateWinner() {
	winningDoor = chooseRandom(doorsArray);
}

window.onload = generateWinner();

// second round open the door
function openDoor(door) {
	var openThis = door
	if (door === winningDoor) {
		$("H2").html("You Won!")
	} else {
		$("H2").html("You lost")
	}
}

function tryAgain () {
	openLoserDoor() 
}

function changeMind () {
	$("H2").html("Do you want to change your mind?")


}

function openLoserDoor() {
	// Choose a random door from the three
	doorToOpen = chooseRandom(doorsArray);

	var test = doorToOpen !== winningDoor
	var test2 = doorToOpen !== chosenDoor

	// console.log(test);
	// console.log(test2);
	// Check it's not the winning door and not the already chosen door
	if (test && test2) {
		// Assign theLoserDoor to the id and display NOT ME
		theLoserDoor = doorToOpen
		$("#" + theLoserDoor).html("NOT ME!");
		$("#" + theLoserDoor).removeClass('clickable');
		//Display change mind message
		changeMind();
	} else {
		// run this function again to find Loser door
		tryAgain();
	}	

}


$(document).ready(function (){
	$( "button.clickable" ).click(function() {
		if (secondTime && $(this).attr('id') !== theLoserDoor ) {
			openDoor($(this).attr('id'));
		}
		if ($(this).hasClass('clickable')) {
			// set chosenDoor to button clicked on
		  chosenDoor = $(this).attr('id');
		  // remove clickable class
		  $(this).removeClass('clickable');
		  $(this).addClass('chosen');
		  secondTime = true;
		  openLoserDoor()
		  
		}

	});
})
