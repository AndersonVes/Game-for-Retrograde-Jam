//This type of object won't collide with anything in the game


function CreateNewScenaryObject(posX, posY,sizeX, sizeY, imagePath, canvasWidth) {

    const obj = {}

    obj.sizeX = sizeX;
    obj.sizeY = sizeY;

    objImage = new Image();
    objImage.src = imagePath;

    obj.posX = posX;
    obj.posY = posY;

    obj.canvasWidth = canvasWidth;

    /**
     * Move the object in the X axis
     * @param {any} speed 
     */
    obj.move = function (speed) {

        posX -=  speed;

        
        if (posX < -sizeX) {
            posX = canvasWidth + Math.floor(Math.random() * 100);  
        }

    }

    /**
     * Render the object image inside a canvas
     * @param {any} ctx The canvas to render
     */
    obj.render = function (ctx) {

 
        ctx.drawImage(objImage, posX, posY);

    }

    return obj;

}