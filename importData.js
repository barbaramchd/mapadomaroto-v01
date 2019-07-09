function importData()
{
  d3.json("data-markers.json", function(data)
  {
    var canvas = d3.select(".importData").append("svg")
        .attr("width", 1000)
        .attr("height", 700);

    canvas.selectAll("rect")
        .data(data)
        .enter()
            .append("rect")
            .attr("width", function (d)
                {
                    return d.ID * 10;
                })
            .attr("heigth", 50)
            .attr("y", function (d, i)
                {
                    return i * 80;
                })
            .attr("fill", "red");

    canvas.selectAll("text")
        .data(data)
        .enter()
            .append("text")
            .attr("fill", "#ffffff")
            .attr("y", function(d,i)
                {
                    return i * 80 + 25;
                })
            .attr("x", 5)
            .text(function(d)
                {
                    return d.MarkerName + "ID : " + d.ID;
                })
  }}