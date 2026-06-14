import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $ModConfigSpec$IntValue } from "@package/net/neoforged/neoforge/common";
export * as meal from "@package/com/github/tartaricacid/touhoulittlemaid/api/task/meal";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/task" {
    export class $FunctionCallSwitchResult extends $Enum<$FunctionCallSwitchResult> {
        static values(): $FunctionCallSwitchResult[];
        static valueOf(arg0: string): $FunctionCallSwitchResult;
        static PARTIAL_OK: $FunctionCallSwitchResult;
        static MISSING_REQUIRED_ITEM: $FunctionCallSwitchResult;
        static OK: $FunctionCallSwitchResult;
        static NO_CHANGE: $FunctionCallSwitchResult;
    }
    /**
     * Values that may be interpreted as {@link $FunctionCallSwitchResult}.
     */
    export type $FunctionCallSwitchResult_ = "ok" | "no_change" | "missing_required_item" | "partial_ok";
    export class $IAttackTask {
        static findFirstValidAttackTarget(arg0: $EntityMaid): ($LivingEntity) | undefined;
        static MAID_NO_ATTACK_TAG: string;
    }
    export interface $IAttackTask extends $IMaidTask {
        enablePanic(arg0: $EntityMaid): boolean;
        canAttack(arg0: $EntityMaid, arg1: $LivingEntity): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        isWeapon(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        doExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        hasExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
    }
    export class $IFarmTask {
    }
    export interface $IFarmTask extends $IMaidTask {
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        isSeed(arg0: $ItemStack_): boolean;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        plant(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_): $ItemStack;
        getCloseEnoughDist(): number;
        checkCropPosAbove(): boolean;
        harvest(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_): void;
        canHarvest(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        canPlant(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_): boolean;
        get closeEnoughDist(): number;
    }
    export class $IMaidTask {
        static VERTICAL_SEARCH_RANGE: number;
    }
    export interface $IMaidTask {
        getName(): $MutableComponent;
        isHidden(arg0: $EntityMaid): boolean;
        getDescription(arg0: $EntityMaid): $List<string>;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        workPointTask(arg0: $EntityMaid): boolean;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        get name(): $MutableComponent;
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get maidActionSummary(): string;
    }
    export class $IRangedAttackTask {
        static findFirstValidAttackTarget(arg0: $EntityMaid): ($LivingEntity) | undefined;
        static targetConditionsTest(arg0: $EntityMaid, arg1: $LivingEntity, arg2: $ModConfigSpec$IntValue): boolean;
        static TARGET_CONDITIONS: $TargetingConditions;
    }
    export interface $IRangedAttackTask extends $IAttackTask {
        canSee(arg0: $EntityMaid, arg1: $LivingEntity): boolean;
        performRangedAttack(arg0: $EntityMaid, arg1: $LivingEntity, arg2: number): void;
    }
}
