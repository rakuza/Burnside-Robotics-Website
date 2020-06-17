var images = document.getElementsByClassName("AwardImages");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function (e) {
    document.getElementById(event.target.id + "Text").style.opacity = "100%";
  });
  images[i].addEventListener("mouseleave", function (e) {
    document.getElementById(event.target.id + "Text").style.opacity = "0";
  });
}
var robots = document.getElementsByClassName("RobotImages");
for (var i = 0; i < robots.length; i++) {
  robots[i].addEventListener("mouseover", function (e) {
    document.getElementById(event.target.id + "Text").style.opacity = "100%";
  });
  robots[i].addEventListener("mouseleave", function (e) {
    document.getElementById(event.target.id + "Text").style.opacity = "0";
  });
}
