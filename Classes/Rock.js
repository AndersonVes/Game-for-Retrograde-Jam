function CreateNewCollisionObject(postionY, width, height, canvasWidth, imagePath) {

    rock = {};


    rock.posX = canvasWidth; //+ (Math.floor(Math.random() * randomIndex) * 10) + 200;
    rock.posY = postionY;

    rock.sizeX = width;
    rock.sizeY = height;
    rock.isOnScreen = true;

    rock.collided = false;

    rock.imageObj = new Image();
    rock.imageObj.src = imagePath;



    rock.move = function(speed, delta) {

        if (rock.isOnScreen) {

            rock.posX -= speed * delta / 1000;

            if (rock.posX < -rock.sizeX) {
                rock.isOnScreen = false;
            }

        }

        
    }

    rock.checkColision = function(dinoPosX, dinoPosY, dinoWidth, dinoHeight) {

        if ((dinoPosX + 10) < rock.posX + rock.sizeX &&
            (dinoPosX + 10) + dinoWidth > rock.posX &&
            dinoPosY < rock.posY + rock.sizeY &&
            dinoPosY + dinoHeight > rock.posY &&
            !rock.collided) {
            
                rock.collided = true;
                hitTaken();
                collisionAudio.play();
        }
    }

    rock.render = function(ctx) {
        if (rock.isOnScreen){
            ctx.drawImage(rock.imageObj, rock.posX, rock.posY);
        }
    }

    return rock;
}