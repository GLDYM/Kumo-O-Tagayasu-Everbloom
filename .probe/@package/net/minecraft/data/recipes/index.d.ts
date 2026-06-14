import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeSerializer_, $Recipe, $AbstractCookingRecipe$Factory_, $ShapedRecipePattern, $SingleItemRecipe$Factory_, $CraftingBookCategory, $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List_, $Map } from "@package/java/util";
import { $ItemPredicate$Builder, $InventoryChangeTrigger$TriggerInstance, $ItemPredicate_, $EnterBlockTrigger$TriggerInstance, $MinMaxBounds$Ints_ } from "@package/net/minecraft/advancements/critereon";
import { $BlockFamily, $DataProvider, $PackOutput$PathProvider, $PackOutput, $CachedOutput_, $BlockFamily$Variant_ } from "@package/net/minecraft/data";
import { $AdvancementHolder_, $Advancement$Builder, $Criterion_, $Criterion } from "@package/net/minecraft/advancements";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $IRecipeOutputExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
export * as packs from "@package/net/minecraft/data/recipes/packs";

declare module "@package/net/minecraft/data/recipes" {
    export class $SmithingTrimRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        static smithingTrim(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_): $SmithingTrimRecipeBuilder;
        unlocks(arg0: string, arg1: $Criterion_<never>): $SmithingTrimRecipeBuilder;
        constructor(arg0: $RecipeCategory_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $Ingredient_);
    }
    export class $SpecialRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        static special(arg0: $Function_<$CraftingBookCategory, $Recipe<never>>): $SpecialRecipeBuilder;
        constructor(arg0: $Function_<$CraftingBookCategory, $Recipe<never>>);
    }
    export class $RecipeProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_, arg1: $HolderLookup$Provider): $CompletableFuture<never>;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        static has(arg0: $TagKey_<$Item>): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(arg0: $MinMaxBounds$Ints_, arg1: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static has(arg0: $ItemLike_): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static wall(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static carpet(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static banner(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static candle(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static slab(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static nineBlockStorageRecipesRecipesWithCustomUnpacking(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string): void;
        static grate(arg0: $RecipeOutput, arg1: $Block_, arg2: $Block_): void;
        buildAdvancement(arg0: $CachedOutput_, arg1: $HolderLookup$Provider, arg2: $AdvancementHolder_): $CompletableFuture<never>;
        static netheriteSmithing(arg0: $RecipeOutput, arg1: $Item_, arg2: $RecipeCategory_, arg3: $Item_): void;
        static fenceBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static chiseledBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $ShapedRecipeBuilder;
        static oreBlasting(arg0: $RecipeOutput, arg1: $List_<$ItemLike_>, arg2: $RecipeCategory_, arg3: $ItemLike_, arg4: number, arg5: number, arg6: string): void;
        static planksFromLog(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>, arg3: number): void;
        static polishedBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static doorBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static hangingSign(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static colorBlockWithDye(arg0: $RecipeOutput, arg1: $List_<$Item_>, arg2: $List_<$Item_>, arg3: string): void;
        static buttonBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static planksFromLogs(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>, arg3: number): void;
        static pressurePlate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static stairBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static threeByThreePacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_, arg4: string): void;
        static threeByThreePacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static trapdoorBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static oreSmelting(arg0: $RecipeOutput, arg1: $List_<$ItemLike_>, arg2: $RecipeCategory_, arg3: $ItemLike_, arg4: number, arg5: number, arg6: string): void;
        static getItemName(arg0: $ItemLike_): string;
        static mosaicBuilder(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static getBaseBlock(arg0: $BlockFamily, arg1: $BlockFamily$Variant_): $Block;
        static concretePowder(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        buildRecipes(arg0: $RecipeOutput): void;
        static wallBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static signBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static generateRecipes(arg0: $RecipeOutput, arg1: $BlockFamily, arg2: $FeatureFlagSet): void;
        static inventoryTrigger(...arg0: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static inventoryTrigger(...arg0: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static fenceGateBuilder(arg0: $ItemLike_, arg1: $Ingredient_): $RecipeBuilder;
        static woodFromLogs(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static slabBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static trimSmithing(arg0: $RecipeOutput, arg1: $Item_, arg2: $ResourceLocation_): void;
        static twoByTwoPacker(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static cookRecipes<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: string, arg2: $RecipeSerializer_<T>, arg3: $AbstractCookingRecipe$Factory_<T>, arg4: number): void;
        static coloredTerracottaFromTerracottaAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static nineBlockStorageRecipesWithCustomPacking(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string): void;
        static stainedGlassPaneFromGlassPaneAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static simpleCookingRecipe<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: string, arg2: $RecipeSerializer_<T>, arg3: $AbstractCookingRecipe$Factory_<T>, arg4: number, arg5: $ItemLike_, arg6: $ItemLike_, arg7: number): void;
        static nineBlockStorageRecipes(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_): void;
        static nineBlockStorageRecipes(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $RecipeCategory_, arg4: $ItemLike_, arg5: string, arg6: string, arg7: string, arg8: string): void;
        static oneToOneConversionRecipe(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_, arg3: string, arg4: number): void;
        static oneToOneConversionRecipe(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_, arg3: string): void;
        static stonecutterResultFromBase(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_, arg4: number): void;
        static stonecutterResultFromBase(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static smeltingResultFromBase(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static pressurePlateBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $RecipeBuilder;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $Ingredient_): void;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static copySmithingTemplate(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $TagKey_<$Item>): void;
        static getSimpleRecipeName(arg0: $ItemLike_): string;
        static bedFromPlanksAndWool(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static getConversionRecipeName(arg0: $ItemLike_, arg1: $ItemLike_): string;
        static getSmeltingRecipeName(arg0: $ItemLike_): string;
        static getBlastingRecipeName(arg0: $ItemLike_): string;
        static stainedGlassPaneFromStainedGlass(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static stainedGlassFromGlassAndDye(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        generateForEnabledBlockFamilies(arg0: $RecipeOutput, arg1: $FeatureFlagSet): void;
        static woodenBoat(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static chestBoat(arg0: $RecipeOutput, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static polished(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static insideOf(arg0: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        static copperBulb(arg0: $RecipeOutput, arg1: $Block_, arg2: $Block_): void;
        static cutBuilder(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: $Ingredient_): $ShapedRecipeBuilder;
        static cut(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static chiseled(arg0: $RecipeOutput, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static waxRecipes(arg0: $RecipeOutput, arg1: $FeatureFlagSet): void;
        static getHasName(arg0: $ItemLike_): string;
        static oreCooking<T extends $AbstractCookingRecipe>(arg0: $RecipeOutput, arg1: $RecipeSerializer_<T>, arg2: $AbstractCookingRecipe$Factory_<T>, arg3: $List_<$ItemLike_>, arg4: $RecipeCategory_, arg5: $ItemLike_, arg6: number, arg7: number, arg8: string, arg9: string): void;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $SmithingTransformRecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        ensureValid(arg0: $ResourceLocation_): void;
        static smithing(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_, arg4: $Item_): $SmithingTransformRecipeBuilder;
        unlocks(arg0: string, arg1: $Criterion_<never>): $SmithingTransformRecipeBuilder;
        template: $Ingredient;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $Ingredient_, arg3: $RecipeCategory_, arg4: $Item_);
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        group(arg0: string): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        requires(arg0: $Ingredient_): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_, arg1: number): $ShapelessRecipeBuilder;
        requires(arg0: $Ingredient_, arg1: number): $ShapelessRecipeBuilder;
        requires(arg0: $ItemLike_): $ShapelessRecipeBuilder;
        requires(arg0: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        ensureValid(arg0: $ResourceLocation_): void;
        getResult(): $Item;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapelessRecipeBuilder;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapelessRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        ingredients: $NonNullList<$Ingredient>;
        category: $RecipeCategory;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        group(arg0: string): $ShapedRecipeBuilder;
        pattern(arg0: string): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        ensureValid(arg0: $ResourceLocation_): $ShapedRecipePattern;
        getResult(): $Item;
        define(arg0: string, arg1: $TagKey_<$Item>): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $Ingredient_): $ShapedRecipeBuilder;
        define(arg0: string, arg1: $ItemLike_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number): $ShapedRecipeBuilder;
        showNotification(arg0: boolean): $ShapedRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        category: $RecipeCategory;
        constructor(arg0: $RecipeCategory_, arg1: $ItemLike_, arg2: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $RecipeBuilder {
        static getDefaultRecipeId(arg0: $ItemLike_): $ResourceLocation;
        static determineBookCategory(arg0: $RecipeCategory_): $CraftingBookCategory;
        static ROOT_RECIPE_ADVANCEMENT: $ResourceLocation;
    }
    export interface $RecipeBuilder {
        group(arg0: string): $RecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        get result(): $Item;
    }
    export class $RecipeCategory extends $Enum<$RecipeCategory> {
        static values(): $RecipeCategory[];
        static valueOf(arg0: string): $RecipeCategory;
        getFolderName(): string;
        static BUILDING_BLOCKS: $RecipeCategory;
        static REDSTONE: $RecipeCategory;
        static TRANSPORTATION: $RecipeCategory;
        static COMBAT: $RecipeCategory;
        static MISC: $RecipeCategory;
        static BREWING: $RecipeCategory;
        static DECORATIONS: $RecipeCategory;
        static TOOLS: $RecipeCategory;
        static FOOD: $RecipeCategory;
        get folderName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategory}.
     */
    export type $RecipeCategory_ = "building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc";
    export class $RecipeOutput {
    }
    export interface $RecipeOutput extends $IRecipeOutputExtension {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_): void;
        advancement(): $Advancement$Builder;
    }
    export class $SingleItemRecipeBuilder implements $RecipeBuilder {
        group(arg0: string): $SingleItemRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        getResult(): $Item;
        static stonecutting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_): $SingleItemRecipeBuilder;
        static stonecutting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number): $SingleItemRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        constructor(arg0: $RecipeCategory_, arg1: $SingleItemRecipe$Factory_<never>, arg2: $Ingredient_, arg3: $ItemLike_, arg4: number);
        get result(): $Item;
    }
    export class $SimpleCookingRecipeBuilder implements $RecipeBuilder {
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        getResult(): $Item;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemLike_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        save(arg0: $RecipeOutput): void;
        save(arg0: $RecipeOutput, arg1: string): void;
        group(arg0: string): $RecipeBuilder;
        unlockedBy(arg0: string, arg1: $Criterion_<never>): $RecipeBuilder;
        get result(): $Item;
    }
}
