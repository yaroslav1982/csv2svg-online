var gW=55;
var gH=55;

var iiNM=0;

var oldW=0;
var newW=0;

var oldii=0;

var iSwap=0;
var iMax=0;
var ttW=gW.toString();
var ttH=gH.toString();

var memotek='memo0';


function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function Xdu(ch1, ch2)
{
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];

temp=(parseFloat(ch1)-parseFloat(ch2));

if (temp<0) {temp=0;}

    document.getElementById("x330").value = temp.toString();

//////////////////////////////////////////////////alert(s);
}


function changeText(){
    document.getElementById('boldStuff').innerHTML = document.getElementById('inputTextToSave').value;
}

function changeZero(){
    document.getElementById('boldStuff').innerHTML = 'blank';
    $('#plotly0').hide(); 
    $("#save_button").hide(); 
    $('#drawing_tools > div').hide();
    $('#saveable_block').hide();
    $('#clr').click();
}

function changeT2(){

alert('x350');

}

function polysvg(poly, ox, oy){

/////////////////////////////////alert('polysvg');

var fsize="8";

    var tW=gW.toString();
    var tH=gH.toString();

    var x350='100';
    var y="100";

    var OXred=document.getElementById('xColor').value

if (OXred=="undefined") OXred='red';

    var ach="<polyline fill='none' stroke='"+OXred+"' stroke-width='0.5' points='";
//    var ach="<polyline fill='none' stroke='"red"' stroke-width='0.5' points='";
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

    var XXA4=document.getElementById('ABCD').value

    var XXis1=document.getElementById('Xis1').value

    var YYA4=document.getElementById('YBCD').value

    var YYis1=document.getElementById('Yis1').value


var temp5=5;

    XA4= XXA4.split(";");
    YA4= YYA4.split(";");

    X1A4=XA4[0];
    X2A4=XA4[1];
    Y1A4=YA4[0];
    Y2A4=YA4[1];

    var pprov=0;

        pprov=parseFloat(XXis1);

        if (pprov) {

    ach=ach+"\n"+"<polyline fill='none' stroke='#000000' stroke-width='0.5' points='";
    ach=ach+X1A4+","+OXsh+" "+X2A4+","+OXsh+"' />";
        }


    var OYsh=document.getElementById('x330').value

        pprov=parseFloat(XXis1);



        pprov=parseFloat(YYis1);

        if (pprov) {

    ach=ach+"\n"+"<polyline fill='none' stroke='#000000' stroke-width='0.5' points='"+OYsh+",";
    ach=ach+Y1A4+" "+OYsh+","+Y2A4+"' />";

        }


    for(var i=0; i<textArray.length;i++){


        temps= textArray[i].split("\t");

    var result1 = temps[2].replace(/\s+/g, '')


        pprov=parseFloat(temps[0])*parseFloat(temps[1])*parseFloat(XXis1);

    if (result1=='') {temp5=5;} else {temp5=10;}

    var nOXsh1=parseFloat(OXsh)+temp5;
    var OXsh1=nOXsh1.toString();

    var nOYsh1=parseFloat(OYsh)+20;

    var nOYsh2=parseFloat(OYsh)-5;

    var OYsh1=nOYsh1.toString();
var OYshS=nOYsh2.toString();
    var nOXsh2=parseFloat(temps[1])-4;
var OXsh2=nOXsh2.toString();
    var nOYsh3=parseFloat(OXsh1)+8;
var OYsh3=nOYsh3.toString();

        pprov=parseFloat(XXis1);

        if (pprov) {
            ach=ach+"\n"+"<polyline fill='none' stroke='#000000' stroke-width='0.5' points='";
            ach=ach+temps[1]+","+OXsh+" "+temps[1]+","+OXsh1+"' />";
            //ach=ach+"\n"+"<text x='"+temps[1]+"' y='"+OXsh1+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+temps[2]+"</text>";
        ach=ach+"\n"+"<text x='"+OXsh2+"' y='"+OYsh3+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+temps[2]+"</text>";
        }


    }

    for(var i=0; i<textArray2.length;i++){
        temps= textArray2[i].split("\t");
result1 = temps[2].replace(/\s+/g, '')

    if (result1=='') {temp5=5;} else {temp5=10;}

    var nOXsh1=parseFloat(OXsh)+temp5;
    var OXsh1=nOXsh1.toString();

    var nOYsh1=parseFloat(OYsh)+temp5;
    var OYsh1=nOYsh1.toString();

        pprov=parseFloat(YYis1);

        if (pprov) {

        ach=ach+"\n"+"<polyline fill='none' stroke='#000000' stroke-width='0.5' points='"+OYsh+",";
        ach=ach+temps[1]+" "+OYsh1+","+temps[1]+"' />";
        //ach=ach+"\n"+"<text x='"+OYsh1+"' y='"+temps[1]+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+textArray[i]+"</text>";
ach=ach+"\n"+"<text x='"+OYsh1+"' y='"+temps[1]+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+temps[2]+"</text>";
        }

    }


    return ach;
}

