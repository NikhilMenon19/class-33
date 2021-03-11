class SlingShot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.1,
        length:10

    }

    this.pointB=pointB;

this.sling1=loadImage("sprites/sling1.png")
this.sling2=loadImage("sprites/sling2.png")
this.sling3=loadImage("sprites/sling3.png")

    this.sling=Constraint.create(options)
    World.add(world,this.sling);
}

 disconnect(){
     this.sling.bodyA=null;
 }

 piggy(body){
    this.sling.bodyA=body;
}

display(){

image(this.sling1,200,50)
image(this.sling2,170,50)


if(this.sling.bodyA){

stroke(48,22,8)

strokeWeight(4)

if(this.sling.bodyA.position.x<220){

line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)

image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
}else{
    line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
    line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
    
    image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)   
}
}
}
}