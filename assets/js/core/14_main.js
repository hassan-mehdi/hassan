(function($){
	$(document).ready(function(){
		$('body').addClass('loaded');

		$("html").niceScroll({
			zindex: 10,
			cursorborderradius: 0,
			cursorborder: 'none',
			cursorwidth: 10,
			cursorcolor: '#44455c'
		});

	    $('.load-animation').delay(1000).queue(function( contentAnimation ) {
	         $(this).addClass('display-content');
	         contentAnimation(); // continue the queue
	    });

	    if($('html').hasClass('lt-ie10')){
	    	
	    } else {	    	
	    	$('a:not(.voidFade)').on('click', function(){
	    		$('body').removeClass('loaded');

	    		var href = $(this).attr('href');

	    		setTimeout(function(){window.location = href}, 1500);
	    		return false;
	    	});
	    }


		var menuIcon  = Snap('#menuIcon')
		,   line1     = menuIcon.select('#line1')
		,   line2     = menuIcon.select('#line2')
		,   line3     = menuIcon.select('#line3');

		var toggle = true;

		$('#menu').click( function() {

			$('#menuIcon-wrap').stop().delay(500).queue(function( nxt ) {
				if( toggle ) {
					buttonOn();
					toggle = false;
					
					$('#page-wrapper').stop().css({'opacity':'0.5'});
					
					$('#menuIcon-wrap').stop().delay(100).queue(function( menuDelay ) {
						$('#menu ul').stop().addClass('menu-active-list');
					    menuDelay();
					});
			    } else { 
			        buttonOff(); 
			        toggle = true; 
			    	$('#page-wrapper').stop().css({'opacity':'1'});
			    };

			    nxt();
			});

			$('#menu ul').stop().removeClass('menu-active-list');

			$('#menu').stop().toggleClass('menu-active');
			$('#page-wrapper').stop().toggleClass('active');
		} );

		function buttonOn() {
			line1.animate({transform: "r45,14,10"}, 1300, mina.elastic );

			line2.animate({transform: "r-45,17,25"}, 800, mina.elastic );

			line3.animate({opacity : '0'}, 100);
		};

		function buttonOff() {
			line1.animate({transform: "r0,0,0"}, 1300, mina.elastic );

			line2.animate({transform: "r0,0,0"}, 800, mina.elastic );

			line3.animate({opacity : '1'}, 100);
		};
	});
})(jQuery);