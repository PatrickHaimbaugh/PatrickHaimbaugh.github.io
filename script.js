vbcb  var CorrectMoves = 0;
function ClickHandler(e)
{
	//alert("Clicked a button");
	var element = $(this);
	element.css("background-color", "transparent");
		if(element.next("h1").class() === "bomb"){
			$("button").css("background-color", "transparent");
			alert("Kaboom!");
			
		}
		else if (CorrectMoves === 13)
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