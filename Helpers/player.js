function rewardPlayer(waves) {
    switch (waves) {
        case 3:
            livesCurrent = livesTotal;
            dino.damageTime = .18;
            // Tocar um audio
            firstMinuteLoaded = true;
            break;

        default:
            break;
    }
}