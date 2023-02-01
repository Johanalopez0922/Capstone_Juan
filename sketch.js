var sonic, enemy;
var sonic_run, sonic_jump, sonic_ded;
var floor, invisible_floor,floor_IMG;
var enemy_image;
var gameState = "play";


function preload(){
    //Solo funciona con tres imágenes 
    sonic_run = loadAnimation("SonicRun1.png", "SonicRun3.png", "SonicRun3.png");

    // Te falta agregar esta imagen 
    //floor_IMG = loadImage("Flat_ground.png");


    //Solo funciona con tres imágenes 
    sonic_jump = loadAnimation("img1.png","img2.png","img3.png"); 

}

function setup() {
    sonic = createSprite(200,200,200,200);
    
    sonic.addAnimation("run",sonic_run);
    sonic.addAnimation("spin", sonic_jump)

    invisible_floor = createSprite(180,320, 200, 10);
    

    //floor = createSprite(180,320);
    //floor.addImage("floor",floor_IMG);
 }

function draw() {
    background("white");
    sonic.velocityY = sonic.velocityY + 0.9;
    //Recuerda que la propiedad es visible la tenías como visibility :)
    
    invisible_floor.visible = true;
    //invisible_floor.visible = false;

    if (gameState==="play"){
        
        sonic.collide(invisible_floor);

        if(keyDown("space")){
            sonic.velocityY = sonic.velocityY - 0.9;
            sonic.velocityX = sonic.velocityX + 0.9;
            sonic.changeAnimation("spin", sonic_jump);  
            
            console.log(Math.round(sonic.x))
        } 
        else{
            sonic.changeAnimation("run",sonic_run); 
        }
        
        if(Math.round(sonic.x) >= 300){
            gameState = "end"; 
        }
       
    }
    else if(gameState === "end"){       
        background("red");
    }

    drawSprites(); 
}