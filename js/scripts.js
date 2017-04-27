$(function () {
var age = parseInt(prompt("Enter Your Age"));
if (age >= 18) {
  $(".over-18").removeClass("hidden");
  $("img").hide();
} else if (age < 18) {
  $(".under-18").removeClass("hidden");
  $("img").hide();
} else {
  alert("Please enter a numeric value");
}

});
