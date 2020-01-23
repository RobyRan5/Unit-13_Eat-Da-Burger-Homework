$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newOrder = {
    
    burgerType: $("#burgerType").val().trim(),
  };

  $.post("/api/new", newOrder)
    .then(function(data) {
      console.log(data);

      alert("Adding Order...");
    });

  $("#burgerType").val("");
});
