class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity=255    
    World.add(world, this.body);
  }
  display(){
    
    var pos =this.body.position;
      
    if(this.body.speed<7){
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();

    }
    else{
      World.remove(world,this.body)
      this.visiblity=this.visiblity-5
      push()
      tint(255,this.visiblity)
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
    }
    score(){
      if (this.visiblity < 0 && this.visiblity > -1005){
        score++;
      }
    }
   
};
