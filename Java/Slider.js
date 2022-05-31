
	// Variables
	var imgItems = $('.Slider li').length;
	var imgPos = 1;
	
	//---------------------------


	$('.Slider li').hide();
	$('.Slider li:first').show();
	

	$('.Right span').click(nextSlider);
	$('.Left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 7000);



	//FUNCIONES ========================================================================

	function nextSlider(){
		if (imgPos >=imgItems) {imgPos = 1} 
		else {imgPos++;}
		
		$('.Slider li').hide();
		$('.Slider li:nth-child(' + imgPos + ')').fadeIn();
	}

	function prevSlider(){
		if (imgPos <= 1) {imgPos = imgItems;} 
		else {imgPos--;}
		
		$('.Slider li').hide();
		$('.Slider li:nth-child('+ imgPos + ')').fadeIn();
	}