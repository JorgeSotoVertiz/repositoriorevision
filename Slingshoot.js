class Slingshoot {
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    lenth:10
}
this.pointB=pointB;
this.sling=Constraint.create(options);
World.add(world, this.sling);
} 
fly(){
  this.sling.bodyA=null;
}

display() {
  if(this.sling,bodyA){
  var pointA=this.sling.bodyA.position;
  var pointB=this.pointB  ;
  push ();
  strokeWeight(4);
  line(pointA.x-40,pointA.y,pointB.x-10,pointB.y);
  line(pointA.x-40,pointA.y,pointB.x+30,pointB.y);
  pop ();
}  
}
}
