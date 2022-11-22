let vegetations = [];
let trees = [];
let animals = [];
let plants = [];
let woodAnimals = [];
let woodTrees = [];
let rain = [];
let drops = [];
let bw1;
let lerpedColor1;
let lerpedColor2;
let lerpedColor3;
let offset1 = 0;
let strum = 1;
let offset2 = 0;
let buttonVegetation;
let buttonAnimals;
let buttonTrees;
let buttonGoBack;
let buttonSave;
let downloadDrawing;
let addAnimal = false;
let addVegetation = false;
let addTree = false;

//upload illustrations
function preload(){

  for(let i = 0; i < 66; i++){
    trees[i] = loadImage("./Assets/Trees/Tree" + i + ".png");
  }

  for(let k = 0; k < 26; k++){
    animals[k] = loadImage("./Assets/Animals/Animal" + k + ".png");
  }

  for(let j = 0; j < 17; j++){
    vegetations[j] = loadImage("./Assets/Vegetation/Vegetation" + j + ".png");
  }

  for(let h = 0; h < 7; h++){
    drops[h] = loadImage("./Assets/Drops/Drop" + h + ".png");
  }

}

function setup() {

createCanvas(windowWidth,windowHeight);
imageMode(CENTER);

//slider day/night
bw1 = createSlider(0, 100, 0);
bw1.position(windowWidth / 2 - 50, 80);
bw1.size(100, 2);
bw1.style("appearance", "none");
bw1.style("background", "#ffffff");
bw1.style("outline", "none");
bw1.style("border-radius", "2px");

setShakeThreshold(40);

//add vegetations by clicking on this button
buttonVegetation = createButton("Vegetation");
buttonVegetation.position(windowWidth / 2 - 43, 20);
buttonVegetation.style("font-family", "Rubik Bubbles");
buttonVegetation.style("color", "white");
buttonVegetation.style("background-color", "#fdb515");
buttonVegetation.style("border-radius", "10px");
buttonVegetation.style("border", "0px");
buttonVegetation.style("padding", "6px 10px");
buttonVegetation.touchStarted(vegetationstarted);

//add animals by clicking on this button
buttonAnimals = createButton("Animal");
buttonAnimals.style("font-family", "Rubik Bubbles");
buttonAnimals.style("color", "white");
buttonAnimals.style("background-color", "#fdb515");
buttonAnimals.style("border-radius", "10px");
buttonAnimals.style("border", "0px");
buttonAnimals.style("padding", "6px 10px");
buttonAnimals.position(30, 20);
buttonAnimals.touchStarted(animalstarted);

//add trees by clicking on this button
buttonTrees = createButton("Tree");
buttonTrees.style("font-family", "Rubik Bubbles");
buttonTrees.style("color", "white");
buttonTrees.style("background-color", "#fdb515");
buttonTrees.style("border-radius", "10px");
buttonTrees.style("border", "0px");
buttonTrees.style("padding", "6px 10px");
buttonTrees.position(windowWidth / 2 + 125, 20);
buttonTrees.touchStarted(treestarted);

//to go back to the first sketch
buttonGoBack = createButton("Back");
buttonGoBack.style("font-family", "Rubik Bubbles");
buttonGoBack.style("color", "white");
buttonGoBack.style("background-color", "#fdb515");
buttonGoBack.style("border-radius", "10px");
buttonGoBack.style("border", "0px");
buttonGoBack.style("padding", "6px 10px");
buttonGoBack.position(30, 668);
buttonGoBack.touchStarted(goBack);

//button that allow you to download your own drawing 
buttonSave = createButton("Download");
buttonSave.style("font-family", "Rubik Bubbles");
buttonSave.style("color", "white");
buttonSave.style("background-color", "#fdb515");
buttonSave.style("border-radius", "10px");
buttonSave.style("border", "0px");
buttonSave.style("padding", "6px 10px");
buttonSave.position(windowWidth / 2 - 40, 668);
buttonSave.touchStarted(saveDrawing);

}

//add animal
function animalstarted(){
  addAnimal = true;
  addTree = false;
  addVegetation = false;
}

//add trees
function treestarted(){
  addTree = true;
  addAnimal = false;
  addVegetation = false;
}

//add vegetation
function vegetationstarted(){
  addVegetation = true;
  addTree = false;
  addAnimal = false;
}

//download your drawing
function saveDrawing(){
  downloadDrawing = get(0, 0, windowWidth, windowHeight);
  downloadDrawing.save("MyWoods", "png");
}

function goBack(){
  window.open("index.html", "_self");
}

