import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $StockpotRecipe, $MillstoneRecipe_, $MillstoneRecipe, $StockpotRecipe_ } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/recipe";
import { $StockpotInput, $SimpleInput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StockpotBlockEntity, $MillstoneBlockEntity } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity/kitchen";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/event" {
    export class $RecipeItemEvent extends $Event {
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_);
        get stack(): $ItemStack;
    }
    export class $MillstoneMatchRecipeEvent extends $Event {
        getLevel(): $Level;
        getInput(): $SimpleInput;
        getOutput(): $RecipeHolder<$MillstoneRecipe>;
        setOutput(arg0: $RecipeHolder_<$MillstoneRecipe_>): void;
        getMillstone(): $MillstoneBlockEntity;
        constructor(arg0: $Level_, arg1: $MillstoneBlockEntity, arg2: $SimpleInput);
        get level(): $Level;
        get input(): $SimpleInput;
        get millstone(): $MillstoneBlockEntity;
    }
    export class $StockpotMatchRecipeEvent extends $Event {
        getLevel(): $Level;
        getInput(): $StockpotInput;
        getOutput(): $RecipeHolder<$StockpotRecipe>;
        setOutput(arg0: $RecipeHolder_<$StockpotRecipe_>): void;
        getStockpot(): $StockpotBlockEntity;
        constructor(arg0: $Level_, arg1: $StockpotBlockEntity, arg2: $StockpotInput);
        get level(): $Level;
        get input(): $StockpotInput;
        get stockpot(): $StockpotBlockEntity;
    }
    export class $StockpotMatchRecipeEvent$Pre extends $StockpotMatchRecipeEvent {
        constructor(arg0: $Level_, arg1: $StockpotBlockEntity, arg2: $StockpotInput);
    }
    export class $StockpotMatchRecipeEvent$Post extends $StockpotMatchRecipeEvent {
        getRawOutput(): $ResourceLocation;
        constructor(arg0: $Level_, arg1: $StockpotBlockEntity, arg2: $StockpotInput, arg3: $ResourceLocation_);
        get rawOutput(): $ResourceLocation;
    }
    export class $RecipeItemEvent$DeductItem extends $RecipeItemEvent {
        deduct(arg0: number): void;
        getNeedItem(): $Item;
        getNeedCount(): number;
        constructor(arg0: $ItemStack_, arg1: $Item_, arg2: number[]);
        get needItem(): $Item;
        get needCount(): number;
    }
    export class $SickleHarvestEvent extends $PlayerEvent implements $ICancellableEvent {
        getHarvestState(): $BlockState;
        getHarvestPos(): $BlockPos;
        setCostDurability(arg0: boolean): void;
        isCostDurability(): boolean;
        getSickle(): $ItemStack;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $BlockPos_, arg3: $BlockState_);
        get harvestState(): $BlockState;
        get harvestPos(): $BlockPos;
        get sickle(): $ItemStack;
    }
    export class $MillstoneMatchRecipeEvent$Pre extends $MillstoneMatchRecipeEvent {
        constructor(arg0: $Level_, arg1: $MillstoneBlockEntity, arg2: $SimpleInput);
    }
    export class $RecipeItemEvent$CheckItem extends $RecipeItemEvent {
        addItem(arg0: $Item_, arg1: number): void;
        constructor(arg0: $ItemStack_, arg1: $Reference2IntMap<$Item_>);
    }
    export class $MillstoneMatchRecipeEvent$Post extends $MillstoneMatchRecipeEvent {
        getRawOutput(): $RecipeHolder<$MillstoneRecipe>;
        constructor(arg0: $Level_, arg1: $MillstoneBlockEntity, arg2: $SimpleInput, arg3: $RecipeHolder_<$MillstoneRecipe_>);
        get rawOutput(): $RecipeHolder<$MillstoneRecipe>;
    }
}
