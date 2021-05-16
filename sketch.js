var boy, idleBoy, runningBoy
var groundImg,ground
var count = 0

function preload()
{
    groundImg=loadImage('Images/Ground/Ground.png')

    idleBoy=loadAnimation("images/Playing Character/Standing1.png","images/Playing Character/Standing2.png"
    ,"images/Playing Character/Standing3.png","images/Playing Character/Standing4.png")

    runningBoy=loadAnimation("images/Playing Character/Running1.png","images/Playing Character/Running2.png"
    ,"images/Playing Character/Running3.png","images/Playing Character/Running5.png","images/Playing Character/Running4.png"
    ,"images/Playing Character/Running6.png")
}

function setup()
{
    createCanvas(displayWidth-20,displayHeight-30)

    boy = createSprite(displayWidth/2,displayHeight/3,10,10)
    boy.shapeColor = 'red'
    boy.addAnimation("standing",idleBoy)

    
    boy.addAnimation("running",runningBoy)

    ground = createSprite(displayWidth/2.2,displayHeight/1.1,10000000000,10)
    ground.shapeColor = 'brown'
    ground.addImage(groundImg,"Ground")
    ground.scale = 5
    groundImg.height = groundImg.height/3

    
}

function draw()
{
    background('blue')
    boy.velocityY = boy.velocityY+0.3

    if(boy.isTouching(ground))
    {
        boy.velocityY = 0
        count = 0
    }

        if(keyIsDown(RIGHT_ARROW))
    {
        boy.x = boy.x + 5
        boy.changeAnimation("running",runningBoy)
    }
    

    
    

    if(keyDown('LEFT_ARROW'))
    {
        boy.x = boy.x - 5
    }

    drawSprites()
}

function keyPressed()
{

    if (keyCode === 38)
    {
        boy.velocityY = -5
        count = count + 1
    }
    

    if(count >= 3)
    {
       boy.velocityY = 0
    }
    console.log(count)

}