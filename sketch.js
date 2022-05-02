//the setup function only happens once
var
tree=0;
seethru=255;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(21,108,59); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(2);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/5,height/10,20); // center of canvas, 20px dia
  fill (255,167,51); 
  stroke (71,122,189)
  strokeWeight (5);
  rect (100,120,tree,tree)
  fill (116,10,57, seethru)
  strokeWeight(0);
  ellipse (mouseX,mouseY,20,20); 
  stroke(0);
  strokeweight(3);
  line(tree,5,100,tree);


}

function mousePressed(){
  if (tree>=300){
    tree=0
    }else{
     tree=tree+2;
    }
  seethru=seethru-10;
}


