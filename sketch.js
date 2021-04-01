var man, man1;

function preload(){
    man1 = loadImage("images/Walking Frame/walking_1.png");

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   canvas = createCanvas(600, 600);
    
    var man = createSprite(200, 430, 20, 20);
    man.addImage(man1);
    man.scale = 0.5;
}

function draw(){
    background(44, 26, 76);

for(var i=0; i<100; i++){
   Drops.push(new createDrop(random(0, 600)), (random(0, 600)));
}

    thunder();

    drawSprites();
}   

function thunder(){
    rand = Math.round(random(1, 4))
    if (frameCount%20===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 570), (random(10, 30), 10, 10));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
        thunder.lifetime = 12;
    }
}