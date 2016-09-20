function draw(dataset) {
  //Width and height
      var w = 700;
      var h = 600;
      var padding = 50;

      //Create scale functions
      var xScale = d3.scale.linear()
                 .domain([-20, 20])
                 .range([2*padding, w - padding*2]);

      var yScale = d3.scale.linear()
                 .domain([-20, 20])
                 .range([h - padding, padding]);

      var rScale = d3.scale.linear()
                 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                 .range([2, 5]);

      //Define X axis
      var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .ticks(20);

      //Define Y axis
      var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("right")
                .ticks(20);

      var line = d3.svg.line()
                  .x(function(d) { return xScale(d[0]); })
                  .y(function(d) { return yScale(d[1]); });

      //Create SVG element
      var svg = d3.select("#graph-placeholder")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      //Create circles
      svg.selectAll("circle")
         .data(dataset)
         .enter()
         .append("circle")
         .attr("cx", function(d) {
            return xScale(d[0]);
         })
         .attr("cy", function(d) {
            return yScale(d[1]);
         })
         .attr("r", 3)
         .attr("fill", "#888");

      svg.append("path").attr("d", line([dataset[0], dataset[1]]))
                        .attr("stroke", "#556270")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([dataset[1], dataset[3]]))
                        .attr("stroke", "#FF6B6B")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([dataset[3], dataset[2]]))
                        .attr("stroke", "#4ECDC4")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([dataset[2], dataset[0]]))
                        .attr("stroke", "#C44D58")
                        .attr("fill", "none");



      svg.append("path").attr("d", line([[-20, 0], [20, 0]]))
                        .attr("stroke", "#ddd")
                        .attr("fill", "none");


      svg.append("path").attr("d", line([[0, -20], [0, 20]]))
                        .attr("stroke", "#ddd")
                        .attr("fill", "none");


      // from top to the bottom, left to right
      // note that some line segments are coalesed.

      // vertical line section
      svg.append("path").attr("d", line([[-13, 20], [-13, 17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[-4, 20], [-4, 17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[6, 20], [6, 0]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // horizontal line section
      svg.append("path").attr("d", line([[-20, 17], [20, 17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // vertical line section
      svg.append("path").attr("d", line([[-16, 17], [-16, -14]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[-8, 17], [-8, 0]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[13, 17], [13, -17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // horizontal line section
      svg.append("path").attr("d", line([[-8, 12], [0, 12]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");


      // below y = 0
      // horizontal line section
      svg.append("path").attr("d", line([[-2, -8], [13, -8]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // vertical line section
      svg.append("path").attr("d", line([[-2, -8], [-2, -17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[2, -8], [2, -17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // horizontal line section
      svg.append("path").attr("d", line([[-20, -14], [-7, -14]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");


      // vertical line section
      svg.append("path").attr("d", line([[-7, -14], [-7, -20]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      // horizontal line section
      svg.append("path").attr("d", line([[-20, -17], [-10, -17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[-7, -17], [20, -17]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");


      // vertical line section
      svg.append("path").attr("d", line([[-10, -17], [-10, -20]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");

      svg.append("path").attr("d", line([[10, -17], [10, -20]]))
                        .attr("stroke", "#ccc")
                        .attr("fill", "none");


      // outer boundary
      svg.append("path").attr("d", line([[-20, 20], [20, 20]]))
                        .attr("stroke", "#bbb")
                        .attr("fill", "none");


      svg.append("path").attr("d", line([[-20, -20], [-20, 20]]))
                        .attr("stroke", "#bbb")
                        .attr("fill", "none");

      // section text
      svg.append("text")
         .text("아나키즘")
         .attr("x", xScale(-18))
         .attr("y", yScale(18))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("여성 · 생태주의")
         .attr("x", xScale(-11.5))
         .attr("y", yScale(18))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("다문화주의")
         .attr("x", xScale(-1.5))
         .attr("y", yScale(18))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("자유지상주의")
         .attr("x", xScale(10))
         .attr("y", yScale(18))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");


      svg.append("text")
         .text("신마르크스주의")
         .attr("x", xScale(-21))
         .attr("y", yScale(8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.6em")
         .attr("fill", "#666");

      svg.append("text")
         .text("신좌파")
         .attr("x", xScale(-13.5))
         .attr("y", yScale(8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("시민단체론")
         .attr("x", xScale(-6.5))
         .attr("y", yScale(14))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("제 3의 길")
         .attr("x", xScale(-6))
         .attr("y", yScale(6))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("사회자유주의")
         .attr("x", xScale(0))
         .attr("y", yScale(9))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("자유보수주의")
         .attr("x", xScale(6.5))
         .attr("y", yScale(9))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("신자유주의")
         .attr("x", xScale(14))
         .attr("y", yScale(9))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("생디칼리즘")
         .attr("x", xScale(-20))
         .attr("y", yScale(-8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.6em")
         .attr("fill", "#666");

      svg.append("text")
         .text("사회민주주의")
         .attr("x", xScale(-12))
         .attr("y", yScale(-8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("사회보수주의")
         .attr("x", xScale(3.5))
         .attr("y", yScale(-4))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("코포라티즘")
         .attr("x", xScale(-3))
         .attr("y", yScale(-13))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("민족보수주의")
         .attr("x", xScale(4.5))
         .attr("y", yScale(-13))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("신보수주의")
         .attr("x", xScale(14))
         .attr("y", yScale(-8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("유럽공산주의")
         .attr("x", xScale(-16))
         .attr("y", yScale(-16))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("공산주의")
         .attr("x", xScale(-16.5))
         .attr("y", yScale(-18.8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("국가사회주의")
         .attr("x", xScale(-1.5))
         .attr("y", yScale(-18.8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      svg.append("text")
         .text("파시즘")
         .attr("x", xScale(13.5))
         .attr("y", yScale(-18.8))
         .attr("font-family", "sans-serif")
         .attr("font-size", "0.8em")
         .attr("fill", "#666");

      //Create X axis
      svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h-padding) + ")")
        .attr("fill", "#999")
        .call(xAxis);

      svg.append("text")
        .attr("x", 20)
        .attr("y", h/2+5)
        .attr("fill", "#999")
        .text("계급의식화");

      svg.append("text")
        .attr("x", w - padding/2 - 50)
        .attr("y", h/2+5)
        .attr("fill", "#999")
        .text("적자생존적");

      //Create Y axis
      svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (w-padding*2) + ",0)")
        .attr("fill", "#999")
        .call(yAxis);

      svg.append("text")
        .attr("x", (w-padding)/2)
        .attr("y", padding/2)
        .attr("fill", "#999")
        .text("개인중시");

      svg.append("text")
        .attr("x", (w-padding)/2)
        .attr("y", h-10)
        .attr("fill", "#999")
        .text("사회중시");
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(document.location);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var arg, arglist, parsePairFromArgument, v;

parsePairFromArgument = function(arg) {
  try {
    return JSON.parse("[" + arg + "]");
  } catch (_error) {
    return [];
  }
};

arglist = (function() {
  var _i, _len, _ref, _results;
  _ref = ["ul", "ur", "ll", "lr"];
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    arg = _ref[_i];
    _results.push(parsePairFromArgument(getParameterByName(arg)));
  }
  return _results;
})();

v = _.every(arglist, function(pair) {
  return pair.length === 2;
});

if (v) {
  draw(arglist);
} else {

}

/*
parsePairFromArgument = (arg) ->
  try
    JSON.parse("[" + arg + "]")
  catch
    []

arglist = (parsePairFromArgument getParameterByName arg for arg in ["ul", "ur", "ll", "lr"])
v = _.every arglist, (pair) -> pair.length == 2
if v
  draw arglist
*/
