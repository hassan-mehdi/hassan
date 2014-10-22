(function($){
	$(document).ready(function(){
		$('#menu').delay(1000).queue(function( openmenu ) {
	         $(this).addClass('display-menu');
	         openmenu();
	    });

		var descHeight = $('#work-desc').innerHeight();

		var scrollOffset = descHeight;

		$('#work-detail').waypoint(function(direction) {
			if(direction === 'up'){
				$('#work-desc').slideDown(500, 'easeInOutCirc');
				$('.page-tools').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
			} else if (direction === 'down'){
				$('#work-desc').slideUp(500, 'easeInOutCirc');
				$('.page-tools').css({'opacity':'1', 'height': '120px', 'overflow':'visible', 'padding' : '0'});
			};
		}, {offset: scrollOffset });

		$('.backtoTop').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop : 0}, 1000, 'easeInOutCubic' );
		});

		$("#info-wrap").sticky({getWidthFrom : '#work-sidebar', responsiveWidth : true });
	});
})(jQuery);