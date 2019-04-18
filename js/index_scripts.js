$("#csvT_button").click(function(){

var ab="0 1 20;620 120;20 0 0\n0 2 20;620 220;120 0 0\n0 3 20;620 320;220 0 2\n0 4 20;620 420;320 0 2"

document.getElementById('temptext').value=ab;

///$("#csvT_button").click();
});

$("#goldT_button").click(function(){

var ab="5 1 20;620 220;20 0 0\n5 2 20;620 220;20 0 0\n5 3 20;620 440;240 0 2\n5 4 20;620 440;240 0 2"

document.getElementById('temptext').value=ab;

});

$("#dtmaT_button").click(function(){

var ab="0 1 20;620 220;20 0 0\n0 2 20;620 220;20 0 0\n0 3 20;620 420;220 0 2\n0 4 20;620 420;220 0 2"

document.getElementById('temptext').value=ab;

});

$("#newT_button").click(function(){

var a1=document.getElementById('xBox').value;
var a2=document.getElementById('yBox').value;

var a3=document.getElementById('widthBox').value;
var a4=document.getElementById('heightBox').value;

var a5=document.getElementById('OXbox').value;
var a6=document.getElementById('OYbox').value;

var a7=document.getElementById('LRbox').value;
var a8=document.getElementById('UDbox').value;

var a9=document.getElementById('rBox').value;
var a10=document.getElementById('tBox').value;

var x1=parseFloat(a9);
var x2=parseFloat(a3)+x1;

var y1=parseFloat(a10);
var y2=parseFloat(a4)+y1;

var b3=x2.toString()+";"+x1.toString();

if (a7=='0'){b3=x1.toString()+";"+x2.toString();}

var b4=y1.toString()+";"+y2.toString();

if (a8=='0'){b4=y2.toString()+";"+y1.toString();}

a3=b3; a4=b4;

var b=a1+" "+a2+" "+a3+" "+a4+" "+a5+" "+a6;//+" "+a5+a6+a7+a8;

document.getElementById('temptext').value=document.getElementById('temptext').value+"\n"+b;

});

$("#template_button").click(function(){


var a1=document.getElementById('xBox').value;
var a2=document.getElementById('yBox').value;

var a3=document.getElementById('widthBox').value;
var a4=document.getElementById('heightBox').value;

var a5=document.getElementById('OXbox').value;
var a6=document.getElementById('OYbox').value;

var a7=document.getElementById('LRbox').value;
var a8=document.getElementById('UDbox').value;

var a9=document.getElementById('rBox').value;
var a10=document.getElementById('tBox').value;

var x1=parseFloat(a9);
var x2=parseFloat(a3)+x1;

var y1=parseFloat(a10);
var y2=parseFloat(a4)+y1;

var b3=x2.toString()+";"+x1.toString();

if (a7=='0'){b3=x1.toString()+";"+x2.toString();}

var b4=y1.toString()+";"+y2.toString();

if (a8=='0'){b4=y2.toString()+";"+y1.toString();}

a3=b3; a4=b4;

//'(parseFloat(ch1)-parseFloat(ch2));

//var b=a1+" "+a2+" "+a3+" "+a4;//+" "+a5+a6+a7+a8;
var b=a1+" "+a2+" "+a3+" "+a4+" "+a5+" "+a6;//+" "+a5+a6+a7+a8;

//alert(b);
document.getElementById('temptext').value=b;

	//var cd=document.getElementById('target').value; 
	//localStorage.setItem('variableName', document.getElementById('target').value); 

//localStorage.setItem('varJK', document.getElementById('temptext').value);

	//var ab=localStorage.getItem('varJK');
	//DTMM();

//window.location.href='plot.html';

});




$("#next_button_ru").click(function(){

alert('n2');

});

$("#smooth_button").click(function(){
	var cd=document.getElementById('target').value; 
	//localStorage.setItem('variableName', document.getElementById('target').value); 
	//localStorage.setItem('varOX', document.getElementById('xBox').value);
	//localStorage.setItem('varOY', document.getElementById('yBox').value);
	//localStorage.setItem('varCols', document.getElementById('mBox').value);
	/////////////////////////////////////////localStorage.setItem('variableName', document.getElementById('target').value); 
	//var ab=localStorage.getItem('variableName');
	DTMM();
	window.location.href='smooth.html';
});

$("#target").click(function(){
	//////////////////this.value = this.value.replace(/[;]/g, '\t');
	//////////////////this.value = this.value.replace(/[ ]/g, '\t');
	//////////////////this.value = this.value.replace(' ', '\t');
});