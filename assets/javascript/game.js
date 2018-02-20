$(document).ready(function() {

	function Character(hp, ap, cap){
		this.hp = hp;
		this.ap = ap;
		this.cap = cap;
	}

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

			$("#infoLine").text("Character to fight")

		} else if (enemyCard === null){
			enemyCard = char;
			defenseArea.append(placehold);

			$("#infoLine").html("<b>FIGHT!</b>")

			$("#playerText")
				.html("player <span><button id='attack'>attack</button></span>");
			
		} else {

			idleArea.prepend(placehold);
		}
	});
});
