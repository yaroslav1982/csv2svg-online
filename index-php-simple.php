<!DOCTYPE html>
<html lang="ru">
<head>
    <title>#csv2svg plot online</title>
    <meta charset="UTF-8"/>
    <script>


var gW=1240;
var gH=874;
var zizi='0';

var iiNM=0;

var oldW=0;
var newW=0;

var oldii=0;

var iSwap=0;
var iMax=0;
var ttW=gW.toString();
var ttH=gH.toString();

var memotek='memo0';

 var ii=0;
    var iitek=0;
    var imas=[];
    var mouseDownX = 0;
    var mouseDownY = 0;
    var elemClicked;
    var rect;
    var arrow;

var textArray=['1234','5678'];


function DTMM()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
var nako='';
var Tmax=[0, 0]; 
var nakot='';
var Tnako=[0, 0];
var Tnakoi=[0, 0];
var nmax=[0, 0];
var nakomax=[0, 0];
var nmin=[0, 0];
var nakomin=[0, 0];
var newNumber0=0;
var newNumber1=0;

for(var k=0; k<10;k++) 
{
Tmax.push(0);
Tnako.push(0);
Tnakoi.push(0);

nmin.push(0);
nakomax.push(0);

nakomax[k]=0;
nakomin[k]=100000;

for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
temp2=parseFloat(temps[k]);//(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
newNumber1=temp2; //parseFloat(temps[2]);//yy[j].push(newNumber1);
nmax[k]=newNumber1; Tmax[k]=i;
nmin[k]=newNumber1; Tmax[k]=i;
if (nakomax[k]<nmax[k]) {nakomax[k]=nmax[k]; Tnako[k]=Tmax[k];}
if (nakomin[k]>nmin[k]) {nakomin[k]=nmin[k]; Tnakoi[k]=Tmax[k];}
}
nakot=DeltaRange(nakomin[k].toString()+";"+nakomax[k].toString(), 10);
tBak= nakot.split(";;");
nakot=tBak[0];
nako=nako+nakot+";;   ";
}
var ta2 = nako.split(";;");
var ta3=document.getElementById("ftype").value;

var tD= ta2[2].split(";");

if (ta3=='CALC') 
nako=ta2[0]+";;"+ta2[1]+";;"+ta2[2]+";;"+ta2[3]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];

if (ta3=='DTMA') 
//nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2
//nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];
nako=ta2[0]+";; 0;"+tD[1]+";; 0;"+tD[1]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];

if (ta3=='JM') 
//nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2
//nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];
//nako=ta2[0]+";; 0;"+tD[1]+";; 0;"+tD[1]+";;"+ta2[4]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];
nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[3]+";;"+ta2[4]+";;"+ta2[5]+";;"+ta2[2]+";;"+ta2[7]+";;"+ta2[8];


if (ta3=='GOLD') 
nako=ta2[0]+";;"+"0;3000"+";;"+ta2[2]+";;"+"0;3000"+";;"+"0;3000"+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];
if (ta3=='CSV') 
nako=ta2[0]+";;"+ta2[2]+";;"+ta2[2]+";;"+ta2[5]+";;"+ta2[5]+";;"+ta2[5]+";;"+ta2[6]+";;"+ta2[7]+";;"+ta2[8];
localStorage.setItem('varMM', nako);
}

//loadcsvtext
function loadCSVZ()
{

del9();
  var ab11="0 1 20;1100 800;10 0 0 red 1 1\n0 2 20;1100 800;10 0 0 black 0 0";
document.getElementById('temptext').value=ab11;
document.getElementById("ftype").value = "CSV";


    var fileToLoad = document.getElementById("fileToLoad2").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

alert('File loaded');
var tf=document.getElementById('inputTextToSave').value; 
var s = tf.replace(/[;]/g, '\t');


var Tneo="";
///    textFrom2 = document.getElementById("inputTextToSave").value
textArray = s.split("\n");

for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
textArray[i] = textArray[i].replace(/[,]/g, '\t');
Tneo=Tneo+textArray[i]+'\n';
}

document.getElementById("target").value = Tneo;

////////////////////////var cd=Tneo;////////document.getElementById('target').value; 

/////////////////////////////    document.getElementById("ftype").value = "DTMA";

//alert('DTMM1');

	//////////////////////////////localStorage.setItem('variableName', document.getElementById('target').value); 
	localStorage.setItem('varXstep', document.getElementById('tarXstep').value); 
	localStorage.setItem('varYstep', document.getElementById('tarYstep').value); 
	localStorage.setItem('varJK', document.getElementById('temptext').value);
	var ab=localStorage.getItem('varJK');
	//////////////////////////////////////////////////////////////////////
DTMM();
//alert('DTMM2');
////////////////	
	var ab=localStorage.getItem('varJK');
	var temps= ab.split("\n");

	for(var i=0; i<temps.length;i++){
	var j=i+1;
	var jSwap=j.toString();
	argrect(temps[i]); copySwap(jSwap);
	    }

}

