var sele="";
        document.write('<select name="xBox" id="xBox" style="width : 50">');
for(var i=0; i<10;i++) 
{
if (i==5) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

document.write(' Y-Col');

        document.write('<select name="yBox" id="yBox" style="width : 50">');
for(var i=0; i<10;i++) 
{
if (i==1) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