//deviceSHaken starts the rain
function deviceShaken(){
  for(let k = 0; k < 10; k++){
    let xp = random(width);
    let yp = random(height);
    let rp = random(10, 100);
    let sp = random(2, 3);
    let drop = random(drops);
    rain.push(new DrawPioggia(xp, yp, rp, sp, drop));
  }
}

//by touching the buttons you can add elements
function touchStarted() {
  if(addVegetation == true){
    for(let j = 0; j < touches.length; j++){
      let x1 = touches[j].x;
      let y1 = touches[j].y;
      let vegetation = random(vegetations);
        plants.push(new DrawVegetation(x1, y1, vegetation));
  }
} else if(addAnimal == true){
  for(let k = 0; k < touches.length; k++){
    let x2 = touches[k].x;
    let y2 = touches[k].y;
    let animal = random(animals);
      woodAnimals.push(new DrawAnimal(x2, y2, animal));
}
} else if(addTree == true){
  for(let i = 0; i < touches.length; i++){
    let x3 = touches[i].x;
    let y3 = touches[i].y;
    let tree = random(trees);
      woodTrees.push(new DrawTree(x3, y3, tree));
}
}
}

function draw() {

//slider's palameters
let to3 = color(31, 61, 29);
let from3 = color(165, 161, 25);
lerpedColor3 = lerpColor(from3, to3, bw1.value() / 100);
let to2 = color(49, 99, 47);
let from2 = color(188, 188, 49);
lerpedColor2 = lerpColor(from2, to2, bw1.value() / 100);
let from1 = color(63, 188, 232);
let to1 = color(46, 53, 96);
lerpedColor1 = lerpColor(from1, to1, bw1.value() / 100);
background(lerpedColor1);

//first shape for the grass
push();
noStroke();
fill(lerpedColor3);
beginShape();
vertex(0, height);
for(let e = 0; e < width; e++){
  let angle2 = offset2 + e * 0.012;
  let ye = map(cos(angle2), -strum, strum, 350, 300);
  vertex(e, ye);
}
vertex(width, height);
endShape();
pop();

//second shape for the grass
push();
noStroke();
fill(lerpedColor2);
beginShape();
vertex(0, height);
for(let q = 0; q < width; q++){
  let angle1 = offset1 + q * 0.01;
  let yv = map(sin(angle1), -strum * 1.5, strum * 1.5, 500, 450);
  vertex(q, yv);
}
vertex(width, height);
endShape();
pop();


for (let k = 0; k < woodAnimals.length; k++) {
    woodAnimals[k].display();
}  

  for(let j = 0; j < plants.length; j++) {
    plants[j].display();
}

for(let i = 0; i < woodTrees.length; i++) {
  woodTrees[i].display();
}

for(let h = 0; h < rain.length; h++){
  rain[h].display();
  rain[h].move();
}

}

class DrawVegetation{
  constructor(x1, y1, vegetation){
    this.x1 = x1;
    this.y1 = y1;
    this.vegetation = vegetation;
  }

  display(){
    if(this.y1 > 100){
      image(this.vegetation, this.x1, this.y1, this.vegetation.width / 5, this.vegetation.height / 5);
    }
  }
}

class DrawAnimal{
  constructor(x2, y2, animal){
    this.x2 = x2;
    this.y2 = y2;
    this.animal = animal;
  }

  display(){
    if(this.y2 > 100 && this.y2 < 650){
      image(this.animal, this.x2, this.y2, this.animal.width / 7, this.animal.height / 7);
    }
  }
}

class DrawTree{
  constructor(x3, y3, tree){
    this.x3 = x3;
    this.y3 = y3;
    this.tree = tree;
  }

  display(){
    if(this.y3 > 100 && this.y3 < 650){
      image(this.tree, this.x3, this.y3, this.tree.width / 3, this.tree.height / 3);
    }
  }
}

class DrawPioggia{
  constructor(xp, yp, rp, sp, drop){
    this.xp = xp;
    this.yp = yp;
    this.rp = rp;
    this.sp = sp;
    this.drop = drop;
  }

display(){
  image(this.drop, this.xp, this.yp, this.drop.width / 2, this.drop.height / 2);
}

move(){
  this.yp += rotationX / 3;
  //this.yp += sp;
  if(this.yp - this.rp > height){
    this.yp = -this.yp - this.rp + 400;
  }
}
}

function touchMoved(){
  return false;
}

function touchEnded(_event) {
  if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
  DeviceOrientationEvent.requestPermission()
}
}