function newbuild()
{


///////////////////////////alert("newbuild");

del9();

//  var ab11="0 1 20;1100 810;10 0 0 red 1 1\n0 2 20;1100 810;10 0 0 black 0 0";
//document.getElementById('temptext').value=ab11;

//document.getElementById("ftype").value = "CSV";


//    var fileToLoad = document.getElementById("fileToLoad2").files[0];
//    var fileReader = new FileReader();
//    fileReader.onload = function(fileLoadedEvent) 
//    {
//        var textFromFileLoaded = fileLoadedEvent.target.result;
//        document.getElementById("inputTextToSave").value = textFromFileLoaded;
//    };
//    fileReader.readAsText(fileToLoad, "UTF-8");
//alert('File loaded');

//var tf=document.getElementById('inputTextToSave').value; 
//var s = tf.replace(/[;]/g, '\t');
//var Tneo="";
//textArray = s.split("\n");
//for(var i=0; i<textArray.length;i++) 
//{
//textArray[i] = textArray[i].replace(/[;]/g, '\t');
//Tneo=Tneo+textArray[i]+'\n';
//}

//document.getElementById("target").value = Tneo;

/////////////////////////////////////////////////    document.getElementById("ftype").value = "DTMA";
	//////////////////////////////localStorage.setItem('variableName', document.getElementById('target').value); 
	localStorage.setItem('varXstep', document.getElementById('tarXstep').value); 
	localStorage.setItem('varYstep', document.getElementById('tarYstep').value); 
	localStorage.setItem('varJK', document.getElementById('temptext').value);
	var ab=localStorage.getItem('varJK');
	//////////////////////////////////////////////////////////////////////
DTMM();
	var ab=localStorage.getItem('varJK');
	var temps= ab.split("\n");
	for(var i=0; i<temps.length;i++){
	var j=i+1;
	var jSwap=j.toString();

///////////////////////////alert("ar04");

	argrect(temps[i]); copySwap(jSwap);
	    }


}

function newOX()
{
var ox=document.getElementById('OXbox').value; //'5;5#Ji;Js';
//alert(ox);
switch(ox) {
  	case '0':  // if (x === 'value1')
  dLeft();PLB();glue();changeText();
break;
	case '1':  // if (x === 'value2')
dLRM();PLB();glue();changeText();  
break;
	case '2':  // if (x === 'value2')
dRight();PLB();glue();changeText();  
break;
}
}

function newOY()
{
var oy=document.getElementById('OYbox').value; //'5;5#Ji;Js';
switch(oy) {
  	case '0':  // if (x === 'value1')
dDown();PLB();glue();changeText();  
break;
	case '1':  // if (x === 'value2')
dUDZ();PLB();glue();changeText();  
break;
	case '2':  // if (x === 'value2')
  dUp();PLB();glue();changeText();
break;
}
}

function onlyrest()
{

////////////////////////////////////////alert('onlyrest');

var el = document.getElementById("paper");
var val = el[el.selectedIndex].text;

document.getElementById('A4WH').value=val;

}
////////////////////////////////////////////////////////////////////////////////////////

function is2s(str, smax, smin)
{
str2=str.split(".");
str3=str.split("e");
strpr=str2[0].split("e");
str4=str/str3[0];
if(parseFloat(strpr)<2){str4=str4/10};
var rmin=Math.floor(smin/str4)*str4;
var rmax=(Math.floor(smax/str4)+1)*str4;
var y=rmin;
var z=rmin;
for(var i=(rmin+str4); i<(rmax+str4);i=(i+str4)) 
{
y=i.toExponential();
  z=z+";"+y;
}
return z;
}


function trioseq(fts)
{
var s1s=fts.split(";");
var f1=s1s[0];
var t1=s1s[1];
var s1=s1s[3];
var rr="";
var vf = parseFloat(f1);
//alert(f1);
var vt = parseFloat(t1);
//alert(t1);
var vs = parseFloat(s1);
//alert(s1);

vt=vt+vs;
//vf=vf-vs;

    for (var x = vf; x < vt; x=x+vs) 
	{
	//y=kratnoe(x, vs);
        //rest = y.toString();
        rest = kratnoe(x, vs);
	//rest = x.toString();
	rr=rr+rest+";"//+vs.toString()+";";
        //if (rest == char2 ) j++;
        } 
return rr;
}

function kratnoe(xbig, xsmall)
{
//var n=i

//var ni=xsmall.length;

vmax = Math.floor(xbig / xsmall + 0.99) * xsmall;

var ni=xsmall.length;

vmax = vmax.toFixed(10);

vmax=vmax*1;

smax= vmax.toString();

if(Math.abs(vmax)<0.001){smax= vmax.toExponential(1);}

if(vmax==0){smax="0";}

smax=smax.replace('.0e', 'e');

return smax;
}

////////////////////////////////////////


