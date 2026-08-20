ModAPI.require("player");

var playerTested = false;

ModAPI.addEventListener("update", function () {
    if (playerTested) {
        return;
    }

    playerTested = true;

    if (ModAPI.player) {
        ModAPI.displayToChat("§a[STALKER] Player access works!");
    } else {
        ModAPI.displayToChat("§c[STALKER] Player access returned nothing.");
    }
});
