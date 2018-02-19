$(document).ready(function(){
	let player = null;

	$(".character").on("click", function(){
		let char = $(this);
		placehold = char.detach();

		if(char.parent("#idle")){
			if(player === null){
				player = char;
				$("#player").append(placehold);
			}else{
				$("#defense").append(placehold);
			}
		}

	});
});