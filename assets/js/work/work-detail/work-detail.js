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

		var descHeight = $('#work-desc').innerHeight();

		$('#logo').waypoint(function(direction) {
			if(direction === 'up'){
				$('#work-desc').slideDown(500, 'easeInOutCirc');
				$('.page-tools').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
			} else if (direction === 'down'){
				$('#work-desc').slideUp(500, 'easeInOutCirc');
				$('.page-tools').css({'opacity':'1', 'height': '120px', 'overflow':'visible', 'padding' : '0'});
			};
		}, {offset: descHeight + 50 });

		$('.backtoTop').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop : 0}, 1000, 'easeInOutCubic' );
		});

		$("#info-wrap").sticky({getWidthFrom : '#work-sidebar', responsiveWidth : true });
	});
})(jQuery);