//The common graph function used by all buttons
function makeGraph(d1, year) {
    $.plot("#graph",
        [{ label: "Number of delays per month; " + year, data: d1 }],
        {
            bars: {
                show: true,
                align: "middle"
            },
            yaxis: {
                min: 0
            },
            xaxis: {
                ticks: [[1, "Jan"], [2, "Feb"], [3, "Mrt"], [4, "Apr"], [5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"], [9, "Sept"], [10, "Oct"], [11, "Nov"], [12, "Dec"],]
            }
        });
}

//2016 buttonEvent with values 
function Button1Click() {
    var d1 = [[1, 212], [2, 222], [3, 213], [4, 203], [5, 261], [6, 274], [7, 283], [8, 244], [9, 294], [10, 244], [11, 313], [12, 268]]
    makeGraph(d1, 2016);

}

//2017 buttonEvent with values 
function Button2Click() {
    var d1 = [[1, 420], [2, 340], [3, 330], [4, 280], [5, 370], [6, 360], [7, 325], [8, 260], [9, 345], [10, 355], [11, 335], [12, 340]];
    makeGraph(d1, 2017);
};

//2018 buttonEvent with values 
function Button3Click() {
    var d1 = [[1, 350], [2, 369], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]];
    makeGraph(d1, 2018);
}

//attempt at proper eventlisteners
var button1 = document.getElementById("Button1");
button1.addEventListener("click", function () { });
