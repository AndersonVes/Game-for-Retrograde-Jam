function CreateNewCollisionObject(postionY, width, height, canvasWidth, imagePath) {

    obj = {};


    obj.posX = canvasWidth; //+ (Math.floor(Math.random() * randomIndex) * 10) + 200;
    obj.posY = postionY;

    obj.sizeX = width;
    obj.sizeY = height;
    obj.isOnScreen = true;

    obj.collided = false;

    obj.imageObj = new Image();
    obj.imageObj.src = imagePath;



    obj.move = function(speed, delta) {

        if (obj.isOnScreen) {

            obj.posX -= speed * delta / 1000;

            if (obj.posX < -obj.sizeX) {
                obj.isOnScreen = false;
            }

        }

        /*
        if (obj.posX < -obj.sizeX) {
            obj.posX = canvasWidth + (Math.floor(Math.random() * randomIndex) * 10);
            obj.collided = false;
        }
        */
    }

    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight) {

        if ((dinoPosX + 10) < obj.posX + obj.sizeX &&
            (dinoPosX + 10) + dinoWidth > obj.posX &&
            dinoPosY < obj.posY + obj.sizeY &&
            dinoPosY + dinoHeight > obj.posY &&
            !obj.collided) {
            
                obj.collided = true;
                hitTaken();
                collisionAudio.play();
        }
    }

    obj.render = function(ctx) {
        if (obj.isOnScreen){
            ctx.drawImage(obj.imageObj, obj.posX, obj.posY);
        }
    }

    return obj;
}