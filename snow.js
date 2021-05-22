class Snow{
    constructor(x,y,width,height){
        var snowOptions={
            restitution:0.4,
            friction:0.2,
            density:0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,snowOptions)
        this.width=width
        this.height=height
        World.add(world,this.body)
        this.image=loadImage("snow5.webp")
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("white")

        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}