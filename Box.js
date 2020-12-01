class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':0.5,
        'density':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed < 5){
         var pos =this.body.position;
         push();
         translate(pos.x,pos.y);
         rotate(this.body.angle);
         rectMode(CENTER);
         fill("blue");
         rect(0,0, this.width, this.height);
         pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       //rect(0,0,this.width, this.height) ;
       pop();
     }
    }
    
    

  }


