$(document).ready(function() {

	function Character(hp, ap, cap){
		this.hp = hp;
		this.ap = ap;
		this.cap = cap;
	}

	let player = null;
	let enemy = null;

	$(".character").on("click", function() {

		let char = $(this);
		placehold = char.detach();

		if (char.parent("#idle")) {
			if (player === null) {

				player = char;
				$("#player").append(placehold);
			} else if (enemy === null){

				enemy = char;
				$("#defense").append(placehold);

				$("#playerText").html("player <span><button id='attack'>attack</button></span>");
			} else {
				$("#idle").append(placehold);
			}
		}
	});
});