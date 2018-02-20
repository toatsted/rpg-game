$(document).ready(function() {

	// genaric card object
	function Card(health, attack, cAttack) {
		this.health = health;
		this.attack = attack;
		this.cAttack = cAttack;
	}

	// object to hold the cards
	let cards = {
		one: new Card(200, 16, 24),

		two: new Card(180, 19, 18),

		three: new Card(220, 13, 20),

		four: new Card(200, 20, 16),
	}

	// hold the jQuery objects of the card
	playerCard = null;
	defenderCard = null;

	// hold the jQuery objects of the zones
	idleArea = $("#idle");
	playerArea = $("#player");
	defenderArea = $("#defense");

	// click on an idle character to select
	$(".idle").on("click", function() {

		let clicked = $(this);

		if (playerCard === null) {

			playerCard = clicked;

			playerCard.removeClass("idle");
			playerCard.addClass("player");

			playerCard.detach();
			playerArea.prepend(playerCard);

			$("#infoLine").text("choose a card to fight")

		} else if (defenderCard === null) {

			defenderCard = clicked;

			defenderCard.removeClass("idle");
			defenderCard.addClass("defender");

			defenderCard.detach();
			defenderArea.prepend(defenderCard);

			$("#buttonLine")
				.html("player <span><button id='attackButton'>attack</button></span>");

			$("#infoLine").html("<strong>FIGHT!</strong>");
		}
	});

	// click the attack button to attack
	$("#buttonLine").on("click", "#attackButton", function() {

	});

});