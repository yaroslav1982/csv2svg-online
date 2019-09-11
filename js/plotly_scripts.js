window.addEventListener('load',function(){
onlyL3(); 
redC2();
});

function changeText(){
	document.getElementById('boldStuff').innerHTML = document.getElementById('inputTextToSave').value;
}

function changeZero(){
	document.getElementById('boldStuff').innerHTML = 'blank';
}

function changeT2(){
	var tW='500';
	var tH='500';
	var x350='100';
	var y="100";


	var ach="<svg version='1.1' width="+tW+" height="+tH+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

	ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='";

	ach=ach+"200,208 288.8889,232 377.7778,272 466.6667,328 555.5556,400 644.4444,488 733.3333,592 822.2222,712 911.1111,848 1000,1000"+ "' />";

	ach=ach+"\n"+"<text x='"+x350+"' y='"+y+"' fill='black' font-family='Arial' font-size='10'>"+x350+"</text>";


	ach=ach+"\n"+"</svg>";


	document.getElementById('inputTextToSave').value=ach;
}

function polysvg(poly, ox, oy){

	var tW='500';
	var tH='500';
	var x350='100';
	var y="100";


	var ach="<svg version='1.1' width='"+tW+"' height='"+tH+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

	ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='";

	ach=ach+poly+ "' />";

	var textArray = ox.split("\n");
	var textArray2 = oy.split("\n");
	var Tneo='';
	var TneoA='';

	var Yneo='';
	var YneoA='';

	var temp=0.1;
	var temp2=0.1;
	var temps=['0.1','4'];
	var tBak=['0.1','4'];


	var OXsh=document.getElementById('y330').value

	ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='";
	ach=ach+"0"+","+OXsh+" "+"500"+","+OXsh+"' />";

	var OYsh=document.getElementById('x330').value

	ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='"+OYsh+",";
	ach=ach+"0"+" "+OYsh+","+"500"+"' />";

	var nOXsh1=parseFloat(OXsh)+10;
	var OXsh1=nOXsh1.toString();

	var nOYsh1=parseFloat(OYsh)+10;
	var OYsh1=nOYsh1.toString();


	var pprov=0;

	for(var i=0; i<textArray.length;i++){
		temps= textArray[i].split("\t");

		pprov=parseFloat(temps[0])*parseFloat(temps[1]);


	if (pprov) {
		ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='";
		ach=ach+temps[1]+","+OXsh+" "+temps[1]+","+OXsh1+"' />";
		ach=ach+"\n"+"<text x='"+temps[1]+"' y='"+OXsh1+"' fill='black' font-family='Arial' font-size='10'>"+temps[0]+"</text>";
	}

	}

	for(var i=0; i<textArray2.length;i++){
		temps= textArray2[i].split("\t");

		ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='"+OYsh+",";
		ach=ach+temps[1]+" "+OYsh1+","+temps[1]+"' />";
		ach=ach+"\n"+"<text x='"+OYsh1+"' y='"+temps[1]+"' fill='black' font-family='Arial' font-size='10'>"+temps[0]+"</text>";

	}

	ach=ach+"\n"+"</svg>";
	return ach;
}

function xsvg(ox, oy){

	var tW='500';
	var tH='500';
	var x350='100';
	var y="100";

	var textArray = ox.split("\n");
	var textArray2 = oy.split("\n");

	var Tneo='';
	var TneoA='';

	var Yneo='';
	var YneoA='';

	var temp=0.1;
	var temp2=0.1;
	var temps=['0.1','4'];
	var tBak=['0.1','4'];


	var ach="<svg version='1.1' width="+tW+" height="+tH+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";


	for(var i=0; i<textArray.length;i++){
		temps= textArray[i].split("\t");


		ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='";
		ach=ach+temps[1]+",428 "+temps[1]+",438' />";
		ach=ach+"\n"+"<text x='"+temps[1]+"' y='438.57142857143' fill='black' font-family='Arial' font-size='10'>"+temps[0]+"</text>";

	}

	for(var i=0; i<textArray2.length;i++){
		temps= textArray2[i].split("\t");

		ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='166.66666666667,";
		ach=ach+temps[1]+" 176.66666666667,"+temps[1]+"' />";
		ach=ach+"\n"+"<text x='176.66666666667' y='"+temps[1]+"' fill='black' font-family='Arial' font-size='10'>"+temps[0]+"</text>";

	}

	ach=ach+"\n"+"</svg>";

	return ach;
}