function xsvg(ox, oy){

alert('xsvg');

}



function changeT5(){

alert('x350-2');

    var tW=gW.toString();
    var tH=gH.toString();
    var x350='100';
    var y="100";
    var z=document.getElementById('fh').value;

    var ach="<svg version='1.1' width="+ttW+" height="+ttH+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

    ach=ach+"\n"+textPlus("100", "100", "100");
    ach=ach+"\n"+textPlus("200", "200", "200");
    ach=ach+"\n"+textPlus("300", "300", "300");

    ach=ach+"\n"+"<polyline fill='none' stroke='#008000' stroke-width='0.5' points='"+z+"' />";
    ach=ach+"\n"+"</svg>";

    document.getElementById('inputTextToSave').value=ach;
}

function changeT3(){

alert('x350-3');

}

function alertText(){

/////////////////////alert('alertText');

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
        temps= textArray[i].split("\t");

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

        if (pprov) {

            xyNEO=xyNEO+getts2d(xyT,Tneo, Yneo, TneoA, YneoA)+'\n';
        }

    }

    xyNEO = xyNEO.replace(/;/g, ','); 
    xyNEO = polysvg(xyNEO, tW, tH);


    var m1NEO=xyNEO;


//////////////////////////////////    var fi="<svg version='1.1' width='"+ttW+"' height='"+ttH+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";
////////////////////////////////////    xyNEO =fi+"\n"+xyNEO+"\n"+"</svg>";




////////////////////////////////////////    document.getElementById('inputTextToSave').value=xyNEO;
    //document.getElementById('memo0').value=m1NEO;
	document.getElementById(memotek).value=m1NEO;
}

function alertOX(){
    var tW=document.getElementById('fw').value;
    var tH=document.getElementById('fh').value;
    var tW2=xsvg(tW, tH);
    document.getElementById('inputTextToSave').value=tW2;
}

function glue(){
    var fi="<svg version='1.1' width='"+ttW+"' height='"+ttH+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

    var m0=document.getElementById('memo0').value;
    var m1=document.getElementById('memo1').value;
    var m2=document.getElementById('memo2').value;
    var m3=document.getElementById('memo3').value;
    var m4=document.getElementById('memo4').value;
    var m5=document.getElementById('memo5').value;
    var m6=document.getElementById('memo6').value;
    var m7=document.getElementById('memo7').value;

    ///////////////////fi=fi+"<svg x='0' y='0'>";

    ///////////////////var xyNEO=fi+"\n"+m0+"\n"+"</svg>";
var xyNEO=fi+m0+"\n";

//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m1+"\n"+"</svg>";
    xyNEO=xyNEO+m1+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m2+"\n"+"</svg>";
    xyNEO=xyNEO+m2+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m3+"\n"+"</svg>";
    xyNEO=xyNEO+m3+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m4+"\n"+"</svg>";
    xyNEO=xyNEO+m4+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m5+"\n"+"</svg>";
    xyNEO=xyNEO+m5+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m6+"\n"+"</svg>";
    xyNEO=xyNEO+m6+"\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m7+"\n"+"</svg>";
    xyNEO=xyNEO+m7+"\n";
xyNEO=xyNEO+"</svg>";

    document.getElementById('inputTextToSave').value=xyNEO;
}

function copy9(){

}

function copySwap(sCopy){
var nMemo="memo"+sCopy;
var SW=document.getElementById(nMemo).value;
////////////////////////alert(nMemo);

    document.getElementById(nMemo).value=document.getElementById('memo0').value;
    
document.getElementById('memo0').value=SW;

}

function copyM(){

    document.getElementById('memo0').value=document.getElementById('memo1').value;
    document.getElementById('memo1').value=document.getElementById('memo2').value;
    document.getElementById('memo2').value=document.getElementById('memo3').value;
    document.getElementById('memo3').value=document.getElementById('memo4').value;
    document.getElementById('memo4').value=document.getElementById('memo5').value;
    document.getElementById('memo5').value=document.getElementById('memo6').value;
    document.getElementById('memo6').value=document.getElementById('memo7').value;

}

