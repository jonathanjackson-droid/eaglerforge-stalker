/*
 * EaglerForge: The Zone
 * Version 0.1.0
 *
 * First survival kit:
 * - "ABSOLUTELY DO NOT READ THIS" written book
 * - Wooden pickaxe
 */

ModAPI.require("player");

var gaveStartingItems = false;

ModAPI.addEventListener("update", function () {
    if (gaveStartingItems) {
        return;
    }

    if (!ModAPI.player) {
        return;
    }

    try {
        var ItemStack = ModAPI.reflect.getClassByName("ItemStack");
        var NBTTagCompound = ModAPI.reflect.getClassByName("NBTTagCompound");
        var NBTTagList = ModAPI.reflect.getClassByName("NBTTagList");
        var NBTTagString = ModAPI.reflect.getClassByName("NBTTagString");

        /*
         * Create the written book.
         */
        var bookConstructor = ItemStack.getConstructorByArgs("itemIn", "amount");
        var book = bookConstructor(
            ModAPI.items["written_book"],
            1
        );

        /*
         * Create the book's NBT.
         */
        var tag = new NBTTagCompound.constructors[0]();

        tag.setString(
            ModAPI.util.str("title"),
            ModAPI.util.str("ABSOLUTELY DO NOT READ THIS")
        );

        tag.setString(
            ModAPI.util.str("author"),
            ModAPI.util.str("Unknown")
        );

        /*
         * Book pages.
         *
         * Minecraft 1.8 written books store each page
         * as a JSON text component.
         */
        var pages = new NBTTagList.constructors[0]();

        pages.appendTag(
            new NBTTagString.constructors[0](
                ModAPI.util.str(
                    "\"Ex. Day 88 of being alone:\\n\\nA few weeks ago we were having fun. We built a base, survived a few nights, and began to gather resources to prepare for the Nether.\\n\\nThat is... until the monster came. My friend and I got separated from each other, and I'm still looking for him.\\n\\nI'll leave other books around in places where stuff happened. You know, just as a relic. Fuck... why am I talking to myself?\""
                )
            )
        );

        tag.setTag(
            ModAPI.util.str("pages"),
            pages
        );

        book.setTagCompound(tag);

        /*
         * Add the book to the player's inventory.
         */
        ModAPI.player.inventory.addItemStackToInventory(book);

        /*
         * Create a wooden pickaxe.
         */
        var pickaxe = bookConstructor(
            ModAPI.items["wooden_pickaxe"],
            1
        );

        ModAPI.player.inventory.addItemStackToInventory(pickaxe);

        gaveStartingItems = true;

        ModAPI.displayToChat({
            msg: "§a[STALKER] §fThe Zone has begun."
        });

    } catch (error) {
        console.error("[STALKER] Starting item error:", error);

        ModAPI.displayToChat({
            msg: "§c[STALKER] §fFailed to create starting items. Check console."
        });
    }
});
