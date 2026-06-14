import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $BrainAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryStatus, $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $BrainAccessor<any> {
        static provider<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: (U) | undefined): void;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: U): void;
        isActive(arg0: $Activity_): boolean;
        setMemoryInternal<U>(arg0: $MemoryModuleType_<U>, arg1: ($ExpirableValue<never>) | undefined): void;
        tick(arg0: $ServerLevel, arg1: $Object): void;
        getSchedule(): $Schedule;
        removeAllBehaviors(): void;
        hasMemoryValue(arg0: $MemoryModuleType_<never>): boolean;
        setActiveActivityToFirstValid(arg0: $List_<$Activity_>): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        addActivityWithConditions(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        updateActivityFromSchedule(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        copyWithoutBehaviors(): $Brain<$Object>;
        setMemoryWithExpiry<U>(arg0: $MemoryModuleType_<U>, arg1: U, arg2: number): void;
        getMemory<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        clearMemories(): void;
        serializeStart<T>(arg0: $DynamicOps<T>): $DataResult<T>;
        isMemoryValue<U>(arg0: $MemoryModuleType_<U>, arg1: U): boolean;
        addActivityAndRemoveMemoryWhenStopped(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>, arg3: $MemoryModuleType_<never>): void;
        useDefaultActivity(): void;
        setDefaultActivity(arg0: $Activity_): void;
        addActivity(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>): void;
        addActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        setCoreActivities(arg0: $Set_<$Activity_>): void;
        static codec<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        eraseMemory<U>(arg0: $MemoryModuleType_<U>): void;
        checkMemory(arg0: $MemoryModuleType_<never>, arg1: $MemoryStatus_): boolean;
        setSchedule(arg0: $Schedule_): void;
        getTimeUntilExpiry<U>(arg0: $MemoryModuleType_<U>): number;
        setActiveActivityIfPossible(arg0: $Activity_): void;
        stopAll(arg0: $ServerLevel, arg1: $Object): void;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<$Object>>;
        getMemoryInternal<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        setActiveActivity(arg0: $Activity_): void;
        activityRequirementsAreMet(arg0: $Activity_): boolean;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        forgetOutdatedMemories(): void;
        addActivityAndRemoveMemoriesWhenStopped(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, arg3: $Set_<$MemoryModuleType_<never>>): void;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        activityMemoriesToEraseWhenStopped: $Map<$Activity, $Set<$MemoryModuleType<never>>>;
        sensors: $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        lastScheduleUpdate: number;
        coreActivities: $Set<$Activity>;
        activeActivities: $Set<$Activity>;
        memories: $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        availableBehaviorsByPriority: $Map<number, $Map<$Activity, $Set<$BehaviorControl<$Object>>>>;
        activityRequirements: $Map<$Activity, $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>>;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<$Object>>>, arg2: $ImmutableList<$Brain$MemoryValue<never>>, arg3: $Supplier_<$Codec<$Brain<$Object>>>);
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        get activeNonCoreActivity(): ($Activity) | undefined;
        set defaultActivity(value: $Activity_);
        set activeActivityIfPossible(value: $Activity_);
        get runningBehaviors(): $List<$BehaviorControl<$Object>>;
        set activeActivity(value: $Activity_);
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(arg0: $Dynamic<never>): $Brain<E>;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>);
    }
}
