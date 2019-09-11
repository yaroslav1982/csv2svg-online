var iStolb=0;

var textArray=['1234','5678'];
function smartABS(x1,y1)
{
 var z1=x1*x1+y1*y1;
 z1=Math.sqrt(z1);
return z1;

}

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

function Ydu(ch1, ch2)
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

    document.getElementById("y330").value = temp.toString();

//////////////////////////////////////////////////alert(s);
}

function getRECT()
{


var elSel = document.getElementById('selectX');
//  var i;
//  for (i = elSel.length - 1; i>=0; i--) {
//    if (elSel.options[i].selected) {

// ALERTOP      
//alert(elSel.options[0].value);


 var s=elSel.options[0].value; //document.getElementById("scaR").value;

var textArray = s.split(";");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;

var temps=['0.1','4'];
var tBak=['0.1','4'];
//temp=(parseFloat(textArray[3])-parseFloat(textArray[0]));
//temp2=(parseFloat(textArray[4])-parseFloat(textArray[1]));

temp=(parseFloat(textArray[3]));
temp2=(parseFloat(textArray[4]));

    document.getElementById("tW1").value = textArray[0];
    document.getElementById("tH1").value = textArray[1];
    document.getElementById("tW2").value = temp;
    document.getElementById("tH2").value = temp2;

    //document.getElementById("target").value = Tneo;

//////////////////////////////////////////////////alert(s);
}

// Çàìûêàíèå
(function() {
  /**
   * Êîððåêòèðîâêà îêðóãëåíèÿ äåñÿòè÷íûõ äðîáåé.
   *
   * @param {String}  type  Òèï êîððåêòèðîâêè.
   * @param {Number}  value ×èñëî.
   * @param {Integer} exp   Ïîêàçàòåëü ñòåïåíè (äåñÿòè÷íûé ëîãàðèôì îñíîâàíèÿ êîððåêòèðîâêè).
   * @returns {Number} Ñêîððåêòèðîâàííîå çíà÷åíèå.
   */
  function decimalAdjust(type, value, exp) {
    // Åñëè ñòåïåíü íå îïðåäåëåíà, ëèáî ðàâíà íóëþ...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Åñëè çíà÷åíèå íå ÿâëÿåòñÿ ÷èñëîì, ëèáî ñòåïåíü íå ÿâëÿåòñÿ öåëûì ÷èñëîì...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Ñäâèã ðàçðÿäîâ
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Îáðàòíûé ñäâèã
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Äåñÿòè÷íîå îêðóãëåíèå ê áëèæàéøåìó
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Äåñÿòè÷íîå îêðóãëåíèå âíèç
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Äåñÿòè÷íîå îêðóãëåíèå ââåðõ
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

function t2019()
{
 //var s=document.getElementById("template").value;

var s=localStorage.getItem('varJK');

var textArray = s.split("\n");

//alert(s);

var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;
var x=new Array(3000);
var temps=['0.1','4'];
var tBak=['0.1','4'];
var nako='';
var nmax=0; var Tmax=0; var Tnako=0; var nakomax=1000;
var newNumber0=0;
var newNumber1=0;
var d1=0;
var d2=0;

for(var i=0; i<textArray.length;i++) 
{

Tneo=textArray[i];
alert(Tneo);
}

}


function DTMA()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temp3=0.1;
var temp4=0.1;
var x=new Array(3000);
var temps=['0.1','4'];
var tBak=['0.1','4'];
var nako='';
var nmax=0; var Tmax=0; var Tnako=0; var nakomax=1000;
var newNumber0=0;
var newNumber1=0;
var d1=0;
var d2=0;

for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");


temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
x[i]=temp;
temp=Math.round(temp*100000000)/100000000;
temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
temp3=parseFloat(temps[0]);
if (i>2000) {temp3=0-temp3; temp=temp-x[i-2000];} // 
Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\t'+temp3+'\n';

newNumber0=parseFloat(temps[0]);//xx[j].push(newNumber0);
newNumber1=temp2; //parseFloat(temps[2]);//yy[j].push(newNumber1);
if (newNumber1>nmax && newNumber1<1000000000 && i<1001) {nmax=newNumber1; Tmax=i;}
if ((i%100)==0){
nako=nako+";"+nmax.toString(); 
if (newNumber1>nmax && newNumber1<1000000000 && i<1001) {nmax=newNumber1; Tmax=i;}
if (nakomax>nmax && nakomax<1000000000 && nmax!==0 && i<1001) {nakomax=nmax; Tnako=Tmax;}
nmax=0;}

tBak=temps;
}

//alert(nako[j]); 

/////////////////////////////////
/////////////alert(nakomax[1].toString()+";"+Tnako[1].toString()+";"+ik.toString());
//alert(nakomax[1].toString()+";"+Tnako[1].toString()+";"+ik.toString());
var n1=Tnako-50; var n2=Tnako+50; 
//alert(textArray[Tnako[1]-10]);alert(textArray[Tnako[1]+10]);
newNumber1=0
for(var i=n1; i<n2;i++) {
temps= textArray[i].split("\t");
newNumber0=parseFloat(temps[2]);
newNumber1=newNumber1+newNumber0;
}
newNumber1=newNumber1/100;
temps= textArray[Tnako].split("\t");
newNumber0=parseFloat(temps[0]);
//alert(newNumber1.toString()+";"+newNumber0.toString());
var x1=newNumber0; var y1=newNumber1; 

n1=950-50; n2=950+50; 
newNumber1=0
for(var i=n1; i<n2;i++) {
temps= textArray[i].split("\t");
newNumber0=parseFloat(temps[2]);
newNumber1=newNumber1+newNumber0;
}
newNumber1=newNumber1/100;
temps= textArray[950].split("\t");

newNumber0=parseFloat(temps[0]);
var x2=newNumber0; var y2=newNumber1; 
var k1=(y2-y1)/(x2-x1);
var k2=k1*500
//alert(newNumber1.toString()+";"+newNumber0.toString()+";"+k2.toString());

/////////////////////////////////
//alert(nakomax.toString()+";"+Tnako.toString()); //+";"+j.toString());


//2>//////////////////
tBak=['0.1','4'];
Tneo='';
for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");


temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
x[i]=temp;
temp=Math.round(temp*100000000)/100000000;
temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
temp3=parseFloat(temps[0]);

temp4=parseFloat(temps[2])-k1*temp3;

d1=temp;
d2=0;
if (i>2000) {temp3=0-temp3; temp=temp-x[i-2000]; d1=0; d2=temp;} //

 
Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\t'+temp3+'\t'+temp4+'\t'+d1+'\t'+d2+'\n';
tBak=temps;
}

//2<//////////////////
    document.getElementById("target").value = Tneo;

//////////////////////////////////////////////////alert(s);
}

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
//2019 minimum
nakomin[k]=100000;

