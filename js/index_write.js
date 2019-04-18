var sele="";
 document.write('<select name="xBox" id="xBox" style="width : 50" onclick="onlycols()">');
for(var i=0; i<8;i++){
	if (i==0) {sele="' selected>"} else {sele="'>"}
		document.write("<option value='"+i+sele+i+"</option>");
	}
document.write('</select>');
document.write('<select name="yBox" id="yBox" style="width : 50">');
for(var i=0; i<8;i++){
	if (i==1) {sele="' selected>"} else {sele="'>"}
		document.write("<option value='"+i+sele+i+"</option>");
	}
document.write('</select>');

document.write('<select name="mBox" id="mBox" style="width : 50">');
for(var i=0; i<8;i++){
	if (i==2) {sele="' selected>"} else {sele="'>"}
	document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');
