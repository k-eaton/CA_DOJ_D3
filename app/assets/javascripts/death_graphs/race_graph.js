dataSet = [1, 2, 3, 4, 5]

function racePieChart(data) {
	var color = d3.schemeAccent; // d3.scale.category20b();

	var width = 460,
	    height = 300,
	    barHeight = 20,  // Create a bar graph to test import data
	    radius = Math.min(width, height) / 2;

	var x = d3.scaleLinear() // d3.scale.linear()
		.range([0, width])
		.domain([0, d3.max(dataSet)]);

	var chart = d3.select("#race")
		.attr("width", width)
		.attr("height", barHeight * dataSet.length);

	var bar = chart.selectAll("g")
		.data(dataSet)
		.enter().append("g")
		.attr("transform", function (d, i) {
				return "translate(0," + i * barHeight + ")";
			});

	bar.append("rect")
		.attr("width", x)
		.attr("height", barHeight - 1)
		.style("fill", function (d) {
				return x(d) - 10;
			});

	bar.append ("text")
		.attr("x", function (d){
				return x(d) - 10;
			})
		.attr("y", barHeight / 2)
		.attr("dy", ".35em")
		.style("fill", "white")
		.text(function(d) {
				return d;
			});

}