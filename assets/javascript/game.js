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
		one: new Card(120, 8, 12),

		two: new Card(100, 19, 5),

		three: new Card(150, 6, 15),

		four: new Card(180, 3 , 17),
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

	// click on an idle card to select
	idleArea.on("click", ".idle", function() {

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
				.html("player    <span><button class='btn' id='attackButton'>attack</button></span>");

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


		playerCard
			.find(".hp")
			.text(playerObj.health);

		defenderCard
			.find(".hp")
			.text(defenderObj.health);

		$("#lastAttack")
			.text(playerCard.find(".name").text() + 
			" attacked " + defenderCard.find(".name").text() + 
			" for " + playerObj.attack + 
			" damage!");

		$("#lastCAttack")
			.text(defenderCard.find(".name").text() +
			" counter attacked " + playerCard.find(".name").text() +
			" for " + defenderObj.cAttack + 
			" damage!");

		playerObj.attack += playerObj.baseAttack;

		if(defenderObj.health <= 0){

			defenderCard.detach();
			defenderCard = null;
			defenderObj = null;

			infoLine.text("select a new card to fight");

			if(idleArea.children().length === 1){
				alert("You win!");

				$("#buttonLine")
				.html("player <span><button class='btn' id='resetButton'>reset</button></span>");
			}

		}else if(playerObj.health <= 0){

			alert("You Lost!");

			$("#buttonLine")
			.html("player <span><button class='btn' id='resetButton'>reset</button></span>");

		}
	});

	$("#buttonLine").on("click", "#resetButton", function(){
		location.reload()
	});

});