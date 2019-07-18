var projectCards = document.querySelectorAll(".card");
var projectTop = document.getElementById("projectTop")
var header = document.getElementById("header");


if (header.offsetWidth > 512) {
  header.style.paddingTop = "20vh";
}
else {
  header.style.paddingTop = "5vh";
}
