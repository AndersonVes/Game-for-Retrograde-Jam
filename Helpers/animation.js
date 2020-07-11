function gameOverAnimation() {

    ctx.font = "20px 'Press Start 2P'";


    ctx.fillStyle = '#5252527a';
    ctx.fillText("GAME OVER", 40, 90);

    setTimeout(function() {
        ctx.fillStyle = '#5252527b';
        ctx.fillText("GAME OVER", 40, 90);
    }, 500)


    setTimeout(function() {
        ctx.fillStyle = '#5252527c';
        ctx.fillText("GAME OVER", 40, 90);
    }, 1000)


    setTimeout(function() {
        ctx.fillStyle = '#5252527d';
        ctx.fillText("GAME OVER", 40, 90);
    }, 1500)


    setTimeout(function() {
        ctx.fillStyle = '#5252527e';
        ctx.fillText("GAME OVER", 40, 90);
    }, 1800)


    setTimeout(function() {
        ctx.fillStyle = '#525252d9';
        ctx.fillText("GAME OVER", 40, 90);
    }, 2000)


    setTimeout(function() {
        ctx.fillStyle = '#525252f7';
        ctx.fillText("GAME OVER", 40, 90);
    }, 2200)


    setTimeout(function() {
        ctx.fillStyle = '#525252';
        ctx.fillText("GAME OVER", 40, 90);
    }, 2500)

    setTimeout(function() {
        ctx.font = "8px 'Press Start 2P'";
        ctx.fillStyle = '#ffffff';
        ctx.fillText("PRESS START (F5)", 60, 120);
    }, 3000)

}


function youWin() {

    ctx.font = "20px 'Press Start 2P'";


    ctx.fillStyle = '#ffffff7a';
    ctx.fillText("YOU WIN", 60, 90);

    setTimeout(function() {
        ctx.fillStyle = '#ffffff7b';
        ctx.fillText("YOU WIN", 60, 90);
    }, 500)


    setTimeout(function() {
        ctx.fillStyle = '#ffffff7c';
        ctx.fillText("YOU WIN", 60, 90);
    }, 1000)


    setTimeout(function() {
        ctx.fillStyle = '#ffffff7d';
        ctx.fillText("YOU WIN", 60, 90);
    }, 1500)


    setTimeout(function() {
        ctx.fillStyle = '#ffffff7e';
        ctx.fillText("YOU WIN", 60, 90);
    }, 1800)


    setTimeout(function() {
        ctx.fillStyle = '#ffffffd9';
        ctx.fillText("YOU WIN", 60, 90);
    }, 2000)


    setTimeout(function() {
        ctx.fillStyle = '#fffffff7';
        ctx.fillText("YOU WIN", 60, 90);
    }, 2200)


    setTimeout(function() {
        ctx.fillStyle = '#ffffff';
        ctx.fillText("YOU WIN", 60, 90);
    }, 2500)


    setTimeout(function() {
        ctx.font = "8px 'Press Start 2P'";
        ctx.fillStyle = '#ffffff';
        ctx.fillText("THANK YOU FOR PLAYING", 45, 120);
        ctx.fillText("PRESS START (F5)", 60, 140);
    }, 3000)



}