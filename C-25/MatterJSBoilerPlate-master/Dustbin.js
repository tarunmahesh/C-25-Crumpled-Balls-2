class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("green0recycle-bin.png")
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("red")
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }


}

