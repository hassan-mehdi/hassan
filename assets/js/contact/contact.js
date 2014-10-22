(function($){
	$(document).ready(function(){
		$('#menu').delay(1000).queue(function( openmenu ) {
	         $(this).addClass('display-menu');
	         openmenu();
	    });

        $('#contact-form').ajaxForm({beforeSubmit: validate});

        function validate(formData, jqForm, options) { 

		    var emailValue = $('input[name=email]').fieldValue()
		    ,   humanValue = $('input[name=human]').fieldValue()
		    ,   error      = emailValue;
		 
		    if (!emailValue[0]){
		    	$('input[name=email]').addClass('error');
		    	return false; 
		    } else if(!humanValue[0]) { 
		        $('input[name=human]').addClass('error');
		        return false; 
		    } 
		}

		$( document ).ajaxStart(function() {
        	$('.form-inner').css({'opacity':'0.05'});

        	if(Response.band(0,640)){
        		$('html,body').animate({scrollTop : 0}, 1000, 'easeInOutCubic' );
        	}
        	

			if($('html').hasClass('lt-ie10')){
				return false;
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

			$('.loader-shape-wrapper').delay(1000).queue(function( loaderDelay ) {
		         $(this).fadeIn('slow');
		         loaderDelay();
		    });			
        });

        $( document ).ajaxComplete(function(){
        	$('.loader-shape-wrapper').delay(500).queue(function( loaderOut ) {
        		$('.form-inner').fadeOut('slow');
		         $(this).fadeOut('slow');
		         loaderOut();
		    });
            $('#contact-form').delay(2000).queue(function( confirmDelay ) {
		         $(this).html('<h1 class="up">Job done. Thanks for the message!</h1><h2 class="up lite"><a href="/">Back to home</a></h2>');
		         confirmDelay();
		    });
        });
	});
})(jQuery);