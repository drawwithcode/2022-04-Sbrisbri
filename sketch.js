let start;
let instructions;

function setup() {
  createCanvas(displayWidth, displayHeight);

  //create a button that allow to go to the other sketch
  start = createButton("Start");
  start.mousePressed(changePage);
  start.size(100, 35);
  start.style("background-color", "#ef8e34");
  start.style("border-radius", "10px");
  start.style("border", "0px");
  start.position(windowWidth / 2 - 50, 600);
  start.style("font-family", "Rubik Bubbles");
  start.style("font-size", "18px");
  start.style("color", "#603912");
} 

function changePage(){
  window.open("Drawing.html", "_self");
}

function draw(){

  background("#603912");
  textFont("Rubik Bubbles");
  fill("#fdb515");
  textSize(32);
  instructions = "Hello! Welcome into the woods! Your task is to draw your own woods by adding elements. See what happen if you shake your phone!";
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(instructions, windowWidth / 2, windowHeight / 2, 350, 300);

}
