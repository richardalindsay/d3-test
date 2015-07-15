var data1 = [4, 8, 15, 16, 23, 42];

var width = 420,
  barHeight = 20;

var x = d3.scale.linear()
  .domain([0, d3.max(data1)])
  .range([0, width]);

var chart1 = d3.select("body")
  .append("div")
  .append("svg:svg")
  .attr("class", "chart1")
  .attr("width", width)
  .attr("height", barHeight * data1.length);

var bar = chart1.selectAll("g")
  .data(data1)
  .enter().append("g")
  .attr("transform", function(d, i) { 
    return "translate(0," + i * barHeight + ")"; 
  });

bar.append("rect")
  .attr("width", x)
  .attr("height", barHeight - 1);

bar.append("text")
  .attr("x", function(d) { 
    return x(d) - 3; 
  })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function(d) { 
    return d; 
  });

var data2 = [
  { start: 0, size: 1, color: "red" },
  { start: 1, size: 2, color: "green" },
  { start: 3, size: 3, color: "blue" },
];

var arc = d3.svg.arc()
  .innerRadius(50)
  .outerRadius(200)
  .startAngle(function(d, i) { 
    return d.start; 
  })
  .endAngle(function(d, i){ 
    return d.start + d.size; 
  });

var chart2 = d3.select("body")
  .append("svg:svg")
  .attr("class", "chart2")
  .attr("width", 420)
  .attr("height", 420)
  .append("svg:g")
  .attr("transform", "translate(200,200)");

chart2.selectAll("path")
  .data(data2)
  .enter()
  .append("svg:path")
  .style("fill", function(d, i){
    return d.color;
  })
  .attr("d", arc);