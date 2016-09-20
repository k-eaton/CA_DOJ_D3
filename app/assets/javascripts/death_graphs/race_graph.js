function racePieChart(data) {

	//  determine death count by race
	// var deathDataByRace = d3.nest()
	// 	.key(function(d) {return d.race; })
	// 	.entries(data);

	// console.log(deathDataByRace)

	//  determine count by race and selecting the count as the value
	var deathDataByRaceCount = d3.nest()
		.key(function(d) {return d.race; })
		.rollup(function(v) {return v.length; })
		.entries(data);

	console.log(deathDataByRaceCount)

	//  set the variables
	var width = 460,
		height = 300,
		outerRadius = height / 2 - 10,
	    innerRadius = outerRadius - 100,
	    cornerRadius = 12,
	    padAngle = .03;

	//  set the colors
	var color = d3.scaleOrdinal(d3.schemeCategory20);

	//  manipulate the svg
	var svg = d3.select("#race")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	//  Set the arc options
	var arc = d3.arc()
		.innerRadius(innerRadius)
	    .outerRadius(outerRadius)
	    .cornerRadius(cornerRadius);

	//  set the pie chart options
	var pie = d3.pie()
		.value(function(d) { return d.value; })
		.sort(null)
		.padAngle(padAngle);

	//  draw the graph
	var path = svg.selectAll("path")
		.data(pie(deathDataByRaceCount))
		.enter()
		.append("path")
		.attr("d", arc)
		.attr("fill", function(d) {
			return color(d.data.value);
		})
		.style("fill-opacity", .50)
	    .style("stroke", "#000")
	    .style("stroke-width", "1.0px")





}