function del9(){

    document.getElementById('memo7').value='';
    document.getElementById('memo6').value='';
    document.getElementById('memo5').value='';
    document.getElementById('memo4').value='';
    document.getElementById('memo3').value='';
    document.getElementById('memo2').value='';
    document.getElementById('memo1').value='';
    document.getElementById('memo0').value='';
}


$(function(){

    var ii=0;
    var iitek=0;
    var imas=[];
    var mouseDownX = 0;
    var mouseDownY = 0;
    var elemClicked;
    var rect;
    var arrow;
    var gWgH=document.getElementById('A4WH').value; 
    temps= gWgH.split(";");
    gW=parseFloat(temps[0]);
    gH=parseFloat(temps[1]);
    ttW=gW.toString();
    ttH=gH.toString();

    var paper = Raphael("svg_paper", ttW, ttH);

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
    iMax=ii;

document.getElementById('zizi').value=ii.toString();
memotek="memo"+document.getElementById('zizi').value;

    
ii=ii+1;
//$('#rect').click();

    console.log(element.attr('x') + " - " + element.attr('y'));                

    element.drag(move, start, up);                
    element.click(function (e) {
        elemClicked = $(element.node).attr('id');
//var mimi=iMax-elemClicked;
//var sid=mimi.toString();
//
//if (iSwap==elemClicked) {} else {copySwap(sid);};
//
//iSwap=elemClicked;
    });
    element.touchstart( function (e) {
        elemClicked = $(element.node).attr('id');
    });


//alert("1234");

    return element;                

}


///alert("nepered");


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


if (this.attr("y") > gH || this.attr("x") > gW) this.attr({
    x: +this.ox + +dx,
    y: +this.oy + +dy
});
    else {
        nowX = Math.min(gW-this.attr("width")-50, +this.ox + +dx);
        nowY = Math.min(gH-this.attr("height")-50, +this.oy + +dy);
        nowX = Math.max(0, nowX);
        nowY = Math.max(0, nowY);

//if (BBox.width == 0 && BBox.height == 0)
 

//////////////////////////////////////////////////////////
        ///elemClicked = iitek;

var max2=document.getElementById('zizi').value;
var max3=parseFloat(max2);
var mimi=max3-iitek;
var sid=mimi.toString();

sid=iitek.toString();

if (iSwap==iitek) {} else {memotek='memo'+sid;};

iSwap=iitek;


///////////////////////////alert("12345");

    $('#change_button').click();

        this.attr({
            x: nowX,
            y: nowY
        });                   

        if (this.attr("fill") != "#000000") this.attr({
            fill: "#000000"
        });
    }


    var xx=this.attr("x");
    var yy=this.attr("y");
    var ww=this.attr("width");
    var hh=this.attr("height");
    var x2=xx+ww;
    var y2=yy+hh;

    var qw1=xx.toString()+";"+yy.toString()+";"+ww.toString()+";"+hh.toString()+";"+this.node.getAttribute('id');

    document.getElementById('bibi').value=qw1;

    var er1=xx.toString()+";"+x2.toString();

///alert(er1);

        if (ww<0) {
    		er1=x2.toString()+";"+xx.toString();
        }

alert('2019-02');
    document.getElementById('ABCD').value=er1;
//2019-05
//////////////////////////////alert(document.getElementById("ABCD").value);



document.getElementById('ABCD').value='10;210';
//2019-05
///////////////////////////////////////alert(document.getElementById("ABCD").value);

    document.getElementById('xMMM').value=er1;

    var ty1=y2.toString()+";"+yy.toString();

        if (hh<0) {
    		ty1=yy.toString()+";"+y2.toString();
        }

    document.getElementById('YBCD').value=ty1;
document.getElementById('YBCD').value='10;310';

    document.getElementById('yMMM').value=ty1;

    document.getElementById('x330').value=xx.toString();
    document.getElementById('y330').value=yy.toString();

}, up = function () {
// restoring state
this.attr({
    opacity: .5
});
if (this.attr("y") < 60 && this.attr("x") < 60) this.attr({
    fill: "#AEAEAE"
});

//

iiNM=iiNM+1;
var nI=iiNM.toString();
var pepe1=this.attr("width");
newW=pepe1;
oldW=newW;
oldii=ii;

};

