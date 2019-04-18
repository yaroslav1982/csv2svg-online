var sele="";
        document.write('<select name="widthBox" id="widthBox" style="width : 50">');
for(var i=100; i<1600;i=i+100) 
{
if (i==500) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

document.write(' Height');

        document.write('<select name="heightBox" id="heightBox" style="width : 50">');
for(var i=100; i<1600;i=i+100) 
{
if (i==500) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

