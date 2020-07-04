function CreateNewDino() {


    var obj = {};



    obj.animation = CreateNewAnimation(
        ["sprites/dino/dinoframe2.png", "sprites/dino/dinoframe1.png", "sprites/dino/dinoframe2.png", "sprites/dino/dinoframe3.png"], [.1, .03, .1, .03]);


    obj.render = function(ctx, delta) {

        ctx.drawImage(obj.animation.getAnimationFrame(delta / 1000), 40, 135);

    }



    return obj;

}