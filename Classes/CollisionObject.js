

function CreateNewCollisionObject( postionY, width, height,  canvasWidth, imagePath ){


    obj = {};

    obj.posX =  canvasWidth;
    obj.posY = postionY;

    obj.sizeX = width;
    obj.sizeY = height;
    obj.canRespawn = false;

    obj.image = new Image();
    obj.image.src = imagePath;
    alert(obj.image.src);



    obj.move = function(speed, delta) {

        if (obj.canRespawn){
            obj.posX -= speed * delta / 1000;
            console.log(obj.posY + " " + obj.posX)
            if (obj.posX < -obj.sizeX) {
               obj.canRespawn = true;   
            }
        }

    }

    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight){

        if (obj.canRespawn == false){
            
            if (dinoPosX < obj.posX + obj.sizeX &&
                dinoPosX + dinoWidth > obj.posX &&
                dinoPosY < obj.posY + obj.sizeY  &&
                dinoPosY + dinoHeight > obj.posY) {

                console.log("Dino colidiu");
                return true;
            }

            return false;

        }

    }


    obj.render = function(ctx){

        //if (obj.canRespawn == false){
            ctx.drawImage(obj.image, obj.posX, obj.posY);
       // }
    }

    return obj;
}
