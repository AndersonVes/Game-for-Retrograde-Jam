function CreateNewDino() {


    var obj = {};

    obj.height = 36;
    obj.width = 10;
    obj.state = "running";

    obj.damageTime = 0.5;
    obj.damageTimeCounter = 0;

    obj.posX = 20;
    obj.posY = 135;

    obj.animation = CreateNewAnimation(
        ["sprites/dino/dinoframe2.png", "sprites/dino/dinoframe1.png", "sprites/dino/dinoframe2.png", "sprites/dino/dinoframe3.png"],
        [.1, .03, .1, .03]);

    obj.dinoRed1 = new Image();
    obj.dinoRed1.src = "sprites/dino/dinoframe1red.png";

    obj.dinoRed2 = new Image();
    obj.dinoRed2.src = "sprites/dino/dinoframe2red.png";

    obj.dinoRed3 = new Image();
    obj.dinoRed3.src = "sprites/dino/dinoframe3red.png";

    obj.imgJumping = new Image();
    obj.imgJumping.src = "sprites/dino/dinoframe2.png";

    obj.jumpforce = 20;
    obj.currentJumpForce = 0;

    obj.imgAk = new Image();
    obj.imgAk.src = "sprites/dino/ak47.png";

    obj.akPosX = 15;
    obj.akPosY = 17;


    obj.imgAkShot = new Image();
    obj.imgAkShot.src = "sprites/dino/shot.png";

    obj.akShotX = 21;
    obj.akShotY = 0;

    obj.shotSpriteTime = .2;
    obj.shotSpriteTimeCounter = 0;

    /* Jump Vars */
    obj.velocityY = 0.0;
    obj.gravity = 40;
    obj.onGround = true;

    obj.update = function (delta) {

        if (obj.state == "jumping") {

            obj.velocityY += obj.gravity * delta / 1000;


            obj.posY += obj.velocityY;

            if (obj.posY > 140.0) {
                obj.posY = 140.0;
                obj.velocityY = 0.0;
                obj.onGround = true;
                obj.state = "running";
            }

        }

        if (obj.damageTimeCounter > 0) {
            this.damageTimeCounter -= delta / 1000;
        }

    }

    obj.render = function (ctx, delta) {

        if (obj.state == "running" || obj.state == "jumping") {

            obj.frame = obj.animation.getAnimationFrame(delta / 1000);

            if (obj.damageTimeCounter <= 0) {

                ctx.drawImage(obj.frame, obj.posX, obj.posY);

            } else {

                if (obj.frame.src.includes("sprites/dino/dinoframe1.png")) {
                    ctx.drawImage(obj.dinoRed1, obj.posX, obj.posY);
                }
                else
                    if (obj.frame.src.includes("sprites/dino/dinoframe2.png")) {
                        ctx.drawImage(obj.dinoRed2, obj.posX, obj.posY);
                    }
                    else
                        if (obj.frame.src.includes("sprites/dino/dinoframe3.png")) {
                            ctx.drawImage(obj.dinoRed3, obj.posX, obj.posY);
                        }

            
        }
        //alert(obj.frame.src);

        if (obj.frame.src.includes("prites/dino/dinoframe2.png")) {
            obj.offset = -1;
        } else {
            obj.offset = 0;
        }

        ctx.drawImage(obj.imgAk, obj.posX + obj.akPosX, obj.offset + obj.posY + obj.akPosY);

        if (obj.shotSpriteTimeCounter > 0) {
            ctx.drawImage(obj.imgAkShot, obj.posX + obj.akPosX + obj.akShotX, obj.offset + obj.posY + obj.akPosY + obj.akShotY);
            obj.shotSpriteTimeCounter -= delta / 1000;
        }
    }

}

obj.jump = function () {

    if (obj.state != "jumping") {


        jumpAudio.play();
        obj.state = "jumping";
        obj.velocityY = -10.0;

    }
}

obj.shot = function () {

    obj.shotSpriteTimeCounter = obj.shotSpriteTime;

}

obj.takeDamage = function () {
    obj.damageTimeCounter = obj.damageTime;

}


return obj;

}