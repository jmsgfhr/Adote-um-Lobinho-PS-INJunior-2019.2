window.onscroll = function() {scrollFunction()};
document.getElementById("navbar").style.fontSize = "30px";
document.getElementById("right-btn").style.marginTop = "5%";
document.getElementById("left-btn").style.marginTop = "5%";

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("right-btn").style.marginTop = "10px";
    document.getElementById("left-btn").style.marginTop = "10px";
    document.getElementById("navbar").style.fontSize = "20px";

  } else {
    document.getElementById("navbar").style.height = "150px";
    document.getElementById("right-btn").style.marginTop = "5%";
    document.getElementById("left-btn").style.marginTop = "5%";
    document.getElementById("navbar").style.fontSize = "30px";
  }
}