function DeltaRange(t1, mgLines)
{

/////alert('deltarange');

var s1s=t1.split(";");
var s1=s1s[0];
var s2=s1s[1];

var mini = parseFloat(s1);
mini = Math.round(mini*100000000000000)/100000000000000;
var maxi = parseFloat(s2);
maxi = Math.round(maxi*100000000000000)/100000000000000;

var xr=Math.abs(maxi - mini)/mgLines;
var mimi=Math.abs(mini/xr)/mgLines*5;
if(mimi<1) 
{mini=0;
xr=Math.abs(maxi - mini)/mgLines;
}

var loga=Math.log10(xr);
var inta=Math.floor(loga); //  4

//Math.pow(7, 2); // 49

var deca=Math.pow(10, inta);

var dd=deca;

var mi1=Math.floor(mini/deca);
var ma1=Math.ceil(maxi/deca);

var iFlag=0;

if((ma1-mi1)>(mgLines*2)) 
{deca=deca*5;
mi1=Math.floor(mini/deca);
ma1=Math.ceil(maxi/deca);
iFlag=iFlag+1;
}

if((ma1-mi1)>(mgLines)) 
{deca=deca*2;
mi1=Math.floor(mini/deca);
ma1=Math.ceil(maxi/deca);
iFlag=iFlag-1;
}

if(iFlag==0) 
{dd=deca/5;
}

var mi2=mi1*deca;
mi2 = Math.round(mi2*100000000000000)/100000000000000;

var ma2=ma1*deca;
ma2 = Math.round(ma2*100000000000000)/100000000000000;

 

//var s4="5";

var s4=mi2.toString()+";"+ma2.toString()+";;"+deca.toString()+";"+dd.toString();

return s4;

}

////////////////////////////////////////////////

function RoundStep(nBig, nSm) {
str2=nBig.split(".");
str3=nBig.split("e");
str4=nBig/str3[0];
str5=Math.round(str3[0])+"e"+parseFloat(str3[1]);
return str5;
}


//////////////////////////////////////////
function props(x1xN, min4max4) {
var pieces = x1xN.split(";");
var pieces2 = min4max4.split(";");
var qx=nchar(x1xN, ";");
var qy=nchar(min4max4, ";");
var yleft=parseFloat(pieces2[0]); 
var yright=parseFloat(pieces2[1]); 
var sm3="";
var sm4="";
var xval=0;
var xSt=0;
var smpp;

var stepX=document.getElementById("xStep").value;
xSt=parseFloat(stepX);

    for (var j = 0; j < qx; j=j+xSt) {
j=roundPlus(j, 3);
var i=Math.floor(j);
var jpp=j-i;


                  smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), parseFloat(pieces[i]), parseFloat(pieces2[0]), parseFloat(pieces2[1]));

smpp = propo(0, 1, jpp, parseFloat(pieces[i]), parseFloat(pieces[i+1]));
smpp=roundPlus(smpp, 7);
smart2 = propo(0, 1, jpp, parseFloat(pieces2[i]), parseFloat(pieces2[i+1]));

                  //smart2=smpp;//=smart2+smpp;

if (smart2==pieces2[1]) {} else
//if (5==6) {} else
{	

//sm3=sm3+parseFloat(pieces[i]);
sm3=sm3+smpp;///sm3+parseFloat(pieces[i]);
	sm3=sm3+"\t";
smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), smpp, parseFloat(pieces2[0]), parseFloat(pieces2[1]));
smart2=roundPlus(smart2, 3);
if (smart2=="0") {smart2="0.0001";}
	sm3=sm3+smart2; //+'!!!'+pieces2[1];

xval=parseFloat(smart2);
//////////////////////sm4=findval(pieces[i]);
//	sm3=sm3+"\t"+sm4+"\n";

if (jpp==0) {sm4=smpp;} else {sm4=" ";}
	sm3=sm3+"\t"+sm4+"\n";
}
}
	sm3=sm3+parseFloat(pieces[qx]);
	sm3=sm3+"\t";
coo=parseFloat(pieces2[1]);
coo=roundPlus(coo, 4);
if (coo==0) {coo=0.0001;}
smart2 = coo;
	sm3=sm3+smart2;

xval=parseFloat(smart2);
//sm4=findval(pieces[qx]);
sm4=parseInt(pieces[qx]);

var x1=parseInt(pieces[qx]);
var x2=parseFloat(pieces[qx]);
var x3=parseFloat(pieces[0]);
//var ampl=x2-x3;
//if (x1==x2) {Tneo=strn;}
if (x1==x2) {sm4="01.01."+sm4+"    Date, years";} else {sm4="Date, years";}
if (x3<2000 || x2>2020) {sm4=pieces[qx];}
sm3=sm3+"\t"+sm4;
return sm3;
}

