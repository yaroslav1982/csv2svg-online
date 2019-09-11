$("#next_button1").click(function () {
    var cd = document.getElementById('target').value;
    var workspace_size = document.getElementById('A4WH').value;
    localStorage.setItem('varWH', workspace_size);
    var workspace_width = workspace_size.split(";")[0];
    var workspace_height = workspace_size.split(";")[1];
    let selected_checkboxes = $("#data_table input[type=checkbox]:checked");
    let template_text = "";
    let allowed_amount = 4;
    /*if (+workspace_width < +workspace_height) {*/
    let graph_height = (workspace_height - 50) / allowed_amount;
    let graph_width = 510; // * coef
    graph_height=graph_height<110 ? graph_height : 110;
    console.log(graph_height + " " + graph_width);
    for (let i = 0; i < selected_checkboxes.length; i++) {
        let width_from = 10 || Math.round((workspace_width - graph_width) / 2);
        let width_till = Math.round((workspace_width - graph_width) / 2 + graph_width);
        width_till = width_till<510 ? width_till : 510;
        let height_till = Math.round((i+1) * graph_height);
        let height_from = Math.round((25 + graph_height * (i)));
        template_text += "0 " + (i + 1) + " " + width_from + ";" + width_till + " " + height_till + ";" + height_from + " 0 0 "+selected_checkboxes[i].dataset.color+" 1 1\n";

    }
    /*} else {
        let row_amount = allowed_amount / 2;
        let graph_width = ((workspace_width) * 0.9 - 100) / row_amount;
        let graph_height = (workspace_width - 100) / row_amount / 1.41; // * coef
        console.log(graph_height + " " + graph_width);
        for (let i = 0; i < selected_checkboxes.length; i++) {
            let width_from = Math.round(((temp_counter - 1) % 2 * graph_width) + (workspace_width - graph_width * row_amount) / 2 + 50 * Math.pow(-1, temp_counter % 2));
            let width_till = Math.round(((temp_counter - 1) % 2 * graph_width) + (workspace_width - graph_width * row_amount) / 2 + 50 * Math.pow(-1, temp_counter % 2) + graph_width);
            let height_till = Math.round(graph_height * Math.ceil(temp_counter / 2));
            let height_from = Math.round(50 + graph_height * (Math.ceil(temp_counter / 2) - 1));
            template_text += "0 " + (i + 1) + " " + width_from + ";" + width_till + " " + height_till + ";" + height_from + " 0 0 "+selected_checkboxes[i].dataset.color+" 1 1\n";
            temp_counter++;
        }
    }*/
    localStorage.setItem('varJK', template_text);
    var ab = localStorage.getItem('varWH');
    var ab = localStorage.getItem('varJK');
    DTMM();
    var ab = document.getElementById('Xsc0').value;


/////////////////////alert(ab);

    findmult(ab);
    Dtar1();
/////////////////////////

///alert("tar1");
	let temptext_value=document.getElementById('temptext')
		.value.trim()
		.split('\n')
		.filter((item,i)=>i<$("#data_table input[type=checkbox]:checked").length)
		.join('\n');

    document.getElementById('target').value = document.getElementById('tar1').value;

    document.getElementById('temptext').value=template_text;

    localStorage.setItem('variableName', document.getElementById('target').value);
    localStorage.setItem('varT',template_text);
    localStorage.setItem('varWH',document.getElementById('paper').value);

///////////////////
///window.location.href='calc.html';
    $("#tar1").css({width: "50em", height: "40em"});
    table_params = $("#Xsc0").val().trim().split(";");
    table_time(+table_params[0], +table_params[1]);
});

