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
    
    
    $(function() {

			$("#slideshow div:gt(0)").hide();

			setInterval(function() {
			  $('#slideshow div:first')
			    .fadeOut(3000)
			    .next()
			    .fadeIn(3000)
			    .end()
			    .appendTo('#slideshow');
			},  5000);

		});
    
        $(function() {

			$("#slideshow2 div:gt(0)").hide();

			setInterval(function() {
			  $('#slideshow2 div:first')
			    .fadeOut(3000)
			    .next()
			    .fadeIn(3000)
			    .end()
			    .appendTo('#slideshow2');
			},  5000);

		});
    
    $(function() {

			$("#slideshow3 div:gt(0)").hide();

			setInterval(function() {
			  $('#slideshow3 div:first')
			    .fadeOut(3000)
			    .next()
			    .fadeIn(3000)
			    .end()
			    .appendTo('#slideshow3');
			},  5000);

		});
    
});