$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "age", "gender"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();

      if (userInput === Leonardo) {
        $('#result-leo').show();
      } else if (userInput === Prince Harry) {
        $('#result-harry').show();
      } else {
        $('#result-david').show();
  });
      event.preventDefault();
});
