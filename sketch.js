var newWidth = 100;
var newHeight = 100;

function setup(){
createCanvas(600,400);
background(150,150,150);
}


 
function draw(){
     
     if(mouseIsPressed){
     noStroke();
     fill(150,0,255, 255);
     ellipse(mouseX, mouseY,newWidth,newHeight);
}

}

