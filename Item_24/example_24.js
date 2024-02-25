$(document).ready(function() {

	$("a[href]").css("color", "red");

	$("#mySelect").change(function(){
		var selectedValue = $(this).val();
		$("#selectedOption").text(selectedValue);
	});

	$('.link a').hover(function() { 
		$(this).text($(this).text()+' ('+$(this).attr('href')+')'); // Додали до тексту атрибут href
		$(this).off(); // Відв'язали подію від елемента
	});
	
	$('p:not(.action)').on("dblclick", function() {
		var result = Math.pow($(this).text(), 2);
		$(this).text(result);
		
		if (result > 10000) {
			$(this).off("dblclick");
			console.log("Подію відв'язано, оскільки результат більше 10000.");
		}
	});
	
	$('#input').on("focus", function() {
		$('#input').attr("placeholder","Введіть текст та натисніть Enter");
	});
	
	$('#input').on("keydown", function() {
		if (event.keyCode == 13 ) {alert(event.keyCode)}
	});


    const inputField = $('#textInput');
    const outputDiv = $('#output');

    // Показываем подсказку при фокусе на input
    inputField.focus(function() {
        $(this).attr('placeholder', 'Введіть інформацію');
    });

    // При нажатии Enter, введенный текст помещается в div
    inputField.keypress(function(event) {
        if (event.key === 'Enter') {
            const inputValue = $(this).val().trim();
            if (inputValue !== '') {
                outputDiv.text(inputValue);
                $(this).val('');
            }
        }
    });

    // При нажатии Esc, очищаем input
    inputField.keydown(function(event) {
        if (event.key === 'Escape') {
            $(this).val('');
        }
    });
	
});