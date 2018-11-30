var imageContainer = document.getElementsByClassName('image-container');
var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('prev')[0];
var positionDots = document.getElementsByClassName('position-dots')[0];
var images = document.getElementsByClassName('image-list')[0];
var list = images.children;
var imageNumber = list.length;
currentIndex = 1;
width = 500;
var dotarray = [];

//for dots
for(i=0; i < imageNumber; i++){
  var dots = document.createElement('span');
  dots.classList.add('dot');
  positionDots.appendChild(dots);
  dotarray.push(dots);
}

//changing image clicking buttons
function nextImage(){
  images.style.marginLeft = -width * currentIndex + 'px';
}

next.addEventListener('click', function(){
  currentIndex++;

  if(currentIndex >= imageNumber){
    currentIndex = 0;
  }
  nextImage();
});

prev.addEventListener('click', function(){
  currentIndex--;

  if(currentIndex < 0){
    currentIndex = imageNumber-1;
  }
  nextImage();
});

