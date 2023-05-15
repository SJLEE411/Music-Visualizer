
var inc = 0.5;
var scl = 10;
var cols, rows;

var zoff = 0;


var parts = [];

var flowfield;


function Perlin() {
  this.name = "perlin";


this.draw = function() {
  push();
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
  var xoff = 0;
    for (var x = 0; x < cols; x++) {
    var index = x + y * cols;
    // smaller number after multiply PI will give more horizontal movement
    var angle = noise(xoff, yoff, zoff) * TWO_PI * 6;
    var v = p5.Vector.fromAngle(angle);
    v.setMag(1);
    flowfield[index] = v;
    xoff += inc;
    stroke(0, 50);

    }
  yoff += inc;
  zoff += 0.1;
  }

  for (var i = 0; i < parts.length; i++) {
  parts[i].follow(flowfield);
  parts[i].update();
  parts[i].edges();
  parts[i].show();
  
  }
  pop();
}


}	

  class Part {
    constructor() {
      this.pos = createVector(random(width), random(height));
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      //speed of the movement
      this.maxspeed = 2;
      this.prevPos = this.pos.copy();
		this.w = random(3, 10)
      
		
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    follow(vectors) {
      var x = floor(this.pos.x / scl);
      var y = floor(this.pos.y / scl);
      var index = x + y * cols;
      var force = vectors[index];
      this.applyForce(force);
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    show() {
      // shapes and lines for the object movements
      stroke(255);
      strokeWeight(0.5);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      var d = map (amplitude.getLevel(),0,0.2, this.w, this.w *2.80);
      this.updatePrev();
      fill(51,51,51)
      rect(this.pos.x+2, this.pos.y, d*3,d*6)
      fill(25,25,25) 
      ellipse(this.pos.x+15, this.pos.y+20, d*2)
     

      

    
    }
  
    updatePrev() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
  
    edges() {
      if (this.pos.x > width) {
        this.pos.x = 0;
        this.updatePrev();
      }
      if (this.pos.x < 0) {
        this.pos.x = width;
        this.updatePrev();
      }
      if (this.pos.y > height) {
        this.pos.y = 0;
        this.updatePrev();
      }
      if (this.pos.y < 0) {
        this.pos.y = height;
        this.updatePrev();
      }
  
    }
  
  }