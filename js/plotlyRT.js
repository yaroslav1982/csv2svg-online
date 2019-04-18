var sele="";
        document.write('<select name="rBox" id="rBox" style="width : 50">');
for(var i=20; i<120;i=i+20) 
{
if (i==20) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
for(var j=200; j<2200;j=j+200) 
{
if (j==20) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+j+sele+j+"</option>");
}
document.write('</select>');

document.write(' Top');

        document.write('<select name="tBox" id="tBox" style="width : 50">');
for(var i=20; i<120;i=i+20) 
{
if (i==20) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
for(var j=200; j<2200;j=j+200) 
{
if (j==20) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+j+sele+j+"</option>");
}
document.write('</select>');

