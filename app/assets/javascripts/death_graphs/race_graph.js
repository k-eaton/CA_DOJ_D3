function racePieChart(data) {

	// var deathDataByRace = d3.nest()
	// 	.key(function(d) {return d.race; })
	// 	.entries(data);

	// console.log(deathDataByRace)

	var deathDataByRaceCount = d3.nest()
		.key(function(d) {return d.race; })
		.rollup(function(v) {return v.length; })
		.entries(data);

	console.log(deathDataByRaceCount)

	var width = 460,
		height = 300,
		radius = Math.min(width, height) / 2;

	var color = d3.scaleOrdinal(d3.schemeCategory20b);

	// var chart = d3.select("#race")
	// 	.attr("width", width)
	// 	.attr("height", height);


	// var arc = d3.arc()
	//     .innerRadius(radius - 100)
	//     .outerRadius(radius - 50);

	// var pie = d3.pie()
	// 	.sort(null)
	// 	.value(function(d) {return deathDataByRaceCount});

	var svg = d3.select("#race")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var arc = d3.arc()
	    .innerRadius(radius - 100)
	    .outerRadius(radius);

	var pie = d3.pie()
		.value(function(d) { return d.value; })
		.sort(null);

	// var grads = svg.append("defs").selectAll("radialGradient").data(pie(deathDataByRaceCount))
	//     .enter().append("radialGradient")
	//     .attr("gradientUnits", "userSpaceOnUse")
	//     .attr("cx", 0)
	//     .attr("cy", 0)
	//     .attr("r", "80%")
	//     .attr("id", function(d, i) { return "grad" + i; });

	// grads.append("stop").attr("offset", "0%").style("stop-color", "white");
	// grads.append("stop").attr("offset", "100%").style("stop-color", function(d, i) { return d3.color(i); });

	// g.append("path")
 //      	.attr("d", arc)
 //      	.style("fill", function(d) { return color(d.data.deathDataByRaceCount); });
	
	var path = svg.selectAll("path")
		.data(pie(deathDataByRaceCount))
		.enter()
		.append("path")
		.attr("d", arc)
		.attr("fill", function(d) {
			return color(d.data.value);
		})





	// var path = svg.selectAll("path")
	//     .data(pie(deathDataByRaceCount))
	//   	.enter().append("path")
	//     .attr("fill", function(d, i) { return "url(#grad" + i + ")"; })
	//     .attr("d", arc);

}