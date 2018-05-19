$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('header').addClass('shrink');
		$('ul').addClass('shrink');
    }
    else {
    $('header').removeClass('shrink',);
	 $('ul').removeClass('shrink',);
    }
  });
});
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollBot() < 50) {
    	$('header').addClass('shrink');
		$('ul').addClass('shrink');
    }
    else {
    $('header').removeClass('shrink',);
	 $('ul').removeClass('shrink',);
    }
  });
});
