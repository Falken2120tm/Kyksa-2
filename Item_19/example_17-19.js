$(document).ready(function() { 

	// 1. Вивести алертом кількість завдань
	var tasksCount = $('ol li').length;
	alert("Кількість завдань: " + tasksCount);

	// 2. Вибрати першу li на сторінці (позначити червоним)
	$('ol li:first-child').addClass('red');

	// 3. Вибрати першу li на сторінці з класом "filtr" (відзначити червоним)
	$('ol li.filtr:first').addClass('red');

	// 4. Вибрати останню li в ol (відзначити червоним)
	$('ol li:last-child').addClass('red');

	// 5. Вибрати всі парні li (відзначити червоним)
	$('ol li:even').addClass('red');

	// 6. Знайти батька елемента li з класом "fff" (зробити сірий фон)
	$('li.fff').parent().addClass('grey-background');

	// 7. Вибрати перші 4 li списка ul та перші 2 li списка ol (відзначити червоним)
	$('ul li:nth-child(-n+4), ol li:nth-child(-n+2)').addClass('red');

	// 8. Вибрати останній елемент button (відзначити червоним)
	$('button:last').addClass('red');


//	Оновити сторінку
	$('#refresh').on("click", function() { 
		location.reload();
	});
//	Вивести номер елемента у списку при "кліку" на ньому
	$('ol > li').on('click', function() {
		alert($(this).index('ol li')+1);
	});
//	Вибрати всі елементи а, атрибут title яких містить apple
	$('#link').on("click", function() { 
		console.log(this);
		$('a[title*="apple"]').css("color","red");
	});
/*	********************************	*/
/*	 Демонстрація можливостей jQuery	*/
/*	********************************	*/
	$('#div').on("click", function() {
		$("#title") // Отримали посилання на елемент з id=title
		.text("Заголовок блоку")
		.css({"color": "orange","font-size":"30px"}) // Задали колір
		.parent() // Отримали посилання на батьківський елемент
		.css("background-color", "#fff4dd") // Задали колір фона parent
		.width(400) // Ширина
		.height(150) // Висота
		.parent().css("background-color", "#ffc4dd");
	});

	/*
	$('#div').on("click", function() {
		$("#title").text("Заголовок блоку").css("color", "orange").parent().css("background-color", "#fff4dd")
			.width(400).height(150).parent().css("background-color", "#ffc4dd");
	});
	*/
	
/*	********************	*/
/*	Приклади на селектори.	*/
/* 	Для перегляду прикладу,	*/
/* 	приберіть коментар	*/
/*	********************	*/
	$('#select').on("click", function() {
//	Вибрати всі теги h3
//		$('body h3').css("color","green");
//	Вибрати всі теги h3 дочірні для body
//		$('body > h3').css("color","red");
//	Вибрати 2-й дочірній li
//		$('li:nth-child(2)').css("color","red");
//	1-му елементу списку ul замінити текст
//		$('ul li').eq(0).text('Вибірка за назвою тега');
//		$('ul>li:first').text('Вибірка за назвою тега');
//	Вибрати елементи h3, які містять текст "елемент"
//		$('h3:contains("елемент")').css("color","green");
//	Вибрати всі елементи між елементами з касами fff та filtr
//		$('.fff').nextUntil('.filtr').css("color","orange");
//	Вибрати всіх сусідів li крім li з класом filtr
//		$('li').siblings(':not(.filtr)').css("color","navy");
//	Виведіть алертом вміст усіх заголовків h3
//		$('h3').each(function(){
//			alert($(this).text())
//		}); 
//	Знайдіть найближчих div-батьків тегів h3
//		$('h3').closest('div').css("border","1px solid red");
	});
/*	**********************	*/
/*	Завдання для виконання	*/
/*	**********************	*/
//	Шаблон для виконання завдань
	$('#run').on("click", function() {
		
	});
	
});