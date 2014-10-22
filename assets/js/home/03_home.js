(function($){
	$(document).ready(function(){

		var windowHeight = $(window).height();

		if(Response.band(0,640)){
			$('#logo').fadeIn(1000, 'easeInOutCirc');
			$('.loader-shape-wrapper').fadeOut(500, 'easeInOutCirc');
			$('#bgvideo').delay(1000).fadeIn(3000, 'easeInOutCirc');				      	
			$('.intro').fadeIn(9000, 'easeInOutCirc');
		} else {
			if($('html').hasClass('lt-ie10')){
				$('#loader-shape').remove();
			} else {
				function loader(){
					var loaderShape = Snap('#loader-shape')
					, loaderProgress = loaderShape.select('#progressor');

					loaderProgress.animate({transform: 'r3600 50 50'}, 10000, mina.easeinout, function(){
						loaderProgress.animate({transform: 'r0 50 50'}, 10000, mina.easeinout, function(){
							loader();
						});
					});
				}

				loader();
			}

			$('.loader-shape-wrapper').fadeIn(500);

			$.html5Loader({
		      filesToLoad:    '/preload.json', // this could be a JSON or simply a javascript object
		      onComplete:         function () {
		      	$('#logo').fadeIn(1000, 'easeInOutCirc');
		      	$('.loader-shape-wrapper').fadeOut(500, 'easeInOutCirc');
		      	$('#bgvideo').delay(1000).fadeIn(3000, 'easeInOutCirc');				      	
		      	$('.intro').fadeIn(9000, 'easeInOutCirc');

		      	$('#bgvideo').videoBG({
		      		position:"absolute",
		      		zIndex:-1,
		      		mp4:'/assets/video/bg.mp4',
		      		ogv:'/assets/video/bg.ogv',
		      		webm:'/assets/video/bg.webm',
		      		poster:'/assets/video/bg.jpg',
		      		opacity:1,
		      		fullscreen:true,
		      		loop: true,
		      		scale: true
		      	});
		      }
		  });
		}
		
		$('#bgvideo').waypoint(function(direction) {
			if(direction === 'up'){
				$(this).fadeIn(2000);
				$('#splash').css('opacity','1');
			} else if (direction === 'down'){
				$(this).fadeOut(200);
				$('#splash').css('opacity','0');
			}
		}, { offset: -50 });

		$('#splash').click(function(){
			$('html,body').animate({
				scrollTop: $("#home-menu").offset().top
			}, 800 );
		});

		$('#home-menu').waypoint(function(direction2) {
			if(direction2 === 'up'){
				$(this).css({'background':'#0b0c1c','opacity':'0'});
			} else if (direction2 === 'down'){
				$(this).css({'background':'#191a2c','opacity':'1'});
			};
		}, {offset: 50});

		$('.row').css({'height' : windowHeight});

		$('.row').windows({
            snapping: true,
            snapSpeed: 800,
            snapInterval: 3000
        });

        $('.option-link').click(function(){
        	
        	$('.option-link').not(this).parent('.option').css({ 'width' : '0', 'height' : '0', 'border' : '0', 'overflow' : 'hidden'});
        	$(this).parent('.option').css({ 'width' : '100%', 'height' : '100%' });

        	$(this).children('.menu-svg').delay(500).queue(function(next){
        		$(this).css({ 'margin-top' : '-100px', 'opacity' : '0' }).parent().addClass('menu-svg-rotate');
        	});

        	$(this).children('h3').delay(500).queue(function(next){
        		$(this).css({ 'margin-top' : '50%', 'opacity' : '0' });
        	});

        	var href = $(this).attr('href');

        	setTimeout(function(){window.location = href}, 1200);
        	return false;

        });
	});
})(jQuery)