/////////////////////////////////////////////////////////////////////////
function smart3(pizza, unit2, x22) {

//var id1 = "ctl03_Tabs1";
//var lastFive = id.substr(id.length - 5); // => "Tabs1"

var lastChar1 = pizza.substr(pizza.length - 1); // => "1"
var lastChar2 = unit2.substr(unit2.length - 1); // => "1"

// 1;2;3;4;5 - ox ($pizza)
//10;20;30;40;50 - íà áóìàãå ($unit2)
//alert('12345');
///////////////alert(pizza);
//$x22 - çíà÷åíèå (íàïðèìåð, 2.1)
var pieces = pizza.split(";");//explode(";", $pizza);
var pieces2 = unit2.split(";");//explode(";", $unit2);
var xleft=parseFloat(pieces[0]); 
var q=nchar(pizza, ";");

if (lastChar1==';' || lastChar2==';') q=q-1;

var xright=parseFloat(pieces[q]);//$pieces[$q]; 
var smart2=0;

    for (var i = 0; i < q; i++) {
var pr2=(x22 >= parseFloat(pieces[i]) && x22<=parseFloat(pieces[i+1]) || x22 <= parseFloat(pieces[i]) && x22 >= parseFloat(pieces[i+1]));
//alert(pr2.toString()); 

//    If (x22 >= parseFloat(pieces[i]) && x22<=parseFloat(pieces[i+1]) || x22 <= parseFloat(pieces[i]) && x22 >= parseFloat(pieces[i+1])){
if (pr2==true)
{
	smart2 = propo(parseFloat(pieces[i]), parseFloat(pieces[i+1]), x22, parseFloat(pieces2[i]), parseFloat(pieces2[i+1]));
        } 
    }

if (x22 < xleft && xleft < xright || x22 > xleft && xleft>xright)
{
///alert('1<<');

    smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[1]), x22, parseFloat(pieces2[0]), parseFloat(pieces2[1]));
}

if ((x22 > xleft && x22 > xright && xleft < xright) || (x22 < xleft && x22 > xright && xleft>xright))
{
///alert('2>>');
            smart2 = propo(parseFloat(pieces[q-1]), parseFloat(pieces[q]), x22, parseFloat(pieces2[q-1]), parseFloat(pieces2[q]));
}

return smart2;
}



function getts2d(xy1, x1, y1, xa4, ya4) {
var srav=xy1.split(";");//explode(";", xy1);
var d0=smart3(x1, xa4, srav[0]);
var h0=smart3(y1, ya4, srav[1]);
var gett=d0 + ";" + h0;
return gett;
}

function gettsa4(xyt) {
var srav=xyt.split(";;");//explode(";;", xyt);
var gett=getts2d(srav[0],srav[1],srav[2],srav[3],srav[4]);
return gett;
}

//////////////////////////////////////////
function proZ(x1xN, min4max4) {
var pieces = x1xN.split(";");
var pieces2 = min4max4.split(";");
var qx=nchar(x1xN, ";");
var qy=nchar(min4max4, ";");

var smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), 0, parseFloat(pieces2[0]), parseFloat(pieces2[qy]));

return smart2;
}

///////////////

function propo(x1, x2, i4, min4, max4) {
var part = (i4 - x1) / (x2 - x1);    
return (max4 - min4) * part + min4;
}

///////////////

function nchar(qwerty, char2) {
    var j=0;
    var rest="";
    for (var x = 0; x <= qwerty.length; x++) {
        rest = qwerty.substr(x, char2.length);
        if (rest == char2 ) j++;
        } 
    return j;
}

///////////////

function roundPlus(x, n) { //x - ÷èñëî, n - êîëè÷åñòâî çíàêîâ 
  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;
}

var caretReplace = function(_s) {           //Changed
    if (_s.indexOf("^") > -1) {
        var tab = [];
        var powfunc="Math.pow";
        var joker = "___joker___";
        while (_s.indexOf("(") > -1) {
            _s = _s.replace(/(\([^\(\)]*\))/g, function(m, t) {
                tab.push(t);
                return (joker + (tab.length - 1));
            });
        }

        tab.push(_s);
        _s = joker + (tab.length - 1);
        while (_s.indexOf(joker) > -1) {
            _s = _s.replace(new RegExp(joker + "(\\d+)", "g"), function(m, d) {
                //return tab[d].replace(/(\w*)\^(\w*)/g, powfunc+"($1,$2)");
                return tab[d].replace(/(\w*)\^(\w*.\w*)/g, powfunc+"($1,$2)");
            });
        }
    }
    // Added Block
    for(var i=1;i<_s.length;i++){
      if (_s[i]=="x"&&!isNaN(_s[i-1])){
        var magic=_s.split("");
        magic.splice(i,0,"*");
        _s=magic.join('');
      }
    }
  
    //end of it
    return _s;
};


function dLeft()
{

////////////////////////////////////////////alert('dL');

x=document.getElementById("ABCD").value;
var sus=x.split(";");

x1=sus[0];

document.getElementById("x330").value=x1;
} 

/////////////////

function dRight()
{
/////////////////////////////////////////////alert('dR');
x=document.getElementById("ABCD").value;
var sus=x.split(";");

x1=sus[1];

document.getElementById("x330").value=x1;
} 
/////////////////

function dLRM()
{
////////////////////////////////////////////alert('dLRM');
x=document.getElementById("ABCD").value;
var sus=x.split(";");
y=document.getElementById("XPERS").value;
var susy=y.split(";");

x1=sus[0];
x2=sus[1];
y1=susy[0];
y2=susy[1];

z=proZ(y, x);
x000=z.toString();

document.getElementById("x330").value=x000;
} 

/////////////////



