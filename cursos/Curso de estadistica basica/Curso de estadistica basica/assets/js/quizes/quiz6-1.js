$('#check').on('click', function() {

	let responses1 = $('.quest0');

	for (let i=0; i<responses1.length; i++) {
		
		if (responses1[i].checked && responses1[i].value == '1') {
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
});