//This type of object won't collide with anything in the game

function CreateNewScenaryObject(posX, posY,sizeX, sizeY, imagePath, canvasWidth) {

    var obj = {}

    obj.sizeX = sizeX;
    obj.sizeY = sizeY;

    
    obj.objImage = [];
    obj.objImage.length = imagePath.length;

    for (var i = 0; i < imagePath.length; i++ ){
        obj.objImage[i] = new Image();
        obj.objImage[i].src = imagePath[i];
    }

    obj.imageIndex = Math.floor(Math.random() * imagePath.length);  

alert(obj.objImage[obj.imageIndex].src);

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
            posX = canvasWidth ;//+ Math.floor(Math.random() * 100);  
            obj.imageIndex = Math.floor(Math.random() * imagePath.length);  
        }

    }

    /**
     * Render the object image inside a canvas
     * @param {any} ctx The canvas to render
     */
    obj.render = function (ctx) {

        
        ctx.drawImage(obj.objImage[obj.imageIndex], posX, posY);

    }

    return obj;

}