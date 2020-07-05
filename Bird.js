class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.left = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    
    
    var position = [this.body.position.x,this.body.position.y]
    this.left.push(position)
    }
    for(var i = 0 ;i<this.left.length ;i++){
      image(this.image1,this.left[i][0],this.left[i][1])
    }
   
  }
}
