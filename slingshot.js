class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:bodyB,
            stiffness:0.04,
           length:1
        
        }

        this.sling = constarint.create(options);
        this.pointB=pointB;
        this.height=height;
        world.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA-null;
    }

    display(){
       if(this.sling.bodyA){
           var pointA=this.sling.bodyA.position;
           var pointB=this.pointB;
           strokeWeight(4);
           stroke("blue");
           line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
}