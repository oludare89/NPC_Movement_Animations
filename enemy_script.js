/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

CANVAS1_WIDTH = canvas1.width = 450;
CANVAS1_HEIGHT = canvas1.height = 900;
CANVAS2_WIDTH = canvas2.width = 450;
CANVAS2_HEIGHT = canvas2.height = 900;
CANVAS3_WIDTH = canvas3.width = 450;
CANVAS3_HEIGHT = canvas3.height = 900;
CANVAS4_WIDTH = canvas4.width = 450;
CANVAS4_HEIGHT = canvas4.height = 900;

const numberOfEnemies1 = 15;
const enemies1Array = [];
const numberOfEnemies2 = 25;
const enemies2Array = [];
const numberOfEnemies3 = 35;
const enemies3Array = [];
const numberOfEnemies4 = 45;
const enemies4Array = [];

let gameFrame = 0;

class Enemy1 {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/images/enemy1.png';
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas1.width - this.width);
        this.y = Math.random() * (canvas1.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 10 - 5;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }        
    }
    draw(){
        ctx1.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

class Enemy2 {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/images/enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 5;
    }
    update(){
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0){
            this.x = canvas2.width;
        }
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }        
    }
    draw(){
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

class Enemy3 {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/images/enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 2 + 0.5;
        // this.curve = Math.random() * 200 + 50;
    }
    update(){
        this.x = canvas3.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas3.width/2 - this.width/2);
        this.y = canvas3.height/2 * Math.cos(this.angle * Math.PI/180) + (canvas3.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0){
            this.x = canvas3.width;
        }
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }        
    }
    draw(){
        ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

class Enemy4 {
    constructor(){
        this.image = new Image();
        this.image.src = 'assets/images/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas4.width - this.width);
        this.y = Math.random() * (canvas4.height - this.height);
        this.newX = Math.random() * (canvas4.width - this.width);
        this.newY = Math.random() * (canvas4.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
    }
    update(){
        if (gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas4.width - this.width);
            this.newY = Math.random() * (canvas4.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/30;
        this.y -= dy/30;
        if (this.x + this.width < 0){
            this.x = canvas4.width;
        }
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }        
    }
    draw(){
        ctx4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i=0; i < numberOfEnemies1; i++) {
    enemies1Array.push(new Enemy1());
}
for (let i=0; i < numberOfEnemies2; i++) {
    enemies2Array.push(new Enemy2());
}
for (let i=0; i < numberOfEnemies3; i++) {
    enemies3Array.push(new Enemy3());
}
for (let i=0; i < numberOfEnemies4; i++) {
    enemies4Array.push(new Enemy4());
}


function animate() {
    ctx1.clearRect(0, 0, CANVAS1_WIDTH, CANVAS1_HEIGHT);
    ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    ctx3.clearRect(0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
    ctx4.clearRect(0, 0, CANVAS4_WIDTH, CANVAS4_HEIGHT);
    enemies1Array.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    enemies2Array.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    enemies3Array.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    enemies4Array.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
