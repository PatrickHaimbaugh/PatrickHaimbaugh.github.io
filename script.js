var CorrectMoves = 0;
function ClickHandler(e)
{
	//alert("Clicked a button");
	var element = $(this);
	element.css("background-color", "transparent");
		if(element.next("h1").text() === "Bomb"){
			$("button").css("background-color", "transparent");
			alert("Kaboom!");
			
		}
		else if (CorrectMoves === 12)
		{	
			$("button").css("background-color", "transparent");
			alert("YOU WON!");
		}
		CorrectMoves++;
	}
$(document).ready(
	function() {
		$("button").click(ClickHandler);
	}
);