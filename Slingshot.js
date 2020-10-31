class slingshot {
    constructor (bodyA,bodyB){
        var option ={
            bodyA : bodyA,
            bodyB : bodyB,
            lenght:10,
            stiffness : 0.0001
        }
        this.sling = Matter.Constraint.create(option) 
        World.add(world,this.sling)
    }
    display(){
        var PointA= this.sling.bodyA.position
        var PointB=this.sling.bodyB.position
        line(PointA.x,PointA.y,PointB.x,PointB.y)
    }
}