function dUp()
{
///////////////////////////////////////////////alert('dUp');
x=document.getElementById("YBCD").value;
var sus=x.split(";");

x1=sus[1];

document.getElementById("y330").value=x1;
} 

/////////////////

function dDown()
{
/////////////////////////////////////////////alert('dDown');
x=document.getElementById("YBCD").value;
var sus=x.split(";");

x1=sus[0];

document.getElementById("y330").value=x1;
} 

/////////////////
function dUDZ()
{
///////////////////////////////////////////alert('dUDz');
x=document.getElementById("YBCD").value;
var sus=x.split(";");
y=document.getElementById("YPERS").value;
var susy=y.split(";");

x1=sus[0];
x2=sus[1];
y1=susy[0];
y2=susy[1];

z=proZ(y, x);
x000=z.toString();

document.getElementById("y330").value=x000;
} 

function invOX()
{
x=document.getElementById("ABCD").value;
var sus=x.split(";");

//y=document.getElementById("YPERS").value;
//var susy=y.split(";");

x1=sus[0];
x2=sus[1];

//y1=susy[0];
//y2=susy[1];

//z=proZ(y, x);
//x000=z.toString();

var x3=x2.toString()+';'+x1.toString();


//2019-05
//alert(document.getElementById("ABCD").value);
document.getElementById("ABCD").value=x3;
//2019-05
alert(document.getElementById("ABCD").value);

//document.getElementById("y330").value=x000;

} 

/////////////////

function invOY()
{
x=document.getElementById("YBCD").value;
var sus=x.split(";");

//y=document.getElementById("YPERS").value;
//var susy=y.split(";");

x1=sus[0];
x2=sus[1];

alert('2019 invert');

//y1=susy[0];
//y2=susy[1];

//z=proZ(y, x);
//x000=z.toString();

var x3=x2.toString()+';'+x1.toString();

document.getElementById("YBCD").value=x3;

//document.getElementById("y330").value=x000;

} 




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


var ftt=document.getElementById('ftype').value;

    var ab=DeltaRange(a0,100); 

if (ftt=='CALC') {ab=DeltaRange(a0,10);};
if (ftt=='DTMA') {ab=DeltaRange(a0,10);};
if (ftt=='JM') {ab=DeltaRange(a0,10);};

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

if (ftt=='CALC') {ab=DeltaRange(a0,10);};
if (ftt=='DTMA') {ab=DeltaRange(a0,10);};
if (ftt=='JM') {ab=DeltaRange(a0,10);};

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


function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}


function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = 'Plot.svg';  //$('#inputFileNameToSaveAs').val() ? $('#inputFileNameToSaveAs').val() + '.svg' :'Plot.svg';
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

function ChangeSign(){

	var ab=document.getElementById('SVGs2').value; 

document.getElementById('ftype').value='CALC'; 

var multiT=ab.split("\n");

	var textSign = multiT[0].split(" ");

var t2= "<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[1].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[2].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[3].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[4].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[5].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[6].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

textSign = multiT[7].split(" ");

t2= t2+"\n"+"<text x='"+textSign[0]+"' y='"+textSign[1]+"' fill='black' font-family='Arial' font-size='"+textSign[2]+"'>"+textSign[3]+"</text>";

document.getElementById('memo9').value=t2; 

//document.getElementById('memo9').value=ab;"
}

function alertOX(){
    var tW=document.getElementById('fw').value;
    var tH=document.getElementById('fh').value;
    var tW2=xsvg(tW, tH);
    document.getElementById('inputTextToSave').value=tW2;
}

function glue(){

    var gWgH=document.getElementById('A4WH').value; 
    temps= gWgH.split(";");
    gW=parseFloat(temps[0]);
    gH=parseFloat(temps[1]);
    ttW=gW.toString();
    ttH=gH.toString();


    var fi="<svg version='1.1' width='"+ttW+"' height='"+ttH+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

    var m0=document.getElementById('memo0').value;
    var m1=document.getElementById('memo1').value;
    var m2=document.getElementById('memo2').value;
    var m3=document.getElementById('memo3').value;
    var m4=document.getElementById('memo4').value;
    var m5=document.getElementById('memo5').value;
    var m6=document.getElementById('memo6').value;
    var m7=document.getElementById('memo7').value;
    var m8=document.getElementById('memo8').value;
    var m9=document.getElementById('memo9').value;

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
    xyNEO=xyNEO+m8+"\n";
    xyNEO=xyNEO+m9+"\n";

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

    var gWgH=document.getElementById('A4WH').value; 
    temps= gWgH.split(";");
    gW=parseFloat(temps[0]);
    gH=parseFloat(temps[1]);
    ttW=gW.toString();
    ttH=gH.toString();

//////////////.....alert('f01');

});




</script>
</head>
 <body onload="newbuild(); showT(); alertT();"> 



<?php
$d = dir(getcwd());
echo "<textarea id='xDir' name='xDir' style='display: none;'>";
while (($file = $d->read()) !== false){
if (strpos($file,".txt")>0) {
  echo $file;
  echo " ";
}
}
echo "</textarea>";
$d->close();
?>

    <script>
