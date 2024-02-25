$(document).ready(function() {

	// ==================== 1 ================
	// Вивести перші два заголовки червоним
	$('h3:lt(2)').addClass('red');
	// При кліку на останній заголовок змінити його колір на зелений та текст
	$('h3:last').click(function(){
		$(this).addClass('green').text('Задания для выполнения');
	});

	// =================== 2 =================
	// Задання початкових стилів для checkbox-ів
	$('input[type="checkbox"]:checked').next().addClass('checked');
	$('input[type="checkbox"]:not(:checked)').next().addClass('unchecked');

	// При зміні стану checkbox
	$('input[type="checkbox"]').change(function(){
		// Визначення, чи був checkbox відмічений чи ні
		if ($(this).prop('checked')) {
			$(this).next().removeClass('unchecked').addClass('checked').text('отмечен');
		} else {
			$(this).next().removeClass('checked').addClass('unchecked').text('не выбран');
		}
	});
		
	// =================== 3 =================	
	$('#checkButton').click(function(){
        var formFilled = true;
        // Перевірка кожного поля форми
        $('#myForm input[type="text"], #myForm input[type="number"]').each(function(){
            if ($(this).val() === '') {
                formFilled = false;
            }
        });
        if (!$('#myForm input[type="checkbox"]').is(':checked')) {
            formFilled = false;
        }
        // Вивід повідомлення про заповненість форми
        if (formFilled) {
            alert('Форма заповнена');
        } else {
            alert('Будь ласка, заповніть усі поля, включаючи поле для вибору');
        }
    });


	// =================== 4 =================
	$('#mySelect').change(function(){
        var selectedValue = $(this).val();
        $('input[name="radio_button"]').prop('checked', false); // Знімаємо попередній вибір
        $('input[name="radio_button"][value="' + selectedValue + '"]').prop('checked', true); // Вибираємо потрібну радіокнопку
    });


	$('#atr').on("click", function() {
		let title = $(this).attr('title');
		if (typeof title === 'undefined') { 
			$(this).attr("title","Нажмите эту кнопку для удаления атрибута title").text('Удалить атрибут')
			.removeClass('green').addClass('red').next().html("Нажмите эту кнопку для удаления атрибута<span>title</span>");
		} else { 
			$(this).removeAttr('title').text('Установить атрибут').removeClass('red').addClass('green')
			.next().html("Атрибут<span> отсутствует</span>");
		}
	});
	
	$('#select').on("click", function() {
		var num_box = $('input[type="number"]').val(); 
		if (num_box > 5) {
			$('input[type="checkbox"]').prop('checked', false);
		} else {
			$('input[type="checkbox"]:nth-of-type('+num_box+')').prop('checked', true);
			
		}
	});
	
});