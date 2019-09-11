/*for(var k=0; k<0;k++) 
{


  var sw='<div id="'+lay1(k)+'" style="width:600px;height:450px;"></div>';

  document.write(sw);
}
*/
function lay1(n){var s1="div"+n.toString();return s1;}
function tata(n){var s1="tar"+n.toString();return s1;}

function dTest(){var s1=document.getElementById('tt').value;alert(car2sphY(s1));}

function CLS2()
{
  window.location.reload();
} 

function plot2()
{
  minimax(); 
}

function plot1(ik)
{


  stest = document.getElementById("cols").value;
  var Nslov = stest.split("\n");
  var k=ik;
 // var s=localStorage.getItem('variableName'); 
  var s=table_data;
  var textArray = s.split("\n");

  //document.getElementById('target').value=s;
  var slovo=Nslov[k];

//alert(slovo);

  var slovs=slovo.split("#");
  slovo=slovs[0];

//alert(slovo);

  var qx=nchar(slovo, ";;")+1;var er=slovo.split(";;");
  var myDiv = document.getElementById(lay1(k));
  var data = [];var xx = [];var yy = []; var zz = []; var nmax=[]; var nako=['','']; var nakomax=[]; var Tmax=[]; var Tnako=[];
  var temps=['0.1','4']; var newNumber1; var newNumber0;  var newZ='';
  var newX='';
for(var j=0; j<qx;j++) {
    nmax.push(0); nako.push(''); Tmax.push(0); Tnako.push(0); nakomax.push(1000);
    yy.push(new Array());
    var sxy=er[j].split(";");var nx=parseFloat(sxy[0]);
    var ny=parseFloat(sxy[1]);

    for(var i=1; i<textArray.length;i++) {
      temps= textArray[i].split("\t");

      newNumber1=parseFloat(temps[ny]);yy[j].push(newNumber1);
      newZ=temps[0];zz.push(newZ);
      newX=temps[0];xx.push(newX);
      if (newNumber1>nmax[j] && newNumber1<1000000000 && i<1001) {
        nmax[j]=newNumber1; Tmax[j]=i;
      }
      if ((i%100)==0){
        nako[j]=nako[j]+";"+nmax[j].toString(); 
        if (newNumber1>nmax[j] && newNumber1<1000000000 && i<1001) {nmax[j]=newNumber1; Tmax[j]=i;}
        if (nakomax[j]>nmax[j] && nakomax[j]<1000000000 && nmax[j]!==0 && i<1001) {nakomax[j]=nmax[j]; Tnako[j]=Tmax[j];}
        nmax[j]=0;
      }
    } 
  }
/*
for(j=0;j<qx;j++)yy[j]=[];

for(let i=1;i<result_array.length;i++){
  xx.push(result_array[i][0]);
  for(let j=0;j<qx;j++){

    yy[j].push(result_array[i][er[j].split(";")[1]]);
  }

}*/


if(ik==1){

  var n1=Tnako[1]-10; var n2=Tnako[1]+10; 

  newNumber1=0;
  for(var i=n1; i<n2;i++) {
    temps= textArray[i].split("\t");
    newNumber0=parseFloat(temps[2]);
    newNumber1=newNumber1+newNumber0;
  }
  newNumber1=newNumber1/20;
  temps= textArray[Tnako[1]].split("\t");
  newNumber0=parseFloat(temps[0]);

  var x1=newNumber0; var y1=newNumber1; 

  n1=900-10; n2=900+10; 
  newNumber1=0;
  for(var i=n1; i<n2;i++) {
    temps= textArray[i].split("\t");
    newNumber0=parseFloat(temps[2]);
    newNumber1=newNumber1+newNumber0;
  }
  newNumber1=newNumber1/20;
  temps= textArray[900].split("\t");

  newNumber0=parseFloat(temps[0]);
  var x2=newNumber0; var y2=newNumber1; 
  var k1=(y2-y1)/(x2-x1)*500;

}


var d3 = Plotly.d3,  N = 40,    x=xx, y=xx[0];
var sl2= slovs[1].split(";");
var sl3= slovs[2].split(";");

 
//alert(sl2); 2019

//alert(sl3); 2019

//var Fleg=false;

var myCheckBox=document.getElementById('Che');

//if (myCheckBox.checked)
//  { 
//    alert("Checked"); }
//  else 
//  {
//    alert("Unchecked")
//  }


var Fleg=myCheckBox.checked;


for(var j=0; j<qx;j++) {

  var str1=sl2[j]; //Золото

  var str2='#'+sl3[j]; //yellow

//alert(str2); 2019

  data.push({x:xx,y:yy[j], name: str1,  text: zz, textposition: "top", type:"scatter",           line: {color: str2, width: 3 }               });
}
layout = { 
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
color: "#ffffff00",
paper_bgcolor: "#ffffff00",
  showlegend: Fleg,
  plot_bgcolor: "#ffffff30",
  legend:{



    font:{
      size:10
    }
  },
  margin:{l: 30,
    r: 0,
    b: 60,
    t: 40,
    pad: 0},
  xaxis: {
    range: ["1980-01-01", "2020-01-01"]
  },
  
  dragmode: 'pan', 
  tickmode: 'array',
  annotations: [
    {
      x: 0,
      y: 0,
      xref: 'x',
      yref: 'y',
      text: '',
      showarrow: true,
      arrowhead: 0,
      ax: 0,
      ay: 0
    }
  ]
};

Plotly.plot(myDiv, data, layout,{  
  modeBarButtonsToAdd: [{name: 'Download plot as SVG',    icon: Plotly.Icons.camera,    
  click: function(gd) {Plotly.downloadImage(gd, {format: 'svg'}) } }]
});

///alert('111');

myDiv.on('plotly_relayout',


    function(eventdata){  

 //////////var newIndex = myDiv.layout.annotations;

       // var ab=lay1(k)+'\n' +
       //     'x1:' + eventdata['xaxis.range[0]'] + '\n' +
       //     'x2:' + eventdata['xaxis.range[1]'] + '\n' +
       //     'y1:' + eventdata['yaxis.range[0]'] + '\n' +
       //     'y2:' + eventdata['yaxis.range[1]'];


//alert('222');

//var x1x2=eventdata['xaxis.range[0]']+";"+eventdata['xaxis.range[1]'];

var x1=eventdata['xaxis.range[0]'];
var x2=eventdata['xaxis.range[1]'];

var y1y2=eventdata['yaxis.range[0]']+";"+eventdata['yaxis.range[1]'];
//var a1=newX1X2(x1x2);
//var a2=newX1X2(y1y2);

//var ab=trioseq(a1)+"\n"+trioseq(a2);

var a1 = x1.slice(0, 4);//10
var a2 = x2.slice(0, 4);//10

var x1x2=a1+";"+a2;

//
//alert(x1x2);

//document.getElementById("Xsc"+k.toString()).value = x1x2;//a1;
//document.getElementById("Ysc"+k.toString()).value = y1y2;//a2;

document.getElementById("Xsc0").value = x1x2;//a1;
document.getElementById("Ysc0").value = y1y2;//a2;
document.getElementById("Xsc1").value = x1x2;//a1;
document.getElementById("Ysc1").value = y1y2;//a2;

//alert(x1x2);

//document.getElementById(tata(k)).value = ab;
    });

}


/*
window.addEventListener("load",function(){
  $("#target").val(table_data);
  document.getElementById('cols').value='0;1;;0;2;;0;3;;0;4#Gold;Silver;Platinum;Palladium \n0;2;;0;6;;0;9;;0;10#Silver;Gold/Silver;Platinum/Silver;Palladium/Silver';
  plot1(0);
  plot1(1);
  //plot2();
});*/
