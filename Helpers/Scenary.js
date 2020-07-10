function createScenary() {
    /* Moutains */
    mountain1 = CreateNewScenaryObject(0, moutainYpos, 107, 30, ["sprites/mountain1.png", "sprites/mountain2.png"], canvasWidth, canvasHeight);
    mountain2 = CreateNewScenaryObject(107, moutainYpos, 106, 30, ["sprites/mountain1.png", "sprites/mountain2.png"], canvasWidth, canvasHeight);
    mountain3 = CreateNewScenaryObject(107 * 2, moutainYpos, 107, 30, ["sprites/mountain1.png", "sprites/mountain2.png"], canvasWidth, canvasHeight);
    mountain4 = CreateNewScenaryObject(107 * 3, moutainYpos, 107, 30, ["sprites/mountain1.png", "sprites/mountain2.png"], canvasWidth, canvasHeight);

    /* Clouds */
    cloud1 = CreateNewScenaryObject(400, 150, 107, 30, ["sprites/cloud1.png", "sprites/cloud2.png"], canvasWidth, canvasHeight);
    cloud3 = CreateNewScenaryObject(150, 120, 107, 30, ["sprites/cloud1.png", "sprites/cloud2.png"], canvasWidth, canvasHeight);
    cloud4 = CreateNewScenaryObject(200, 140, 107, 30, ["sprites/cloud1.png", "sprites/cloud2.png"], canvasWidth, canvasHeight);
    cloud5 = CreateNewScenaryObject(350, 95, 107, 30, ["sprites/cloud1.png", "sprites/cloud2.png"], canvasWidth, canvasHeight);
    cloud2 = CreateNewScenaryObject(50, 110, 107, 30, ["sprites/cloud1.png", "sprites/cloud2.png"], canvasWidth, canvasHeight);

    /* Grasses */
    grass1 = CreateNewScenaryObject(100, 38, 12, 14, ["sprites/grama.png"], canvasWidth, canvasHeight);
    grass2 = CreateNewScenaryObject(40, 36, 12, 14, ["sprites/grama.png"], canvasWidth, canvasHeight);
    grass3 = CreateNewScenaryObject(63, 37, 12, 14, ["sprites/grama.png"], canvasWidth, canvasHeight);
    grass4 = CreateNewScenaryObject(150, 39, 12, 14, ["sprites/grama.png"], canvasWidth, canvasHeight);
    grass5 = CreateNewScenaryObject(82, 40, 12, 14, ["sprites/grama.png"], canvasWidth, canvasHeight);

    /* Trees */
    tree1 = CreateNewScenaryObject(82, 74, 29 + 30, 51, ["sprites/tree1.png"], canvasWidth, canvasHeight);
    tree2 = CreateNewScenaryObject(182, 70, 29 + 30 + 100, 51, ["sprites/tree1.png"], canvasWidth, canvasHeight);

}

function destroyScenary() {
    /* Moutains */
    mountain1 = null;
    mountain2 = null;
    mountain3 = null;
    mountain4 = null;

    /* Clouds */
    cloud1 = null;
    cloud3 = null;
    cloud4 = null;
    cloud5 = null;
    cloud2 = null;

    /* Grasses */
    grass1 = null;
    grass2 = null;
    grass3 = null;
    grass4 = null;
    grass5 = null;

    /* Trees */
    tree1 = null;
    tree2 = null;

}