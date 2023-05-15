var particles = [];
var input;

function Particles_file(){
	this.name = "particles";

	this.draw = function(){
		
		push();
		translate(width/2, height/2);
		
		var p = new Scatter()
		particles.push(p)
		for( var i = 0; i < particles.length; i++) {
			particles[i].update()
			particles[i].show()
		}
		particles.forEach((p, index)=>{
			p.checkParticles(particles.slice(index));
		})
		pop();
	};
}
class Scatter {
	
	constructor() {
		this.loc = location.copy;
		this.pos = p5.Vector.random2D().mult(mouseX/3)
		this.vel = createVector(0, 0);
		this.acc = this.pos.copy().mult(random(0.0003,0.0003))
		this.lifespan = 255.0
		this.w = random(3, 10)
				
	}

	update () {
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.lifespan -= 0.3;
	}

	show() {
		stroke(mouseX,random,this.lifespan);
		fill(-mouseY,mouseX,this.lifespan);
		var d = map (amplitude.getLevel(),0,0.1, this.w, this.w *2.80);
		ellipse(this.pos.x, this.pos.y, d)
		

		
	}

	checkParticles(particles) {
		particles.forEach(particle => {
			const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

			if(d < 70) {
				stroke('rgba(255,255,255,0.2)');
				line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			}
		});
	}
}
