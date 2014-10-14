(function($){
	$('#menu').delay(1000).queue(function( openmenu ) {
         $(this).addClass('display-menu');
         openmenu();
    });


    $('.work-link').on('click', function(){

    	$('#menu').delay(1000).queue(function(hideMenu){
    		$(this).removeClass('display-menu');
    		hideMenu();
    	});

    	var href = $(this).attr('href');

    	setTimeout(function(){window.location = href}, 1500);
    	return false;

    });

})(jQuery);