function showT(){
var ta3=document.getElementById("xDir").value;
var temps= ta3.split(" ");
//alert(ta3);
//alert(temps[0]);
var select = document.getElementById("selectNumber"); 
var options = temps; //["1", "2", "3", "4", "5"]; 
for(var i = options.length-2; i > -1; i=i-1) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
select.value = options[options.length-2];

//document.getElementById("fNameT").value=select.value;

}
////////////////////////////////////////////////////////////////////////


function mirrorT(){

//alert('111');

var fN=document.getElementById("fName").value;

alert(fN);

//alert(document.getElementById("selectNumber").value);

var fS=document.getElementById("selectNumber").value;

alert(fS);

//document.getElementById("fName").value=document.getElementById("selectNumber").value;

}



</script>

<?php
if(isset($_POST['save']))
{
 $f='text4';
 $ext='.txt';
// $data=$_POST['data'];
// $data2=$_POST['data2'];

 $data=$_POST['temptext'];
 $data2=$_POST['target'];

$data3=$_POST['data3'];
$data4=$_POST['data4'];
//$file=$f.$ext;
$file=$_POST['fNameT'];
$dates=$data."|||".$data2."|||".$data3."|||".$data4;
 if(file_exists($file))
 {
 ///echo "<font color='red'>file already exists</font>";
 $fo = fopen($file,"w");
 fwrite($fo,$dates);
 echo "your data is saved";

 echo "<textarea name='fNN' id='fNN' style='display: none;'>";
 echo $file;
 echo "</textarea>";


}
 else
 {
 $fo = fopen($file,"w");
 fwrite($fo,$dates);
 echo "your data is saved";

 echo "<textarea name='fNN' id='fNN' style='display: none;'>";
 echo $file;
 echo "</textarea>";

 }
}
/////////////////////
if(isset($_POST['load']))
{
$fileN=$_POST['fNameT'];
$file = fopen($fileN, "r");
//Output a line of the file until the end is reached
$line = fgets($file);
  echo "<textarea name='fTrio' id='fTrio' style='display: none;'>";
while(! feof($file))
{
  echo $line;
  $line = fgets($file);
}
echo "</textarea>";
fclose($file);


 echo "<textarea name='fNN' id='fNN' style='display: none;'>";
 echo $fileN;
 echo "</textarea>";


}
?>





<form method="post">

Выбрать файл с таблицей и параметрами:
<select id="selectNumber" name="selectNumber" onclick="onlyTTT()"></select>
<br>
<input type="button" value="Enlist" onclick="showT()" style="display: none;">
<input type="submit" value="Загрузить таблицу и параметры (из текстового поля!)" name="load"/>
<input type="submit" value="Сохранить таблицу и параметры" name="save"/>
<br>
Имя файла: <textarea name="fNameT" id="fNameT">text4.txt</textarea>

<textarea name="data" id="data" style="display: none;"></textarea>
<textarea name="data2" id="data2" style="display: none;"></textarea>
<textarea name="data3" id="data3" style="display: none;"></textarea>
<textarea name="data4" id="data4" style="display: none;"></textarea>

<br/>

<textarea class="input_type" id="temptext" name="temptext" cols="80" rows="3">0 1 20;1100 800;10 0 0 red 1 1
0 2 20;1100 800;10 0 0 black 0 0</textarea>
<br>

<textarea class="input_type" id="target" name="target" cols="80" rows="12">	mv_Q	Fsr_mV		mv_Q	Fsr_mV
1	14	259	1	17	134
2	1e+2	257	2	19	135
3	18	253	3	12	133
4	12	248	4	14	131
5	17	243	5	16	131
6	19	239	6	18	130
7	18	237	7	19	129
8	14	235	8	14	129
9	12	231	9	13	128
10	17	229	10	16	127
11	18	226	11	17	128
12	16	223	12	15	127
13	13	219	13	15	126
14	12	216	14	14	125
15	15	213	15	17	126
16	15	209	16	19	125
17	16	206	17	18	123
18	19	204	18	16	123
19	14	203	19	16	121
20	17	199	20	18	120
21	18	195	21	19	119
22	12	193	22	16	119
23	14	187	23	13	117
24	13	184	24	14	117
25	12	179	25	16	117
26	15	175	26	19	115
27	16	172	27	14	114
28	19	168	28	14	113
29	18	164	29	17	111
30	15	161	30	18	111
31	14	157	31	17	112
32	17	154	32	17	110
33	14	149	33	15	109
34	14	146	34	12	108
35	16	142	35	12	105
36	12	139	36	14	103
37	13	136	37	15	101
38	16	134	38	18	101
39	18	130	39	16	100
40	13	128	40	16	99
41	16	126	41	17	98
42	18	124	42	17	98
43	13	121	43	15	97
44	14	119	44	16	95
45	12	117	45	16	93
46	11	114	46	15	91
47	16	112	47	17	91
48	16	98	48	19	89
49	13	95	49	13	87
50	13	92	50	15	85
51	15	89	51	18	82
52	19	86	52	16	81
53	16	84	53	18	78
54	14	79	54	14	76
55	18	75	55	13	73
56	18	71	56	12	71
57	15	69	57	14	71
58	19	65	58	15	68
59	15	63	59	19	65
60	14	59	60	16	63
61	12	57	61	13	61
62	16	53	62	13	60
63	14	51	63	14	59
64	13	48	64	15	57
65	16	46	65	13	54
66	18	43	66	14	51
67	13	42	67	16	50
68	11	39	68	18	50
69	13	36	69	19	48
70	17	31	70	13	46
71	19	28	71	13	43
72	13	26	72	12	41
73	14	24	73	15	40
74	19	23	74	19	37
75	13	21	75	18	35
76	13	21	76	14	32
77	18	19	77	14	30
78	14	19	78	16	27
79	12	18	79	14	24
80	18	17	80	17	22
81	15	17	81	18	19
82	16	16	82	17	18
83	13	14	83	16	16
84	15	14	84	15	16
85	14	13	85	18	15
86	13	13	86	15	14
87	16	12	87	14	13
88	17	12	88	14	12
89	19	11	89	16	10
90	18	9	90	17	9
91	19	8	91	17	9
92	17	8	92	17	7
93	16	7	93	17	6
94	13	5	94	14	4
95	19	5	95	16	4
96	16	4	96	18	3
97	13	3	97	14	2
98	17	3	98	13	1
99	12	1	99	12	0
100	14	0	100	13	0
</textarea>


