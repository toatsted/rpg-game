$(document).ready(function() {

	// genaric card object
	function Card(health, attack, cAttack) {
		this.health = health;
		this.attack = attack;
		this.cAttack = cAttack;
		this.baseAttack = attack;
	}

	// object to hold the cards
	let cards = {
		one: new Card(200, 18, 34),

		two: new Card(180, 19, 28),

		three: new Card(220, 17, 30),

		four: new Card(200, 20, 26),
	}

	// hold the jQuery objects of the card
	playerCard = null;
	defenderCard = null;

	// hold the Card objects
	playerObj = null;
	defenderObj = null;

	// hold the jQuery objects of the zones
	idleArea = $("#idle");
	playerArea = $("#player");
	defenderArea = $("#defense");

	infoLine = $("#infoLine");

	// click on an idle character to select
	$(".idle").on("click", function() {

		let clicked = $(this);

		if (playerCard === null) {

			playerCard = clicked;

			playerCard.removeClass("idle");
			playerCard.addClass("player");

			playerCard.detach();
			playerArea.prepend(playerCard);

			infoLine.text("choose a card to fight")

			switch (parseInt(playerCard.attr("id"))) {
				case 1:
					playerObj = cards.one;
					break;

				case 2:
					playerObj = cards.two;
					break;

				case 3:
					playerObj = cards.three;
					break;

				case 4:
					playerObj = cards.four;
					break;

			}

		} else if (defenderCard === null) {

			defenderCard = clicked;

			defenderCard.removeClass("idle");
			defenderCard.addClass("defender");

			defenderCard.detach();
			defenderArea.prepend(defenderCard);

			$("#buttonLine")
				.html("player <span><button id='attackButton'>attack</button></span>");

			infoLine.html("<strong>FIGHT!</strong>");

			switch (parseInt(defenderCard.attr("id"))) {
				case 1:
					defenderObj = cards.one;
					break;

				case 2:
					defenderObj = cards.two;
					break;

				case 3:
					defenderObj = cards.three;
					break;

				case 4:
					defenderObj = cards.four;
					break;

			}
		}
	});

	// click the attack button to attack
	$("#buttonLine").on("click", "#attackButton", function() {

		defenderObj.health -= playerObj.attack;
		playerObj.health -= defenderObj.cAttack;

		playerObj.attack += playerObj.baseAttack;

		playerCard
			.find(".hp")
			.text(playerObj.health);

		defenderCard
			.find(".hp")
			.text(defenderObj.health);


		if(defenderObj.health <= 0){

			defenderCard.detach();
			defenderCard = null;
			defenderObj = null;

			infoLine.text("select a new character to fight");

			if(idleArea.children().length === 1){
				alert("You win!");

				$("#buttonLine")
				.html("player <span><button id='resetButton'>reset</button></span>");
			}

		}else if(playerObj.health <= 0){

			alert("You Lost!");

			$("#buttonLine")
			.html("player <span><button id='resetButton'>reset</button></span>");

		}
	});

	$("#buttonLine").on("click", "#resetButton", function(){

	});

});