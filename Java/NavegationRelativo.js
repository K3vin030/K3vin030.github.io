jQuery('document').ready(function($){

	var menuBtn = $('.Menu_Icon'),
		menu = $('.Navegation ul');


	menuBtn.click(function(){

	if( menu.hasClass('Show') ) {

	   menu.removeClass('Show');
	} else {

		menu.addClass('Show');
	}
	});

});	