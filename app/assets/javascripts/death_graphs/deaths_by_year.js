function deathByYear(data) {

	// set dimensions and margins
	var margin = {top: 20, right: 20, bottom: 50, left:70},
		width = 600 - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom;

	// parse the year
	var parseTime = d3.timeParse("%Y");

	// set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	// define the line
	var valueline = d3.line()
		.x(function(d) { return x(d.deathYear); })
		.y(function(d) { return y(d.deathCount); });

	// select the svg
	var svg = d3.select("#death-by-year")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
	  	.attr("transform",
	  		  "translate(" + margin.left + "," + margin.top + ")");

	// get/parse the data
	var deathDataByYear = d3.nest()
		.key(function(d) {return d.date_of_death_yyyy; })
		.rollup(function(v) { return v.length; })
		.entries(data);

	deathDataByYear.forEach(function(d) {
		d.deathYear = parseTime(d.key);
		d.deathCount = +d.value;
	});

	// sort the data by year
	deathDataByYear.sort(function(a,b) {return b.deathYear - a.deathYear;})

	// scale the range of data
	x.domain(d3.extent(deathDataByYear, function(d) {return d.deathYear; }));
	y.domain([0, d3.max(deathDataByYear, function(d) {return d.deathCount; })]);

	svg.append("path")
		.data([deathDataByYear])
		.attr("d", valueline)
		.style("fill", "none")
		.style("stroke", "steelblue")
		.style("stroke-width", "2.0px")

	// add the X Axis
	svg.append("g")
		.attr("class", "axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(d3.axisBottom(x));
	    		//.ticks(d3.timeYear.every(5)));

	// add the X label
	svg.append("text")
		.attr("transform",
			  "translate(" + (width/2) + " ," +
			  				 (height + margin.top + 25) + ")")
		.style("text-anchor", "middle")
		.text("Year");

    // add the Y Axis
  	svg.append("g")
  		.attr("class", "axis")
     	.call(d3.axisLeft(y));

    // add the Y label
    svg.append("text")
    	.attr("transform", "rotate(-90)")
    	.attr("y", 0 - margin.left)
    	.attr("x", 0 - (height / 2))
    	.attr("dy", "1em")
    	.style("text-anchor", "middle")
    	.text("Deaths In Custody")



};