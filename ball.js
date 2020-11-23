class Ball{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.radius=40;
        var ops1={
         //frictionAir:0.009,
         density:2  
        }
        this.body=Bodies.circle(x,y,40,ops1);
        World.add(world,this.body);
        }
        display()
        {
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        }

}