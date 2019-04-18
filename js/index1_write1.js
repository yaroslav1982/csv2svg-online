var sele="";
        document.write('<select name="fwBox" id="fwBox" style="width : 50" onclick="onlycols();">');
// var s=localStorage.getItem('varMM'); var x=this.value; var x1=parseFloat(x);var ta = s.split(";;"); document.getElementById('XPERS').value=ta[x1];">');

for(var i=0; i<8;i++) 
{
if (i==0) {sele="' selected>"} else {sele="'>"}
document.write("<option value='"+i+sele+i+"</option>");
}
document.write('</select>');

document.getElementById('fwBox').value=localStorage.getItem('varOX');
