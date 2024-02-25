$(document).ready(function() {

	$("#openModal").click(function(){
		$("#myModal").css("display", "block");
	  });
	  
	  $(".close").click(function(){
		$("#myModal").css("display", "none");
	  });
	  
	  $(window).click(function(event){
		if(event.target == document.getElementById('myModal')) {
		  $("#myModal").css("display", "none");
		}
	});


	$('.accordion-header').click(function() {
		$(this).toggleClass('active');
		$(this).next('.accordion-content').slideToggle();
		$('.accordion-content').not($(this).next()).slideUp();
		$('.accordion-header').not($(this)).removeClass('active');
	});

	var sidebarVisible = false;

	$('.openbtn').click(function(){
	  if (!sidebarVisible) {
		$('.sidebar').css('width', '250px');
		$('#main').css('marginRight', '250px');
		sidebarVisible = true;
	  } else {
		$('.sidebar').css('width', '50px');
		$('#main').css('marginRight', '50px');
		sidebarVisible = false;
	  }
	});
  
	$('.sidebar a').click(function(){
	  $('.sidebar').css('width', '50px');
	  $('#main').css('marginRight', '50px');
	  sidebarVisible = false;
	});

//	Методи show, hide, toggle
	$('#hide').on("click", function() {
		$('#block').hide(1000);
	});
	
	$('#show').on("click", function() {
		$('#block').show(1000);
	});
	
	$('#toggle').on("click", function() {
		$('#block').toggle(500, function() {
			if ($('#toggle').html() == 'Сховати') {
				$('#toggle').html('Показати');
			} else {
				$('#toggle').html('Сховати');
			}
		});
	});

//	Методи slide (Up, Down, Toggle)

	$('#up').on("click", function() {
		$('#block').slideUp(1000);
	});
	
	$('#down').on("click", function() {
		$('#block').slideDown(1000);
	});
	
	$('#s_toggle').on("click", function() {
		$('#block').slideToggle(500, function() {
			if ($('#s_toggle').html() == 'Згорнути') {
				$('#s_toggle').html('Розгорнути');
			} else {
				$('#s_toggle').html('Згорнути');
			}
		});
	});
	
//	Методи fade (In, Out, To, Toggle)	

	$('#out').on("click", function() {
		$('#block').fadeOut(1000);
	});
	
	$('#in').on("click", function() {
		$('#block').fadeIn(1000);
	});
	
	$('#to').on("click", function() {
		if ($(this).html() == 'Затемнити') {
			$('#block').fadeTo(1000, 0.4);
			$(this).html('Освітлити');
		} else {
			$('#block').fadeTo(1000, 1);
			$(this).html('Затемнити');
		}
	});
	
	$('#f_toggle').on("click", function() {
		$('#block').fadeToggle(1500, function() {
			if ($('#f_toggle').html() == 'Сховати') {
				$('#f_toggle').html('Показати');
			} else {
				$('#f_toggle').html('Сховати');
			}
		});
	});
	
	// $('#anim').on("click", function(){
    //      $('#img').animate({ opacity: 0.5,
    //             'margin-left': '50',
    //             height: '200'});
    // });

	var isAnimating = false;

	$('#anim').on("click", function(){
	  if (!isAnimating) {
		isAnimating = true;
		$('#img').animate({ 
		  opacity: 0.5,
		  'margin-left': '50px', 
		  height: '200px' 
		}, function() {
		  isAnimating = false;
		});
	  } else {
		
		$('#img').stop().css({
		  opacity: 1,
		  'margin-left': 0,
		  height: '150px'
		});
		
		isAnimating = false;
	  }
	});
	
});