ModAPI.require("player");

var tested = false;

ModAPI.addEventListener("update", function () {
    if (tested) {
        return;
    }

    tested = true;

    if (ModAPI.player) {
        console.log("[STALKER] Player API detected!");
    } else {
        console.log("[STALKER] Player API unavailable.");
    }
});
