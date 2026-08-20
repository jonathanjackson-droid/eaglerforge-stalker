ModAPI.require("player");

var givenBook = false;

ModAPI.addEventListener("update", function () {
    if (givenBook || !ModAPI.player) {
        return;
    }

    try {
        var ItemStack = ModAPI.reflect.getClassByName("ItemStack");
        var NBTTagCompound = ModAPI.reflect.getClassByName("NBTTagCompound");
        var NBTTagList = ModAPI.reflect.getClassByName("NBTTagList");
        var NBTTagString = ModAPI.reflect.getClassByName("NBTTagString");

        // Create a written book
        var makeItemStack = ItemStack.getConstructorByArgs("itemIn", "amount");
        var book = makeItemStack(
            ModAPI.items["written_book"].getRef(),
            1
        );

        // Create the book's NBT
        var tag = new NBTTagCompound.constructors[0]();

        tag.setString(
            ModAPI.util.str("title"),
            ModAPI.util.str("ABSOLUTELY DO NOT READ THIS")
        );

        tag.setString(
            ModAPI.util.str("author"),
            ModAPI.util.str("Unknown")
        );

        // Create pages
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

        // Give the book to the player
        ModAPI.player.inventory.addItemStackToInventory(book);

        givenBook = true;

        ModAPI.displayToChat(
            "§6[STALKER] §fYou found something."
        );

    } catch (error) {
        console.error("[STALKER] Book error:", error);

        ModAPI.displayToChat(
            "§c[STALKER] Book creation failed. Check the browser console."
        );

        givenBook = true;
    }
});
