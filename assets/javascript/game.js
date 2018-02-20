$(document).ready(function() {

	function Card(hp, ap, cap) {
		this.hp = hp;
		this.ap = ap;
		this.cap = cap;
	}

	let cardOne = new Card(200, 9, 20);
	let cardTwo = new Card(180, 12, 22);
	let cardThree = new Card(220, 8, 18);
	let cardFour = new Card(200, 12, 30);

	let playerCard = null;
	let enemyCard = null;

	let idleArea = $("#idle");
	let playerArea = $("#player")
	let defenseArea = $("#defense")

	$(".character").on("click", function() {

		let char = $(this);
		placehold = char.detach();

		if (playerCard === null) {
			playerCard = char;
			playerArea.append(placehold);

			$("#infoLine").text("choose a card to fight")

		} else if (enemyCard === null) {
			enemyCard = char;
			defenseArea.append(placehold);

			$("#infoLine").html("<b>FIGHT!</b>")

			$("#playerText")
				.html("player <span><button id='attack'>attack</button></span>");

		} else {

			idleArea.prepend(placehold);
			if (char.parent().attr("id") === "defense") {
				enemyCard = null;
			} else if (char.parent().attr("id") === "player") {
				playerCard = null;
			}
		}
	});

	$("#attack").on("click", function() {
		console.log("cats");
		console.log(playerArea.children("<div>").attr("id"));
	});
});