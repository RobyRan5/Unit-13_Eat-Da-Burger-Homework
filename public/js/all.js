$.get("/api", function(data) {

  for (var i = 0; i < data.length; i++) {
  
    var ordered = $("<div>");
    ordered.addClass("orderded");
    ordered.attr("id", "ordered" + i);
    $("#ordered").append(ordered);

    $("#ordered" + i).append("<h2>" + data[i].name + "</h2>");
  
  }
});
