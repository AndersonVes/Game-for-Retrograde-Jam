function CreateNewCollisionObject(postionY, width, height, canvasWidth, imagePath, randomIndex) {

    obj = {};


    posX = canvasWidth + (Math.floor(Math.random() * randomIndex) * 10) + 200;
    posY = postionY;

    sizeX = width;
    sizeY = height;
    canRespawn = true;

    collided = false;

    imageObj = new Image();
    imageObj.src = imagePath;




    obj.move = function(speed, delta) {

        if (canRespawn) {
            posX -= speed * delta / 1000;
            if (posX < -sizeX) {
                canRespawn = true;
            }
        }

        if (posX < -sizeX) {
            posX = canvasWidth + (Math.floor(Math.random() * randomIndex) * 10);
            collided = false;
        }

    }

    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight) {

        if ((dinoPosX + 10) < posX + sizeX &&
            (dinoPosX + 10) + dinoWidth > posX &&
            dinoPosY < posY + sizeY &&
            dinoPosY + dinoHeight > posY &&
            !collided) {
            collided = true;
            hitTaken();
            collisionAudio.play();
        }
    }




    obj.render = function(ctx) {
        ctx.drawImage(imageObj, posX, posY);
    }

    return obj;
}