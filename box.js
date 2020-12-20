class Box extends Parent {
    constructor(x, y, width, height) {
     
      super(x,y,width,height);
      this.image= loadImage("images.png");
      this.Visiblity= 225;
  }

  display(){
    if(this.body.speed < 4){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image,this.body.position.x, this.body.position.y, this.width,this.height);
       pop();
     }
    }


  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  
  }
};