function CreateNewAnimation(frames, duration) {


    var obj = {};

    obj.frames = [];
    obj.frames.length = frames.length;

    if (obj.frames.length != duration.length) alert("Animation error: frames and duration are diferent size");

    for (var i = 0; i < frames.length; i++) {
        obj.frames[i] = new Image();
        obj.frames[i].src = frames[i];
    }

    obj.duration = [];
    obj.duration.length = duration.length;

    for (var i = 0; i < duration.length; i++) {
        obj.duration[i] = new Image();
        obj.duration[i] = duration[i];
    }

    obj.time = 0;
    obj.imgIndex = 0;


    //Animation duration -> OK
    obj.AnimationDuration = 0;
    for (var i = 0; i < duration.length; i++) {
        obj.AnimationDuration += duration[i];
    }


    obj.getAnimationFrame = function(deltaTime) {

        obj.time += deltaTime;

        if (obj.time > obj.duration[obj.imgIndex]) {

            obj.imgIndex++;

            if (obj.imgIndex >= obj.duration.length) {
                obj.imgIndex = 0;
            }

            obj.time = 0;

        }

        return obj.frames[obj.imgIndex];

    }


    return obj;
}