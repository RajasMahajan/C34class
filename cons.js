class Rope{
    constructor(body1,pointB){
        var ops2={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.9,
            length:220
        }
        this.pointB=pointB;
        this.rope=Constraint.create(ops2);
        World.add(world,this.rope);
      //  this.body=create

    }
    display(){
        strokeWeight(4);
        stroke("red");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        

    }
}