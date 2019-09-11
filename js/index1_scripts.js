var gW = 1240;
var gH = 874;
var zizi = '0';

var iiNM = 0;

var oldW = 0;
var newW = 0;

var oldii = 0;

var iSwap = 0;
var iMax = 0;
var ttW = gW.toString();
var ttH = gH.toString();

var memotek = 'memo0';

var rect_params ={
    width: 0,
    height:0,
    x:0,
    y:0
};
var touch_target,touch_horizontal,touch_vertical;


function saveTextAsFile() {
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
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

function Xdu(ch1, ch2) {
    var Tneo = '';
    var temp = 0.1;
    var temp2 = 0.1;
    var temp3 = 0.1;
    var temp4 = 0.1;
    var temps = ['0.1', '4'];
    var tBak = ['0.1', '4'];

    temp = (parseFloat(ch1) - parseFloat(ch2));

    if (temp < 0) {
        temp = 0;
    }

    document.getElementById("x330").value = temp.toString();

//////////////////////////////////////////////////alert(s);
}


function changeText() {
    document.getElementById('boldStuff').innerHTML = document.getElementById('inputTextToSave').value;
    let temp_arr=$("#A4WH").val().split(";");
    $("svg").width(temp_arr[0]);
    $("svg").height(temp_arr[1]);
}

function changeZero() {
    document.getElementById('boldStuff').innerHTML = 'blank';
    $('#plotly0').hide();
    $("#save_button").hide();
    $('#drawing_tools > div').hide();
    $('#saveable_block').hide();
    $('#clr').click();
}

function changeT2() {

    alert('x350');

}

function polysvg(poly, ox, oy) {

/////////////////////////////////alert('polysvg');

    var fsize = "8";

    var tW = gW.toString();
    var tH = gH.toString();

    var x350 = '100';
    var y = "100";

    var OXred = document.getElementById('xColor').value

    if (OXred == "undefined") OXred = 'red';

    var ach = "<polyline fill='none' stroke='" + OXred + "' stroke-width='0.5' points='";
//    var ach="<polyline fill='none' stroke='"red"' stroke-width='0.5' points='";
    ach = ach + poly + "' />";

    var textArray = ox.split("\n");
    var textArray2 = oy.split("\n");
    var Tneo = '';
    var TneoA = '';

    var Yneo = '';
    var YneoA = '';

    var temp = 0.1;
    var temp2 = 0.1;
    var temps = ['0.1', '4'];
    var tBak = ['0.1', '4'];


    var OXsh = document.getElementById('y330').value

    var XXA4 = document.getElementById('ABCD').value

    var XXis1 = document.getElementById('Xis1').value

    var YYA4 = document.getElementById('YBCD').value

    var YYis1 = document.getElementById('Yis1').value


    var temp5 = 5;

    XA4 = XXA4.split(";");
    YA4 = YYA4.split(";");

    X1A4 = XA4[0];
    X2A4 = XA4[1];
    Y1A4 = YA4[0];
    Y2A4 = YA4[1];

    var pprov = 0;

    pprov = parseFloat(XXis1);

    if (pprov) {

        ach = ach + "\n" + "<polyline fill='none' stroke='#000000' stroke-width='0.5' points='";
        ach = ach + X1A4 + "," + OXsh + " " + X2A4 + "," + OXsh + "' />";
    }


    var OYsh = document.getElementById('x330').value

    pprov = parseFloat(XXis1);


    pprov = parseFloat(YYis1);

    if (pprov) {

        ach = ach + "\n" + "<polyline fill='none' stroke='#000000' stroke-width='0.5' points='" + OYsh + ",";
        ach = ach + Y1A4 + " " + OYsh + "," + Y2A4 + "' />";

    }


    for (var i = 0; i < textArray.length; i++) {


        temps = textArray[i].split("\t");

        var result1 = temps[2].replace(/\s+/g, '')


        pprov = parseFloat(temps[0]) * parseFloat(temps[1]) * parseFloat(XXis1);

        if (result1 == '') {
            temp5 = 5;
        } else {
            temp5 = 10;
        }

        var nOXsh1 = parseFloat(OXsh) + temp5;
        var OXsh1 = nOXsh1.toString();

        var nOYsh1 = parseFloat(OYsh) + 20;

        var nOYsh2 = parseFloat(OYsh) - 5;

        var OYsh1 = nOYsh1.toString();
        var OYshS = nOYsh2.toString();
        var nOXsh2 = parseFloat(temps[1]) - 4;
        var OXsh2 = nOXsh2.toString();
        var nOYsh3 = parseFloat(OXsh1) + 8;
        var OYsh3 = nOYsh3.toString();

        pprov = parseFloat(XXis1);

        if (pprov) {
            ach = ach + "\n" + "<polyline fill='none' stroke='#000000' stroke-width='0.5' points='";
            ach = ach + temps[1] + "," + OXsh + " " + temps[1] + "," + OXsh1 + "' />";
//ach=ach+"\n"+"<text x='"+temps[1]+"' y='"+OXsh1+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+temps[2]+"</text>";
            ach = ach + "\n" + "<text x='" + OXsh2 + "' y='" + OYsh3 + "' fill='black' font-family='Arial' font-size='" + fsize + "'>" + temps[2] + "</text>";
        }


    }

    for (var i = 0; i < textArray2.length; i++) {
        temps = textArray2[i].split("\t");
        result1 = temps[2].replace(/\s+/g, '')

        if (result1 == '') {
            temp5 = 5;
        } else {
            temp5 = 10;
        }

        var nOXsh1 = parseFloat(OXsh) + temp5;
        var OXsh1 = nOXsh1.toString();

        var nOYsh1 = parseFloat(OYsh) + temp5;
        var OYsh1 = nOYsh1.toString();

        pprov = parseFloat(YYis1);

        if (pprov) {

            ach = ach + "\n" + "<polyline fill='none' stroke='#000000' stroke-width='0.5' points='" + OYsh + ",";
            ach = ach + temps[1] + " " + OYsh1 + "," + temps[1] + "' />";
//ach=ach+"\n"+"<text x='"+OYsh1+"' y='"+temps[1]+"' fill='black' font-family='Arial' font-size='"+fsize+"'>"+textArray[i]+"</text>";
            ach = ach + "\n" + "<text x='" + OYsh1 + "' y='" + temps[1] + "' fill='black' font-family='Arial' font-size='" + fsize + "'>" + temps[2] + "</text>";
        }

    }


    return ach;
}

function xsvg(ox, oy) {

    alert('xsvg');

}


function changeT5() {

    alert('x350-2');

    var tW = gW.toString();
    var tH = gH.toString();
    var x350 = '100';
    var y = "100";
    var z = document.getElementById('fh').value;

    var ach = "<svg version='1.1' width=" + ttW + " height=" + ttH + " xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

    ach = ach + "\n" + textPlus("100", "100", "100");
    ach = ach + "\n" + textPlus("200", "200", "200");
    ach = ach + "\n" + textPlus("300", "300", "300");

    ach = ach + "\n" + "<polyline fill='none' stroke='#008000' stroke-width='0.5' points='" + z + "' />";
    ach = ach + "\n" + "</svg>";

    document.getElementById('inputTextToSave').value = ach;
}

function changeT3() {

    alert('x350-3');

}

function alertText() {

/////////////////////alert('alertText');

    var tW = document.getElementById('fw').value;
    var tH = document.getElementById('fh').value;

    var targ = document.getElementById('target').value;

    var textArray = tW.split("\n");

    var Tneo = '';
    var TneoA = '';

    var Yneo = '';
    var YneoA = '';

    var temp = 0.1;
    var temp2 = 0.1;
    var temps = ['0.1', '4'];
    var tBak = ['0.1', '4'];
    for (var i = 0; i < textArray.length; i++) {
        temps = textArray[i].split("\t");

        Tneo = Tneo + temps[0] + ';';
        TneoA = TneoA + temps[1] + ';';
    }


    var textArrayY = tH.split("\n");

    for (var i = 0; i < textArrayY.length; i++) {

        temps = textArrayY[i].split("\t");
        Yneo = Yneo + temps[0] + ';';
        YneoA = YneoA + temps[1] + ';';
    }

    var textArrayT = targ.split("\n");
    var xyT = '';
    var xyNEO = '';

    var nOX = parseFloat(document.getElementById('fwBox').value);
    var nOY = parseFloat(document.getElementById('fhBox').value);
    var pprov = 0;

    for (var i = 0; i < textArrayT.length; i++) {
        temps = textArrayT[i].split("\t");

        xyT = temps[nOX] + ';' + temps[nOY];

        pprov = parseFloat(temps[nOX]) * parseFloat(temps[nOY]);

        if (pprov) {

            xyNEO = xyNEO + getts2d(xyT, Tneo, Yneo, TneoA, YneoA) + '\n';
        }

    }

    xyNEO = xyNEO.replace(/;/g, ',');
    xyNEO = polysvg(xyNEO, tW, tH);


    var m1NEO = xyNEO;


//////////////////////////////////    var fi="<svg version='1.1' width='"+ttW+"' height='"+ttH+"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";
////////////////////////////////////    xyNEO =fi+"\n"+xyNEO+"\n"+"</svg>";


////////////////////////////////////////    document.getElementById('inputTextToSave').value=xyNEO;
//document.getElementById('memo0').value=m1NEO;
    document.getElementById(memotek).value = m1NEO;
}

function ChangeSign() {

    var ab = document.getElementById('SVGs2').value;

    document.getElementById('ftype').value = 'CALC';

    var multiT = ab.split("\n");

    var textSign = multiT[0].split(" ");

    var t2 = "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[1].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[2].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[3].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[4].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[5].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[6].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    textSign = multiT[7].split(" ");

    t2 = t2 + "\n" + "<text x='" + textSign[0] + "' y='" + textSign[1] + "' fill='black' font-family='Arial' font-size='" + textSign[2] + "'>" + textSign[3] + "</text>";

    document.getElementById('memo9').value = t2;

//document.getElementById('memo9').value=ab;"
}

function alertOX() {
    var tW = document.getElementById('fw').value;
    var tH = document.getElementById('fh').value;
    var tW2 = xsvg(tW, tH);
    document.getElementById('inputTextToSave').value = tW2;
}

function glue() {
    var fi = "<svg version='1.1' width='" + ttW + "' height='" + ttH + "' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";

    var m0 = document.getElementById('memo0').value;
    var m1 = document.getElementById('memo1').value;
    var m2 = document.getElementById('memo2').value;
    var m3 = document.getElementById('memo3').value;
    var m4 = document.getElementById('memo4').value;
    var m5 = document.getElementById('memo5').value;
    var m6 = document.getElementById('memo6').value;
    var m7 = document.getElementById('memo7').value;
    var m8 = document.getElementById('memo8').value;
    var m9 = document.getElementById('memo9').value;

///////////////////fi=fi+"<svg x='0' y='0'>";

///////////////////var xyNEO=fi+"\n"+m0+"\n"+"</svg>";
    var xyNEO = fi + m0 + "\n";

//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m1+"\n"+"</svg>";
    xyNEO = xyNEO + m1 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m2+"\n"+"</svg>";
    xyNEO = xyNEO + m2 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m3+"\n"+"</svg>";
    xyNEO = xyNEO + m3 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m4+"\n"+"</svg>";
    xyNEO = xyNEO + m4 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m5+"\n"+"</svg>";
    xyNEO = xyNEO + m5 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m6+"\n"+"</svg>";
    xyNEO = xyNEO + m6 + "\n";
//    xyNEO=xyNEO+"<svg x='0' y='0'>"+"\n"+m7+"\n"+"</svg>";
    xyNEO = xyNEO + m7 + "\n";
    xyNEO = xyNEO + m8 + "\n";
    xyNEO = xyNEO + m9 + "\n";

    xyNEO = xyNEO + "</svg>";


    document.getElementById('inputTextToSave').value = xyNEO;
}

function copy9() {

}

function copySwap(sCopy) {
    var nMemo = "memo" + sCopy;
    var SW = document.getElementById(nMemo).value;
////////////////////////alert(nMemo);

    document.getElementById(nMemo).value = document.getElementById('memo0').value;

    document.getElementById('memo0').value = SW;

}

function copyM() {

    document.getElementById('memo0').value = document.getElementById('memo1').value;
    document.getElementById('memo1').value = document.getElementById('memo2').value;
    document.getElementById('memo2').value = document.getElementById('memo3').value;
    document.getElementById('memo3').value = document.getElementById('memo4').value;
    document.getElementById('memo4').value = document.getElementById('memo5').value;
    document.getElementById('memo5').value = document.getElementById('memo6').value;
    document.getElementById('memo6').value = document.getElementById('memo7').value;

}

function del9() {

    document.getElementById('memo7').value = '';
    document.getElementById('memo6').value = '';
    document.getElementById('memo5').value = '';
    document.getElementById('memo4').value = '';
    document.getElementById('memo3').value = '';
    document.getElementById('memo2').value = '';
    document.getElementById('memo1').value = '';
    document.getElementById('memo0').value = '';
}


$(function () {

    var ii = 0;
    var iitek = 0;
    var imas = [];
    var mouseDownX = 0;
    var mouseDownY = 0;
    var elemClicked;
    var hor_scroll,ver_scroll;
    var rect;
    var rect2;
    var rect3;
    var rect4;
    var arrow;
    var gWgH = document.getElementById('A4WH').value;
    temps = gWgH.split(";");
    gW = parseFloat(temps[0]);
    gH = parseFloat(temps[1]);
    ttW = gW.toString();
    ttH = gH.toString();

    var paper = Raphael("svg_paper", ttW, ttH);

// Draw Rect
    function DrawRectangle(x, y, w, h) {

        var element = paper.rect(x, y, w, h);
        element.attr({
            fill: "gray",
            opacity: .5,
            stroke: "#F00"
        }).node.setAttribute('id', 'myElement');

        $(element.node).attr('id', ii);
        imas.push(1);
        iMax = ii;

        zizi = ii.toString();
/////////////////////////////////////////////////////////memotek="memo"+zizi;




        ii = ii + 1;
//$('#rect').click();


////////////...............................

		var xx = element.attr('x');
           	var yy = element.attr('y');

//            rect_params.x=this.attr('x');
//            rect_params.y=this.attr('y');
//            var ww = this.attr("width");
//            var hh = this.attr("height");
//            var x2 = xx + ww;
//            var y2 = yy + hh;

            var qw1 = xx.toString() + ";" + yy.toString() + ";" + zizi;

    ////////////

            document.getElementById('bibi').value = qw1;

///1start
        var i = 0;
        var skaz2 = "";
        paper.forEach(function (el) {
            var ij1 = parseFloat(el.node.getAttribute("id"));
////if (imas[ij1]==1) skaz2=skaz2+"\n"+el.node.getAttribute("id")+";"+el.attr("x")+";"+el.attr("y")+";"+imas[ij1];
            if (imas[ij1] == 1) {
                skaz2 = skaz2 + "\n" + el.node.getAttribute("id") + ";" + el.attr("x") + ";" + el.attr("y") + ";" + el.attr("width") + ";" + el.attr("height");//imas skaz
                if($(".r_width")[ij1]) {
                    $(".r_width")[ij1].value = el.attr("width");
                    $(".r_height")[ij1].value = el.attr("height");
                    $(".r_shiftY")[ij1].value = el.attr("y");
                    $(".r_shiftX")[ij1].value = el.attr("x");
                } else{
                    el.remove();
                }
            }


        });

        var skaz = "";
///1finish



////////////...............................


        if(element.attr('x')&&element.attr('y')) {
            rect_params.x = element.attr('x');
            rect_params.y = element.attr('y');
        }

        element.drag(move, start, up);
        element.click(function (e) {
            elemClicked = $(element.node).attr('id');
//var mimi=iMax-elemClicked;
//var sid=mimi.toString();
//
//if (iSwap==elemClicked) {} else {copySwap(sid);};
//
//iSwap=elemClicked;
        });
        element.touchstart(function (e) {
            elemClicked = $(element.node).attr('id');
        });

//POINTER HERE

//alert("1234");



        return element;

    }


///alert("nepered");


// Start, move, and up are the drag functions
    start = function (w,h,e) {
// storing original coordinates
        this.vertical = false;
        this.horizontal = false;
        let offsetX=e.offsetX;
        let offsetY=e.offsetY;

        if(offsetX<this.attr("x")-5)offsetX+=this.attr("x");
        if(offsetX<=this.attr("width")&&offsetX>=this.attr("width")-10)offsetX+=this.attr("x");
        if(offsetY<this.attr("y")-5)offsetY+=this.attr("y");
        if(offsetY<=this.attr("height")&&offsetY>=this.attr("height")-10)offsetY+=this.attr("y");

        if(offsetX>=this.attr("x")&&offsetX<=this.attr("x")+10){
            this.horizontal=-1;
        }
        if(offsetX>=this.attr("x")+this.attr("width")-10){
            this.horizontal=1;
        }
        if(offsetY>=this.attr("y")&&offsetY<=this.attr("y")+10){
            this.vertical=-1;
        }
        if(offsetY>=this.attr("y")+this.attr("height")-10){
            this.vertical=1;
        }
        this.ox = this.attr("x");
        this.oy = this.attr("y");
        this.width=this.attr("width");
        this.height=this.attr("height");
        rect_params.x=this.attr('x');
        rect_params.y=this.attr('y');
        this.attr({
            opacity: 0.75
        });

        iitek = this.node.getAttribute('id').toString();

    }, move = function (dx, dy) {

// Move will be called with dx and dy
        if(this.vertical===false&&this.horizontal===false) {

            if (this.attr("y") > gH || this.attr("x") > gW) this.attr({
                x: +this.ox + +dx,
                y: +this.oy + +dy
            });
            else {
                nowX = Math.min(gW - this.attr("width"), +this.ox + +dx);
                nowY = Math.min(gH - this.attr("height"), +this.oy + +dy);
                nowX = Math.max(0, nowX);
                nowY = Math.max(0, nowY);


//if (BBox.width == 0 && BBox.height == 0)


//////////////////////////////////////////////////////////
///elemClicked = iitek;

                var max2 = zizi;
                var max3 = parseFloat(max2);
                var mimi = max3 - iitek;
                var sid = mimi.toString();

                sid = iitek.toString();

////////////////////////////////////////////////////////if (iSwap==iitek) {} else {memotek='memo'+sid;};

                iSwap = iitek;


///////////////////////////alert("12345");

                $('#change_button').click();

                this.attr({
                    x: nowX,
                    y: nowY
                });


                if (this.attr("fill") != "#000000") this.attr({
                    fill: "#000000"
                });
            }

            var xx = this.attr("x");
            var yy = this.attr("y");
            rect_params.x=this.attr('x');
            rect_params.y=this.attr('y');
            var ww = this.attr("width");
            var hh = this.attr("height");
            var x2 = xx + ww;
            var y2 = yy + hh;

            var qw1 = xx.toString() + ";" + yy.toString() + ";" + ww.toString() + ";" + hh.toString() + ";" + this.node.getAttribute('id');

    ////////////

            document.getElementById('bibi').value = qw1;



/////////////////...............alert('333');


        var i = 0;
        var skaz2 = "";
        paper.forEach(function (el) {
            var ij1 = parseFloat(el.node.getAttribute("id"));
////if (imas[ij1]==1) skaz2=skaz2+"\n"+el.node.getAttribute("id")+";"+el.attr("x")+";"+el.attr("y")+";"+imas[ij1];
            if (imas[ij1] == 1) {
                skaz2 = skaz2 + "\n" + el.node.getAttribute("id") + ";" + el.attr("x") + ";" + el.attr("y") + ";" + el.attr("width") + ";" + el.attr("height");//imas skaz

                $(".r_width")[ij1].value = el.attr("width");
                $(".r_height")[ij1].value = el.attr("height");
                $(".r_shiftY")[ij1].value = el.attr("y");
                $(".r_shiftX")[ij1].value = el.attr("x");
            }


        });

        var skaz = "";
/////////////////////////////////////////////////////////////        alert(skaz2);



        $('#svg_paper').unbind('mousedown');
        $('#svg_paper').unbind('mousemove');
        $('#svg_paper').unbind('mouseup');
///////////////////////////////////////////////////////////////////////////

            var er1 = xx.toString() + ";" + x2.toString();

    ///alert(er1);

            if (ww < 0) {
                er1 = x2.toString() + ";" + xx.toString();
            }

    ////////////////////////.................alert('2019-02'); 2019-2
            document.getElementById('ABCD').value = er1;
    //2019-05
    //////////////////////////////alert(document.getElementById("ABCD").value);


            document.getElementById('ABCD').value = '10;210';
    //2019-05
    ///////////////////////////////////////alert(document.getElementById("ABCD").value);

            document.getElementById('xMMM').value = er1;

            var ty1 = y2.toString() + ";" + yy.toString();

            if (hh < 0) {
                ty1 = yy.toString() + ";" + y2.toString();
            }

            document.getElementById('YBCD').value = ty1;
            document.getElementById('YBCD').value = '10;310';

            document.getElementById('yMMM').value = ty1;

            document.getElementById('x330').value = xx.toString();
            document.getElementById('y330').value = yy.toString();
        }else{
            if(this.horizontal){
                if(this.width +dx*this.horizontal<0){
                    this.attr({
                        width: Math.abs(+this.width +dx*this.horizontal),
                        x: this.ox+(+this.width +dx*this.horizontal)
                    });
                    if (this.horizontal < 0) {
                        this.attr({
                            x: this.ox + +this.width
                        });
                    }
                } else {
                    this.attr({
                        width: +this.width + dx * this.horizontal
                    });
                    if (this.horizontal < 0) {
                        this.attr({
                            x: +this.ox + +dx
                        });
                    }
                }


            }
            if(this.vertical){
                if(this.height +dy*this.vertical<0){
                    this.attr({
                        height: Math.abs(+this.height +dy*this.vertical),
                        y: this.oy+(+this.height +dy*this.vertical)
                    });
                    if (this.vertical < 0) {
                        this.attr({
                            y: this.oy + +this.height
                        });
                    }
                } else {
                    this.attr({
                        height: +this.height + dy * this.vertical
                    });
                    if (this.vertical < 0) this.attr({
                        y: +this.oy + +dy
                    });
                }
            }
            rect_params.x=this.attr('x');
            rect_params.y=this.attr('y');
            rect_params.height=this.attr('height');
            rect_params.width=this.attr('width');
        }

    }, up = function () {
// restoring state
        this.attr({
            opacity: .5
        });
        /*if (this.attr("y") < 60 && this.attr("x") < 60)*/ this.attr({
            fill: "#AEAEAE"
        });

//

        iiNM = iiNM + 1;
        var nI = iiNM.toString();
        var pepe1 = this.attr("width");
        newW = pepe1;
        oldW = newW;
        oldii = ii;

        rect_params.width=this.attr('width');
        rect_params.height=this.attr('height');
        rect_params.x=this.attr('x');
        rect_params.y=this.attr('y');

    };

// Rect button click
    $("#rect").on('click', function (e) {
        $('#svg_paper').unbind('mousedown');
        $('#svg_paper').unbind('mousemove');
        $('#svg_paper').unbind('mouseup');

        $("#svg_paper").mousedown(function (e) {

            if (e.target.tagName == "svg") {
// Prevent text edit cursor while dragging in webkit browsers
                e.originalEvent.preventDefault();

                var offset = $("#svg_paper").offset();
                mouseDownX = e.pageX - offset.left - 25;
                mouseDownY = e.pageY - offset.top - 25;

                mouseDownX = Math.round(mouseDownX);
                mouseDownY = Math.round(mouseDownY);

                rect = DrawRectangle(mouseDownX, mouseDownY, 0, 0);

                $("#svg_paper").mousemove(function (e) {
                    var offset = $("#svg_paper").offset();
                    var upX = e.pageX - offset.left - 25;
                    var upY = e.pageY - offset.top - 25;

                    var width = upX - mouseDownX;
                    var height = upY - mouseDownY;

                    width = Math.round(width);
                    height = Math.round(height);

                    rect.attr({
                        "x": width > 0 ? mouseDownX : mouseDownX + width,
                        "y": height > 0 ? mouseDownY : mouseDownY + height,
                        "width": width > 0 ? width : -width,
                        "height": height > 0 ? height : -height

                    });


/////////////////////////////////////////////////////////prove03

                });
            }

        });

        $("#svg_paper").mouseup(function (e) {

            $('#svg_paper').unbind('mousemove');

            var BBox = rect.getBBox();
            if(BBox) {
                console.log(BBox.width + " - " + BBox.height);
                rect_params.width=BBox.width;
                rect_params.height=BBox.height;

                if (BBox.width == 0 || BBox.height == 0) rect.remove();

                iiNM = iiNM - 1;
                var nI = iiNM.toString();
                var pp1 = rect.attr("width");
                newW = pp1;

////////////////////////////////////////..........alert('2019-7'); 2019-07

                if (oldii == ii) {
                } else {
                    $('#new_button').click();
                }
                ;
                oldW = newW;
                oldii = ii;
            }else rect.remove();
        });

    });


// Rect button click
    $("#rect2").on('click', function (e) {

///
        iitek = 0;
        ii = 0;
        paper.clear();
///

        var w1;
        var h1;
        var x1;
        var y1;

        var nw1;
        var nh1;
        var nx1;
        var ny1;

        w1 = $(".r_width")[0].value;
        h1 = $(".r_height")[0].value;
        y1 = $(".r_shiftY")[0].value;
        x1 = $(".r_shiftX")[0].value;

        nw1 = parseFloat(w1);
        nh1 = parseFloat(h1);
        ny1 = parseFloat(y1);
        nx1 = parseFloat(x1);

//	$(".r_width")[0].value='5';
//	$(".r_height")[0].value='5';
//	$(".r_shiftY")[0].value='5';
//	$(".r_shiftX")[0].value='5';

        rect = DrawRectangle(nx1, ny1, nw1, nh1);

        w1 = $(".r_width")[1].value;
        h1 = $(".r_height")[1].value;
        y1 = $(".r_shiftY")[1].value;
        x1 = $(".r_shiftX")[1].value;
        nw1 = parseFloat(w1);
        nh1 = parseFloat(h1);
        ny1 = parseFloat(y1);
        nx1 = parseFloat(x1);
        rect = DrawRectangle(nx1, ny1, nw1, nh1);

        w1 = $(".r_width")[2].value;
        h1 = $(".r_height")[2].value;
        y1 = $(".r_shiftY")[2].value;
        x1 = $(".r_shiftX")[2].value;
        nw1 = parseFloat(w1);
        nh1 = parseFloat(h1);
        ny1 = parseFloat(y1);
        nx1 = parseFloat(x1);
        rect = DrawRectangle(nx1, ny1, nw1, nh1);

        w1 = $(".r_width")[3].value;
        h1 = $(".r_height")[3].value;
        y1 = $(".r_shiftY")[3].value;
        x1 = $(".r_shiftX")[3].value;
        nw1 = parseFloat(w1);
        nh1 = parseFloat(h1);
        ny1 = parseFloat(y1);
        nx1 = parseFloat(x1);
        rect = DrawRectangle(nx1, ny1, nw1, nh1);

    });


// Unbind events
    $("#unbind").click(function (e) {

        var i = 0;
        var skaz2 = "";
        paper.forEach(function (el) {
            var ij1 = parseFloat(el.node.getAttribute("id"));
////if (imas[ij1]==1) skaz2=skaz2+"\n"+el.node.getAttribute("id")+";"+el.attr("x")+";"+el.attr("y")+";"+imas[ij1];
            if (imas[ij1] == 1) {
                skaz2 = skaz2 + "\n" + el.node.getAttribute("id") + ";" + el.attr("x") + ";" + el.attr("y") + ";" + el.attr("width") + ";" + el.attr("height");//imas skaz

                $(".r_width")[ij1].value = el.attr("width");
                $(".r_height")[ij1].value = el.attr("height");
                $(".r_shiftY")[ij1].value = el.attr("y");
                $(".r_shiftX")[ij1].value = el.attr("x");
            }


        });

        var skaz = "";
        alert(skaz2);

        $('#svg_paper').find('rect').each(function (i, obj) {
            skaz = skaz + ";" + $(this.node).attr('id');
        });
        $('#svg_paper').unbind('mouseup');
        $('#svg_paper').unbind('mousemove');
        $('#svg_paper').unbind('mousedown');

    });

    $("#chang").click(function (e) {

//change02

//	var colY=$(".r_columnY")[0].value;
//	var colX=$(".r_columnX")[0].value;

        $(".r_width")[0].value = '100';
        $(".r_height")[0].value = '100';
        $(".r_shiftY")[0].value = '100';
        $(".r_shiftX")[0].value = '100';

        $(".r_width")[1].value = '100';
        $(".r_height")[1].value = '100';
        $(".r_shiftY")[1].value = '200';
        $(".r_shiftX")[1].value = '200';

        $(".r_width")[2].value = '100';
        $(".r_height")[2].value = '100';
        $(".r_shiftY")[2].value = '300';
        $(".r_shiftX")[2].value = '300';

        $(".r_width")[3].value = '100';
        $(".r_height")[3].value = '100';
        $(".r_shiftY")[3].value = '400';
        $(".r_shiftX")[3].value = '400';

//	var color=$(".r_color")[0].value;
//	var colY_type=$(".r_columnY_type")[line].value;

        var skaz = "12345cha";
        alert(skaz);


    });


// Clear canvas
    $("#clr").click(function (e) {
        iitek = 0;
        ii = 0;
        paper.clear();
    });

// Delete rect
    $("#del").click(function (e) {
        $('#' + elemClicked).remove();
        imas[iitek] = 0;
        iitek = iitek - 1;
        ii = ii - 1;
        var ir = iitek.toString();

    });

// Rename rect
    $("#ren").click(function (e) {
        $('#' + elemClicked).attr('id', 100500);
        imas[iitek] = 1;
        alert('100500');
    });


    $("#rect").on('click', function (e) {

        var svgpaper = document.getElementById("svg_paper");
        svgpaper.addEventListener('touchstart', function (e) {
            e.preventDefault();
            var touch = e.touches[0];
            var offset = $(svgpaper, "svg").offset();

            if (e.touches.length === 1) {
                if (e.target.tagName === 'svg') {

                    mouseDownX = touch.pageX - offset.left - 25;
                    mouseDownY = touch.pageY - offset.top - 25;

                    rect = DrawRectangle(mouseDownX, mouseDownY, 0, 0);
                } else if (e.target.tagName === 'rect') {

                    mouseDownX = touch.pageX - offset.left - 25;
                    mouseDownY = touch.pageY - offset.top - 25;

                    touch_horizontal = false;
                    touch_vertical = false;
                    touch_target = e.target.getBBox();
                    let target = touch_target;
                    let calibration = target.width/10 > 10 ? target.width/10 : 10;

                    if (mouseDownX >= target.x && mouseDownX <= target.x + calibration) {
                        touch_horizontal = -1;
                    }
                    if (mouseDownX >= target.x + target.width - calibration && mouseDownX <= target.x + target.width) {
                        touch_horizontal = 1;
                    }
                    if (mouseDownY >= target.y && mouseDownY <= target.y + calibration) {
                        touch_vertical = -1;
                    }
                    if (mouseDownY >= target.y + target.height - calibration && mouseDownY <= target.y + target.height) {
                        touch_vertical = 1;
                    }

                } else return;

            }else{
                mouseDownX = touch.clientX;
                mouseDownY = touch.clientY;
                hor_scroll=$(window).scrollLeft();
                ver_scroll=$(window).scrollTop();
            }

            svgpaper.addEventListener('touchmove', function (e) {
                e.preventDefault();
                var offset = $(svgpaper).offset();
                let touch = e.touches[0];
                let positionX = touch.pageX - offset.left - 25;
                let positionY = touch.pageY - offset.top - 25;

                if(e.touches.length>1){

                    if(rect)rect.remove();

                    if(!ver_scroll)ver_scroll=$(window).scrollTop();
                    if(!hor_scroll)hor_scroll=$(window).scrollLeft();

                    $(window).scrollTop(ver_scroll+mouseDownY-touch.clientY);
                    $(window).scrollLeft(hor_scroll+mouseDownX-touch.clientX);

                    return;
                }
                if (e.target.tagName === 'svg') {

                    var upX = e.changedTouches[0].pageX - offset.left;

                    var upY = e.changedTouches[0].pageY - offset.top;

                    var width = upX - mouseDownX;
                    var height = upY - mouseDownY;

                    rect.attr({
                        "x": width > 0 ? mouseDownX : mouseDownX + width,
                        "y": height > 0 ? mouseDownY : mouseDownY + height,
                        "width": width > 0 ? width : -width,
                        "height": height > 0 ? height : -height
                    });

                    var xx = upX - width;
                    var yy = upY - height;
                    var ww = width;
                    var hh = height;

                    var x2 = xx + ww;
                    var y2 = yy + hh;


                    var qw1 = upX.toString() + ";" + upY.toString() + ";" + width.toString() + ";" + height.toString();


//////////////////////////document.getElementById('bibi').value=qw1;

                    var er1;
                    width > 0 ? er1 = xx.toString() + ";" + x2.toString() : er1 = x2.toString() + ";" + xx.toString();

                    document.getElementById('ABCD').value = er1;
//2019-05
///////////////////////////////////////////////////////alert(document.getElementById("ABCD").value);

////////////////////////////////////////////////////....alert('2019-04'); 2019-4
                    document.getElementById('ABCD').value = '10;210';

                    document.getElementById('xMMM').value = er1;

                    var ty1;
                    height > 0 ? ty1 = y2.toString() + ";" + yy.toString() : ty1 = yy.toString() + ";" + y2.toString();

                    document.getElementById('YBCD').value = ty1;
                    document.getElementById('YBCD').value = '10;310';

                    document.getElementById('yMMM').value = ty1;

                    document.getElementById('x330').value = xx.toString();
                    document.getElementById('y330').value = yy.toString();

                    iiNM = iiNM + 1;

                    rect_params.width= rect.attr("width");
                    rect_params.height= rect.attr("height");
                    rect_params.x= rect.attr("x");
                    rect_params.y= rect.attr("y");

                }else if(e.target.tagName === 'rect'){

                    if(touch_horizontal===false&&touch_vertical===false) {
                        e.target.setAttribute("x", touch_target.x - mouseDownX + positionX);
                        e.target.setAttribute("y", touch_target.y - mouseDownY + positionY);
                        rect_params.x= +e.target.getAttribute("x");
                        rect_params.y= +e.target.getAttribute("y");
                    } else {
                        if (touch_horizontal) {
                            if(touch_target.width + touch_horizontal * (-mouseDownX + positionX)<0){
                                e.target.setAttribute("width", Math.abs( touch_target.width + touch_horizontal * (-mouseDownX + positionX)) );
                                e.target.setAttribute("x", touch_target.x + (touch_target.width + touch_horizontal * (-mouseDownX + positionX)) );
                                if (touch_horizontal < 0)e.target.setAttribute("x", touch_target.x + touch_target.width );
                            } else {
                                e.target.setAttribute("width", touch_target.width + touch_horizontal * (-mouseDownX + positionX));
                                if (touch_horizontal < 0) e.target.setAttribute("x", touch_target.x - mouseDownX + positionX);
                            }
                        }
                        if (touch_vertical) {
                            if(touch_target.height + touch_vertical * (-mouseDownY + positionY)<0){
                                e.target.setAttribute("height", Math.abs(touch_target.height + touch_vertical * (-mouseDownY + positionY)) );
                                e.target.setAttribute("y", touch_target.y + (touch_target.height + touch_vertical * (-mouseDownY + positionY)) );
                                if (touch_vertical < 0)e.target.setAttribute("y", touch_target.y + touch_target.height );
                            } else {
                                e.target.setAttribute("height", touch_target.height + touch_vertical * (-mouseDownY + positionY));
                                if (touch_vertical < 0) e.target.setAttribute("y", touch_target.y - mouseDownY + positionY);
                            }
                        }

                        rect_params.width= + e.target.getAttribute("width");
                        rect_params.height= + e.target.getAttribute("height");
                        rect_params.x= + e.target.getAttribute("x");
                        rect_params.y= + e.target.getAttribute("y");
                    }
                }

            }, false);
        }, false);


        svgpaper.addEventListener('touchend', function (e) {
            window.ontouchmove = function () {
            };

            ver_scroll=null;
            hor_scroll=null;

            var BBox = rect.getBBox();
            if(BBox) {
                console.log(BBox.width + " - " + BBox.height);

                if (BBox.width == 0 && BBox.height == 0) rect.remove();

                iiNM = iiNM - 1;
            }
/////////////////////////////////////////////////........alert('2019-8'); 2019-08

        }, false);

    });


});

$("#target").click(function () {
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
    this.value = this.value.replace(' ', '\t');
});

$("#framewidth").click(function () {
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
});

$("#frameheight").click(function () {
    this.value = this.value.replace(/[;]/g, '\t');
    this.value = this.value.replace(/[ ]/g, '\t');
});


function argrect(fourargs) {

//////////////////alert('dr02');

//////////////////////////////////////

///////////////////////////alert(fourargs);

    var ta = fourargs.split(" ");
    argplot(ta[0], ta[1], ta[2], ta[3], ta[4], ta[5], ta[6], ta[7], ta[8]);
//argplot(ta[0], ta[1], ta[2], ta[3], ta[4], ta[5]);
}

function argplot(xcol, ycol, xA4, yA4, yLeft, xDown, xColor, Xis1, Yis1) {

//

////////////////////////////////////
////////////////////////////////////alert(xColor);

    var s = localStorage.getItem('varMM');

//////////////////////////////////////////////////////////alert(s);

    var x = xcol;//////////////////////////document.getElementById('xBox').value;
    var x1 = parseFloat(x) || 0;
    var y = ycol;////////////////////////////document.getElementById('yBox').value;
    var y1 = parseFloat(y) || 0;
    var ta = s.split(";;");

    document.getElementById('XPERS').value = ta[x1];
    document.getElementById('YPERS').value = ta[y1];

    document.getElementById('Xis1').value = Xis1;
    document.getElementById('Yis1').value = Yis1;

    document.getElementById('fwBox').value = xcol;/////////////////'5';
    document.getElementById('fhBox').value = ycol;/////////////////'1';
    var a0 = ta[x1];//////////////document.getElementById('XPERS').value;
    var prove = y1;/////////////////////////document.getElementById('yBox').value;

    document.getElementById('ABCD').value = xA4;
    document.getElementById('xMMM').value = xA4;
    var b0 = document.getElementById('ABCD').value;

//alert(a0);


    var ftt = document.getElementById('ftype').value;

    var ab = DeltaRange(a0, 100);

    if (ftt == 'CALC') {
        ab = DeltaRange(a0, 10);
    }
    ;
    if (ftt == 'DTMA') {
        ab = DeltaRange(a0, 10);
    }
    ;
    if (ftt == 'JM') {
        ab = DeltaRange(a0, 10);
    }
    ;

    var bc = trioseq(ab) + ';';

//document.getElementById('xStep').value; 
    document.getElementById('xStep').value = localStorage.getItem('varXstep');

    var de = bc.split(';;');
    var fg = de[0];
    var hi = props(fg, b0);
//

//////////////////////////alert(fg+"\n\n"+b0+"\n\n"+hi);

    document.getElementById('fw').value = hi;

/////////alert(hi);

    a0 = ta[y1];///////////////////////////////////document.getElementById('YPERS').value;

    document.getElementById('YBCD').value = yA4;
    document.getElementById('yMMM').value = yA4;

    b0 = document.getElementById('YBCD').value;

////////////////////////////alert(a0);

////////////////////////////    
    document.getElementById('xColor').value = xColor;

    ab = DeltaRange(a0, 100);

    if (ftt == 'CALC') {
        ab = DeltaRange(a0, 10);
    }
    ;
    if (ftt == 'DTMA') {
        ab = DeltaRange(a0, 10);
    }
    ;
    if (ftt == 'JM') {
        ab = DeltaRange(a0, 10);
    }
    ;

    bc = trioseq(ab) + ';';
//alert(bc);

    document.getElementById('xStep').value = localStorage.getItem('varYstep');

    de = bc.split(';;');
    fg = de[0];
    hi = props(fg, b0);
//
/////////////////alert(fg+"\n\n"+b0+"\n\n"+hi);
    document.getElementById('fh').value = hi;

/////////////////////////alert(hi);

    if (yLeft == '0') {
        dLeft();
    }
    ;
    if (yLeft == '1') {
        dRight();
    }
    ;
    if (yLeft == '2') {
        dLRM();
    }
    ;

    if (xDown == '0') {
        dDown();
    }
    ;
    if (xDown == '1') {
        dUp();
    }
    ;
    if (xDown == '2') {
        dUDZ();
    }
    ;
//dDown();

/////////////////////////////////////////////////////////////////////////////////

    alertText();
    glue();
    changeText();

}


function saveTextAsFile() {
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = $('#inputFileNameToSaveAs').val() ? $('#inputFileNameToSaveAs').val() + '.svg' : 'Plot.svg';
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

