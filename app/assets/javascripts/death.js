
$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  	$('h1').css('color', 'red');
  	console.log("test")
  	deathData = $.ajax({
			        type: "GET",
			        contentType: "application/json; charset=utf-8",
			        url: '/death/death_data',
			        dataType: 'json',
			        success: function (deathData) {
			        	console.log(deathData);
               			racePieChart(dataSet);
		            },
		            error: function (result) {
		                error();
		            }
			    })
    // raceData.done(function(received_data) {
    //    var div_where_to_draw = "div.d3";
    //    console.log(received_data)
       // racePieChart(div_where_to_draw, received_data);
    // })
    //     error: function (result) {
    //     }
    // });
});

//   	function racePieChart(attachPoint, data){
// 		var raceCount = [];
// 		var black = 0;
// 		var white = 0;
// 		var hispanic = 0;
// 		var asian = 0;
// 		var indian = 0;
// 		var unknown = 0;
// 		var other = 0;

// 		// var dataset1 = d3.csv("/js/death-in-custody-summary.csv", function(d) {
// 		// 	return {
// 		// 	    race: d.race
// 		// 	};
// 		// }, function(error, rows) {
// 		//   console.log(rows);

// 		  for(i = 0; i < received_data.length; i++){
// 				if(rows[i].race === "Black"){
// 					black++;
// 				} else if(rows[i].race === "White"){
// 					white++;
// 				} else if(rows[i].race === "Hispanic"){
// 					hispanic++;
// 				} else if(rows[i].race === "Asian"){
// 					asian++;
// 				} else if(rows[i].race === "American Indian"){
// 					indian++;
// 				} else if(rows[i].race === "Unknown"){
// 					unknown++;
// 				} else {
// 					// console.log(rows[i].race)
// 					other++;
// 				}
// 			}
// 			raceCount = [black, white, hispanic, asian, indian, unknown, other];
// 			console.log("black: " + black + ", white: " + white + 
// 									", hispanic: " + hispanic + ", asian: " + asian + 
// 									", unknown: " + unknown + ", American Indian: " + 
// 									indian + ", other: " + other)	;
// 			// return raceCount;
		

// 			console.log(raceCount);



// 		var dataset = {
// 			// raceCount
// 	  apples: raceCount,//[53245, 28479, 19697, 24037, 40245],
// 		};

// 		var width = 460,
// 		    height = 300,
// 		    radius = Math.min(width, height) / 2;

// 		var color = d3.scale.category20();

// 		var pie = d3.layout.pie()
// 		    .sort(null);

// 		var arc = d3.svg.arc()
// 		    .innerRadius(radius - 100)
// 		    .outerRadius(radius - 50);

// 		var svg = d3.select("body").append("svg")
// 		    .attr("width", width)
// 		    .attr("height", height)
// 		    .append("g")
// 		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// 		var grads = svg.append("defs").selectAll("radialGradient").data(pie(dataset.apples))
// 		    .enter().append("radialGradient")
// 		    .attr("gradientUnits", "userSpaceOnUse")
// 		    .attr("cx", 0)
// 		    .attr("cy", 0)
// 		    .attr("r", "80%")
// 		    .attr("id", function(d, i) { return "grad" + i; });
// 		grads.append("stop").attr("offset", "0%").style("stop-color", "white");
// 		grads.append("stop").attr("offset", "100%").style("stop-color", function(d, i) { return color(i); });

// 		var path = svg.selectAll("path")
// 		    .data(pie(dataset.apples))
// 		  .enter().append("path")
// 		    .attr("fill", function(d, i) { return "url(#grad" + i + ")"; })
// 		    .attr("d", arc);

// 	  });
// 	}
// });
