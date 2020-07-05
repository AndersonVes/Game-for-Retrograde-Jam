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

                if (colidiu){

                obj.posX = -100;
                obj.canRespawn = true;

            }

        }
        

    }


    obj.render = function(ctx, delta){
        if (canRespawn == false){
            ctx.drawImage(obj.image, obj.posX, obj.posY);
        }
    }




    return obj;

    



}