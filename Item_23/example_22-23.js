$(document).ready(function() {

	$('#start').on("click", function() {
		$(this).remove();
		$('h2').after(
			'<li id="num_1">Обгрнути список в тег ol (wrapAll)</li>'+
			'<li id="num_2">Додати елемент на початок вибірки (prepend)</li>'+
			'<li id="num_3">Додати елемент у кінець вибірки (append)</li>'+
			'<li id="num_4">Цей пункт зайвий у списку. Видаліть його (remove)</li>'+
			'<li id="num_5">Вставити перед елементом вибірки (before)</li>'+
			'<li id="num_6">Вставити після елемента вибірки (after)</li>'
		);
		$('h2').after('<div id="instr">Для демонстрації деяких можливостей роботи '+ 
			'зі структурою сторінки виберіть та натисніть відповідний пункт списку, (починати з 1-го).</div>');
	});

	$('body').on("click", "#num_1", function() { 
		$('li').wrapAll('<ol></ol>');
		$('#num_1').remove();
	});
	
	$('body').on("click", "#num_2", function() { 
		$('ol').prepend('<li class="add">Пункт додано на початок списку методом prepend</li>');
	});
	
	$('body').on("click", "#num_3", function() { 
		$('ol').append('<li class="add">Пункт додано до кінця списку методом append</li>');
	});

	$('body').on("click", "#num_5", function() { 
		$(this).before('<li class="add">Пункт вставлений методом before</li>');
	});

	$('body').on("click", "#num_6", function() { 
		$(this).after('<li class="add">Пункт вставлений методом after</li>');
	});

	$('body').on("click", "#num_4", function() { 
		$(this).remove();
	});


	var rowCounter = 2;
    
    $('#addPersonal').on('click', function() {
        var personalData = $('#personalData').val();
        if (personalData !== '') {
            $('<tr><td>' + rowCounter + '</td><td>' + personalData + '</td><td><button class="insert-before">Вставити ДО</button></td><td><button class="insert-after">Вставити ПІСЛЯ</button></td><td><button class="delete-row">Видалити</button></td></tr>').appendTo('#myTable tbody');
            $('#personalData').val('');
            rowCounter++;
        } else {
            alert('Будь ласка, введіть ПІБ');
        }
    });

    $(document).on('click', '.delete-row', function() {
        $(this).closest('tr').remove();
    });

    $(document).on('click', '.insert-before', function() {
        var newRow = $('<tr><td>' + rowCounter + '</td><td>Новий елемент</td><td><button class="insert-before">Вставити ДО</button></td><td><button class="insert-after">Вставити ПІСЛЯ</button></td><td><button class="delete-row">Видалити</button></td></tr>');
        newRow.insertBefore($(this).closest('tr'));
        rowCounter++;
    });

    $(document).on('click', '.insert-after', function() {
        var newRow = $('<tr><td>' + rowCounter + '</td><td>Новий елемент</td><td><button class="insert-before">Вставити ДО</button></td><td><button class="insert-after">Вставити ПІСЛЯ</button></td><td><button class="delete-row">Видалити</button></td></tr>');
        newRow.insertAfter($(this).closest('tr'));
        rowCounter++;
    });

    $('h2').on('click', function() {
        $('#myTable tbody').html('<tr><td>1</td><td>Прізвище Ім\'я По-батькові</td><td><button class="insert-before">Вставити ДО</button></td><td><button class="insert-after">Вставити ПІСЛЯ</button></td><td><button class="delete-row">Видалити</button></td></tr><tr class="personal-row"><td></td><td><input type="text" id="personalName"></td><td><button class="insert-before">Вставити ДО</button></td><td><button class="insert-after">Вставити ПІСЛЯ</button></td><td><button class="delete-row">Видалити</button></td></tr>');
        rowCounter = 2;
    });
	
});