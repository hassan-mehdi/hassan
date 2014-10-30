(function($){
	$(document).ready(function(){
		$('#menu').delay(1000).queue(function( openmenu ) {
	         $(this).addClass('display-menu');
	         openmenu();
	    });

	    echo.init({
	    	offset: -50,
	    	throttle: 1,
	    	unload: false,
	    	callback: function (element, op) {
	    		$(element).addClass('fadeIn');
	    	}
	    });

		var descHeight = $('#info-wrap').height();

		Response.action(function(){
			if(Response.band(0,991)){
				$('.work-nav-wrap').waypoint(function(direction) {
					if(direction === 'up'){
						$('.page-tools').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
						$(".work-nav-wrap").removeClass('sticky');
					} else if (direction === 'down'){
						$('.page-tools').css({'opacity':'1', 'height': '120px', 'overflow':'visible', 'padding' : '0'});
						$(".work-nav-wrap").addClass('sticky');
					};
				}, {offset: 80});				
			} else {
				$(".work-nav-wrap").removeClass('sticky');
				$("#info-wrap").addClass('sticky');
				$('#logo').waypoint(function(direction) {
					if(direction === 'up'){
						$('.page-tools').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
						$('#page-title').slideDown(800, 'easeInOutCirc');
						$('#work-desc').slideDown(1600, 'easeInOutCirc');
					} else if (direction === 'down'){
						$('#page-title').slideUp(800, 'easeInOutCirc');
						$('#work-desc').slideUp(1600, 'easeInOutCirc');
						$('.page-tools').css({'opacity':'1', 'height': '120px', 'overflow':'visible', 'padding' : '0'});
					};
				}, {offset: -200 });
			}
		});


		$('.backtoTop').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop : 0}, 1000, 'easeInOutCubic' );
		});

	});
})(jQuery);