class Ball{
    constructor(x, y){
        var ball_option = {
            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        circle.body = Matter.Bodies.circle(x, y, 20, ball_option)
        World.add(world, circle.body)
    }
    display(){
        var pos = circle.body.position
        push()
        translate(pos.x, pos.y)
        ellipseMode(CENTER)
        fill("pink")
        ellipse(0, 0)
        pop()
    }
}