$(function(){
    
    $('#abtn').click(function(event){
        event.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#abt').offset().top)
		},1000);
    });
    
    $("#abtBtn2").click(function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: ($("#abt").offset().top)
        },1000);
    });

    $('#prtbtn').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#prt').offset().top)
		},1000);
    });
    
    $('#conbtn').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#con').offset().top)
		},1000);
    });
});