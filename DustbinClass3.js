class abc{
    constructor(x,y,height,angle){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,height, 2,options);
        this.width = 2;
        this.height = height; 
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage("sprites/dustbingreen.png")
        World.add(world,this.body); 
        
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CORNERS);
        image(this.image, -65, -150, 65, 10);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        pop();
    }

}