$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    inputs.forEach(function(input) {
      var temp = $("input#" + input).val();
      $( "." + input).append(temp)
    });
    $("#story").show();
  });
});
