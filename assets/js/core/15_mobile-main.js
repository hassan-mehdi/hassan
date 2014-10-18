(function($){
	var responsiveLogo = Snap('#hassan-logo');
	var h = responsiveLogo.select('#h');
	var a1 = responsiveLogo.select('#a1');
	var s1 = responsiveLogo.select('#s1');
	var a2 = responsiveLogo.select('#a2');
	var s2 = responsiveLogo.select('#s2');
	var n = responsiveLogo.select('#n');
	var topLogo = responsiveLogo.group(a1, s1);
	var bottomLogo = responsiveLogo.group(a2, s2, n);

	Response.action(function(e){
		
		if(Response.band( 640, 800 )){
			$('html').addClass('tablet');
			$('html').removeClass('mobile');
		}

		if(Response.band( 0, 639 )){
			$('html').removeClass('tablet');
			$('html').addClass('mobile');

			if($('html').hasClass('mobile-logo-active')){
				return false;
			} else {
				$('html').addClass('mobile-logo-active');

				topLogo.animate({transform:'s0 20 20'}, 800, mina.backin);
				bottomLogo.animate({transform:'s0 20 20'}, 300, mina.backin);

				$(document).delay(200).queue(function( mobileLogo2 ) {
					h.animate({transform:'s1 0 0'}, 1000, mina.elastic);
					h.animate({transform: 'r360 10 10'}, 1500, mina.elastic);
					h.animate({d:'M25.234-5.243l0.031,36.919c-0.009,0.94-0.481,1.406-1.425,1.396l-8.966-0.086 c-0.94-0.01-1.406-0.48-1.396-1.419l-0.065-13.427l-6.651-0.063l0.064,13.421c-0.009,0.941-0.484,1.404-1.426,1.395l-8.965-0.083 c-0.941-0.011-1.406-0.483-1.398-1.424L-4.994-5.532c0.009-0.94,0.484-1.406,1.427-1.397l8.965,0.084 c0.94,0.009,1.404,0.485,1.396,1.423L6.875,6.29l6.651,0.064l-0.081-11.71c0.006-0.938,0.48-1.405,1.424-1.396l8.968,0.087 C24.776-6.659,25.245-6.185,25.234-5.243z'}, 1000, mina.elastic);
					mobileLogo2();
				});
			}

		} else {
			$('html').removeClass('mobile-logo-active');

			topLogo.animate({transform:'s1 20 20'}, 800, mina.backout);
			bottomLogo.animate({transform:'s1 20 20'}, 300, mina.backout);

			$(document).delay(200).queue(function( mobileLogo1 ) {
				h.animate({transform: 'r-360 10 10'}, 1500, mina.elastic);
				h.animate({d:'M12.838,1.147L13.192,29.5c0.005,0.394-0.19,0.592-0.583,0.597l-3.755,0.047 c-0.394,0.005-0.593-0.189-0.598-0.583L8.105,17.495L5.32,17.53l0.151,12.067c0.005,0.394-0.189,0.592-0.583,0.598l-3.755,0.047 c-0.394,0.005-0.593-0.189-0.598-0.583L0.181,1.305C0.176,0.912,0.37,0.712,0.765,0.708L4.519,0.66 c0.394-0.005,0.593,0.19,0.598,0.583l0.142,11.35l2.785-0.035L7.902,1.209C7.897,0.815,8.091,0.616,8.485,0.611l3.755-0.047 C12.634,0.559,12.833,0.754,12.838,1.147z'}, 1000, mina.elastic);
				mobileLogo1();
			});
		}
	});
})(jQuery);