/*
 * EaglerForge STALKER
 * Version: 0.1.0
 *
 * STALKER-inspired survival systems for EaglerForge.
 *
 * Single-file JavaScript mod.
 */

(function () {
    "use strict";

    // Make sure EaglerForge is available.
    if (typeof ModAPI === "undefined") {
        console.error("[STALKER] EaglerForge ModAPI was not found.");
        return;
    }

    console.log("[STALKER] Loading...");

    /*
     * Basic mod state.
     *
     * We'll expand this later with:
     * - radiation
     * - anomalies
     * - artifacts
     * - detector
     * - Zone events
     * - HUD
     */
    const STALKER = {
        name: "EaglerForge STALKER",
        version: "0.1.0",
        enabled: true
    };

    /*
     * Test that the mod is actually running.
     */
    ModAPI.addEventListener("update", function () {
        // Intentionally empty for now.
    });

    console.log(
        "[STALKER] " +
        STALKER.name +
        " v" +
        STALKER.version +
        " loaded successfully."
    );
})();
