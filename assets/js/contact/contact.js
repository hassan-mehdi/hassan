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

			var loaderShape = Snap('#loader-shape')
			, loaderProgress = loaderShape.select('#progressor');

			var loaderMatrix = new Snap.Matrix();
				loaderMatrix.scale(0,0);
				loaderMatrix.translate(0,0);
				loaderMatrix.rotate(270);

			function loader(){
				loaderProgress.animate({transform: 'r3600 50 50'}, 10000, mina.easeinout, function(){
					loaderProgress.animate({transform: 'r0 50 50'}, 10000, mina.easeinout, function(){
						loader();
					});
				});
			}

			loader();
			$('#loader-shape').delay(1000).queue(function( loaderDelay ) {
		         $(this).fadeIn('slow');
		         loaderDelay();
		    });			
        });

        $( document ).ajaxComplete(function(){
        	$('#loader-shape').fadeOut('slow');
            $('.form-inner').fadeOut('fast');
            $('#contact-form').html('<h1 class="up">Job done. Thanks for the message!</h1><h2 class="up lite"><a href="/">Back to home</a></h2>');
        });

        var downloadBtn = Snap('#svg');
        var shapeMorph = downloadBtn.path('M87.607,1c48.384,0,87.606,38.223,87.606,86.607s-39.223,87.606-87.606,87.606S0,135.991,0,87.607	S39.223,1,87.607,1z');

        downloadBtn.attr({
        	fill: '#6B7092'
        });

        $('#downloadBtn').on('click', function(){
        	shapeMorph.animate({d: 'M175.215,60L87.607,175.215L0,60c0,0,39.223,54.188,87.607,54.188C135.991,114.188,175.215,60,175.215,60z'},1000,mina.elastic);
        });

	});
})(jQuery);