for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
temp2=parseFloat(temps[k]);//(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
newNumber1=temp2; //parseFloat(temps[2]);//yy[j].push(newNumber1);
nmax[k]=newNumber1; Tmax[k]=i;
///nako=nako+";"+nmax[k].toString(); 
nmin[k]=newNumber1; Tmax[k]=i;
///nako=nako+";"+nmin[k].toString(); 
if (nakomax[k]<nmax[k]) {nakomax[k]=nmax[k]; Tnako[k]=Tmax[k];}
if (nakomin[k]>nmin[k]) {nakomin[k]=nmin[k]; Tnakoi[k]=Tmax[k];}
}
//alert('7');
//alert(nakomax[k].toString()+";"+Tnako[k].toString());
//alert('8');
//alert(nakomin[k].toString()+";"+Tnakoi[k].toString());
//alert('9');
//nakot=DeltaRange(nakomax[k].toString()+";"+nakomin[k].toString(), 10);

nakot=DeltaRange(nakomin[k].toString()+";"+nakomax[k].toString(), 10);

tBak= nakot.split(";;");
nakot=tBak[0];
nako=nako+nakot+";;   ";
}
///    document.getElementById("target").value = Tneo;
//alert(nako);
localStorage.setItem('varMM', nako);
}

function Dtar1()
{
 var s=document.getElementById("tar1").value;
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
//2019 minimum
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

////////////////////////////////////////////////////////////alert(nako);

localStorage.setItem('varMM', nako);
}


function DTMA3()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp=Math.round(temp*100000000)/100000000;
temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
tBak=temps;
}
    document.getElementById("target").value = Tneo;
}

function DTMA2()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp=Math.round(temp*100000000)/100000000;
temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
temp2=Math.round(temp2*100000000)/100000000;
Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
tBak=temps;
}
    document.getElementById("target").value = Tneo;
}

function DJIn()
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var xyzN='';
var diin='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
for(var i=1; i<textArray.length;i++) 
{
temps= textArray[i].split("\t");
//temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//temp=Math.round(temp*100000000)/100000000;
//temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
//temp2=Math.round(temp2*100000000)/100000000;
//
xyzN=temps[2]+';'+temps[3]+';'+temps[4]+';'+temps[5];
diin=car2sphY(xyzN);
//Tneo=Tneo+textArray[i]+'\t'+temps[2]+'\t'+temps[3]+'\t'+temps[4]+'\t'+temps[5]+'\n';
Tneo=Tneo+textArray[i]+'\t'+diin+'\n';
//tBak=temps;
}
    document.getElementById("target").value = Tneo;
}

function CARE()             //Changed
{
     var textToSave = document.getElementById("tCare").value || "x^2; sin(x)";
    var textFrom = document.getElementById("textFrom").value || 1;
    var textTo = document.getElementById("textTo").value || 10;
    var textStep = document.getElementById("textStep").value || 0.1;
  textToSave=textToSave.replace('arcsin', 'asin');
  textToSave=textToSave.replace('arccos', 'acos');
  textToSave=textToSave.replace('х', 'x');  
  textToSave=textToSave.replace('X', 'x');

var tts= textToSave.split(";");

var s='';
var i=0;
var j=0;
for(i=parseFloat(textFrom); i<parseFloat(textTo);i=Math.round((i+parseFloat(textStep))*1000000)/1000000){
s=s+i;

for(j=0; j<tts.length;j++){
if((math.eval('x='+i+'; round('+tts[j]+',13)').entries[0]+'').indexOf("i")>-1)s=s+'\t'+NaN;
else s=s+'\t'+math.eval('x='+i+'; round('+tts[j]+',13)').entries[0];
}
s=s+'\n';

if (i>=parseFloat(textTo))break;
}
s=s+parseFloat(textTo);

for(j=0; j<tts.length;j++){
	s=s+'\t'+math.eval('x='+parseFloat(textTo)+'; '+tts[j]).entries[0];
}

document.getElementById("target").value = s;

//s=math.eval('x='+textFrom+';2+x*2').entries[0];

//alert(s);

loadARR();
}

