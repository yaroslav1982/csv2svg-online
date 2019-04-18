var sele="";
        document.write('<select name="fhBox" id="fhBox" style="width : 50" onclick="onlycols()">');
for(var i=0; i<8;i++) 
{
if (i==1) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

document.getElementById('fhBox').value=localStorage.getItem('varOY');