// Rect button click
$("#rect").on('click',function (e) {
    $('#svg_paper').unbind('mousedown');
    $('#svg_paper').unbind('mousemove');
    $('#svg_paper').unbind('mouseup');

    $("#svg_paper").mousedown(function (e) {

        if (e.target.tagName == "svg"){
// Prevent text edit cursor while dragging in webkit browsers
e.originalEvent.preventDefault();

var offset = $("#svg_paper").offset();
mouseDownX = e.pageX - offset.left-25;
mouseDownY = e.pageY - offset.top-25;

rect = DrawRectangle(mouseDownX, mouseDownY, 0, 0);                    

$("#svg_paper").mousemove(function (e) {
    var offset = $("#svg_paper").offset();
    var upX = e.pageX - offset.left-25;
    var upY = e.pageY - offset.top-25;

    var width = upX - mouseDownX;
    var height = upY - mouseDownY;   

    rect.attr({ "x": width > 0 ? mouseDownX : mouseDownX+width,
        "y": height > 0 ? mouseDownY : mouseDownY+height,
        "width": width > 0 ? width : -width,
        "height": height > 0 ? height : -height

    });


/////////////////////////////////////////////////////////prove03

});
} 

});

    $("#svg_paper").mouseup(function (e) {

        $('#svg_paper').unbind('mousemove');

        var BBox = rect.getBBox();
        console.log(BBox.width + " - " + BBox.height);                    

        if (BBox.width == 0 && BBox.height == 0) rect.remove();

iiNM=iiNM-1;
var nI=iiNM.toString();        
var pp1=rect.attr("width");
newW=pp1;

alert('2019-7');

if (oldii == ii) {} else {$('#new_button').click();};
oldW=newW;
oldii=ii;

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
iitek=0;
ii=0;
    paper.clear();
});

// Delete rect
$("#del").click(function (e) {
    $('#' + elemClicked).remove();
    imas[iitek]=0;
iitek=iitek-1;
ii=ii-1;
    var ir=iitek.toString();

});

// Rename rect
$("#ren").click(function (e) {
    $('#' + elemClicked).attr('id', 100500);
    imas[iitek]=1;
    alert('100500');
});


$("#rect").on('click',function (e) {

    var svgpaper = document.getElementById("svg_paper");
    svgpaper.addEventListener('touchstart',function (e) {
        if(e.target.tagName != 'svg')return;
        e.preventDefault();


        var touch = e.changedTouches[0];



        var offset = $(svgpaper).offset();
        mouseDownX = touch.pageX - offset.left-25;
        mouseDownY = touch.pageY - offset.top-25;

        rect = DrawRectangle(mouseDownX, mouseDownY, 0, 0); 


        svgpaper.addEventListener('touchmove', function(e){

            e.preventDefault();
            if(e.target.tagName != 'svg')return;



            var offset = $(svgpaper).offset(); 
            var upX = e.changedTouches[0].pageX - offset.left-25;

            var upY = e.changedTouches[0].pageY - offset.top-25;

            var width = upX - mouseDownX;
            var height = upY - mouseDownY;   

            rect.attr({ 
                "x": width > 0 ? mouseDownX : mouseDownX+width,
                "y": height > 0 ? mouseDownY : mouseDownY+height,
                "width": width > 0 ? width : -width,
                "height": height > 0 ? height : -height
            });  

            var xx=upX-width;
            var yy=upY-height;
            var ww=width;
            var hh=height;

            var x2=xx+ww;
            var y2=yy+hh;


            var qw1=upX.toString()+";"+upY.toString()+";"+width.toString()+";"+height.toString();


            document.getElementById('bibi').value=qw1;

            var er1;
            width>0 ? er1=xx.toString()+";"+x2.toString() : er1=x2.toString()+";"+xx.toString();

            document.getElementById('ABCD').value=er1;
//2019-05
///////////////////////////////////////////////////////alert(document.getElementById("ABCD").value);

alert('2019-04');
document.getElementById('ABCD').value='10;210';

            document.getElementById('xMMM').value=er1;

            var ty1;
            height>0 ? ty1=y2.toString()+";"+yy.toString() : ty1=yy.toString()+";"+y2.toString();

            document.getElementById('YBCD').value=ty1;
document.getElementById('YBCD').value='10;310';

            document.getElementById('yMMM').value=ty1;

            document.getElementById('x330').value=xx.toString();
            document.getElementById('y330').value=yy.toString();

iiNM=iiNM+1;
var nI=iiNM.toString();
var pepe1=this.attr("width");
newW=pepe1;
oldW=newW;
oldii=ii;
   

        }, false);
    }, false);


    svgpaper.addEventListener('touchend',function (e) {

        window.ontouchmove= function(){};
        var BBox = rect.getBBox();
        console.log(BBox.width + " - " + BBox.height);                    

        if (BBox.width == 0 && BBox.height == 0) rect.remove();

iiNM=iiNM-1;
var nI=iiNM.toString();        
var pp1=rect.attr("width");
newW=pp1;

alert('2019-8');

if (oldii == ii) {} else {$('#new_button').click();};
oldW=newW;
oldii=ii;

    }, false);

});  


});