<script>
function onlyTTT()
{
var el = document.getElementById("selectNumber");
var val = el[el.selectedIndex].text;
document.getElementById('fNameT').value=val;
}
function alertT()
{
var trio = document.getElementById('fTrio').value
var trioA = trio.split("|||");
document.getElementById('temptext').value=trioA[0];
//alert(trioA[0]);
//alert(trioA[1]);
document.getElementById('target').value=trioA[1];
//alert(trioA[2]);
document.getElementById('data3').value=trioA[2];
document.getElementById('data4').value=trioA[3];
//var el = document.getElementById("selectNumber");
//var val = el[el.selectedIndex].text;
//document.getElementById('fNameT').value=val;
}
</script>






</form>

<input type="submit" value="Таблица и параметры - из файла TXT (из текстового поля!)"  onclick="alertT()">

<br>

Шаг деления по оси OX:
<select name="tarXstep" id="tarXstep"  onchange="newbuild()" style="width : 50">
<option value='0.2' selected>0.2</option>
<option value='0.5'>0.5</option>
</select>

Шаг деления по оси OY:
<script>
var sele="";
        document.write('<select name="tarYstep" id="tarYstep"  onchange="newbuild()" style="width : 50">');
for(var i=0.2; i<0.3;i=i+0.2) 
{
if (i==0.2) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
for(var j=0.5; j<0.7;j=j+0.5) 
{
if (j==0.2) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+j+sele+j+"</option>");
}
document.write('</select>');
</script>&emsp;

<input type="button" value="Изменить график" onclick="newbuild()">
<input type="button" value="Сохранить SVG" onclick="saveTextAsFile()">
<input type="button" value="Напечатать SVG" onclick="window.print();">

<textarea  class="input_type" id="xColor"  name="xColor"  style="display: none;">red</textarea>
<textarea  class="input_type" id="xStep"  name="xStep"  style="display: none;">0.5</textarea>


<script>
var sele="";
        document.write('<select name="OXbox" id="OXbox" style="width:50;  display: none;" onclick="newOX()">');
//for(var i=0; i<21;i++) 
//{
//if (i==0) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}

document.write("<option value='"+0+"' selected>"+'OY-MinX'+"</option>");
document.write("<option value='"+1+"'>"+'OY-MaxX'+"</option>");
document.write("<option value='"+2+"'>"+'OY-ZeroX'+"</option>");

document.write('</select>');

        document.write('<select name="OYbox" id="OYbox" style="width:50;  display: none;" onclick="newOY();">');
//for(var i=0; i<21;i++) 
//{
//if (i==0) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}

document.write("<option value='"+0+"' selected>"+'OX-MinY'+"</option>");
document.write("<option value='"+1+"'>"+'OX-MaxY'+"</option>");
document.write("<option value='"+2+"'>"+'OX-ZeroY'+"</option>");

document.write('</select>');

//        document.write('<select name="yBox" id="yBox" style="width : 50" onclick="newcols(); newchange();">');
//for(var i=0; i<21;i++) 
//{
//if (i==1) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}
//document.write('</select>');

//        document.write('<select name="mBox" id="mBox" style="width : 50" onclick="newcols()">');
//for(var i=0; i<8;i++) 
//{
//if (i==2) {sele="' selected>"} else {sele="'>"}
//	document.write("<option value='"+i+sele+i+"</option>");
//}
//document.write('</select>');

</script>&emsp;



