class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png")

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world, this.body)
    }

    display(){
        var paperPos = this.body.position

        push()
        translate(paperPos.x, paperPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill("white")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}