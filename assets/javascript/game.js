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

	let bossTheme = $(".container").append("<audio>").find("audio");
	document.querySelector("audio").volume = .2;

	// hold the jQuery objects of the card
	let playerCard = null;
	let defenderCard = null;

	// hold the Card objects
	let playerObj = null;
	let defenderObj = null;

	// hold the jQuery objects of the zones
	let idleArea = $("#idle");
	let playerArea = $("#player");
	let defenderArea = $("#defense");

	let infoLine = $("#infoLine");

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


			$("#logo")
				.append("<button></button>")
				.find("button")
					.addClass("btn fa fa-pause")
					.attr("id", "pauseButton");

			switch (parseInt(playerCard.attr("id"))) {
				case 1:
					bossTheme.attr("src", "./assets/audio/dancer-ost.mp3");
					playerObj = cards.one;
					break;

				case 2:
					bossTheme.attr("src", "./assets/audio/nameless-king-ost.mp3");
					playerObj = cards.two;
					break;

				case 3:
					bossTheme.attr("src", "./assets/audio/pontiff-ost.mp3");
					playerObj = cards.three;
					break;

				case 4:
					bossTheme.attr("src", "./assets/audio/soul-of-cinder-ost.mp3");
					playerObj = cards.four;
					break;

			}

			bossTheme.trigger("play");

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
			.html("<strong>" + playerCard.find(".name").text() + "</strong>" +
			" attacked " + "<strong>" + defenderCard.find(".name").text() + "</strong>" +
			" for " + playerObj.attack + 
			" damage!");

		$("#lastCAttack")
			.html("<strong>" + defenderCard.find(".name").text() + "</strong>" +
			" counter attacked " + "<strong>" + playerCard.find(".name").text() + "</strong>" +
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

	$("#logo").on("click", "#pauseButton", function(){
		bossTheme.trigger("pause");

		$("#pauseButton").attr("id", "playButton").removeClass("fa-pause").addClass("fa-play");
	});

	$("#logo").on("click", "#playButton", function(){
		bossTheme.trigger("play");

		$("#playButton").attr("id", "pauseButton").removeClass("fa-play").addClass("fa-pause");
	});



});