function changeT5(){

	var tW='500';
	var tH='500';
	var x350='100';
	var y="100";
	var z=document.getElementById('fh').value;

	var ach="<svg version='1.1' width="+tW+" height="+tH+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

	ach=ach+"\n"+textPlus("100", "100", "100");
	ach=ach+"\n"+textPlus("200", "200", "200");
	ach=ach+"\n"+textPlus("300", "300", "300");

	ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='"+z+"' />";

	ach=ach+"\n"+"</svg>";

	document.getElementById('inputTextToSave').value=ach;
}

function changeT3(){

	var tW='1000';
	var tH='1000';
	var x350='100';
	var y="100";

	var ach="<svg version='1.1' width="+tW+" height="+tH+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

	ach=ach+"\n"+"<text x='"+x350+"' y='"+y+"' fill='black' font-family='Arial' font-size='10'>"+x350+"</text>";

	ach=ach+"\n"+"</svg>";

	document.getElementById('inputTextToSave').value=ach;
}

function alertText(){

	var tW=document.getElementById('fw').value;
	var tH=document.getElementById('fh').value;

	var targ=document.getElementById('target').value;

	var textArray = tW.split("\n");

	var Tneo='';
	var TneoA='';

	var Yneo='';
	var YneoA='';

	var temp=0.1;
	var temp2=0.1;
	var temps=['0.1','4'];
	var tBak=['0.1','4'];
	for(var i=0; i<textArray.length;i++){

	Tneo=Tneo+temps[0]+';';
	TneoA=TneoA+temps[1]+';';
	}

	var textArrayY = tH.split("\n");

	for(var i=0; i<textArrayY.length;i++){
		temps= textArrayY[i].split("\t");

		Yneo=Yneo+temps[0]+';';
		YneoA=YneoA+temps[1]+';';
	}

	var textArrayT = targ.split("\n");

	var xyT='';
	var xyNEO='';

	var nOX=parseFloat(document.getElementById('fwBox').value);

	var nOY=parseFloat(document.getElementById('fhBox').value);

	var pprov=0;

	for(var i=0; i<textArrayT.length;i++){
		temps= textArrayT[i].split("\t");

		xyT=temps[nOX]+';'+temps[nOY];

		pprov=parseFloat(temps[nOX])*parseFloat(temps[nOY]);

	}


	xyNEO = xyNEO.replace(/;/g, ','); 

	xyNEO = polysvg(xyNEO, tW, tH);

	document.getElementById('inputTextToSave').value=xyNEO;

}

function alertOX(){
	var tW=document.getElementById('fw').value;
	var tH=document.getElementById('fh').value;

	var tW2=xsvg(tW, tH);

	document.getElementById('inputTextToSave').value=tW2;
}




















