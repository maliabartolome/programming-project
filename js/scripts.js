$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "education", "languages", "awesome", "ready"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      var education = $("#beverage").val();
      var languages = $("input:radio[name=languages]:checked").val();
      var education = $("#awesome").val();
      var ready = $("input:radio[name=ready]:checked").val();

      $("." + blank).text(userInput).val();

      if (education === 'Yes') {
        $('#result-js').show();
      } else if (ready === 'Maybe') {
        $('#result-ruby').show();
      } else if (languages === 'Three') {
        $('#result-ruby').show();
      } else if (ready === 'Maybe') {
        $('#result-ruby').show();
      } else {
        $('#result-python').show();
  });
      event.preventDefault();
});
