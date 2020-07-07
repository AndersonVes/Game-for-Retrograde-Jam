
function CreateNewEnemy(posY, isGrounded, animationFrames, animationDuration, lives , sizeX, sizeY, canvasWidth){

    var obj = {};

    obj.isAlive = true;

    //Can cause damage to player
    obj.canCauseDamage = true;

    //If the dino is flying or is grounded
    obj.isGrounded = isGrounded;
    obj.lives = lives;

    obj.posX = canvasWidth;
    obj.posY = posY;

    obj.sizeX = sizeX;
    obj.sizeY = sizeY;    

    obj.animation = CreateNewAnimation(animationFrames, animationDuration);

    obj.update = function(delta) {

        if (obj.isAlive){
            obj.posX -= speed * delta / 1000;
        }
    }

    obj.render = function(ctx, delta) {

        if (obj.isAlive){

            obj.frame = obj.animation.getAnimationFrame(delta / 1000);
            ctx.drawImage(obj.frame, obj.posX, obj.posY);    

        }
    }

    //Take shot from dino
    obj.takeShot = function(dinoState){

        if (obj.isGrounded && dinoState == "running"){
            obj.lives--;            
        } else 
        if (!obj.isGrounded && dinoState == "jumping"){
            obj.lives--;   
        }

        if (lives == 0) {
            obj.isAlive = false;
        }
    }

    //Check collision with main dino
    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight) {

        if ( obj.isAlive ) {

            if (dinoPosX < obj.posX + obj.sizeX &&
                dinoPosX + dinoWidth > obj.posX &&
                dinoPosY < obj.posY + obj.sizeY &&
                dinoPosY + dinoHeight > obj.posY) {

                console.log("Dino colidiu");
                return true;
            }
        }

        return false;

    }


    return obj;
}