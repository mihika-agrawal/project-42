class Drop {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction:0.1
        }
        this.r=5;
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
   
    update(){
    if(this.body.position.y > 800){
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)});
    }

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

}
