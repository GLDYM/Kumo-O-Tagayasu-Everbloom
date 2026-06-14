import { $CraftLayer, $CraftLayerChain } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemCount_, $InventoryItem, $ItemCount } from "@package/studio/fantasyit/maid_storage_manager/data";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $LinkedList, $Collection_, $List_ } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStackUtil$MATCH_TYPE_ } from "@package/studio/fantasyit/maid_storage_manager/util";
import { $Target } from "@package/studio/fantasyit/maid_storage_manager/storage";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/maid/memory" {
    export class $ResortingMemory extends $AbstractTargetMemory {
        clearNeedToResort(): void;
        setNeedToResort(arg0: $Collection_<$ItemStack_>): void;
        getNeedToResort(): $List<$ItemStack>;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$ResortingMemory>;
        needToResort: $List<$ItemStack>;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: $List_<$ItemStack_>);
        constructor();
    }
    export class $AbstractTargetMemory {
        getTarget(): $Target;
        setTarget(arg0: $Target): void;
        isVisitedPos(arg0: $Target): boolean;
        getTargetData(): $AbstractTargetMemory$TargetData;
        resetVisitedPos(): void;
        hasTarget(): boolean;
        clearTarget(): void;
        getFailCount(): number;
        setCheckItem(arg0: $ItemStack_): void;
        addVisitedPos(arg0: $Target): void;
        confirmNoTarget(arg0: number): boolean;
        confirmNoTarget(): boolean;
        addFailCount(): void;
        resetFailCount(): void;
        clearCheckItem(): void;
        getCheckItem(): $ItemStack;
        removeVisitedPos(arg0: $Target): void;
        getVisitedPos(): $List<$Target>;
        targetData: $AbstractTargetMemory$TargetData;
        constructor();
        constructor(arg0: $AbstractTargetMemory$TargetData);
        get failCount(): number;
    }
    export class $PlacingInventoryMemory extends $AbstractTargetMemory {
        isAnySuccess(): boolean;
        getArrangeItems(): $List<$ItemStack>;
        getSuppressedPos(): $List<$Target>;
        anySuppressed(): boolean;
        setArrangeItems(arg0: $List_<$ItemStack_>): void;
        addSuppressedPos(arg0: $Target): void;
        removeSuppressed(arg0: $List_<$Target>): void;
        removeSuppressed(arg0: $Target): void;
        removeSuppressed(): void;
        resetAnySuccess(): void;
        clearArrangeItems(): void;
        isSuppressed(arg0: $Target): boolean;
        anySuccess(): void;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$PlacingInventoryMemory>;
        arrangeItems: $List<$ItemStack>;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: $List_<$ItemStack_>, arg2: boolean, arg3: number, arg4: $List_<$Target>);
        constructor();
        get suppressedPos(): $List<$Target>;
    }
    export class $AbstractTargetMemory$TargetData {
        getTarget(): $Target;
        setTarget(arg0: $Target): void;
        getCheckItem(): ($ItemStack) | undefined;
        getVisitedPos(): $List<$Target>;
        static CODEC: $Codec<$AbstractTargetMemory$TargetData>;
        checkItem: $ItemStack;
        static NO_TARGET: $ResourceLocation;
        visitedPos: $List<$Target>;
        target: $Target;
        constructor(arg0: $List_<$Target>, arg1: $Target);
        constructor(arg0: $List_<$Target>, arg1: $Target, arg2: ($ItemStack_) | undefined);
    }
    export class $LogisticsMemory$Stage extends $Enum<$LogisticsMemory$Stage> {
        static values(): $LogisticsMemory$Stage[];
        static valueOf(arg0: string): $LogisticsMemory$Stage;
        static INPUT: $LogisticsMemory$Stage;
        static OUTPUT: $LogisticsMemory$Stage;
        static RECYCLE: $LogisticsMemory$Stage;
        static CRAFT: $LogisticsMemory$Stage;
        static FINISH: $LogisticsMemory$Stage;
    }
    /**
     * Values that may be interpreted as {@link $LogisticsMemory$Stage}.
     */
    export type $LogisticsMemory$Stage_ = "input" | "craft" | "output" | "recycle" | "finish";
    export class $LogisticsMemory extends $AbstractTargetMemory {
        getNext(): number;
        getStage(): $LogisticsMemory$Stage;
        getResultLayerO(): ($CraftLayer) | undefined;
        getStageName(): string;
        getCraftLayer(): $CraftLayer;
        getCraftLayerO(): ($CraftLayer) | undefined;
        hasMultipleGuide(arg0: $EntityMaid): boolean;
        getResultLayer(): $CraftLayer;
        shouldWork(): boolean;
        isStillValid(arg0: $EntityMaid): boolean;
        setStage(arg0: $LogisticsMemory$Stage_): void;
        switchCurrentLogisticsGuideItem(arg0: $EntityMaid): void;
        getCurrentLogisticsGuideItem(): $ItemStack;
        setCurrentLogisticsGuideItem(arg0: $ItemStack_): void;
        setCraftAndResultLayer(arg0: $CraftLayer, arg1: $CraftLayer): void;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$LogisticsMemory>;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: ($CraftLayer) | undefined, arg2: ($CraftLayer) | undefined, arg3: $ItemStack_, arg4: number, arg5: string);
        constructor();
        get next(): number;
        get resultLayerO(): ($CraftLayer) | undefined;
        get stageName(): string;
        get craftLayer(): $CraftLayer;
        get craftLayerO(): ($CraftLayer) | undefined;
        get resultLayer(): $CraftLayer;
    }
    export class $CraftMemory extends $AbstractTargetMemory {
        addCraftGuide(arg0: $CraftGuideData): void;
        resetAndMarkVis(arg0: $ServerLevel, arg1: $EntityMaid): void;
        initPreLayer(): void;
        getCraftGuides(): $List<$CraftGuideData>;
        lastSuccess(): void;
        clearCraftGuides(): void;
        tryStartIfHasPlan(): void;
        addAllFromViewed(arg0: $EntityMaid): void;
        stopAndClearPlan(arg0: $EntityMaid): void;
        addIgnoreTargets(arg0: $Target): void;
        addIgnoreTargets(arg0: $List_<$Target>): void;
        getIgnoreTargets(): $List<$Target>;
        clearIgnoreTargets(): void;
        hasPlan(): boolean;
        clearPlan(): void;
        plan(): $CraftLayerChain;
        setPlan(arg0: $CraftLayerChain): void;
        getIsGatheringDispatchedRaw(): boolean;
        setSwappingHandWhenCrafting(arg0: boolean): void;
        resetPathFindingFailCount(): void;
        getPathFindingFailCount(): number;
        setGoPlacingBeforeCraft(arg0: boolean): void;
        addPathFindingFailCount(): void;
        isGatheringDispatched(): boolean;
        isGoPlacingBeforeCraft(): boolean;
        setGatheringDispatched(arg0: boolean): void;
        addIgnoreTargetFromRequest(arg0: $EntityMaid, arg1: $ServerLevel): void;
        isSwappingHandWhenCrafting(): boolean;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$CraftMemory>;
        goPlacingBeforeCraft: boolean;
        calculatingTotal: number;
        calculatingProgress: number;
        craftGuides: $List<$CraftGuideData>;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: $List_<$CraftGuideData>, arg2: boolean, arg3: ($CraftLayerChain) | undefined, arg4: $List_<$Target>, arg5: boolean);
        constructor();
        get ignoreTargets(): $List<$Target>;
        get isGatheringDispatchedRaw(): boolean;
        get pathFindingFailCount(): number;
    }
    export class $MealMemory extends $AbstractTargetMemory {
        tick(): void;
        shouldTakeMeal(arg0: $EntityMaid): boolean;
        setCoolDown(arg0: number): void;
        isEating(): boolean;
        setEating(arg0: boolean): void;
        isWorkMeal(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$MealMemory>;
        constructor(arg0: $AbstractTargetMemory$TargetData);
        constructor();
        set coolDown(value: number);
    }
    export class $RequestProgressMemory extends $AbstractTargetMemory {
        getContext(): $CompoundTag;
        setCheckingStock(arg0: boolean): void;
        isReturning(): boolean;
        isCheckingStock(): boolean;
        clearTargetEntity(): void;
        setTryCrafting(arg0: boolean): void;
        isTryCrafting(): boolean;
        getWorkUUID(): $UUID;
        setTargetEntity(arg0: $UUID_): void;
        setReturn(arg0: boolean): void;
        setReturn(): void;
        getTargetEntity(arg0: $ServerLevel): $Entity;
        stopWork(): void;
        addTries(): void;
        getTries(): number;
        newWork(arg0: $UUID_): void;
        getTargetEntityUUID(): ($UUID) | undefined;
        tryCrafting: boolean;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$RequestProgressMemory>;
        context: $CompoundTag;
        workUUID: $UUID;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: $CompoundTag_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $UUID_, arg6: number, arg7: ($UUID_) | undefined);
        constructor();
        get returning(): boolean;
        get tries(): number;
        get targetEntityUUID(): ($UUID) | undefined;
    }
    export class $ViewedInventoryMemory extends $AbstractTargetMemory {
        isLocked(arg0: $Target): boolean;
        flatten(): $List<$InventoryItem>;
        getItemCount(arg0: $ItemStack_, arg1: $ItemStackUtil$MATCH_TYPE_): number;
        addItem(arg0: $Target, arg1: $ItemStack_, arg2: number): void;
        addItem(arg0: $Target, arg1: $ItemStack_): void;
        removeItem(arg0: $Target, arg1: $ItemStack_, arg2: number): void;
        ambitiousPos(arg0: $ServerLevel, arg1: $Target): $Target;
        receiveFrom(arg0: $ViewedInventoryMemory): void;
        clearWaitingAdd(): void;
        removeUnvisited(): void;
        resetMarkFailTime(): void;
        getCoolingDown(): number;
        ambitiousAddItem(arg0: $ServerLevel, arg1: $Target, arg2: $ItemStack_): void;
        positionFlatten(): $Map<$Target, $List<$ItemCount>>;
        setHoldStamp(arg0: number): void;
        getItemsAtInternal(arg0: $Target): $Map<string, $List<$ItemCount>>;
        addMarkChanged(arg0: $Target): void;
        markFailTime(): void;
        setItemsAtInternal(arg0: $Target, arg1: $Map_<string, $List_<$ItemCount_>>): void;
        getMarkChanged(): $LinkedList<$Target>;
        getWaitingAdd(): $List<$ItemStack>;
        addWaitingAdd(arg0: $ItemStack_): void;
        lockAmbitiousPos(arg0: $ServerLevel, arg1: $Target): void;
        isLockedAmbitious(arg0: $ServerLevel, arg1: $Target): boolean;
        isHolding(arg0: number): boolean;
        removeItemFromAllTargets(arg0: $ItemStack_, arg1: $Predicate_<$ItemStack>): void;
        resetViewedInvForPos(arg0: $Target): void;
        ambitiousRemoveItem(arg0: $ServerLevel, arg1: $Target, arg2: $ItemStack_, arg3: number): void;
        getViewedInventory(): $Map<string, $Map<string, $List<$ItemCount>>>;
        getItemsAt(arg0: $Target): $List<$ItemCount>;
        clearLock(): void;
        setViewing(arg0: boolean): void;
        isViewing(): boolean;
        resetViewedInvForPosAsRemoved(arg0: $Target): void;
        lockForChange: $Set<$Target>;
        targetData: $AbstractTargetMemory$TargetData;
        static CODEC: $Codec<$ViewedInventoryMemory>;
        viewedInventory: $Map<string, $Map<string, $List<$ItemCount>>>;
        coolingDown: number;
        viewing: boolean;
        constructor(arg0: $AbstractTargetMemory$TargetData, arg1: $Map_<string, $Map_<string, $List_<$ItemCount_>>>, arg2: number, arg3: $List_<$Target>, arg4: $List_<$ItemStack_>);
        constructor();
        set holdStamp(value: number);
        get markChanged(): $LinkedList<$Target>;
        get waitingAdd(): $List<$ItemStack>;
    }
}
