import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container" {
    export class $StockpotInput extends $SimpleInput {
        getSoupBase(): $ResourceLocation;
        constructor(arg0: $List_<$ItemStack_>, arg1: $ResourceLocation_);
        get soupBase(): $ResourceLocation;
    }
    export class $SimpleInput implements $RecipeInput {
        size(): number;
        getItem(arg0: number): $ItemStack;
        getInputs(): $List<$ItemStack>;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $List_<$ItemStack_>);
        get inputs(): $List<$ItemStack>;
        get empty(): boolean;
    }
}
