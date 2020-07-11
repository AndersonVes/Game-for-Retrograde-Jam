//This type of object won't collide with anything in the game

function CreateNewScenaryObject(scPosX, posY, sizeX, sizeY, imagePath, canvasWidth, canvasHeight) {

    var obj = {}

    obj.sizeX = sizeX;
    obj.sizeY = sizeY;


    obj.objImage = [];
    obj.objImage.length = imagePath.length;

    for (var i = 0; i < imagePath.length; i++) {
        obj.objImage[i] = new Image();
        obj.objImage[i].src = imagePath[i];
    }

    obj.imageIndex = Math.floor(Math.random() * imagePath.length);


    obj.posX = scPosX;
    obj.posY = posY;

    obj.canvasWidth = canvasWidth;
    obj.canvasHeight = canvasHeight;
    /**
     * Move the object in the X axis
     * @param {any} speed 
     */
    obj.move = function(speed, delta) {

        obj.posX -= speed * delta / 1000;



        if (obj.posX < -sizeX) {
            obj.posX = canvasWidth;
            obj.imageIndex = Math.floor(Math.random() * imagePath.length);
        }

    }

    /**
     * Render the object image inside a canvas, Y axis grow from bottom to top in this case
     * @param {any} ctx The canvas to render
     */
    obj.render = function(ctx) {
        if (!reloadScenary)
            ctx.drawImage(obj.objImage[obj.imageIndex], obj.posX, -sizeY + canvasHeight - posY);
        else {

            ctx.drawImage(obj.objImage[obj.imageIndex], scPosX, -sizeY + canvasHeight - posY);
            reloadScenary = false;

        }

    }

    return obj;

}