$(function () {
var ii=0;
var iitek=0;
var imas=[];
            var mouseDownX = 0;
            var mouseDownY = 0;
            var elemClicked;
            var rect;
            var arrow;

            var paper = Raphael("svg_paper", 800, 600);

    // Draw Rect
            function DrawRectangle(x, y, w, h) {

                var element = paper.rect(x, y, w, h);
                element.attr({
                    fill: "gray",
                    opacity: .5,
                    stroke: "#F00"
                }).node.setAttribute('id', 'myElement');                                
                
                $(element.node).attr('id', ii);
                imas.push(1);
                ii=ii+1;
                console.log(element.attr('x') + " - " + element.attr('y'));                
                
                element.drag(move, start, up);                

                element.click(function (e) {
                    elemClicked = $(element.node).attr('id');
                });

                return element;                

            }
    


    // Start, move, and up are the drag functions
            start = function () {
    // storing original coordinates
                this.ox = this.attr("x");
                this.oy = this.attr("y");
                this.attr({
                    opacity: 1
                });

iitek=this.node.getAttribute('id').toString();

                if (this.attr("y") < 60 && this.attr("x") < 60) this.attr({
                    fill: "#000000"
                });
            }, move = function (dx, dy) {               

    // Move will be called with dx and dy
var xx=this.attr("x");
var yy=this.attr("y");
var ww=this.attr("width");
var hh=this.attr("height");


//.node.setAttribute('id'
var qw1=xx.toString()+";"+yy.toString()+";"+ww.toString()+";"+hh.toString()+";"+this.node.getAttribute('id');
//alert(qw1);
document.getElementById('bibi').value=qw1;
 
               if (this.attr("y") > 600 || this.attr("x") > 800) this.attr({
                    x: this.ox + dx,
                    y: this.oy + dy
                });
                else {
                    nowX = Math.min(800, this.ox + dx);
                    nowY = Math.min(600, this.oy + dy);
                    nowX = Math.max(0, nowX);
                    nowY = Math.max(0, nowY);
                    this.attr({
                        x: nowX,
                        y: nowY
                    });                   
                    
                    if (this.attr("fill") != "#000000") this.attr({
                        fill: "#000000"
                    });
                }

            }, up = function () {
    // restoring state
                this.attr({
                    opacity: .5
                });
                if (this.attr("y") < 60 && this.attr("x") < 60) this.attr({
                    fill: "#AEAEAE"
                });
            };

    // Rect button click
            $("#rect").click(function (e) {
                $('#svg_paper').unbind('mousedown');
                $('#svg_paper').unbind('mousemove');
                $('#svg_paper').unbind('mouseup');

                $("#svg_paper").mousedown(function (e) {
    // Prevent text edit cursor while dragging in webkit browsers
                    e.originalEvent.preventDefault();

                    var offset = $("#svg_paper").offset();
                    mouseDownX = e.pageX - offset.left;
                    mouseDownY = e.pageY - offset.top;

                    rect = DrawRectangle(mouseDownX, mouseDownY, 0, 0);                    

                    $("#svg_paper").mousemove(function (e) {
                        var offset = $("#svg_paper").offset();
                        var upX = e.pageX - offset.left;
                        var upY = e.pageY - offset.top;

                        var width = upX - mouseDownX;
                        var height = upY - mouseDownY;                       

                        rect.attr({ "width": width > 0 ? width : 0,
                            "height": height > 0 ? height : 0 });
   
                    });
                    
                    
                });

                $("#svg_paper").mouseup(function (e) {
                    $('#svg_paper').unbind('mousemove');
                    var BBox = rect.getBBox();
                    console.log(BBox.width + " - " + BBox.height);                    
                    
                    if (BBox.width == 0 && BBox.height == 0) rect.remove();
                });               

            });


    // Unbind events
            $("#unbind").click(function (e) {

var i = 0;
var skaz2="";
paper.forEach(function (el) 
{
var ij1=parseFloat(el.node.getAttribute("id"));
    if (imas[ij1]==1) skaz2=skaz2+";;"+el.node.getAttribute("id")+";"+el.attr("x")+";"+el.attr("y")+";"+imas[ij1];
});

var skaz="";
alert(skaz2);

		$('#svg_paper').find('rect').each(function(i, obj) {
                        skaz=skaz+";"+$(this.node).attr('id');
                    });
                $('#svg_paper').unbind('mouseup');
                $('#svg_paper').unbind('mousemove');
                $('#svg_paper').unbind('mousedown');
            });

    // Clear canvas
            $("#clr").click(function (e) {
                paper.clear();
            });

    // Delete rect
            $("#del").click(function (e) {
                $('#' + elemClicked).remove();
imas[iitek]=0;
var ir=iitek.toString();
alert(ir);
            });

    // Rename rect
            $("#ren").click(function (e) {
                $('#' + elemClicked).attr('id', 100500);
imas[iitek]=1;
alert('100500');
            });


        });























$("#preview_button").click(function(){
	MM2();
	document.getElementById('cols').value=document.getElementById('XYc').value; 
	plot1(0);
//alert('here!');
});
$("#next_button").click(function(){
	localStorage.setItem('varXrange', document.getElementById('XPERS').value); 
	localStorage.setItem('varYrange', document.getElementById('YPERS').value); 
	localStorage.setItem('varOX', document.getElementById('xBox').value); 
	localStorage.setItem('varOY', document.getElementById('yBox').value); 
	//localStorage.setItem('varCols', document.getElementById('mBox').value); 
	window.location.href='index1.html';
});

var ab=localStorage.getItem('variableName'); 
document.getElementById('target').value=ab;


$("#target").click(function(){
	this.value = this.value.replace(/[;]/g, '\t');
	this.value = this.value.replace(/[ ]/g, '\t');
	this.value = this.value.replace(' ', '\t');	
});


function saveTextAsFile(){
	var textToSave = document.getElementById("inputTextToSave").value;
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
var fileNameToSaveAs = 'Plot.svg';//

var downloadLink = document.createElement("a");
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
downloadLink.href = textToSaveAsURL;
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

downloadLink.click();
}

function destroyClickedElement(event){
	document.body.removeChild(event.target);
}

function loadFileAsText(){
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}


function lay1(n){var s1="div"+n.toString();return s1;}
function tata(n){var s1="tar"+n.toString();return s1;}

function dTest(){var s1=document.getElementById('tt').value;alert(car2sphY(s1));}

function CLS2(){
	window.location.reload();

} 


function plot2(){
	minimax(); 
}

