let font;
let particles = [];

function preload() {
    font = loadFont('CODE Bold.otf');
}

function setup() {
    createCanvas(800, 400);
    let points = font.textToPoints("ENERGY", 150, 250, 150, { sampleFactor: 0.25 });

    for (let pt of points) {
        particles.push(new Particle(pt.x, pt.y));
    }
}

function draw() {
    background(30);
    for (let p of particles) {
        p.update();
        p.show();
    }
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(2, 5));
    }

    update() {
        this.pos.add(this.vel);
    }

    show() {
        noStroke();
        fill(255, 100, 0);
        ellipse(this.pos.x, this.pos.y, 5, 5);
    }
}
