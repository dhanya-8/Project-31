class Drops{
    constructor(x, y){
        var options ={
            restitution: 0.8,
            friction: 0.1,
            density: 1.0
    }

    this.rain = Bodies.circle(x, y, 100, options);
    World.add(this.rain, world);
}
display(){
    this.pos=this.rain.position;
    push();
    translate(this.pos.x,this.pos.y)
    ellipseMode(CENTER);    
    pop();
}

reset(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x: random(0, 600), y: random(0, 600)})
    }
}

}