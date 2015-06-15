$.getJSON("data.json", function(data) {
  var random = Math.floor(Math.random() * 242) + 1;
  $.each(data, function(key, val) {
    $(".main").append("<h1>" + val[random] + "</h1>");
  });
});
