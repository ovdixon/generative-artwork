function setup() {
  createCanvas(700, 700);
  background(255);
}

function draw(){
	
  strokeWeight(2);
	
	// Drawing of 
  for (var i = 1; i < 6; i += 0.05) { // Loop to repeat the lines 
    for (var x = 0; x < width; x++) { // Iterate across x values of canvas width
      var x_map = map(x, 0, width * 8, 0, 10); // Map x value to the range of 0 to 10
      var y = height * noise(x_map); // Scale up x_map by multiplying it by the canvas height  
      var y = y * i; // Repeat lines with spacing dependent on result of noise()
      line(x, y, x, y); // Draw horizontal lines
      line(y, x, y, x); // Draw vertical lines by flipping coordinates
    }
  }

  // Model area around circle in square canvas using four Bezier curves: 
  var r = (3 * width) / 8 // Declare radius, give it a value 3/8 of canvas width
  let bc = r * 4 * (sqrt(2) - 1) / 3; // Approximation of distance of Bezier curve control points from end points

  noStroke();

  // First quadrant Bezier curve:
  beginShape();
  vertex(width / 2, 0);
  vertex(width / 2, height / 8);
  bezierVertex(height / 2 + bc, height / 8, 7 * width / 8, height / 2 - bc, 7 * width / 8, height / 2); // Bezier curve modelled to circular arc
  vertex(width, height / 2);
  vertex(width, 0);
  endShape();

  // Second quadrant Bezier curve:
  beginShape();
  vertex(0, height / 2);
  vertex(width / 8, height / 2);
  bezierVertex(height / 8, height / 2 - bc, width / 2 - bc, height / 8, width / 2, height / 8); 
  vertex(width / 2, 0);
  vertex(0, 0);
  endShape();

  // Third quadrant Bezier curve:
  beginShape();
  vertex(0, height / 2);
  vertex(width / 8, height / 2);
  bezierVertex(height / 8, height / 2 + bc, width / 2 - bc, 7 * height / 8, width / 2, 7 * height / 8); 
  noStroke();
  vertex(width / 2, height);
  vertex(0, height);
  endShape();

  // Fourth quadrant Bezier curve:
  beginShape();
  vertex(width, height / 2);
  vertex(7 * width / 8, height / 2);
  bezierVertex(7 * width / 8, height / 2 + bc, width / 2 + bc, 7 * height / 8, width / 2, 7 * height / 8);
  vertex(width / 2, height);
  vertex(width, height);
  endShape();
}