ModAPI.require("player");

ModAPI.addEventListener("update", function () {
    if (ModAPI.player) {
        ModAPI.displayToChat("§a[STALKER] Player API works!");
    }
});