$("#plot_button").on("click",function(){


});

$("#new_button").on("click",function(){

});

$("#old_button").on("click",function(){

});

$("#change_button").on("click",function(){
  
});

$("#test1_button").click(function(){

});

$("#test2_button").click(function(){
    var bc=document.getElementById("bibi").value; 
    alert(bc); 
    var ab=trioseq(bc); 
    alert(ab);
});

$("#target").click(function(){
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
    this.value = this.value.replace(' ', '\t');
});

$("#xpers_button").click(function(){
    alert("2019-f1"); 

});

$("#framewidth").click(function(){
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
});

$("#frameheight").click(function(){
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
});





function argrect(fourargs){

//////////////////alert('dr02');

//////////////////////////////////////

///////////////////////////alert(fourargs);

var ta = fourargs.split(" ");
argplot(ta[0], ta[1], ta[2], ta[3], ta[4], ta[5], ta[6], ta[7], ta[8]);
//argplot(ta[0], ta[1], ta[2], ta[3], ta[4], ta[5]);
}

function argplot(xcol, ycol, xA4, yA4, yLeft, xDown, xColor, Xis1, Yis1){

//

////////////////////////////////////
////////////////////////////////////alert(xColor);

var s=localStorage.getItem('varMM'); 

//////////////////////////////////////////////////////////alert(s);

var x=xcol;//////////////////////////document.getElementById('xBox').value;
var x1=parseFloat(x);
var y=ycol;////////////////////////////document.getElementById('yBox').value;
var y1=parseFloat(y);
var ta = s.split(";;");

document.getElementById('XPERS').value=ta[x1];
document.getElementById('YPERS').value=ta[y1];

document.getElementById('Xis1').value=Xis1;
document.getElementById('Yis1').value=Yis1;

document.getElementById('fwBox').value=xcol;/////////////////'5';
document.getElementById('fhBox').value=ycol;/////////////////'1';
var a0=ta[x1];//////////////document.getElementById('XPERS').value; 
var prove=y1;/////////////////////////document.getElementById('yBox').value;

document.getElementById('ABCD').value=xA4;
document.getElementById('xMMM').value=xA4;
    var b0=document.getElementById('ABCD').value;

//alert(a0);

    var ab=DeltaRange(a0,100); 
    var bc=trioseq(ab)+';'; 

//document.getElementById('xStep').value; 
document.getElementById('xStep').value=localStorage.getItem('varXstep'); 

    var de=bc.split(';;'); var fg=de[0]; var hi=props(fg,b0); 
//

//////////////////////////alert(fg+"\n\n"+b0+"\n\n"+hi);

    document.getElementById('fw').value=hi;

/////////alert(hi);

a0=ta[y1];///////////////////////////////////document.getElementById('YPERS').value; 

document.getElementById('YBCD').value=yA4;
document.getElementById('yMMM').value=yA4;

    b0=document.getElementById('YBCD').value;

////////////////////////////alert(a0);

////////////////////////////    
document.getElementById('xColor').value=xColor;

    ab=DeltaRange(a0,100); 
    bc=trioseq(ab)+';'; 
//alert(bc);

document.getElementById('xStep').value=localStorage.getItem('varYstep'); 

    de=bc.split(';;'); fg=de[0]; hi=props(fg,b0); 
//
/////////////////alert(fg+"\n\n"+b0+"\n\n"+hi);
    document.getElementById('fh').value=hi; 

/////////////////////////alert(hi);

if (yLeft=='0') {dLeft();};
if (yLeft=='1') {dRight();};
if (yLeft=='2') {dLRM();};

if (xDown=='0') {dDown();};
if (xDown=='1') {dUp();};
if (xDown=='2') {dUDZ();};
//dDown();

/////////////////////////////////////////////////////////////////////////////////

alertText(); 
glue();
changeText();

}


function saveTextAsFile(){
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = $('#inputFileNameToSaveAs').val() ? $('#inputFileNameToSaveAs').val() + '.svg' :'Plot.svg';
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

