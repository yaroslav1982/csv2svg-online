var sele="";
        document.write('<select name="tarXstep" id="tarXstep" style="width : 50">');
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

document.write(' Ystep:');

        document.write('<select name="tarYstep" id="tarYstep" style="width : 50">');
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

