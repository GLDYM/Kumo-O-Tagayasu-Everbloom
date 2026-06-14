import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $ICachableGeneratorGraph } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo";
import { $ConfigTypes$ConfigType } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/config";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $AbstractCraftActionContext$Result } from "@package/studio/fantasyit/maid_storage_manager/craft/context";
import { $ActionOptionSet, $ActionOption, $ActionOption$ValuePredicatorOrGetter, $ActionOption_, $ActionOption$BiConverter } from "@package/studio/fantasyit/maid_storage_manager/craft/action";
import { $Consumer_, $Predicate_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Target } from "@package/studio/fantasyit/maid_storage_manager/storage";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/helper" {
    export class $CraftGuideOperator extends $TargetOperator {
        /**
         * @deprecated
         */
        makeCraftGuideStepData(arg0: $Target, arg1: $ItemStack_[], arg2: $ItemStack_[], arg3: $ResourceLocation_, arg4: boolean): $CraftGuideStepData;
        makeActionOptionSet<T>(arg0: $ActionOption_<T>, arg1: T): $ActionOptionSet;
        makeCraftGuideDataFull(arg0: $CraftGuideStepData[], arg1: $ResourceLocation_, arg2: boolean, arg3: boolean): $CraftGuideData;
        simpleCommonItemHandlerIO(arg0: $BlockPos_, arg1: $ItemStack_[], arg2: $ItemStack_[]): $CraftGuideData;
        makeActionOptionSetWithValue<T>(arg0: $ActionOption_<T>, arg1: T, arg2: string): $ActionOptionSet;
        /**
         * @deprecated
         */
        makeCraftGuideStepDataWithExtra(arg0: $Target, arg1: $ItemStack_[], arg2: $ItemStack_[], arg3: $ResourceLocation_, arg4: boolean, arg5: $CompoundTag_): $CraftGuideStepData;
        makeActionOptionSetOptional(arg0: boolean): $ActionOptionSet;
        makeCraftGuideStepDataWithOptions(arg0: $Target, arg1: $ItemStack_[], arg2: $ItemStack_[], arg3: $ResourceLocation_, arg4: $ActionOptionSet): $CraftGuideStepData;
        mapEach3Items<T>(arg0: $ItemStack_[], arg1: $Function_<$ItemStack[], T>): $List<T>;
        forEach3Items(arg0: $ItemStack_[], arg1: $Consumer_<$ItemStack[]>): void;
        makeCraftGuideData(arg0: $CraftGuideStepData[], arg1: $ResourceLocation_): $CraftGuideData;
        static INSTANCE: $CraftGuideOperator;
        constructor();
    }
    export class $CacheOperator {
        addRecipe(arg0: $ResourceLocation_, arg1: $Ingredient_[]): void;
        addRecipeObj(arg0: $RecipeHolder_<$Recipe<never>>): void;
        static INSTANCE: $CacheOperator;
        constructor();
    }
    export class $GeneratorConfigOperator {
        doubleConfig(arg0: string, arg1: number, arg2: $Component_): $ConfigTypes$ConfigType<number>;
        stringConfig(arg0: string, arg1: string, arg2: $Component_): $ConfigTypes$ConfigType<string>;
        integerConfig(arg0: string, arg1: number, arg2: $Component_): $ConfigTypes$ConfigType<number>;
        booleanConfig(arg0: string, arg1: boolean, arg2: $Component_): $ConfigTypes$ConfigType<boolean>;
        static INSTANCE: $GeneratorConfigOperator;
        constructor();
    }
    export class $ActionOptionOperator {
        makeActionOption<T>(arg0: $ResourceLocation_, arg1: $Component_[], arg2: $ResourceLocation_[], arg3: string, arg4: $ActionOption$BiConverter<number, T>, arg5: $ActionOption$ValuePredicatorOrGetter<T>): $ActionOption<T>;
        makeValueGetter<T>(arg0: $Function_<T, $Component>): $ActionOption$ValuePredicatorOrGetter<T>;
        makeBiConverter<T>(arg0: $Function_<number, T>, arg1: $Function_<T, number>): $ActionOption$BiConverter<number, T>;
        makeActionOptionSet<T>(arg0: $ActionOption_<T>, arg1: T): $ActionOptionSet;
        makeValuePredicator<T>(arg0: $Predicate_<string>): $ActionOption$ValuePredicatorOrGetter<T>;
        makeActionOptionSetWithValue<T>(arg0: $ActionOption_<T>, arg1: T, arg2: string): $ActionOptionSet;
        makeActionOptionSetOptional(arg0: boolean): $ActionOptionSet;
        static INSTANCE: $ActionOptionOperator;
        constructor();
    }
    export class $TargetOperator {
        makeTarget(arg0: $ResourceLocation_, arg1: $BlockPos_, arg2: $Direction_): $Target;
        makeTargetNoSide(arg0: $ResourceLocation_, arg1: $BlockPos_): $Target;
        makeTargetVirtual(arg0: $ResourceLocation_, arg1: $BlockPos_, arg2: $Direction_): $Target;
        makeTargetVirtualNoSide(arg0: $BlockPos_): $Target;
        static INSTANCE: $TargetOperator;
        constructor();
    }
    export class $CraftContextOperator {
        getFail(): $AbstractCraftActionContext$Result;
        getTickCount(): number;
        moveIfCollide(): boolean;
        moveIfNotArrive(): boolean;
        getSuccess(): $AbstractCraftActionContext$Result;
        getContinue(): $AbstractCraftActionContext$Result;
        getNotDone(): $AbstractCraftActionContext$Result;
        notStopped(): boolean;
        constructor(arg0: $EntityMaid, arg1: $CraftGuideStepData);
        get fail(): $AbstractCraftActionContext$Result;
        get tickCount(): number;
        get success(): $AbstractCraftActionContext$Result;
        get continue(): $AbstractCraftActionContext$Result;
        get notDone(): $AbstractCraftActionContext$Result;
    }
    export class $GraphOperator {
        blockType(arg0: $ResourceLocation_): void;
        addRecipeObj(arg0: $RecipeHolder_<$Recipe<never>>, arg1: $BiFunction_<$ItemStack[], $CraftGuideOperator, $CraftGuideData>): void;
        blockRecipe(arg0: $ResourceLocation_): void;
        removeBlockedType(arg0: $ResourceLocation_): void;
        removeBlockedRecipe(arg0: $ResourceLocation_): void;
        addSpecialCraftNode(arg0: $Consumer_<$ICachableGeneratorGraph>, arg1: $Consumer_<$ICachableGeneratorGraph>, arg2: string): void;
        addRecipeMultiOutput(arg0: $ResourceLocation_, arg1: $Ingredient_[], arg2: number[], arg3: $ItemStack_[], arg4: $BiFunction_<$ItemStack[], $CraftGuideOperator, $CraftGuideData>): void;
        addRecipeSingleOutput(arg0: $ResourceLocation_, arg1: $Ingredient_[], arg2: number[], arg3: $ItemStack_, arg4: $BiFunction_<$ItemStack[], $CraftGuideOperator, $CraftGuideData>): void;
        graph: $ICachableGeneratorGraph;
        constructor(arg0: $ICachableGeneratorGraph);
    }
}
