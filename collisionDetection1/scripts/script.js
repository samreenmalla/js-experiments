var container = document.getElementById('container');

var width = 500;
var height = 500;

circles = [];
direction = [-1,1];

for(var i = 0; i < 5; i++){

  var radius = Math.random()*50;
  var x = Math.random()* (width -(radius*  2));
  var y = Math.random()* (height-(radius * 2));
  var dx = direction[Math.ceil(Math.random())];
  var dy = direction[Math.ceil(Math.random() * 2)];

  circles.push(new Circle(x,y,dx,dy,radius));
}

function Circle (x,y,dx,dy,radius){
  var that = this;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  var circle = document.createElement('div');

  this.createCircles = function(){
    circle.style.width = this.radius * 2 + 'px';
    circle.style.height = this.radius * 2 + 'px';
    circle.style.top = this.y + 'px';
    circle.style.left = this.x + 'px';
    circle.style.position = 'absolute';
    circle.style.background = 'rgb('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+')' ;
    circle.style.borderRadius = '50%';

    container.appendChild(circle);
  };

  this.moveCircles = function(){
    setInterval(function(){
      that.checkCollision();
      circle.style.top = that.y + 'px';
      circle.style.left = that.x + 'px';
      that.x += that.dx;
      that.y += that.dy;
    },10);
  };

  this.checkCollision =  function(){
    //to check for collision with border
    if(that.x <= 0 || that.x >= width - (radius *2 )){
      that.dx = -that.dx;
    }
    if(that.y <=0 || that.y >= height - (radius * 2 )){
      that.dy = -that.dy;
    }
    //to check for collision with each other

  }


}


for(var j = 0; j < circles.length; j++){
  circles[j].createCircles();
}
for(var k = 0 ; k < circles.length; k++){
  circles[k].moveCircles();
}
