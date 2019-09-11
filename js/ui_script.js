if(window.navigator.userAgent.includes('Firefox')){
	$('textarea').addClass('moz_wrap');
}

var show_scrollers = true;

if ( (typeof window.orientation == "undefined") || (! navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) ){
	show_scrollers = false;	
}else{
	show_scrollers = true;
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

$('.hideable_title').on('click',function(e){
	$(e.currentTarget).next().toggle();
	$(e.currentTarget).find('p').toggleClass('hide_icon');
	$(e.currentTarget).parent().toggleClass("opened");
});

$('#plot_button').on('click',function(){
	$('#plotly0').show();
	$("#save_button").show(); 
	$('#drawing_tools > div').show();
	$('#saveable_block').show();

});

$('.floating_block').css({'left': $('.floating_block').scrollLeft()});

$(window).scroll(function(){
	$('.floating_block').css({'left': $(this).scrollLeft()});
	if( show_scrollers && document.getElementById("plotly0").clientHeight && window.scrollY>($("#svg_paper").offset().top) && window.scrollY<($("#scroller_point").offset().top-window.innerHeight)){

		$(".scroller").show();
	}else{
		$(".scroller").hide();
	}

});

$("#sideLock").click(function(){
	$("#sider").toggle();
	$("#create_wrapper .text_container").hide()
	$("#sideLock").show();
});

$("input[type=file]").on("change",function(e){
	$(`label[for=${e.currentTarget.id}] > div`).text(e.currentTarget.files[0].name);
});


$("#scrollLocker").change(function(){
	$("#scroller").toggle();
});

$("#creater").click(function(){

	$("#create_holder").remove();

	var ab=localStorage.getItem('varJK');

	var temps= ab.split("\n");


	$('#plotly0').show(); 

	for(var i=0; i<temps.length;i++){
		var j=i+1;
		var jSwap=j.toString();
		argrect(temps[i]); 
		copySwap(jSwap);
	}
});

window.addEventListener("load", function(){

  window.ondragover= function (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  window.ondrop= function (e) {
  	console.log(1);
    e.preventDefault();
    e.stopPropagation();
    var temp=e.dataTransfer.files;
    if($("#fileToLoad2").length){
	    $("#fileToLoad2")[0].files=e.dataTransfer.files;
	    $("#fileToLoad2").change();
	}else if($("#fileToLoad").length){
		$("#fileToLoad")[0].files=e.dataTransfer.files;
	    $("#fileToLoad").change();
	}
  };

});

$(".plot_line .input_type").change(function(e){
	
///////////////////////////////////////////////alert('tempB-i');

var line=$(e.currentTarget).closest(".plot_line").index();
	var text=$("#temptext").val().split("\n");
	var colY=$(".r_columnY")[line].value;
	var colX=$(".r_columnX")[line].value;
	var width=$(".r_width")[line].value;

	var height=$(".r_height")[line].value;
	var shiftY=$(".r_shiftY")[line].value;
	var shiftX=$(".r_shiftX")[line].value;
var w2=parseFloat(width)+parseFloat(shiftX);
var h2=parseFloat(height)+parseFloat(shiftY);
var w3=w2.toString();
var h3=h2.toString();

	var color=$(".r_color")[line].value;
	var colY_type=$(".r_columnY_type")[line].value;
	var colY_visible=1;
	if(colY_type==-1){
		colY_visible=0;
		colY_type=0;
	}
	var colX_type=$(".r_columnX_type")[line].value;
	var colX_visible=1;
	if(colX_type==-1){
		colX_visible=0;
		colX_type=0;
	}
	text[line]=colY+" "+colX+" "+shiftX+";"+w3+" "+h3+";"+
	shiftY+" "+colX_type+" "+colY_type+" "+color+" "+colY_visible+" "+colX_visible;
	$("#temptext").val(text.join("\n"));
});

function getRandomColor() {
  var letters = '3456789AB';//9ABCDEF
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function addLineEditor(width,height,shiftX,shiftY,color){

	let col_amount=$("#target").val().split("\n")[0].split("\t").length;
	let col_text="";

	for(let i=1;i<col_amount;i++)col_text+="<option value=\""+i+"\">"+i+" колонка</option>\n";

	$("#edit_lines").append("<div class=\"flexed_block plot_line\">\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Выделение</span>\n" +
"                <input type=\"button\" class=\"r_use input_type\" value='Приравнять'>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Колонка X</span>\n" +
"                <select class=\"r_columnY input_type\">\n" +
"                    <option value=\"0\" selected>OX</option>\n" +
					 col_text+
"                </select>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Колонка Y</span>\n" +
"                <select class=\"r_columnX input_type\">\n" +
"                    <option value=\"0\">OX</option>\n" +
					 col_text+
"                </select>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Ширина</span>\n" +
"                <input class=\"input_type r_width\" type=\"number\" value=\""+width+"\"/>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Высота</span>\n" +
"                <input class=\"input_type r_height\" type=\"number\" value=\""+height+"\"/>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Сдвиг X</span>\n" +
"                <input class=\"input_type r_shiftX\" type=\"number\" value=\""+shiftX+"\"/>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Сдвиг Y</span>\n" +
"                <input class=\"input_type r_shiftY\" type=\"number\" value=\""+shiftY+"\"/>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Цвет</span>\n" +
"                <input class=\"input_type r_color\" value="+color+" type=\"color\" />\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Ось OY</span>\n" +
"                <select class=\"r_columnX_type input_type\">\n" +
"                    <option value=\"0\">Слева</option>\n" +
"					 <option value=\"2\">По Центру</option>\n" +
"                    <option value=\"1\">Справа</option>\n" +
"                    <option value=\"-1\">Скрыть</option>\n" +
"                </select>\n" +
"            </div>\n" +
"            <div>\n" +
"                <span class=\"desc_above\">Ось OX</span>\n" +
"                <select class=\"r_columnY_type input_type\">\n" +
"                    <option value=\"0\">Снизу</option>\n" +
"					 <option value=\"2\">По Центру</option>\n" +
"                    <option value=\"1\">Сверху</option>\n" +
"                    <option value=\"-1\">Скрыть</option>\n" +
"                </select>\n" +
"            </div>\n" +
"        </div>");

	$(".plot_line:last input[type=button]").click(function(e){
		let parent=$(e.currentTarget).closest(".plot_line");
		parent.find(".r_width").val(rect_params.width);
		parent.find(".r_height").val(rect_params.height);
		parent.find(".r_shiftX").val(rect_params.x);
		parent.find(".r_shiftY").val(rect_params.y);
		parent.find(".r_width").change();
		newbuild();
	});

	$(".plot_line:last .input_type").change(function(e){
		var line=$(e.currentTarget).closest(".plot_line").index();
		var text=$("#temptext").val().split("\n");
		var colY=$(".r_columnY")[line].value;
		var colX=$(".r_columnX")[line].value;
		var width=$(".r_width")[line].value;
		var height=$(".r_height")[line].value;
		var shiftY=$(".r_shiftY")[line].value;
		var shiftX=$(".r_shiftX")[line].value;
		var color=$(".r_color")[line].value;
		var colY_type=$(".r_columnY_type")[line].value;
		var colY_visible=1;
		if(colY_type==-1){
			colY_visible=0;
			colY_type=0;
		}
		var colX_type=$(".r_columnX_type")[line].value;
		var colX_visible=1;
		if(colX_type==-1){
			colX_visible=0;
			colX_type=0;
		}


	var w2=parseFloat(width)+parseFloat(shiftX);
	var h2=parseFloat(height)+parseFloat(shiftY);
	var w3=w2.toString();
	var h3=h2.toString();

	/*text[line]=colY+" "+colX+" "+shiftX+";"+width+" "+height+";"+
	shiftY+" "+colX_type+" "+colY_type+" "+color+" "+colY_visible+" "+colX_visible;*/

		text[line]=colY+" "+colX+" "+shiftX+";"+w3+" "+h3+";"+
		shiftY+" "+colX_type+" "+colY_type+" "+color+" "+colY_visible+" "+colX_visible;

		$("#temptext").val(text.join("\n"));
});
	return $(".plot_line:last");
}


function setRectsToLines(){
	let widths=$(".r_width");
	let heights=$(".r_height");
	let xs=$(".r_shiftX");
	let ys=$(".r_shiftY");

	$("rect").each((i,item)=>{
		widths[i].value=item.getAttribute('width');
		heights[i].value=item.getAttribute('height');
		xs[i].value=item.getAttribute('x');
		ys[i].value=item.getAttribute('y');
	});
	widths.change();
	newbuild();
}