$('#check').on('click', function() {

	let responses1 = $('.quest1');
	let responses2 = $('.quest2');
	let responses3 = $('.quest3');

	for (let i=0; i<responses1.length; i++) {
		
		if (responses1[i].checked && responses1[i].value == 'correct') {
			$("#response1").empty();
			$("#response1").append("¡Respuesta correcta!");
			$("#response1").css('color', 'green');
		}

		else if (responses1[i].checked) {
			$("#response1").empty();
			$("#response1").append("Respuesta incorrecta");
			$("#response1").css('color', 'red');
		}
	}

	for (let i=0; i<responses2.length; i++) {
		
		if (responses2[i].checked && responses2[i].value == 'correct') {
			$("#response2").empty();
			$("#response2").append("¡Respuesta correcta!");
			$("#response2").css('color', 'green');
		}

		else if (responses2[i].checked) {
			$("#response2").empty();
			$("#response2").append("Respuesta incorrecta");
			$("#response2").css('color', 'red');
		}
	}

	for (let i=0; i<responses3.length; i++) {
		
		if (responses3[i].checked && responses3[i].value == 'correct') {
			$("#response3").empty();
			$("#response3").append("¡Respuesta correcta!");
			$("#response3").css('color', 'green');
		}

		else if (responses3[i].checked) {
			$("#response3").empty();
			$("#response3").append("Respuesta incorrecta");
			$("#response3").css('color', 'red');
		}
	}
})