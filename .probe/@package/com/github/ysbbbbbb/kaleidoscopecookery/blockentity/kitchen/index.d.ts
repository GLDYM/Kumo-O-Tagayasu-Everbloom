import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $RecipeItem$RecipeRecord, $RecipeItem$RecipeRecord_ } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/item";
import { $StockpotArmAutomation } from "@package/com/bmt/kaleidoscope_compat/compat/create";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $MillstoneBlockEntityAccessor, $StockpotBlockEntityAccessor } from "@package/com/bmt/kaleidoscope_compat/mixins/kaleidoscope_cookery/accessor";
import { $List_ } from "@package/java/util";
import { $BaseBlockEntity } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity";
import { $ISoupBase } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/recipe/soupbase";
import { $IStockpot, $IMillstone } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/blockentity";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $MillstoneRecipe, $StockpotVisuals } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/recipe";
import { $StockpotInput, $SimpleInput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity/kitchen" {
    export class $MillstoneBlockEntity extends $BaseBlockEntity implements $IMillstone, $MillstoneBlockEntityAccessor {
        tick(arg0: $Level_): void;
        getRotation(arg0: $Level_, arg1: number): number;
        onPutItem(arg0: $Level_, arg1: $ItemStack_): boolean;
        sendActionBarMessage(arg0: $LivingEntity, arg1: string, ...arg2: $Object[]): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getOutputs(): $IItemHandler;
        isOutputEmpty(): boolean;
        hasEntity(): boolean;
        canBindEntity(arg0: $Mob): boolean;
        bindEntity(arg0: $Mob): void;
        matchRecipe(arg0: $SimpleInput, arg1: $Level_): ($RecipeHolder<$MillstoneRecipe>) | undefined;
        getCacheRot(): number;
        getProgressPercent(): number;
        resetWhenTakeout(): void;
        getLiftAngle(): number;
        setCacheRot(arg0: number): void;
        saddleEntityIsControlling(arg0: $Mob): boolean;
        setInput(arg0: $ItemStack_): void;
        getInput(): $ItemStack;
        getProgress(): number;
        setProgress(arg0: number): void;
        getRotSpeedTick(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static MAX_INPUT_COUNT: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get outputs(): $IItemHandler;
        get outputEmpty(): boolean;
        get progressPercent(): number;
        get liftAngle(): number;
        get rotSpeedTick(): number;
    }
    export class $StockpotBlockEntity extends $BaseBlockEntity implements $IStockpot, $StockpotArmAutomation, $StockpotBlockEntityAccessor {
        isEmpty(): boolean;
        tick(arg0: $Level_): void;
        getResult(): $ItemStack;
        getInput(): $StockpotInput;
        clientTick(): void;
        getStatus(): number;
        getInputs(): $NonNullList<$ItemStack>;
        getSoupBase(): $ISoupBase;
        getTakeoutCount(): number;
        addSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        addIngredient(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        hasHeatSource(arg0: $Level_): boolean;
        takeOutProduct(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        hasLid(): boolean;
        onLitClick(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        setLidItem(arg0: $ItemStack_): void;
        getLidItem(): $ItemStack;
        setRecipe(arg0: $Level_): void;
        setStatus(arg0: number): void;
        removeIngredient(arg0: $Level_, arg1: $LivingEntity): boolean;
        kaleidoscopeCompat$setStoredRecipe(arg0: $RecipeItem$RecipeRecord_): void;
        kaleidoscopeCompat$getStoredRecipe(): $RecipeItem$RecipeRecord;
        addAllIngredients(arg0: $List_<$ItemStack_>, arg1: $LivingEntity): void;
        removeSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        getSoupBaseId(): $ResourceLocation;
        kaleidoscopeCompat$getSoupBaseId(): $ResourceLocation;
        kaleidoscopeCompat$setTakeoutCount(arg0: number): void;
        kaleidoscopeCompat$setRecipeId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$setSoupBaseId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$getRecipeId(): $ResourceLocation;
        kaleidoscopeCompat$setResult(arg0: $ItemStack_): void;
        kaleidoscopeCompat$setCurrentTick(arg0: number): void;
        static MAX_TAKEOUT_COUNT: number;
        visuals: $StockpotVisuals;
        level: $Level;
        renderEntity: $Entity;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get empty(): boolean;
        get result(): $ItemStack;
        get input(): $StockpotInput;
        get inputs(): $NonNullList<$ItemStack>;
        get soupBase(): $ISoupBase;
        get takeoutCount(): number;
        set recipe(value: $Level_);
        get soupBaseId(): $ResourceLocation;
    }
}
