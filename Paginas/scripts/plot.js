// JavaScript source code
$(function () {

    var d1 = [[1, 420], [2, 340], [3, 330], [4, 280], [5, 370], [6, 360], [7, 325], [8, 260], [9, 345], [10, 355], [11, 335], [12, 340]];

    $.plot("#graph",
        [{ label: "Number of delays in 2017", data: d1 }],
        {
            bars:{
                show: true
            },
            yaxis: {
                min: 0
                
            }
        });

    // Add the Flot version string to the footer

    $(footer).prepend("Flot " + $.plot.version + " &ndash; ");
});
function Button1Click() {
    var d1 = [[1, 212], [2, 222], [3, 213], [4, 203], [5, 261], [6, 274], [7, 283], [8, 244], [9, 294], [10, 244], [11, 313], [12, 268]]

    $.plot("#graph",
        [{ label: "Number of delays in 2016", data: d1 }],
        {
            yaxis: {
                min: 0
            }
        });
}
function Button2Click() {
    var d1 = [[1, 420], [2, 340], [3, 330], [4, 280], [5, 370], [6, 360], [7, 325], [8, 260], [9, 345], [10, 355], [11, 335], [12, 340]];

    $.plot("#graph",
        [{ label: "Number of delays in 2017", data: d1 }],
        {
            yaxis: {
                min: 0
            }
        });
}

function Button3Click() {
    var d1 = [[1, 350], [2, 369], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]];

    $.plot("#graph",
        [{ label: "Number of delays in 2018", data: d1 }],
        {
            yaxis: {
                min: 0
            }
        });
}