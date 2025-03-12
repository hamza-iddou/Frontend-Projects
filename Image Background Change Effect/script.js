var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var orginal = document.getElementById(`originalImg`);
var line = document.getElementById("arrow");

orginal.style.width = imgBox.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
