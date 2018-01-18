
var Enemy = function(x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;  
    this.speed=speed;
    this.width=40;
    this.height=60;
  
};


Enemy.prototype.update = function(dt) {
      
       this.x = this.x + this.speed * dt;

        if(this.x > 505){
        this.x = 0;
    }

      this.Collisions();
};

Enemy.prototype.render = function(x,y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.Collisions = function(){

  if(this.x < player.x + player.width &&
     this.x + this.width > player.x &&
     this.y < player.y + player.height &&
     this.height + this.y > player.y){
     alert("Oopps!, you lose");
     player.reset();
     
    }
};



var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=30;
    
    
};

Player.prototype.update = function(dt){

};


Player.prototype.render = function(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(x,y){
  this.x=200;
  this.y=400;
};





Player.prototype.handleInput = function(key){
   switch(key){
        case "up":
          this.y = this.y - 50;
           if (key==="up" && this.y <= 10){
              alert("Bravoo, you win!");
               this.reset();
        }
          break;
        case "down":
           if (this.y >= 400) {
            this.y = 400;
        } else {
            this.y += 50;
        }
          break;
        case "left":
        if (this.x <= 0) {
            this.x = 0;
        } else {
            this.x -= 50;
        }
          break;
        case "right":
           if (this.x >= 400) {
            this.x = 400;
        } else {
            this.x += 50;
        }
          break;
     }
  
};

var enemy1 = new Enemy(0,100,70);
var enemy2 = new Enemy(0,160,100);
var enemy3 = new Enemy(0,230,50);
var enemy4 = new Enemy(0,160,150);
var enemy5 = new Enemy(0,230,80);

var allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5];

var player= new Player(200,400);


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
