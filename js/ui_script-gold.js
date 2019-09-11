if(window.navigator.userAgent.includes('Firefox')){
	$('textarea').addClass('moz_wrap');
}

$("#logo").click(function(){window.location.href="./index.html";});

if ( (typeof window.orientation == "undefined") || (! navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) ){

}else{
	$("#print_button").remove();
}

$('.hideable_title').on('click',function(a){
	$(this.nextElementSibling).toggle();
	$(this).find('p').toggleClass('hide_icon');
});

$('.floating_block').css({'left': $(window).scrollLeft()});

$(window).on("scroll",function(){
	$('.floating_block').css({'left': $(this).scrollLeft()});
});
