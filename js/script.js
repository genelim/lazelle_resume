$(document).ready(function() {
	
	/* Load Pages */
	$("#about").load("about.html"); 
	//$("#education").load("education.html"); 
	$("#experience").load("experience.html"); 
	$("#contact").load("contact.html"); 
	/*Nav Menu Scrolling Navigating */
	$('a').each( function() {
	    var a_tag = $(this);
	    var target = this.hash;
	    $(this).click(function (e) { 
	    	if ($(target).length) {
	    		e.preventDefault();
	            $('html, body').animate({
			        scrollTop: $(target).offset().top -0
			    }, 200);  
	    	}
	    });
	}); 
	$('.parallax').parallax(); 
});