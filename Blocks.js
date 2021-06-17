class Block{
    constructor(x,y,width,height){
        //super(x,y,50,50);
        var options= {
            'restitution':0.8,
            'friction':1.0,
            'density':0.01
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.vis = 255;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
            var pos  = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("white");
            fill("orange");
            rect(0,0,this.width,this.height);
            pop();
        }else{
            World.remove(world, this.body);
            push();
            this.vis = this.vis -10;
            tint(255,this.vis);
            rect(0,0,this.width,this,height);
            pop();
        }
        
        /*if((this.body.speed)<3){
            super.display();
        }else{
            World.remove(world, this.body);
        }*/
        
    }
}