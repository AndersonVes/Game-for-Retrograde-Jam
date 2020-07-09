function createNewHearts(maxLifes) {

    hrt = {};

    var heatsWidth = 11;

    hrt.imageOutline = new Image();
    hrt.imageOutline.src = "sprites/heartOutline.png";


    hrt.imageFill = new Image();
    hrt.imageFill.src = "sprites/heartFill.png";

    hrt.render = function(ctx, currentLifes) {

        for (var i = 1; i <= maxLifes; i++) {
            ctx.drawImage(hrt.imageOutline, (heatsWidth + 3) * i, 10);
        }

        for (var i = 1; i <= currentLifes; i++) {
            ctx.drawImage(hrt.imageFill, (heatsWidth + 3) * i + 1, 11);
        }
    }

    return hrt;

}