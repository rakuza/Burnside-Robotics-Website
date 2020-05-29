document
  .getElementById("LeftAward")
  .addEventListener("mouseover", function (e) {
    document.getElementById("LeftAwardText").style.opacity = "100%";
  });
document
  .getElementById("LeftAward")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("LeftAwardText").style.opacity = "0";
  });
document
  .getElementById("RightAward")
  .addEventListener("mouseover", function (e) {
    document.getElementById("RightAwardText").style.opacity = "100%";
  });
document
  .getElementById("RightAward")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("RightAwardText").style.opacity = "0";
  });
