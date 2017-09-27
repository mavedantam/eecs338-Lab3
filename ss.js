var images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var imgNumber = 0;
var imgLength = images.length - 1;

function changeImg(x) {
  imgNumber += x;
  if (imgNumber > imgLength){
    imgNumber = 0;
  }
  if (imgNumber < 0) {
    imgNumber = imgLength;
  }

  document.getElementById("slideshow").src = images[imgNumber];
  return false;
}
