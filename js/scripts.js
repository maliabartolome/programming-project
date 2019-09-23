$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var formIds = ["#name", "#education", "#languages", "#awesome", "#ready"];

    formIds.forEach(function(id) {
      var education = $("#education").val();
      var languages = $("input:radio[name=languages]:checked").val();
      var awesome = $("#awesome").val();
      var ready = $("input:radio[name=ready]:checked").val();

      if (education && (awesome == "Super awesome")) {
        $('#result-js').show();
        $('#result-ruby, #result-python').hide();
      } else if (ready && (awesome == "Greater than awesome")) {
        $('#result-ruby').show();
        $('#result-js, #result-python').hide();
      } else if (languages && (ready == "No")) {
        $('#result-js').show();
        $('#result-ruby, #result-python').hide();
      } else if (education && (languages == "One")) {
        $('#result-js').show();
        $('#result-ruby, #result-python').hide();
      } else if (awesome || ready == "Maybe") {
        $('#result-ruby').show();
        $('#result-js, #result-python').hide();
      } else {
        $('#result-python').show();
        $('#result-ruby, #result-js').hide();
      }
    });
    event.preventDefault();
  });
});
