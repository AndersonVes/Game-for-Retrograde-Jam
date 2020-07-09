function CreateNewEnemy(posY, isGrounded, enemyType, sizeX, sizeY, canvasWidth, randomIndex) {

    groundDinoLives = 7;
    airDinoLives = 2;

    var obj = {};



    obj.isAlive = true;
    obj.hitDino = false;

    //Can cause damage to player
    obj.canCauseDamage = true;

    //If the dino is flying or is grounded
    obj.isGrounded = isGrounded;

    obj.posX = canvasWidth;
    obj.posY = posY;

    obj.sizeX = sizeX;
    obj.sizeY = sizeY;

    obj.damageTime = .25;
    obj.damageTimeCurrent = 0;

    obj.lives = 0;

    obj.restartLives = function() {
        if (enemyType == 1)
            obj.lives = groundDinoLives;
        else
            obj.lives = airDinoLives;
    };

    obj.restartLives();


    if (enemyType == 1) {

        obj.animationFrames = ["sprites/villain/villain1.png", "sprites/villain/villain2.png"]
        obj.animationDuration = [0.3, 0.3];

        obj.frameRed1 = new Image();
        obj.frameRed1.src = "sprites/villain/villain1red.png";

        obj.frameRed2 = new Image();
        obj.frameRed2.src = "sprites/villain/villain1red.png";
    } else if (enemyType == 2) {
        obj.animationFrames = ["sprites/airvillan/airvillan1.png", "sprites/airvillan/airvillan2.png"]
        obj.animationDuration = [0.3, 0.3];

        obj.frameRed1 = new Image();
        obj.frameRed1.src = "sprites/airvillan/airvillan1red.png";

        obj.frameRed2 = new Image();
        obj.frameRed2.src = "sprites/airvillan/airvillan2red.png";
    } else {
        alert("invalid enemy type");
    }

    obj.animation = CreateNewAnimation(obj.animationFrames, obj.animationDuration);



    obj.update = function(delta, speed) {

        if (obj.isAlive) {
            obj.posX -= speed * delta / 1000;

            if (obj.damageTimeCurrent > 0) {
                obj.damageTimeCurrent -= delta / 1000;
            }

            if (obj.posX < 1)
                obj.respaw();

        }


    }

    obj.render = function(ctx, delta) {

        if (obj.isAlive) {
            obj.frame = obj.animation.getAnimationFrame(delta / 1000);

            if (this.damageTimeCurrent <= 0) {
                ctx.drawImage(obj.frame, obj.posX, obj.posY);
            } else {

                if (obj.enemyType == 1) {
                    if (obj.frame.src.includes("sprites/villain/villain1.png")) {
                        ctx.drawImage(obj.frameRed1, obj.posX, obj.posY);
                    } else {
                        ctx.drawImage(obj.frameRed2, obj.posX, obj.posY);
                    }
                } else {

                    if (obj.frame.src.includes("sprites/airvillan/airvillan1.png")) {
                        ctx.drawImage(obj.frameRed1, obj.posX, obj.posY);
                    } else {
                        ctx.drawImage(obj.frameRed2, obj.posX, obj.posY);
                    }
                }
            }
        }
    }

    obj.respaw = function() {

        obj.restartLives();
        obj.posX = canvasWidth + (Math.floor(Math.random() * randomIndex) * 10);
        obj.isAlive = true;
        obj.hitDino = false;
    }

    //Take shot from dino
    obj.takeShot = function(dinoState, dinoX) {

        if (dinoX < obj.posX) {
            if (obj.isGrounded && dinoState == "running") {
                obj.lives--;
                obj.damageTimeCurrent = obj.damageTime;
            } else

            if (!obj.isGrounded && dinoState == "jumping") {
                obj.lives--;
                obj.damageTimeCurrent = obj.damageTime;
            }

            if (obj.lives < 1) {
                obj.isAlive = false;
                obj.respaw();
            }
        }
    }

    //Check collision with main dino
    obj.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight) {

        if (obj.isAlive && obj.hitDino == false) {

            if (dinoPosX < obj.posX + obj.sizeX &&
                dinoPosX + dinoWidth > obj.posX) {

                obj.hitDino = true;
                collisionAudio.play();
                hitTaken();
            }
        }



    }


    return obj;
}