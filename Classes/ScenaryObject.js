//This type of object won't collide with anything in the game

function CreateNewScenaryObject(posX, posY,sizeX, sizeY, imagePath, canvasWidth, canvasHeight) {

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


    obj.posX = posX;
    obj.posY = posY;

    obj.canvasWidth = canvasWidth;
    obj.canvasHeight = canvasHeight;
    /**
     * Move the object in the X axis
     * @param {any} speed 
     */
    obj.move = function (speed, delta) {

        posX -=  speed * delta / 1000; 

        
        if (posX < -sizeX) {
            posX = canvasWidth ;//+ Math.floor(Math.random() * 100);  
            obj.imageIndex = Math.floor(Math.random() * imagePath.length);  
        }

    }

    /**
     * Render the object image inside a canvas, Y axis grow from bottom to top in this case
     * @param {any} ctx The canvas to render
     */
    obj.render = function (ctx) {

        
        ctx.drawImage(obj.objImage[obj.imageIndex], posX, -sizeY + canvasHeight - posY);

    }

    return obj;

}