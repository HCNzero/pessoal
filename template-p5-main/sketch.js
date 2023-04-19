
var fundo;
var player;

function preload(){

    playerIdol = loadAnimation("Mr0.png","Mr0.png","Mr0.png","Mr0.png","Mr1.png","Mr1.png","Mr1.png","Mr1.png","Mr1.png");
    fundoImg = loadImage("SakF.jpg");
    chaoImg = loadImage("SakF.jpg");
    
}
function setup() {
    createCanvas(1200,600);

    fundo = createSprite(600,300);
    fundo.addImage(fundoImg);
    fundo.scale = 1.3;

    player = createSprite(100,460);
    player.addAnimation("parado",playerIdol);
    player.scale = 0.3;

    chao = createSprite(600,940,1200,50);
    chao.addImage(chaoImg);
    chao.scale = 1.3;
    

    


}

function draw() {
    background("skyblue");
    //códigos que serão executados ao longo de todo o jogo
    
    drawSprites();
}

