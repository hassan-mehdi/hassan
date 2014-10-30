(function($){
	$(document).ready(function(){
		$('#menu').delay(1000).queue(function( openmenu ) {
	         $(this).addClass('display-menu');
	         openmenu();
	    });

	    $('.about-menu-link').on('click', function(e){
			e.preventDefault();

			var linkTo = $(this).attr('href');

			$('html,body').animate({scrollTop : $(linkTo).offset().top - 60}, 1000, 'easeInOutCubic' );
		});

		var microscope = Snap("#microscope");
		var lens = microscope.select("#microscope-layer_2");

		function microscopeAnimation(){
			lens.stop().animate({transform: "r55,10,0"}, 2000, mina.elastic, function(){
				lens.animate({transform: 'r0, 0, 0'}, 3000, mina.elastic, function(){
					microscopeAnimation();
				});
			});
		};

		microscopeAnimation();

		var bubblesWrap = Snap('#bubble-1')
		,   bubble1     = bubblesWrap.circle(10, 10, 10)
		,   bubble2     = bubblesWrap.circle(70, 20, 15)
		,   bubble3     = bubblesWrap.circle(40, 50, 5);

		var bubble1Matrix = new Snap.Matrix();
			bubble1Matrix.scale(0.95,0.95);
			bubble1Matrix.translate(50,20);
			bubble1Matrix.rotate(320); 

		var bubble1MatrixInverted = bubble1Matrix.invert();


		var bubble2Matrix = new Snap.Matrix();
			bubble2Matrix.scale(0.95,0.95);
			bubble2Matrix.translate(40,20);
			bubble2Matrix.rotate(20); 

		var bubble2MatrixInverted = bubble2Matrix.invert();


		var bubble3Matrix = new Snap.Matrix();
			bubble3Matrix.scale(0.85,0.85);
			bubble3Matrix.translate(50,20);
			bubble3Matrix.rotate(310); 

		var bubble3MatrixInverted = bubble3Matrix.invert();

		var bubbles = bubblesWrap.group(bubble1, bubble2, bubble3);

		bubbles.attr({
			fill: '#CBCCD8'
		})

		function bubbleRotate(){
			bubbles.stop().animate({transform: 'r-365, 0, 0'}, 5000, mina.backin, function(){
				bubbles.animate({transform: 'r0, 0, 0'}, 5000, mina.backin, function(){
					bubbleRotate();
				});
			});
		};

		bubbleRotate();

		function bubble1Animation(){
			bubble1.animate({transform: bubble1Matrix}, 1000, mina.backout, function(){
				bubble1.animate({transform: bubble1MatrixInverted}, 1000, mina.backout, function(){
					bubble1Animation();
				});
			});
		};

		bubble1Animation();

		function bubble2Animation(){
			bubble2.stop().animate({transform: bubble2Matrix}, 1000, mina.backout, function(){
				bubble2.animate({transform: bubble2MatrixInverted}, 1000, mina.backout, function(){
					bubble2Animation();
				});
			});
		};

		bubble2Animation();

		function bubble3Animation(){
			bubble3.stop().animate({transform: bubble3Matrix}, 1000, mina.backout, function(){
				bubble3.animate({transform: bubble3MatrixInverted}, 1000, mina.backout, function(){
					bubble3Animation();
				});
			});
		};

		bubble3Animation();

		var compLine = Snap('#compLine');
		var linePoly = compLine.select('#linePoly');
		var xpts = ('0,23.05 6.744,23.05 22.91,41.45 39.66,23.05 50.078,23.05 66.744,9.325 86.16,23.05 90.582,23.05');
		var ypts = ('0,23.05 6.744,23.05 22.91,2.442 39.66,23.05 50.078,23.05 66.744,42.109 86.16,23.05 90.582,23.05');

		function lineShapAnimation(){
			linePoly.animate({"points":xpts},500,mina.linear, function(){
				linePoly.animate({"points":ypts},500,mina.linear, function(){
					lineShapAnimation();
				});
			});
		}

		lineShapAnimation();

		$('#about').waypoint(function(direction) {
			if(direction === 'up'){
				$(this).css({'opacity':'1'});
				$('#experience').removeClass('mobile-response')
			} else if (direction === 'down'){
				$(this).css({'opacity':'0'});
				$('#experience').addClass('mobile-response')
			};
		},{offset: -300});

		var windowHeight = $(window).height();

		$('.about-height').css({'height':windowHeight});

		$('.waypoint').waypoint(function(direction){
		}, {offset: 300});

		$('.waypoint').waypoint(function(direction) {
		  if (direction === 'down') {
			var thisID = $(this).attr('id');
			$('.about-menu ul li').find('a[href="#'+ thisID + '"]').addClass('active');
			$('.about-menu ul li').find('a').not('a[href="#'+ thisID + '"]').removeClass('active');
		  }
		}, {
		  offset: '200px'
		}).waypoint(function(direction) {
		  if (direction === 'up') {
		    var thisID = $(this).attr('id');
			$('.about-menu ul li').find('a[href="#'+ thisID + '"]').addClass('active');
			$('.about-menu ul li').find('a').not('a[href="#'+ thisID + '"]').removeClass('active');
		  }
		}, {
		  offset: '-200px'
		});

		$(window).stellar({
			horizontalScrolling: false
		});

		var responsiveDiagram = Snap('#responsive-shape');
		var shapeMorph = responsiveDiagram.path('M119.766,118.615c40.712-40.713,18.638-95.55,0-118.615C100.947-23.289,37.288-37.288,0,0	c-36.712,36.712-23.065,99.978,0,118.615C23.289,137.434,87.979,150.403,119.766,118.615z');

		responsiveDiagram.attr({
			fill: '#6B7092'
		});

		var shapeMatrix = new Snap.Matrix();
			shapeMatrix.scale(1,1);
			shapeMatrix.translate(180,-30);
			shapeMatrix.rotate(-270); 

		var shapeMatrix2 = new Snap.Matrix();
			shapeMatrix2.scale(0.7,0.7);
			shapeMatrix2.translate(600,300);
			shapeMatrix2.rotate(180);

		var shapeMatrix3 = new Snap.Matrix();
			shapeMatrix3.scale(0.5,0.5);
			shapeMatrix3.translate(430,550);
			shapeMatrix3.rotate(-45);

		function shapeAnimation(){
			shapeMorph.animate({transform: shapeMatrix}, 1000, mina.backout, function(){
				shapeMorph.animate({transform: shapeMatrix2}, 1000, mina.backout, function(){
					shapeMorph.animate({transform: shapeMatrix3}, 1000, mina.backout, function(){
						shapeAnimation();
					});
				});
			});
		};

		shapeAnimation();

		function responsiveShapeAnimation(){
			shapeMorph.animate({d: 'M139.766,118.615c20.969-20.969,18.638-95.55,0-118.615C120.947-23.289,41.172-21.172,20,0 C-0.968,20.968-3.065,99.978,20,118.615C43.289,137.434,118.594,139.787,139.766,118.615z'},1000,mina.backout, function(){
				shapeMorph.animate({d: 'M119.766,118.615V0c0,0-46.009,0-61.345,0C43.815,0,0,0,0,0v118.615H119.766z'},1000,mina.backout, function(){
					shapeMorph.animate({d: 'M119.766,118.615V0H0c0,0,44.697,44.265,59.596,59.02C74.639,73.918,119.766,118.615,119.766,118.615z'},1000,mina.backout, function(){
						responsiveShapeAnimation();
					});
				});
			});
		};

		responsiveShapeAnimation();

		var downloadBtn = Snap('#download-btn');
		var downloadBtnShape = downloadBtn.path('M87.607-40.788c71.596,0,129.635,56.56,129.635,128.155S159.203,217.001,87.607,217.001 c-71.595,0-129.636-58.039-129.636-129.634S16.012-40.788,87.607-40.788z');

		downloadBtnShape.attr({
			fill: '#44455c'
		});

        $('.download-btn-link').on('click', function(){
        	downloadBtnShape.animate({d: 'M175.215,60L87.607,175.215L0,60c0,0,39.223,54.188,87.607,54.188C135.991,114.188,175.215,60,175.215,60z'},1500,mina.elastic);
        	downloadBtnShape.animate({fill: '#fff'},500);

        	$('.download-btn-text').css({'top':'-20px'}).html('<img src="assets/img/svg/peace-out.svg">');
        });

        if($('html').hasClass('lt-ie10')){
	    	
	    } else {	    	
	    	$('.voidFade.downloadLink').on('click', function(){
	    		var href = $(this).attr('href');

	    		setTimeout(function(){window.location = href}, 2500);
	    		return false;
	    	});
	    }

	});
})(jQuery);