$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var formIds = ["#name", "#education", "#languages", "#awesome", "#ready"];

    formIds.forEach(function(id) {
      var userInput = $(id).val();
      var education = $("#education").val();
      var languages = $("input:radio[name=languages]:checked").val();
      var awesome = $("#awesome").val();
      var ready = $("input:radio[name=ready]:checked").val();

      var test = $(id).text(userInput).val();
        console.log(education);

      if (education) {
        $('#result-js').show();
      } else if (ready === '') {
        $('#result-ruby').show();
      } else {
        $('#result-python').show();
      }
    });
      event.preventDefault();
  });
});
