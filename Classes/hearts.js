function createNewHearts(maxLifes){

    obj = {};

    var heatsWidth = 11;

    obj.imageOutline = new Image();
    obj.imageOutline.src = "sprites/heartOutline.png"; 

    
    obj.imageFill = new Image();
    obj.imageFill.src = "sprites/heartFill.png"; 

    obj.render = function(ctx, currentLifes){

        for(var i = 1 ; i <= maxLifes; i++){

            ctx.drawImage(obj.imageOutline, (heatsWidth + 3) * i  , 10);

        }

        for(var i = 1 ; i <= currentLifes; i++){

            ctx.drawImage(obj.imageFill, (heatsWidth + 3) * i + 1  , 11);

        }


    }

    return obj;

}