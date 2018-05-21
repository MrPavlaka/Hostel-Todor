  $(window).scroll(function() {
  	if($(document).scrollTop()) {
    	$('header').addClass('shrink');
		  $('ul').addClass('shrink');
    }
    else {
    $('header').removeClass('shrink',);
	  $('ul').removeClass('shrink',);
    }
  });

	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
	   $('proba').addClass('gore');
	   }
	});