function DOBA(perem)             //Changed
{
//alert(perem);
var textToSave = document.getElementById("tCare").value // || "x^2; sin(x)";
textToSave = textToSave.trim();
//alert(textToSave);
var textToSave1=textToSave+";"+perem;
if (textToSave=='') textToSave1=perem;
if (perem=='CLS') textToSave1='';
//alert(textToSave);
document.getElementById("tCare").value = textToSave1;
}

function CAREmin()             //Changed
{
     var textToSave = document.getElementById("tCare").value || "x^2; sin(x)";
    var textFrom = document.getElementById("textFrom").value || 1;
    var textTo = document.getElementById("textTo").value || 10;
    var textStep = document.getElementById("textStep").value || 0.1;
  textToSave=textToSave.replace('arcsin', 'asin');
  textToSave=textToSave.replace('arccos', 'acos');
  textToSave=textToSave.replace('х', 'x');  
  textToSave=textToSave.replace('X', 'x');

var tts= textToSave.split(";");

var s='';

for(j=0; j<tts.length;j++){
s=s+'\n'+math.eval('x='+textFrom+'; round('+tts[j]+',13)').entries[0];
}

//var s2=document.getElementById("tCare").value
//	var s=math.eval('x='+textFrom+';'+s2).entries[0];

s=s.trim();
document.getElementById("tX").value = s;

//	alert(s);
}

function CAREmax()             //Changed
{
     var textToSave = document.getElementById("tCare").value || "x^2; sin(x)";
    var textFrom = document.getElementById("textFrom").value || 1;
    var textTo = document.getElementById("textTo").value || 10;
    var textStep = document.getElementById("textStep").value || 0.1;
  textToSave=textToSave.replace('arcsin', 'asin');
  textToSave=textToSave.replace('arccos', 'acos');
  textToSave=textToSave.replace('х', 'x');  
  textToSave=textToSave.replace('X', 'x');

var tts= textToSave.split(";");

var s='';

for(j=0; j<tts.length;j++){
s=s+'\n'+math.eval('x='+textTo+'; round('+tts[j]+',13)').entries[0];
}

//var s2=document.getElementById("tCare").value
//	var s=math.eval('x='+textTo+';'+s2).entries[0];

s=s.trim();
document.getElementById("tX").value = s;

//	alert(s);
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function loadA2()
{

var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
var stringA2 = stringArray.sort();


console.log('Сортировка:', stringArray.sort());
alert(stringA2);

}


function loadARR()
{
textFrom2 = document.getElementById("target").value
textArray = textFrom2.split("\n");
for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
//Tneo=Tneo+textArray[i]+'\n';
}
//    document.getElementById("target").value = Tneo;
//var WW=document.getElementById('target').offsetWidth;
//var HH=document.getElementById('target').offsetHeight;

var W1=document.getElementById('tW1').value;
var H1=document.getElementById('tH1').value;

var WW2=parseFloat(document.getElementById('tW2').value)+parseFloat(W1);
var HH2=parseFloat(document.getElementById('tH2').value)+parseFloat(H1);

var WW=WW2.toString();
var HH=HH2.toString();

//alert(HH);

var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);
//sOX.value=props(m222, "0;"+WW);
//sOY.value=props(m22, "0;"+HH);
sOX.value=props(m222, W1+";"+WW);
sOY.value=props(m22, H1+";"+HH);
}

