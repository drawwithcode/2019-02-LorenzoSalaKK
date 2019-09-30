function preload() {
  // put preload code here
}

function setup() {
  var colorList = ['Black', 'dimgray', 'Black', 'Black'];

  createCanvas(windowWidth, windowHeight);
  background('black');
  frameRate(15);

  for (var posx = random(); posx < windowWidth; posx += 50) {
    for (var posy = random(); posy < windowHeight; posy += 50) {
      noStroke();

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));

      ellipse(posx, posy, random(1, 7));
    }
  }

}

function draw() {
  var x = noise(frameCount / 75) * width;
  var y = noise(frameCount / 50) * height;
  var d = noise(x++) * 75;
  var mycolor = 0;
  var midW = windowWidth / 2
  var midH = windowHeight / 2;


  if (mouseIsPressed) {
    mycolor = color(255 / 500 * mouseY, random(0, 255), 255 / 1000 * mouseX, 50);
    d = noise(x++) * 100;
  } else if (mouseX < midW && mouseY > midH) {
    mycolor = color(0, random(200, 255), random(200, 255), 10);
    d = noise(x++) * 250;
  } else if (mouseX > midW && mouseY > midH) {
    mycolor = color(random(200, 255), random(200, 255), 0, 10);
    d = noise(x++) * 250;
  } else if (mouseX < midW && mouseY < midH) {
    mycolor = color(random(200, 255), 0, random(200, 255), 10);
    d = noise(x++) * 250;
  } else if (mouseX > midW && mouseY < midH) {
    mycolor = color(random(0, 55), 255, random(0, 55), 10);
    d = noise(x++) * 250;
  } else {
    mycolor = color(0, 0, 0, 10);
  }



  fill(mycolor);
  noStroke();
  ellipse(x, y, d);

}