$("#next_button").click(function () {
    var cd = document.getElementById('target').value;
    var workspace_size = document.getElementById('A4WH').value;
    localStorage.setItem('varWH', workspace_size);
    var workspace_width = workspace_size.split(";")[0];
    var workspace_height = workspace_size.split(";")[1];
    let selected_checkboxes = $("#data_table input[type=checkbox]");
    let template_text = "";
    let temp_counter = 1;
    let allowed_amount = 4;
    if (+workspace_width < +workspace_height) {
        let graph_height = (workspace_height - 50) / allowed_amount;
        let graph_width = graph_height * 2; // * coef
        console.log(graph_height + " " + graph_width);
        for (let i = 0; i < selected_checkboxes.length; i++) {
            if (selected_checkboxes[i].checked == true) {
                let width_from = (workspace_width - graph_width) / 2;
                let width_till = (workspace_width - graph_width) / 2 + graph_width;
                let height_till = temp_counter * graph_height;
                let height_from = (25 + graph_height * (temp_counter - 1));
                template_text += "5 " + (i + 1) + " " + width_from + ";" + width_till + " " + height_till + ";" + height_from + "\n";
                temp_counter++;
            }
        }
    } else {
        let row_amount = allowed_amount / 2;
        let graph_width = ((workspace_width) * 0.9 - 100) / row_amount;
        let graph_height = (workspace_width - 100) / row_amount / 1.41; // * coef
        console.log(graph_height + " " + graph_width);
        for (let i = 0; i < selected_checkboxes.length; i++) {
            if (selected_checkboxes[i].checked == true) {
                let width_from = ((temp_counter - 1) % 2 * graph_width) + (workspace_width - graph_width * row_amount) / 2 + 50 * Math.pow(-1, temp_counter % 2);
                let width_till = ((temp_counter - 1) % 2 * graph_width) + (workspace_width - graph_width * row_amount) / 2 + 50 * Math.pow(-1, temp_counter % 2) + graph_width;
                let height_till = graph_height * Math.ceil(temp_counter / 2);
                let height_from = 50 + graph_height * (Math.ceil(temp_counter / 2) - 1);
                template_text += "5 " + (i + 1) + " " + width_from + ";" + width_till + " " + height_till + ";" + height_from + "\n";
                temp_counter++;
            }
        }
    }
    localStorage.setItem('varJK', template_text);
    var ab = localStorage.getItem('varWH');
    var ab = localStorage.getItem('varJK');
    DTMM();
    var ab = document.getElementById('Xsc0').value;
    findmult(ab);
    Dtar1();
    localStorage.setItem('variableName', document.getElementById('tar1').value);
///////////////////	window.location.href='index1.html';

});

function table_time(y, x) {
    if (!x) x = (new Date()).getFullYear();
    x = x > 0 ? x : 0;
    y = y > 0 ? y : 0;

    if (y > x) {
        let temp = x;
        x = y;
        y = temp;
    }
    if (x === 0) {
        $(".dt_column").css("max-height", "");
    } else {
        var start_date = new Date((new Date()).setYear(y));
        var end_date = new Date((new Date()).setYear(x+1));
        var time_col = result_array;
        let i, j;

        j = i = $(".dt_header .dt_column:first div").length;
        while (start_date < new Date(time_col[i][0])) {
            if (end_date < new Date(time_col[i][0])) j++;
            i++;
        }

        let elemSize = $(".dt_body .dt_column > div")[0].clientHeight;
        if (j === $(".dt_header .dt_column:first div").length) j = 0;
        let top_margin = -1 * elemSize * (j);
        let max_height = elemSize * (i);
        console.log({top_margin, max_height, i, j});
        $(".dt_body .dt_column").css({
            "max-height": max_height,
            "margin-top": top_margin
        });
        $(".dt_body .dt_column").scroll();

    }
}