function zapas(textarea)
{

var tf=document.getElementById('inputTextToSave').value; 

var delim=";"

var qx=nchar(tf, ";");
var nsemi=qx;
var qy=qx.toString();

//alert('5');
var wx=nchar(tf, ",");
var ncomma=wx;
if (wx>qx) {qx=wx; delim=","}
var wy=wx.toString();

//alert('5');
var ex=nchar(tf, "\t");
if (ex>qx) {qx=ex; delim="\t"}
var ey=ex.toString();

//alert('5');
var rx=nchar(tf, " ");
if (rx>qx) {qx=rx; delim=" "}
var ry=rx.toString();


//alert('5');

var dede="semicolons="+qy+"\ncommas="+wy+"\ntabs="+ey+"\nspaces="+ry+"\ndelimeter=("+delim+")";

document.getElementById("delimiters").value=dede;

//alert('7');

var cd=document.getElementById('inputTextToSave').value; 
var str = cd.replace(/\n|\r\n|\r/g, ';;'); 
//
var str2 = str.replace(/\s{1,}/g, ';'); 
//var str2 = str.replace(/\s{1,}/g, '\t'); 
var str3 = cd.replace(/;{3,}/g, ';;'); 
//var str4 = str3.replace(/\s/g, ''); 
var str5 = str2.replace(/;{2,}/g, '\r\n'); 
//var str6 = str5.replace(/;/g, ' '); 
//
//alert('8');

var str7 = str5.replace(/;/g, '\t'); 

//if(delim=",") {str7 = str5.replace(/,/g, '\t');}

//alert(str5);

var str8 = str5.replace(/,/g, '\t');

document.getElementById(textarea).value=str7; ///5;

if (delim==",") {document.getElementById(textarea).value=str8;}

///
//alert('look');

var Tneo="";
    textFrom2 = document.getElementById("inputTextToSave").value
textArray = textFrom2.split("\n");
for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
Tneo=Tneo+textArray[i]+'\n';
}

}

 
function loadCSV2()
{
//alert('5');

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

//alert('tfu');
alert('File loaded');

var tf=document.getElementById('inputTextToSave').value; 

var delim=";"

var qx=nchar(tf, ";");
var nsemi=qx;
var qy=qx.toString();

//alert('5');
var wx=nchar(tf, ",");
var ncomma=wx;
if (wx>qx) {qx=wx; delim=","}
var wy=wx.toString();

//alert('5');
var ex=nchar(tf, "\t");
if (ex>qx) {qx=ex; delim="\t"}
var ey=ex.toString();

//alert('5');
var rx=nchar(tf, " ");
if (rx>qx) {qx=rx; delim=" "}
var ry=rx.toString();


//alert('5');

var dede="semicolons="+qy+"\ncommas="+wy+"\ntabs="+ey+"\nspaces="+ry+"\ndelimeter=("+delim+")";

document.getElementById("delimiters").value=dede;

var cd=document.getElementById('inputTextToSave').value; 
var str = cd.replace(/\n|\r\n|\r/g, ';;'); 
//
var str2 = str.replace(/\s{1,}/g, ';'); 
//var str2 = str.replace(/\s{1,}/g, '\t'); 
var str3 = cd.replace(/;{3,}/g, ';;'); 
//var str4 = str3.replace(/\s/g, ''); 
var str5 = str2.replace(/;{2,}/g, '\r\n'); 
//var str6 = str5.replace(/;/g, ' '); 
//

var str7 = str5.replace(/;/g, '\t'); 

//if(delim=",") {str7 = str5.replace(/,/g, '\t');}

//alert(str5);

var str8 = str5.replace(/,/g, '\t');

document.getElementById('usta2').value=str7; ///5;

if (delim==",") {document.getElementById('usta2').value=str8;}

///alert('look');

var Tneo="";
    textFrom2 = document.getElementById("inputTextToSave").value
textArray = textFrom2.split("\n");
for(var i=0; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
Tneo=Tneo+textArray[i]+'\n';
}


}

function loadCSVtext()
{
alert('5');

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

//alert('tfu');
alert('Файл загружен');

var tf=document.getElementById('inputTextToSave').value; 

var delim=";"

var qx=nchar(tf, ";");
var nsemi=qx;
var qy=qx.toString();

//alert('5');
var wx=nchar(tf, ",");
var ncomma=wx;
if (wx>qx) {qx=wx; delim=","}
var wy=wx.toString();

//alert('5');
var ex=nchar(tf, "\t");
if (ex>qx) {qx=ex; delim="\t"}
var ey=ex.toString();

//alert('5');
var rx=nchar(tf, " ");
if (rx>qx) {qx=rx; delim=" "}
var ry=rx.toString();


//alert('5');

var dede="semicolons="+qy+"\ncommas="+wy+"\ntabs="+ey+"\nspaces="+ry+"\ndelimeter=("+delim+")";

document.getElementById("delimiters").value=dede;

var cd=document.getElementById('inputTextToSave').value; 
var str = cd.replace(/\n|\r\n|\r/g, ';;'); 
alert(str);
//
//var str15 = str.replace(/[ ]/g, '\s');

var str15 = str.replace(/\s\s+/g, ' ');
alert(str15);
var str2 = str15.replace(/\s{1,}/g, ';'); 
alert(str2);
//var str2 = str.replace(/\s{1,}/g, '\t'); 
var str3 = cd.replace(/;{3,}/g, ';;'); 
//var str4 = str3.replace(/\s/g, ''); 
var str5 = str2.replace(/;{2,}/g, '\r\n'); 
alert(str5);
//var str6 = str5.replace(/;/g, ' '); 
//

var str7 = str5.replace(/;/g, '\t'); 
alert(str7);
//if(delim=",") {str7 = str5.replace(/,/g, '\t');}

//alert(str5);

var str8 = str5.replace(/,/g, '\t');

document.getElementById('target').value=str7; ///5;

if (delim==",") {document.getElementById('target').value=str8;}

///alert('look');

var Tneo="";
    textFrom2 = document.getElementById('target').value;//document.getElementById("inputTextToSave").value
textArray = textFrom2.split("\n");
for(var i=3; i<textArray.length;i++) 
{
textArray[i] = textArray[i].replace(/[;]/g, '\t');
Tneo=Tneo+textArray[i]+'\n';
}

/////////////////////////////    document.getElementById("target").value = Tneo;

var WW=document.getElementById('target').offsetWidth;
var HH=document.getElementById('target').offsetHeight;
var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);
//alert(HH);
sOX.value=props(m222, "0;"+WW);
sOY.value=props(m22, "0;"+HH);

