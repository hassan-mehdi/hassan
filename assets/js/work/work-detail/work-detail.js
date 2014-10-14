(function($){
	$(document).ready(function(){
		$('#menu').delay(1000).queue(function( openmenu ) {
	         $(this).addClass('display-menu');
	         openmenu();
	    });

	    var descHeight = $('#work-desc').innerHeight();
	    $('#work-desc').css({'height': descHeight});

		$('#designs').waypoint(function(direction) {
			if(direction === 'up'){
				$('#work-desc').css({'opacity':'1', 'height': descHeight, 'overflow':'visible', 'padding' : '15px'});
				$('.page-tools').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
			} else if (direction === 'down'){
				$('#work-desc').css({'opacity':'0', 'height':'0', 'overflow':'hidden', 'padding' : '0'});
				$('.page-tools').css({'opacity':'1', 'height': '120px', 'overflow':'visible', 'padding' : '0'});
			};
		});

		$('.backtoTop').on('click', function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop : 0}, 1000, 'easeInOutCubic' );
		});

		$("#info-wrap").sticky({getWidthFrom : '#work-sidebar', responsiveWidth : true });
	});
})(jQuery);