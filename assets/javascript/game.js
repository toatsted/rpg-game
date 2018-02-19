$(document).ready(function(){
	$(".character").on("click", function(){
		let char = $(this);
		let id = char.attr("id");

		placehold = char.detach();
		$("#player").append(placehold);
	});
});

