$(document).ready(function() {
  $("#formOne").submit(function(event) {
    console.log("test");
  var inputName = $("input#inputName").val();
  var inputAddress = $("input#inputAddress").val();

  $(".inputName").text(inputName);
  $(".inputAddress").text(inputAddress);

event.preventDefault();
  });
});
