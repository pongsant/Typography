let myFont;
let txt = "FUTURE";

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(100);
  textAlign(LEFT, CENTER); 
}

function draw() {
  background(0);
  fill(255);

  let txtW = textWidth(txt); 
  let startX = (width - txtW) / 2; 
  let centerY = height / 2; 

  for (let i = 0; i < txt.length; i++) {
    let letterWidth = textWidth(txt[i]); 
    let x = startX + textWidth(txt.substring(0, i)); 
    let y = centerY + sin(frameCount * 0.1 + i) * 30; 

    text(txt[i], x, y);
  }
}
