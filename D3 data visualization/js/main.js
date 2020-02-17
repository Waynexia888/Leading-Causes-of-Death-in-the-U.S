var svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 400);

var rectangle = svg.append("rectangle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 100)
    .attr("fill", "red");