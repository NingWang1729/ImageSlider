  var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg", 
  "http://www.sololearn.com/uploads/slider/2.jpg", 
  "http://www.sololearn.com/uploads/slider/3.jpg"
  ];
  var index = 0;

function next() {
  var slider = document.getElementById("slider");
  index++;
  if(index >= images.length) {
    index = 0;
  }
  slider.src = images[index];
  }

function prev() {
  var slider = document.getElementById("slider");
  index--;
  if(index < 0) {
    index = images.length-1;
  }
  slider.src = images[index];
}
