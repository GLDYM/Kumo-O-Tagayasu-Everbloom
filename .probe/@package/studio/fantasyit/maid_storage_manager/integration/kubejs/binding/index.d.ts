import { $IKJSCraftContext } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/context";
import { $IKJSAutoCraftGuideGenerator, $IKJSAutoCraftGuideGenerator$Full } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/generator";
import { $KJSItemPair } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/item";
import { $Item_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IKJSCraftType, $IKJSCraftType$Full } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/type";
import { $CraftAction$CraftActionPathFindingTargetProvider, $ActionOption } from "@package/studio/fantasyit/maid_storage_manager/craft/action";
import { $ScheduleBehavior$Schedule } from "@package/studio/fantasyit/maid_storage_manager/maid/behavior";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MealMemory, $LogisticsMemory, $CraftMemory, $PlacingInventoryMemory, $ResortingMemory, $ViewedInventoryMemory, $RequestProgressMemory } from "@package/studio/fantasyit/maid_storage_manager/maid/memory";
import { $Target } from "@package/studio/fantasyit/maid_storage_manager/storage";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IKJSCraftContextSupplier_, $IKJSCraftContextSupplier } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/contextSupplier";
import { $TargetOperator, $CraftGuideOperator, $GeneratorConfigOperator, $ActionOptionOperator } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/helper";
import { $CommonAttackAction$USE_TYPE, $CommonUseAction$USE_TYPE } from "@package/studio/fantasyit/maid_storage_manager/craft/context/common";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/binding" {
    export class $KJSMSMCompacted {
        getMemories(): $KJSMSMMemories;
        getTypes(): $KJSMSMTypeCasting;
        getUtilities(): $KJSMSMUtilities;
        getEnums(): $KJSMSMBinding;
        constructor(arg0: $KJSMSMBinding, arg1: $KJSMSMUtilities, arg2: $KJSMSMTypeCasting, arg3: $KJSMSMMemories);
        get memories(): $KJSMSMMemories;
        get types(): $KJSMSMTypeCasting;
        get utilities(): $KJSMSMUtilities;
        get enums(): $KJSMSMBinding;
    }
    export class $KJSMSMTypeCasting {
        craftContext(arg0: $IKJSCraftContext): $IKJSCraftContext;
        craftTypeFull(arg0: $IKJSCraftType$Full): $IKJSCraftType$Full;
        itemList(arg0: $KJSItemPair[]): $KJSItemPair[];
        autoCraftGuideGenerator(arg0: $IKJSAutoCraftGuideGenerator): $IKJSAutoCraftGuideGenerator;
        craftType(arg0: $IKJSCraftType): $IKJSCraftType;
        itemPair(arg0: $KJSItemPair): $KJSItemPair;
        autoCraftGuideGeneratorFull(arg0: $IKJSAutoCraftGuideGenerator$Full): $IKJSAutoCraftGuideGenerator$Full;
        craftContextSupplier(arg0: $IKJSCraftContextSupplier_): $IKJSCraftContextSupplier;
        constructor();
    }
    export class $KJSMSMUtilities {
        itemStack(arg0: $Item_, arg1: number): $ItemStack;
        isValidTarget(arg0: $EntityMaid, arg1: $Target): boolean;
        getViewed(arg0: $EntityMaid): $ViewedInventoryMemory;
        makeVirtualRequest(arg0: $KJSItemPair[], arg1: string): $ItemStack;
        makeVirtualRequestToStorage(arg0: $KJSItemPair[], arg1: $Target, arg2: string): $ItemStack;
        getCurrentlyWorking(arg0: $EntityMaid): $ScheduleBehavior$Schedule;
        makeVirtualRequestToEntity(arg0: $KJSItemPair[], arg1: $Entity, arg2: string): $ItemStack;
        CRAFT_GUIDES: $CraftGuideOperator;
        ACTION_OPTIONS: $ActionOptionOperator;
        TARGETS: $TargetOperator;
        GENERATOR_CONFIGS: $GeneratorConfigOperator;
        constructor();
    }
    export class $KJSMSMMemories {
        setTarget(arg0: $EntityMaid, arg1: $Entity, arg2: number): void;
        setTarget(arg0: $EntityMaid, arg1: $BlockPos_, arg2: number): void;
        getRequestProgress(arg0: $EntityMaid): $RequestProgressMemory;
        getPlacingInv(arg0: $EntityMaid): $PlacingInventoryMemory;
        getResorting(arg0: $EntityMaid): $ResortingMemory;
        isCoWorking(arg0: $EntityMaid): boolean;
        isGoingCenter(arg0: $EntityMaid): boolean;
        getLogistics(arg0: $EntityMaid): $LogisticsMemory;
        setGoingCenter(arg0: $EntityMaid, arg1: boolean): void;
        getTargetPos(arg0: $EntityMaid): $BlockPos;
        getMeal(arg0: $EntityMaid): $MealMemory;
        clearTarget(arg0: $EntityMaid): void;
        getViewedInventory(arg0: $EntityMaid): $ViewedInventoryMemory;
        getCrafting(arg0: $EntityMaid): $CraftMemory;
        isWorking(arg0: $EntityMaid): boolean;
        getCurrentlyWorking(arg0: $EntityMaid): $ScheduleBehavior$Schedule;
        setReturnToScheduleAt(arg0: $EntityMaid, arg1: number): void;
        getReturnToScheduleAt(arg0: $EntityMaid): number;
        clearReturnWorkSchedule(arg0: $EntityMaid): void;
        goRestrictCenterAndWait(arg0: $EntityMaid, arg1: number): void;
        constructor();
    }
    export class $KJSMSMBinding {
        isAvailable(arg0: $ResourceLocation_): boolean;
        STORAGE_QIO: $ResourceLocation;
        PATH_FINDING_COMMON: $CraftAction$CraftActionPathFindingTargetProvider;
        CRAFT_ACTION_COMMON_SPLIT_ITEM: $ResourceLocation;
        CRAFT_ACTION_FURNACE: $ResourceLocation;
        CRAFT_ACTION_AE2: $ResourceLocation;
        CRAFT_TYPE_SMITHING: $ResourceLocation;
        CRAFT_ACTION_COMMON_ATTACK: $ResourceLocation;
        ACTION_OPTION_WAIT: $ActionOption<boolean>;
        PATH_FINDING_THROW_ITEM: $CraftAction$CraftActionPathFindingTargetProvider;
        CRAFT_TYPE_COMMON: $ResourceLocation;
        CRAFT_ACTION_COMMON_PICKUP: $ResourceLocation;
        CRAFT_ACTION_ANVIL: $ResourceLocation;
        CRAFT_TYPE_CRAFTING: $ResourceLocation;
        PATH_FINDING_TOUCH: $CraftAction$CraftActionPathFindingTargetProvider;
        CRAFT_ACTION_SMITHING: $ResourceLocation;
        STORAGE_RS: $ResourceLocation;
        CRAFT_ACTION_COMMON_PLACE_ITEM: $ResourceLocation;
        CRAFT_ACTION_CRAFTING: $ResourceLocation;
        UNAVAILABLE: $ResourceLocation;
        CRAFT_TYPE_STONECUTTING: $ResourceLocation;
        PATH_FINDING_BESIDE_OR_EXACTLY: $CraftAction$CraftActionPathFindingTargetProvider;
        CRAFT_ACTION_COMMON_TAKE_ITEM: $ResourceLocation;
        CRAFT_TYPE_BREWING: $ResourceLocation;
        CRAFT_ACTION_ALTAR: $ResourceLocation;
        CRAFT_TYPE_ANVIL: $ResourceLocation;
        CRAFT_ACTION_COMMON_THROW: $ResourceLocation;
        STORAGE_CREATE_CHAIN_CONVEYOR: $ResourceLocation;
        ACTION_MARK_NO_MARKS: number;
        CRAFT_TYPE_AE2: $ResourceLocation;
        STORAGE_CREATE_STOCK_TICKER: $ResourceLocation;
        CRAFT_TYPE_RS: $ResourceLocation;
        ACTION_OPTION_OPTIONAL: $ActionOption<boolean>;
        CRAFT_ACTION_RS: $ResourceLocation;
        ACTION_OPTION_USE_METHOD: $ActionOption<$CommonUseAction$USE_TYPE>;
        CRAFT_TYPE_ALTAR: $ResourceLocation;
        ACTION_MARK_NO_OCCUPATION: number;
        STORAGE_ITEM_HANDLER: $ResourceLocation;
        CRAFT_ACTION_STONECUTTING: $ResourceLocation;
        ACTION_OPTION_ATTACK_METHOD: $ActionOption<$CommonAttackAction$USE_TYPE>;
        ACTION_MARK_HAND_RELATED: number;
        CRAFT_ACTION_BREWING: $ResourceLocation;
        CRAFT_ACTION_COMMON_USE: $ResourceLocation;
        STORAGE_AE2: $ResourceLocation;
        PATH_FINDING_NO_LIMITATION: $CraftAction$CraftActionPathFindingTargetProvider;
        CRAFT_TYPE_FURNACE: $ResourceLocation;
        PATH_FINDING_EXACTLY: $CraftAction$CraftActionPathFindingTargetProvider;
        constructor();
    }
}
