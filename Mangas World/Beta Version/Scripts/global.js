var number = 0;

// Clique no botão Próximo || Anterior na index
$("document").ready(function() {
	$("#btn-proximo").click(function() {
		number++;
		if(number > 4) {
			number = 0;
		}
		switch(number) {
			case 0:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_boku_no_hero_academia.webp");
				break;
			case 1:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_dragon_ball_super.png");
				break;
			case 2:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_naruto.png");
				break;
			case 3:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_one_punch_man.png");
				break;
			default:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_sword_art_online.png");
		}
	});

	$("#btn-anterior").click(function() {
		number--;
		if(number < 0) {
			number = 4;
		}
		switch(number) {
			case 0:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_boku_no_hero_academia.webp");
				break;
			case 1:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_dragon_ball_super.png");
				break;
			case 2:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_naruto.png");
				break;
			case 3:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_one_punch_man.png");
				break;
			default:
				$("#img-mudar").attr("src","Imagens\\Layout\\poster_sword_art_online.png");
		}
	});
});
