$(document).ready(function(){

	playerCard = null;
	defenderCard = null;

	idleArea = $("#idle");
	playerArea = $("#player");
	defenderArea = $("#defense");

	$(".character").on("click", function(){

		let clicked = $(this);

		if(clicked.hasClass("idle")){
			if(playerCard === null){

				playerCard = clicked;

				playerCard.removeClass("idle");
				playerCard.addClass("player");

				playerCard.detach();
				playerArea.prepend(playerCard);

				$("#infoLine").text("choose a card to fight")

			}else if(defenderCard === null){

				defenderCard = clicked;

				defenderCard.removeClass("idle");
				defenderCard.addClass("defender");

				defenderCard.detach();
				defenderArea.prepend(defenderCard);

				$("#buttonLine")
					.html("player <span><button id='attackButton'>attack</button></span>");

				$("#infoLine").html("<strong>FIGHT!</strong>");
			}
		}
	});

	$("#buttonLine").on("click", "#attackButton", function(){
	});

});