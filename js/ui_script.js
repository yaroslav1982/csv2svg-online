if(window.navigator.userAgent.includes('Firefox')){
	$('textarea').addClass('moz_wrap');
}

if ( (typeof window.orientation == "undefined") || (! navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) ){
	$("#scrollLock").hide();	
}else{
	$("#print_button").remove();
}

$('#calc_button').on('click',function(){
	$('#data_block').slideDown('fast');
	$('#next_button').fadeIn('fast');
});

$('#preview_button').on('click',function(){
	$('#div0').show();
	$('#min_max_block').show();
	$('html,body').animate({
		scrollTop: $(".pointer").offset().top},
		'medium');
});

$('.hideable_title').on('click',function(a){
	$(this.nextElementSibling).toggle();
	$(this).find('p').toggleClass('hide_icon');
});

$('#plot_button').on('click',function(){
	$('#plotly0').show();
	$("#save_button").show(); 
	$('#drawing_tools > div').show();
	$('#saveable_block').show();

});

$('#fileToLoad').on('change',function(){
	//$('#inputTextToSave').show();
	//$('#data_block').slideDown('fast');
//	$('#next_button').fadeIn('fast');
//	$('#delimiters').slideDown('fast');
//	setTimeout(function(){
//		$("#target").val($('#inputTextToSave').val());
//		$("#target").click();
//	},300);
});


$('.floating_block').css({'left': $('.floating_block').scrollLeft()});

$(window).scroll(function(){
	$('.floating_block').css({'left': $(this).scrollLeft()});
	if( $("#sideLock").is(':hidden') && document.getElementById("plotly0").clientHeight && window.scrollY>($("#svg_paper").offset().top/1.5)){

		$("#create_wrapper").parent().height($("#create_wrapper").parent().height());
		$("#create_wrapper").css({"position":"fixed","top":"50px","right":"0","max-width":"65vw"});
		$("#sider").css({"border":"1px solid rgba(173, 216, 230, 0.80)", "width":"65vw","max-width":"640px"});
		$("#create_wrapper .text_container").hide();
		$(".lined_block").css("display","block");
		$("#sideLock").height($("#create_wrapper").height());

		$("#sider").hide();



		$("#sideLock").show();
	}

	if( $("#sideLock").is(':visible') && window.scrollY<($("#svg_paper").offset().top/1.5)){
		$(".lined_block").css("display","unset");
		$("#create_wrapper").css({"position":"relative","top":"unset","right":"unset","max-width":"unset"});
		$("#sider").css({"border":"none", "width":"unset","max-width":"unset"});
		$("#create_wrapper .text_container").show();
		$("#sider").show();
		$("#sideLock").hide();
	}

});

$("#sideLock").click(function(){
	$("#sider").toggle();
	$("#create_wrapper .text_container").hide()
	$("#sideLock").show();
});



$("#scrollLocker").change(function(){
	$("#scroller").toggle();
});

$("#creater").click(function(){
///	alert('2019-9');
///
$("#create_holder").remove();

var ab=localStorage.getItem('varJK');

///////////////////................alert(ab);

/////////////////////////////////////
var temps= ab.split("\n");

//////////////////////////////alert(temps[2]);

$('#plotly0').show(); 

for(var i=0; i<temps.length;i++){
var j=i+1;
var jSwap=j.toString();
argrect(temps[i]); copySwap(jSwap);
    }

//argrect('5 1 10;510 110;10'); copySwap('1'); //xpp(); 
//argplot('5','2','10;510','220;120'); copySwap('2'); //xpp(); 
//argplot('5','3','10;510','330;230'); copySwap('3'); //xpp(); 
//argplot('5','4','10;510','440;340'); copySwap('4'); //xpp(); 


///	$("#new_button").click();
//    	del9();
//	glue();
//	changeText();
});

$(window).on("keyup",function(e){

//alert('2019-10');
//
//	if (e.keyCode==78 && $("#plotly0").is(':visible')) $("#new_button").click();
//	if (e.keyCode==77 && $("#plotly0").is(':visible')) $("#change_button").click();
//	if (e.keyCode==76 && $("#plotly0").is(':visible')) $("#del").click();;
});