if ($("#data_table")[0]) {

    var row = 0;
    var colors=document.getElementById('cols').value
        .split("\n")
        .map((item)=>
            item.split("#")[item.split("#").length-1].split(";"))
[0];
    while (isNaN(result_array[row][0]) && isNaN(new Date(result_array[row][0]).getMonth())) {
        if (row === 0) $(".dt_header .main.dt_column").append('<div>Отобразить:</div>');
        for (let i = 0; i < result_array[0].length; i++) {
            if (row === 0) {
                if ($(".dt_header .dt_column").length < result_array[0].length) {
                    if (i < 4) {
                        $(".dt_header .loader").append('<div class="dt_column"><div><input type="checkbox" data-color="#'+colors[i]+'" checked/></div></div>');
                    } else {
                        $(".dt_header .loader").append('<div class="dt_column"><div><input type="checkbox" data-color="'+0+'" /></div></div>');
                    }
                }
            }
            if (i === 0) {
                $(".dt_header .main.dt_column").append('<div data-date="' + result_array[row][i] + '">' + result_array[row][i] + '</div>');
            } else {
                $($(".dt_header .loader .dt_column")[i - 1]).append('<div>' + result_array[row][i] + '</div>');
            }
            if (i > 0 && row == 0) $(".dt_row_loader .loader").append('<div class="dt_column"></div>');
        }
        row++;
    }
    let chbxs_checked = 4;
    $("#data_table input[type=checkbox]").change(function (e) {
        if (e.target.checked === true) {
            if (chbxs_checked < 4) {
                chbxs_checked++;
            } else {
                if ($("#data_table input[type=checkbox]:checked")[0] === e.target) {
                    $("#data_table input[type=checkbox]:checked")[1].checked = false;
                } else {
                    $("#data_table input[type=checkbox]:checked")[0].checked = false;
                }
            }
        } else {
            chbxs_checked--;
        }
    });


    var row_height = $(".dt_header .dt_column > div")[0].clientHeight;
    let max_height = row_height * (result_array.length - row);
    var main_col = $(".dt_body .main.dt_column");
    var body_col = $(".dt_row_loader .dt_column");
    main_col.height(max_height);
    $(".dt_body .loader .dt_column").height(max_height);
    result_array.reverse();
    var current_height = 0;
    var loaded = 0;
    var to_load = Math.ceil($(".dt_body").height() / row_height) * 2;
    var table_length = result_array.length;
    for (loaded; loaded <= to_load; loaded++) {
        result_array[loaded].forEach(function (cell, i) {
            if (i == 0) {
                main_col.append("<div>" + cell + "</div>");
            } else {
                $(body_col[i - 1]).append("<div>" + cell + "</div>");
            }
        });
    }
    for (let i = loaded - 1; i < result_array.length; i++) main_col.append("<div data-date='" + result_array[i][0] + "'>" + result_array[i][0] + "</div>");
    current_height = loaded * row_height;

    var table_scrolled = 0;

    let timerId = null;
    let loader_target = $(".dt_body .dt_row_loader");

    loader_target.scroll(function (e) {
        loader_target = $(".dt_body .dt_row_loader");
        $(".dt_head_loader")[0].scrollLeft = loader_target[0].scrollLeft;
        $(".dt_body .main.dt_column").css("transform", "translateY(-" + loader_target[0].scrollTop + "px)");
        clearTimeout(timerId);
        timerId = setTimeout(() => {

            table_scrolled = loader_target[0].scrollTop;
            e.stopPropagation();
            if (loader_target[0].scrollLeft > 0) {
                if (!$(".main.dt_column").hasClass("shifted")) $(".main.dt_column").addClass("shifted");
            } else {
                if ($(".main.dt_column").hasClass("shifted")) $(".main.dt_column").removeClass("shifted");
            }

            let scrolled = loader_target[0].scrollTop + loader_target.height() + +$(".dt_body .dt_column").css('margin-top').match(/\d/g).join('');
            if (current_height <= scrolled) {
                let outside = $(".dt_body .dt_column").css('margin-top').match(/\d/g).join('') / row_height;
                to_load = table_length - loaded > Math.ceil((scrolled - current_height) / row_height) + Math.ceil($(".dt_body").height() / row_height) ? loaded + Math.ceil((scrolled - current_height) / row_height) + Math.ceil($(".dt_body").height() / row_height) : table_length - row - 1;
                for (loaded; loaded + outside <= to_load + outside; loaded++) {
                    result_array[loaded].forEach(function (cell, i) {
                        if (i !== 0) $(body_col[i - 1]).append("<div>" + cell + "</div>");
                    });
                }
                current_height = loaded * row_height;
                $(".dt_header .dt_column").each((i, elem) => {
                    let cur_col = $(".dt_body .dt_column")[i];
                    if ($(elem).width() < $(cur_col).width()) {
                        $("div:first-of-type", elem).width($("div:first-of-type", cur_col).width());
                    }

                });
            }
        }, 100);
    });
}

window.onresize = function () {

    $(".plotly").each(function (i, elem) {
        //Plotly.relayout(elem.parentNode,{width:elem.parentNode.clientWidth,height:elem.parentNode.clientHeight});
        Plotly.Plots.resize(elem.parentNode);
    });
    if ($("#data_table")[0]) {
        row_height = $(".dt_body .dt_column > div")[0].clientHeight;
        current_height = loaded * row_height;
        to_load = Math.ceil($(".dt_body").height() / row_height) * 2;
        $(".dt_header .dt_column").each((i) => {

            let elem = $(".dt_header .dt_column")[i];
            let cur_col = $(".dt_body .dt_column")[i];
            $("div:first-of-type", cur_col).width("");
            $("div:first-of-type", elem).width("");
            if (elem.clientWidth > cur_col.clientWidth) {
                $("div:first-of-type", cur_col).width($("div:first-of-type", elem).width());
            } else {
                $("div:first-of-type", elem).width($("div:first-of-type", cur_col).width());
            }

        });
    }
};

window.addEventListener("load", function () {
    $(".dt_header .dt_column").each((i) => {
        let elem = $(".dt_header .dt_column")[i];
        let cur_col = $(".dt_body .dt_column")[i];
        if (elem.clientWidth > cur_col.clientWidth) {
            $("div:first-of-type", cur_col).width($("div:first-of-type", elem).width());
        } else {
            $("div:first-of-type", elem).width($("div:first-of-type", cur_col).width());
        }

    });
});
/*
var load_interval = setInterval(function(){

		to_load= table_length-loaded>=Math.ceil($(".dt_body").height()/row_height) ? loaded+Math.ceil($(".dt_body").height()/row_height) : table_length-loaded;
		for(loaded;loaded<=to_load;loaded++){
			result_array[loaded].forEach(function(cell,i){
				i>0 ? $(body_col[i-1]).append("<div>"+cell+"</div>") :
					main_col.append('<div data-date="'+cell+'">'+cell+'</div>');
			});
		}
		current_height=loaded*row_height;


},1000);*/