<br>


					<select id="paper" name="paper"class="input_type" style="width: 200px;" onchange="onlyrest();newbuild()"  onclick="onlyrest();newbuild()">
						<option value=1>1748;1240;A3(Horizontal) - 297 x 420 mm</option>

						<option value=2>1240;1748;A3(Vertical) - 420 x 297 mm</option>

						<option value=3 selected>1240;874;A4(Horizontal) - 210 x 297 mm</option>

						<option value=4 >874;1240;A4(Vertical) - 297 x 210 mm</option>

						<option value=5>874;620;A5(Horizontal) - 148 x 210 mm</option>

						<option value=6>620;874;A5(Vertical) - 210 x 148 mm</option>
					</select>					
					<input id="A4WH" class="input_type" value="1240;874;A4(Horizontal)"  style="width: 200px;" onchange="newbuild()" onclick="newbuild()">
<font color="red"> Open file: </font>
<input type="file" id="fileToLoad2"onchange="loadCSVZ();">

<br>

<b id="boldStuff" style="color:transparent;">SVG</b>

<br>




<input id="y330" type="text"  class="input_type" name="y330" value="810" style="display: none;"/>
<input id="x330" type="text"  class="input_type" name="x330" value="20" style="display: none;"/>
<textarea  class="input_type" id="xColor" name="xColor" style="display: none;" >red</textarea>
                            <textarea id="inputTextToSave" class="input_type"  style="display: none;"></textarea>
                            <textarea id="memo0" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo1" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo2" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo3" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo4" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo5" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo6" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo7" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo8" style="display:none;" class="input_type"></textarea>
                            <textarea id="memo9" style="display:none;" class="input_type"></textarea>



<textarea  class="input_type" id="delimiters"  name="delimiters" style="display: none;height:90px;"></textarea>
<textarea  class="input_type" id="ftype"  name="ftype" style="display: none;">CSV</textarea>
<textarea id="inputTextToSave" class="input_type" style="display: none;"></textarea>



<input id="inputFileNameToSaveAs" class="input_type" placeholder="Plot"  style="display: none;"/>
<input type="button" value="Сохранить SVG" onclick="saveTextAsFile()">
<input type="button" value="Напечатать SVG" onclick="window.print();">

                            <script> var sele="";
        document.write('<select name="fwBox" id="fwBox" style="width : 50; display: none;" onclick="onlycols();">');
// var s=localStorage.getItem('varMM'); var x=this.value; var x1=parseFloat(x);var ta = s.split(";;"); document.getElementById('XPERS').value=ta[x1];">');
for(var i=0; i<8;i++) 
{
if (i==0) {sele="' selected>"} else {sele="'>"}
document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');
document.getElementById('fwBox').value=localStorage.getItem('varOX');</script>

                            <input id="XPERS" name="XPERS" type="text" class="input_type" value="0;15"/ style="display: none;">

                            <input id="xMMM" name="xMMM" type="text" class="input_type" value="0;500"/ style="display: none;">
			    <input id="Xis1" name="Xis1" type="text" class="input_type" value="0;500"/ style="display: none;">

                        <textarea name="framewidth" id="fw" class="input_type"  style="display: none;">100	100
                            200	200
                            300	300
                            400	470
                            500	500
                            600	600
                            700	700
                            800	800
                            900	900
                        1000	1000</textarea>

                            <script>var sele="";
        document.write('<select name="fhBox" id="fhBox" style="width:50; display: none;" onclick="onlycols()">');
for(var i=0; i<8;i++) 
{
if (i==1) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');
document.getElementById('fhBox').value=localStorage.getItem('varOY');</script>

                            <input id="YPERS" name="YPERS" class="input_type" value="10;40" style="display: none;"/>
                            <input id="yMMM" name="yMMM" class="input_type" value="500;0" style="display: none;"/>
                            <input id="Yis1" name="Yis1" class="input_type" value="500;0" style="display: none;"/>

                        <textarea name="frameheight" class="input_type" id="fh" style="display: none;">50	100
                            100	200
                            150	300
                            200	400
                            250	560
                            300	600
                            350	700
                            400	800
                            450	900
                        500	1000</textarea>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter42436314 = new Ya.Metrika({
                        id:42436314,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
                    });
                } catch(e) { }
            });
            var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/42436314" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

  



<br>

<br>
Обратная связь: Yaroslav Solyanikov (Ярослав Соляников) +79644597661(WhatsApp) @yaroslav1982(Facebook) 
<br>
Github: <a href="https://github.com/yaroslav1982/csv2svg-online">csv2svg-online</a>

<br>
<input id="ABCD" name="ABCD" type="text" class="input_type" style="display:none;" value="0;500"/>
<input id="YBCD" name="YBCD" class="input_type"  style="display:none;" value="500;0"/>
<textarea id="bibi" class="input_type" name="bibi" style="display:none;"></textarea>
<textarea id="zizi" class="input_type" name="zizi" style="display:none;"></textarea>


<script>
document.getElementById('fNameT').value=document.getElementById('fNN').value;
//document.getElementById("selectNumber").value = document.getElementById('fNN').value;

var options= document.getElementById('selectNumber').options;
var o40=document.getElementById('fNN').value;

//for (var i= 0; n=options.length; i<n; i++) {
//    if (options[i].value==o40) {
//        options[i].selected= true;
//        break;
//    }
//}

</script>

</body>
</html>