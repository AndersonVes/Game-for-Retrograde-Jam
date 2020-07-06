//For the rocks


function CreateNewCollisionObject( postionY, width, height,  canvasWidth, imagePath ){

    obj = {};

    obj.posX =  canvasWidth;
    obj.posY = postionY;

    obj.sizeX = width;
    obj.canRespawn = false;

    obj.image = new Image();
    obj.image.src = imagePath;



    obj.move = function(speed, delta) {

        if (obj.canRespawn){
            posX -= speed * delta / 1000;

            if (posX < -sizeX) {
             obj.canRespawn = true;   
            }
        }

    }

    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight){

        if (obj.canRespawn == false){

            if (RectCollide({x = dinoPosX, y = dinoPosY, width = dinoWidth, height = dinoWidth},
                            {x = obj.posX, y = obj.posY, width = obj.width, height = obj.height })){

                console.log("Dino colidiu");
                return true;
            }

            return false;

        }

    }


    obj.render = function(ctx, delta){
        if (canRespawn == false){
            ctx.drawImage(obj.image, obj.posX, obj.posY);
        }
    }




    return obj;

    



}