document.getElementById('target').value=str7; ///5;

}

function newcols()
{
//'document.getElementById('xBox').value='5';
//'document.getElementById('yBox').value='5';
document.getElementById('XYc').value=document.getElementById('xBox').value+";"+document.getElementById('yBox').value+"#Ji;Js"; //'5;5#Ji;Js';

}

function xpp()
{
var nx=parseFloat(document.getElementById('yBox').value)+1;
document.getElementById('yBox').value=nx.toString();
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

function newchange()
{

//prove01

}

function onlycols()
{
var W1=document.getElementById('tW1').value;
var H1=document.getElementById('tH1').value;

var WW2=parseFloat(document.getElementById('tW2').value)+parseFloat(W1);
var HH2=parseFloat(document.getElementById('tH2').value)+parseFloat(H1);

var WW=WW2.toString();
var HH=HH2.toString();

var sOX = document.getElementById("fw");
var sOY = document.getElementById("fh");
fwN = document.getElementById('fwBox').value ;
fhN = document.getElementById('fhBox').value ;
var m222=n1(fwN);
var m22=n1(fhN);

var st1=document.getElementById('st1').value;
var st2=document.getElementById('st2').value;


//alert(HH);

//sOX.value=props(m222, "0;"+WW);
//sOY.value=props(m22, "0;"+HH);

sOX.value=props(m222, W1+";"+WW);

if (st1=='-1') {sOX.value=props(m222, WW+";"+W1)};

sOY.value=props(m22, H1+";"+HH);

if (st2=='-1') {sOY.value=props(m22, HH+";"+H1)};

}
////////////////////////////////////////////////////////////////////////////////////////

function onlyrest(){
  document.getElementById('A4WH').value=document.getElementById("paper").value;
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

function newX1X2(t1)
{
var s1s=t1.split(";");
var s1=s1s[0];
var s2=s1s[1];

var mini = parseFloat(s1);
var maxi = parseFloat(s2);

if (mini !== 0)
{koef =  Math.abs(maxi / mini);
vsig = maxi / mini;
}
else
{koef = 1;
vsig = 1;}
    
if (koef>10)
{mini=0;
}

if (koef<0.1)
{maxi=0;
}

    mmsum = Math.abs(maxi - mini);

if (Math.abs(maxi)>Math.abs(mini))
{mmi = Math.abs(maxi);
}
else
{mmi = Math.abs(mini);}

if (mmsum>mmi)
{mmi = mmsum;
}

//smi=
s3=mmi.toExponential(0);
s4= "1" + s3.substr(1,100);

//alert(s4);

v4=parseFloat(s4);
vmin=Math.floor(mini / v4)*v4;
vmax = Math.floor(maxi / v4 + 0.99) * v4;

if (((vmax - vmin) / v4) < 3)
{v4 = v4 / 5;
if ((mmsum) < (v4 * 2))
{v4 = v4 / 2;
vmin=Math.floor(mini / v4)*v4;
vmax = Math.floor(maxi / v4 + 0.99) * v4;
}}
if (vsig < 0 && koef > 10)
{vmin = 0-v4;
}
if (vsig < 0 && koef < 0.1)
{vmax = 0-v4;
}
s4=vmin.toString()+";"+vmax.toString()+";;"+v4.toString();
return s4;

}

///////////////

function DeltaRange(t1, mgLines)
{
var s1s=t1.split(";");
var s1=s1s[0];
var s2=s1s[1];

var mini = parseFloat(s1);
var maxi = parseFloat(s2);

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
var ma2=ma1*deca;
 

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


function propspp(x1xN, min4max4) {

var ab=parseFloat(props(x1xN, min4max4));
if(ab<0) {ab=0;}

var bc=ab.toString();
return bc;

}

function car2sphY(xyzY) {
var xyzy2=xyzY.split(";");
var x=parseFloat(xyzy2[0]); 
var y=parseFloat(xyzy2[1]); 
var z=parseFloat(xyzy2[2]); 
var y2=parseFloat(xyzy2[3]); 
var Lxy=smartABS(x,y);

var Lxy2=Lxy;
//alert("Lxy="+Lxy.toString());
var Lxyz=smartABS(Lxy,z);
//alert("Lxyz="+Lxyz.toString());
//alert(xyzy2[3]);

//////////////if(Lxy==0)
//////////////////{
//alert("2");
///var car2sphYs="0;0;"+xyzy2[2];
///return car2sphYs;
//alert(car2sphYs);
///////////////////////////////}
//////////////////////////////else{
//alert("3");
//alert("x="+x.toString());
//alert("Lxy2="+Lxy2.toString());
if(Lxy==0){var dx=0}else{var dx=x / Lxy2;}

//alert("dx="+dx.toString());
var d = Math.acos(dx);
//alert(d.toString());
if(y < 0){d = 2 * 3.14 - d;}
    d = d*114.59/2;
d=Math.round(d*1000)/1000;
//alert(d.toString());
if(Lxyz==0){var dx=0}else{var dx=Lxy2 / Lxyz;}
//dx=Lxy2 / Lxyz;
//alert(dx.toString());
j = Math.acos(dx);
    if(z < 0){j = -j;}
    j = j*114.59/2;
j=Math.round(j*1000)/1000;
if(d > 400){d = 0;}
    var Dmax = 180;
    if(d > Dmax){d = d - 360;}
   var iinn = Lxyz * Math.pow(10,y2); // '''Sqr(x ^ 2 + y ^ 2 + z ^ 2)
iinn=Math.round(iinn*1000)/1000;
//    var car2sphYs = d.toString() + ";" + j.toString() + ";" + iinn.toString();
    var car2sphYs = d.toString() + "\t" + j.toString() + "\t" + iinn.toString();
//alert(car2sphYs);
    return car2sphYs;        
 ///////////////////////////   }
}

function date2short(x1234)
{
var s4= x1234.substr(0,4);
var s5= x1234.substr(5,2);
var s7= x1234.substr(8,2);

var x1= parseFloat(s4);
var x2= (parseFloat(s5)-1)/12;
var x3= (parseFloat(s5)-1)/365;

x1=x1+x2+x3;

s4=x1.toString();//s4+s5+s7;


return s4;
//return strn;
//document.getElementById("target").value = Tneo;
}

function findval(x1)
{
 var s=document.getElementById("target").value;
var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];
for(var i=1; i<textArray.length;i++) 
{
  temps= textArray[i].split("\t");
  temp=(parseFloat(temps[5]));
  if (temp>x1) {Tneo=temps[0]; Tneo=Tneo.substr(8,2)+"."+Tneo.substr(5,2); break;}

//if (temp>x1) {Tneo=tBak[0]; Tneo=Tneo.substr(8,2)+"."+Tneo.substr(5,2); break;}

//var s4= x1234.substr(0,4);
//var s5= x1234.substr(5,2);
//var s7= x1234.substr(8,2);

//var x1= parseFloat(s4);
//var x2= (parseFloat(s5)-1)/12;
//var x3= (parseFloat(s5)-1)/365;

  //temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
  //temp=Math.round(temp*100000000)/100000000;
  //temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
  //temp2=Math.round(temp2*100000000)/100000000;
  //Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
  tBak=temps;
}

var str = x1.toString();

//var n = x1.toString();

var n = str.search(".");

var strn = n.toString();

var n1 = str.search(",");
if (n>0) {Tneo=str;}    
if (n1>0) {Tneo=str;}    


//str = "Visit W3Schools!"; 
//n = str.search("W3Schools");

strn = x1.toString();
//n = strn.search(".");
//strn = n.toString();

var x2=parseInt(strn);

if (x1==x2) {Tneo=strn;}
if (x1<1900) {Tneo=strn;}

return Tneo;
//return strn;

//document.getElementById("target").value = Tneo;
}


function findmult(x1x2)
{

//////////////////////////////////////////alert(x1x2);

 var s=document.getElementById("target").value;

var xx = x1x2.split(";");

var from1=parseFloat(xx[0]);

var to1=parseFloat(xx[1]);

var textArray = s.split("\n");
var Tneo='';
var temp=0.1;
var temp2=0.1;
var temps=['0.1','4'];
var tBak=['0.1','4'];


/////////////////////////////////////////alert(textArray[10]);

    let checkboxes=$("#data_table input[type=checkbox]");
for(var i=1; i<result_array.length;i++)
{

  temps= result_array[i].reduce((arr,item,j)=>{
      if(j===5)arr[0]=item;
      if(j>0&&checkboxes[j-1].checked)arr.push(item);
      return arr;
  },[null]);

  temp=(parseFloat(result_array[i][5]));

//if (temp>from1 && temp<to1) {Tneo=temps[0]; Tneo=Tneo.substr(0,5); break;}

///////////////////
if (temp>from1 && temp<to1) {Tneo=Tneo+temps.join('\t')+'\n';}

///Tneo=Tneo+textArray[i]+'\n';

  //if (temp>x1) {Tneo=temps[0]; Tneo=Tneo.substr(0,5); break;}
//if (temp>x1) {Tneo=tBak[0]; Tneo=Tneo.substr(0,5); break;}

  //temp=(parseFloat(temps[1])-parseFloat(tBak[1]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
  //temp=Math.round(temp*100000000)/100000000;
  //temp2=(parseFloat(temps[2])-parseFloat(tBak[2]))/(parseFloat(temps[0])-parseFloat(tBak[0]));
  //temp2=Math.round(temp2*100000000)/100000000;
  //Tneo=Tneo+textArray[i]+'\t'+temp+'\t'+temp2+'\n';
  ///////////////////////////////////////////////////////////tBak=temps;
}

////////////////////////////////////////////////////////alert(Tneo);

//return Tneo;
//return strn;
document.getElementById("tar1").value = Tneo;

//document.getElementById("target").value = Tneo;
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
    for (var i = 0; i < qx; i++) {
                  smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[qx]), parseFloat(pieces[i]), parseFloat(pieces2[0]), parseFloat(pieces2[1]));
if (smart2==pieces2[1]) {} else
//if (5==6) {} else
{	
sm3=sm3+parseFloat(pieces[i]);
	sm3=sm3+"\t";
smart2=roundPlus(smart2, 4);
if (smart2=="0") {smart2="0.0001";}
	sm3=sm3+smart2; //+'!!!'+pieces2[1];

xval=parseFloat(smart2);
sm4=findval(pieces[i]);

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
//if (x1==x2) {sm4="01.01."+sm4+"    Date, years";} else {sm4="Date, years";}
if (x3<2000 || x2>2020) {sm4=pieces[qx];}

//
var xx=document.getElementById('xBox').value
var yy=document.getElementById('yBox').value
//
var zz=xx+";"+yy;
//
////alert(zz);
if (yy=='1') {sm4='Золото USD/OZ';}
if (yy=='2') {sm4='Серебро USD/OZ';}
if (yy=='3') {sm4='Платина USD/OZ';}
if (yy=='4') {sm4='Палладий USD/OZ';}

if (yy=='6') {sm4='Золото/Серебро';}
if (yy=='7') {sm4='Золото/Платина';}
if (yy=='8') {sm4='Золото/Палладий';}
if (yy=='9') {sm4='Платина/Серебро';}
if (yy=='10') {sm4='Палладий/Серебро';}

sm3=sm3+"\t"+sm4;



return sm3;
}

/////////////////////////////////////////////////////////////////////////
function smart3(pizza, unit2, x22) {
// 1;2;3;4;5 - ox ($pizza)
//10;20;30;40;50 - íà áóìàãå ($unit2)
//$x22 - çíà÷åíèå (íàïðèìåð, 2.1)
var pieces = pizza.split(";");//explode(";", $pizza);
var pieces2 = unit2.split(";");//explode(";", $unit2);
var xleft=parseFloat(pieces[0]); 
var q=nchar(pizza, ";");
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
    smart2 = propo(parseFloat(pieces[0]), parseFloat(pieces[1]), x22, parseFloat(pieces2[0]), parseFloat(pieces2[1]));
}

if ((x22 > xleft && x22 > xright && xleft < xright) || (x22 < xleft && x22 > xright && xleft>xright))
{
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

function n1(n)
{
var newst=["1234", "5678"];
var tmu=1;
var tmuS='1';

newst=textArray[3].split("\t");
var smax=[1, 2];
var smin=[1, 2];
var tst=[1, 2];
var sraz=[1, 2];

var j=n;//fwN;0;//val; //!!!
for(var i=0; i<textArray.length;i++) 
{
newst=textArray[i].split("\t");
tst[j]=parseFloat(newst[j]);
if (tst[j]!=0) { if (isNaN(tst[j])){}else{break;} }
}
smax[j]=parseFloat(newst[j]);
smin[j]=smax[j];
for(var i=5; i<textArray.length;i++) 
{
newst=textArray[i].split('\t');
tst[j]=parseFloat(newst[j]);
if (tst[j]>smax[j]) smax[j]=tst[j];
if (tst[j]<smin[j]) smin[j]=tst[j];
sraz[j]=Math.abs(smax[j]-smin[j]);
sraz[j] = sraz[j].toExponential();
}
str = smax[j]+";"+smin[j]+";"+sraz[j];
str = is2s(sraz[j], smax[j], smin[j]);
var mults=str.split(';');
var m2=mults[0];
for(var i=1; i<mults.length;i++) 
{
mults[i]=RoundStep(mults[i],1);

//tmu=parseFloat(mults[i])*(-1);
//tmuS=tmu.toString();
m2=m2+";"+mults[i];
//m2=m2+";"+tmuS;
}
var m222=m2;
//alert(m2);
return m2;
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

///////////////

function minimax() {

var Tneo="";

var str = [
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input1','input2'],
    ['input3','input4']
];


    textFrom2 = document.getElementById("KILLCODE").value;

textArray = textFrom2.split("\n");

for(var i=0; i<textArray.length;i++) 
{
textArray[i]=textArray[i].replace(/[-]/g, ' -');
textArray[i]=textArray[i].replace(/E -/g, 'E-');
textArray[i]=textArray[i].replace(/e -/g, 'e-');
textArray[i]=textArray[i].replace(/\s/g, ' ');
textArray[i]=textArray[i].replace(/\t/g, ' ');
//textArray[i]=textArray[i].replace(/\s/g, ' ');
textArray[i]=textArray[i].replace(/  +/g, ' ');

textArray[i]=textArray[i].trim();

//textArray[i]=textArray[i].replace(/  +/g, ' ');
textArray[i] = textArray[i].replace(/[ ]/g, '\t')
textArray[i] = textArray[i].replace(/[;]/g, '\t');

//textArray[i] = textArray[i].replace( '\t\t', '\t');
Tneo=Tneo+textArray[i]+'\n';
}

    document.getElementById("target").value = Tneo;

///////////////////////////////////

//alert('5678');

val = 0;//document.getElementById('box').value ;// âîò òàê ìû åãî è ïîëó÷àåì. box ýòî id âàøåãî ñåëåêòà çàìåíèòå åãî íà ñâîå

var newst=["1234", "5678"];
var oldst="";

newst=textArray[3].split("\t");
var smax=[1, 2];
var smin=[1, 2];
var tst=[1, 2];
var sraz=[1, 2];

//var j=0; //fwN;0;//val; //!!!

//THISsca

for(var j=0; j<10;j++) 
{
for(var i=0; i<textArray.length;i++) 
{
newst=textArray[i].split("\t");
tst[j]=parseFloat(newst[j]);
if (tst[j]!=0) { if (isNaN(tst[j])){}else{break;} }
}

//alert(textArray[5]);

smax[j]=parseFloat(newst[j]);
smin[j]=smax[j];
for(var i=5; i<textArray.length;i++) 
{
newst=textArray[i].split('\t');
tst[j]=parseFloat(newst[j]);
if (tst[j]>smax[j]) smax[j]=tst[j];
if (tst[j]<smin[j]) smin[j]=tst[j];
sraz[j]=Math.abs(smax[j]-smin[j]);
sraz[j] = sraz[j].toExponential();
}
//str = smax[j]+";"+smin[j]+";"+sraz[j];
str[j][0] = smin[j];//+";"+sraz[j];
str[j][1] = smax[j];//+";"+sraz[j];

oldst=oldst+"\n"+smin[j]+";"+smax[j];

}


//THISsca

//alert('1234');

var sss=document.getElementById("cols").value
//var s4=sss.split('\n\n');
var s4=sss.split('\n');
var s5='';
//alert(s4);

for(var j1=0; j1<s4.length;j1++) 
{

var supij=s4[j1];
var mi1x=0;
var ma1x=0;
var mi1y=0;
var ma1y=0;
var sus=supij.split(";;");
for(var i1=0; i1<sus.length;i1++) 
{

var ij=sus[i1];//"0;1";
ijs=ij.split(";");
var i=parseFloat(ijs[0]);
var j=parseFloat(ijs[1]);
ij=ij+"!!!"+str[i][0].toString()+";"+str[i][1].toString()+"!!!"+str[j][0].toString()+";"+str[j][1].toString();
//alert(ij);
if (str[i][0]<mi1x) mi1x=str[i][0];
if (str[i][1]>ma1x) ma1x=str[i][1];
if (str[j][0]<mi1y) mi1y=str[j][0];
if (str[j][1]>ma1y) ma1y=str[j][1];
}
ij=mi1x.toString()+";"+ma1x.toString()+"!!!"+mi1y.toString()+";"+ma1y.toString();
s5=s5+'\n'+ij;
}
//alert(s5);
    document.getElementById("ito").value = s5;

    document.getElementById("sca").value = oldst;

//alert(str);

var xBox=document.getElementById('xBox').value;
var xB=parseFloat(xBox);
var yBox=document.getElementById('yBox').value;
var yB=parseFloat(yBox);

document.getElementById('sca1').value=str[xB][0];

document.getElementById('sca2').value=str[xB][1];

document.getElementById('sca3').value=str[yB][0];

document.getElementById('sca4').value=str[yB][1];


}


function textPlus(txtWord, cooX, cooY) { //x - ÷èñëî, n - êîëè÷åñòâî çíàêîâ 
  
//if(isNaN(x) || isNaN(n)) return false;
  //var m = Math.pow(10,n);
  //lkjreturn Math.round(x*m)/m;

//<text x='100' y='100' fill='black' font-family='Arial' font-size='10'>100</text>

var q="<text x='"+cooX+"' y='"+cooY+"' fill='black' font-family='Arial' font-size='10'>"+txtWord+"</text>";

    return q;
}

function MM2()
{
//window.location.reload();
//document.getElementById('sca').value="";
var s=localStorage.getItem('varMM'); 
//alert(s);
//alert(str);
var x=document.getElementById('xBox').value;
//alert(x);
var x1=parseFloat(x);

var y=document.getElementById('yBox').value;
//alert(y);
var y1=parseFloat(y);

var ta = s.split(";;");

//2019 
//alert(ta[x1]+"!"+ta[y1]);

document.getElementById('XPERS').value=ta[x1];
document.getElementById('YPERS').value=ta[y1];

} 

/////////////////

function MM3()
{
//2019
var s=localStorage.getItem('varMM'); 
/////////////////////////////////////////////////////////////////////////////////alert(s);
var x=document.getElementById('xBox').value;
var x1=parseFloat(x);
var y=document.getElementById('yBox').value;
var y1=parseFloat(y);
var ta = s.split(";;");
//alert(ta[x1]+"!"+ta[y1]);
document.getElementById('XPERS').value=ta[x1];
document.getElementById('YPERS').value=ta[y1];
document.getElementById('fwBox').value=x;
document.getElementById('fhBox').value=y;
} 


/////////////////

function dLeft()
{

///////////////////////alert('dL');

x=document.getElementById("ABCD").value;
var sus=x.split(";");

x1=sus[0];

document.getElementById("x330").value=x1;
} 

/////////////////

function dRight()
{
alert('dR');
x=document.getElementById("ABCD").value;
var sus=x.split(";");

x1=sus[1];

document.getElementById("x330").value=x1;
} 
/////////////////

function dLRM()
{
alert('dLRM');
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
////////////////////alert('dUp');
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
alert('dUDz');
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

/////////////////


/////////////////
function PLB()
{


} 

/////////////////

/////////////////

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
