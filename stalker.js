ModAPI.require("player");

var tested = false;

ModAPI.addEventListener("update", function () {
    if (tested) {
        return;
    }

    if (!ModAPI.player) {
        return;
    }

    tested = true;

    var player = ModAPI.player;

    console.log("[STALKER] Player found!");
    console.log("[STALKER] Player object:", player);
});
