class Box{
 constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=80;
    this.height=80;
    var ops={
        isStatic:false
    }
    this.body=Bodies.rectangle(x,y,80,80,ops);
    World.add(world,this.body);
 }
 display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
 }
}