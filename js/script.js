$(document).ready(function(){
	//Set options 
	var speed = 500; // fade speed
	var autoSwitch = true; // auto slider options
	var autoSwitchSpeed = 4000; // auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active'); 


	//Hide all slides
	$('.slide').hide(); 

	//Show first slide
	$('.active').show(); 
	

	// Next Handler
	$('#next').on('click', nextSlide);	 

	//Previous Handler
	$('#prev').on('click', previousSlide);

	// Auto slider handler
	if(autoSwitch == true){
		setInterval(nextSlide, autoSwitchSpeed); 
	}

	//Switch to the next slide 
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive'); 
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active'); 
		} else {
			$('.oldActive').next().addClass('active'); 
		}
		$('.oldActive').removeClass('oldActive'); 
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed); 
	}

	//Switch to the previous slide
	function previousSlide(){
		$('.active').removeClass('active').addClass('oldActive'); 
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active'); 
		} else {
			$('.oldActive').prev().addClass('active'); 
		}
		$('.oldActive').removeClass('oldActive'); 
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed); 
	}

}); 