// JavaScript source code
$(function() {

    var d1 = [];
    for (var i = 0; i < 15; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    // A null signifies separate line segments

    var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

    var d4 = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[5,12],[5000,12]]

    $.plot("#graph", [ d1, d2, d3, d4 ]);

    // Add the Flot version string to the footer

    $(footer).prepend("Flot " + $.plot.version + " &ndash; ");
});