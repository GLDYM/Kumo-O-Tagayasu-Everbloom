import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $MobCategory_, $Entity, $PathfinderMob, $LivingEntity, $AgeableMob, $Mob } from "@package/net/minecraft/world/entity";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Spliterator, $Iterator, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $Trigger_, $MemoryAccessor, $Trigger } from "@package/net/minecraft/world/entity/ai/behavior/declarative";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiConsumer_, $ToDoubleFunction_, $Function_, $Consumer_, $Predicate_, $BiPredicate_, $ToIntFunction_ } from "@package/java/util/function";
import { $Node, $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $GlobalPos, $Holder, $BlockPos_, $GlobalPos_, $SectionPos } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum, $Iterable } from "@package/java/lang";
import { $OptionalBox$Mu } from "@package/com/mojang/datafixers/kinds";
import { $TradeWithVillagerInvoker } from "@package/cn/mcmod_mmf/mmlib/mixin";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Villager, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $MemoryStatus_, $MemoryStatus, $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $Stream } from "@package/java/util/stream";
import { $IntProvider_, $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as declarative from "@package/net/minecraft/world/entity/ai/behavior/declarative";
export * as warden from "@package/net/minecraft/world/entity/ai/behavior/warden";

declare module "@package/net/minecraft/world/entity/ai/behavior" {
    export class $LookAtTargetSink extends $Behavior<$Mob> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number, arg1: number);
    }
    export class $TradeWithVillager extends $Behavior<$Villager> implements $TradeWithVillagerInvoker {
        static throwHalfStackInvoker$mysterious_mountain_lib_$md$70d283$0(arg0: $Villager, arg1: $Set_<any>, arg2: $LivingEntity): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $StartAttacking {
        static create<E extends $Mob>(arg0: $Predicate_<E>, arg1: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        static create<E extends $Mob>(arg0: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        constructor();
    }
    export class $CopyMemoryWithExpiry {
        static create<E extends $LivingEntity, T>(arg0: $Predicate_<E>, arg1: $MemoryModuleType_<T>, arg2: $MemoryModuleType_<T>, arg3: $UniformInt): $BehaviorControl<E>;
        constructor();
    }
    export class $JumpOnBed extends $Behavior<$Mob> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
    }
    export class $WorkAtComposter extends $WorkAtPoi {
        handler$cek000$trading_floor$useWorkstation(arg0: $ServerLevel, arg1: $Villager, arg2: $CallbackInfo): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        static COMPOSTABLE_ITEMS: $List<$Item>;
        status: $Behavior$Status;
        constructor();
    }
    export class $DismountOrSkipMounting {
        static create<E extends $LivingEntity>(arg0: number, arg1: $BiPredicate_<E, $Entity>): $BehaviorControl<E>;
        constructor();
    }
    export class $MeleeAttack {
        static create(arg0: number): $OneShot<$Mob>;
        constructor();
    }
    export class $ValidateNearbyPoi {
        static create(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $MemoryModuleType_<$GlobalPos_>): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $CountDownCooldownTicks extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $MemoryModuleType_<number>);
    }
    export class $PrepareRamNearestTarget$RamCandidate {
        getTarget(): $LivingEntity;
        getTargetPosition(): $BlockPos;
        getStartPosition(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $LivingEntity);
        get target(): $LivingEntity;
        get targetPosition(): $BlockPos;
        get startPosition(): $BlockPos;
    }
    export class $SetWalkTargetAwayFrom {
        static pos(arg0: $MemoryModuleType_<$BlockPos_>, arg1: number, arg2: number, arg3: boolean): $BehaviorControl<$PathfinderMob>;
        static entity(arg0: $MemoryModuleType_<$Entity>, arg1: number, arg2: number, arg3: boolean): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $ShowTradesToPlayer extends $Behavior<$Villager> {
        start(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        stop(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        tick(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        canStillUse(arg0: $ServerLevel, arg1: $Villager, arg2: number): boolean;
        checkExtraStartConditions(arg0: $ServerLevel, arg1: $Villager): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number, arg1: number);
    }
    export class $UpdateActivityFromSchedule {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $VillagerGoalPackages {
        static getHidePackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getCorePackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getRaidPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getPanicPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getRestPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getMeetPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getPlayPackage(arg0: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getWorkPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getPreRaidPackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getIdlePackage(arg0: $VillagerProfession_, arg1: number): $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>;
        static getMinimalLookBehavior(): $Pair<number, $BehaviorControl<$LivingEntity>>;
        static INTERACT_SPEED_MODIFIER: number;
        static INTERACT_WALKUP_DIST: number;
        static INTERACT_DIST_SQR: number;
        constructor();
        static get minimalLookBehavior(): $Pair<number, $BehaviorControl<$LivingEntity>>;
    }
    export class $GoToClosestVillage {
        static create(arg0: number, arg1: number): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $TryLaySpawnOnWaterNearLand {
        static create(arg0: $Block_): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $VillagerCalmDown {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $RamTarget extends $Behavior<$Goat> {
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        static RAM_SPEED_FORCE_FACTOR: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $Function_<$Goat, $UniformInt>, arg1: $TargetingConditions, arg2: number, arg3: $ToDoubleFunction_<$Goat>, arg4: $Function_<$Goat, $SoundEvent>, arg5: $Function_<$Goat, $SoundEvent>);
    }
    export class $GoToPotentialJobSite extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
    }
    /**
     * @deprecated
     */
    export class $SetEntityLookTargetSometimes {
        static create(arg0: $EntityType_<never>, arg1: number, arg2: $UniformInt): $BehaviorControl<$LivingEntity>;
        static create(arg0: number, arg1: $UniformInt): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $StartCelebratingIfTargetDead {
        static create(arg0: number, arg1: $BiPredicate_<$LivingEntity, $LivingEntity>): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Croak extends $Behavior<$Frog> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BabyFollowAdult {
        static create(arg0: $UniformInt, arg1: $Function_<$LivingEntity, number>): $OneShot<$AgeableMob>;
        static create(arg0: $UniformInt, arg1: number): $OneShot<$AgeableMob>;
        constructor();
    }
    export class $StayCloseToTarget {
        static create(arg0: $Function_<$LivingEntity, ($PositionTracker) | undefined>, arg1: $Predicate_<$LivingEntity>, arg2: number, arg3: number, arg4: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $InteractWithDoor {
        static create(): $BehaviorControl<$LivingEntity>;
        static rememberDoorToClose(arg0: $MemoryAccessor<$OptionalBox$Mu, $Set_<$GlobalPos_>>, arg1: ($Set_<$GlobalPos_>) | undefined, arg2: $ServerLevel, arg3: $BlockPos_): ($Set<$GlobalPos>) | undefined;
        static closeDoorsThatIHaveOpenedOrPassedThrough(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $Node, arg3: $Node, arg4: $Set_<$GlobalPos_>, arg5: ($List_<$LivingEntity>) | undefined): void;
        constructor();
    }
    export class $Swim extends $Behavior<$Mob> {
        static shouldSwim(arg0: $Mob): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
    }
    export class $LookAndFollowTradingPlayerSink extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
    }
    export class $TryFindLandNearWater {
        static create(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $DoNothing implements $BehaviorControl<$LivingEntity> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tryStart(arg0: $ServerLevel, arg1: $LivingEntity, arg2: number): boolean;
        tickOrStop(arg0: $ServerLevel, arg1: $LivingEntity, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: $LivingEntity, arg2: number): void;
        constructor(arg0: number, arg1: number);
        get status(): $Behavior$Status;
    }
    export class $BlockPosTracker implements $PositionTracker {
        currentPosition(): $Vec3;
        currentBlockPosition(): $BlockPos;
        isVisibleBy(arg0: $LivingEntity): boolean;
        constructor(arg0: $BlockPos_);
        constructor(arg0: $Vec3_);
    }
    export class $WakeUp {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ResetRaidStatus {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $LocateHidingPlace {
        static create(arg0: number, arg1: number, arg2: number): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $Behavior<E extends $LivingEntity> implements $BehaviorControl<E> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        hasRequiredMemories(arg0: E): boolean;
        tryStart(arg0: $ServerLevel, arg1: E, arg2: number): boolean;
        tickOrStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, arg1: number, arg2: number);
        constructor(arg0: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, arg1: number);
        constructor(arg0: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>);
    }
    export class $Mount {
        static create(arg0: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $SleepInBed extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        static COOLDOWN_AFTER_BEING_WOKEN: number;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $CrossbowAttack<E extends $Mob, T extends $LivingEntity> extends $Behavior<E> {
        crossbowAttack(arg0: E, arg1: $LivingEntity): void;
        static DEFAULT_DURATION: number;
        attackDelay: number;
        crossbowState: $CrossbowAttack$CrossbowState;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BackUpIfTooClose {
        static create(arg0: number, arg1: number): $OneShot<$Mob>;
        constructor();
    }
    export class $VillagerPanicTrigger extends $Behavior<$Villager> {
        static isHurt(arg0: $LivingEntity): boolean;
        static hasHostile(arg0: $LivingEntity): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $AnimalPanic<E extends $PathfinderMob> extends $Behavior<E> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Function_<$PathfinderMob, $TagKey<$DamageType>>);
    }
    export class $PrepareRamNearestTarget<E extends $PathfinderMob> extends $Behavior<E> {
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $ToIntFunction_<E>, arg1: number, arg2: number, arg3: number, arg4: $TargetingConditions, arg5: number, arg6: $Function_<E, $SoundEvent>);
    }
    export class $EraseMemoryIf {
        static create<E extends $LivingEntity>(arg0: $Predicate_<E>, arg1: $MemoryModuleType_<never>): $BehaviorControl<E>;
        constructor();
    }
    export class $GoToWantedItem {
        static create<E extends $LivingEntity>(arg0: $Predicate_<E>, arg1: number, arg2: boolean, arg3: number): $BehaviorControl<E>;
        static create(arg0: number, arg1: boolean, arg2: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $WorkAtPoi extends $Behavior<$Villager> {
        handler$cel001$trading_floor$useWorkstation(arg0: $ServerLevel, arg1: $Villager, arg2: $CallbackInfo): void;
        handler$cel000$trading_floor$checkExtraStartConditions(arg0: $ServerLevel, arg1: $Villager, arg2: $CallbackInfoReturnable<any>): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $CelebrateVillagersSurvivedRaid extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number, arg1: number);
    }
    export class $YieldJobSite {
        static create(arg0: number): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $RingBell {
        static create(): $BehaviorControl<$LivingEntity>;
        static RING_BELL_FROM_DISTANCE: number;
        constructor();
    }
    export class $GoToTargetLocation {
        static create<E extends $Mob>(arg0: $MemoryModuleType_<$BlockPos_>, arg1: number, arg2: number): $OneShot<E>;
        constructor();
    }
    export class $StrollToPoiList {
        static create(arg0: $MemoryModuleType_<$List_<$GlobalPos_>>, arg1: number, arg2: number, arg3: number, arg4: $MemoryModuleType_<$GlobalPos_>): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $AssignProfessionFromJobSite {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $SetClosestHomeAsWalkTarget {
        static create(arg0: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $InsideBrownianWalk {
        static create(arg0: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $TriggerGate {
        static triggerOneShuffled<E extends $LivingEntity>(arg0: $List_<$Pair<$Trigger_<E>, number>>): $OneShot<E>;
        static triggerGate<E extends $LivingEntity>(arg0: $List_<$Pair<$Trigger_<E>, number>>, arg1: $GateBehavior$OrderPolicy_, arg2: $GateBehavior$RunningPolicy_): $OneShot<E>;
        constructor();
    }
    export class $LongJumpToPreferredBlock<E extends $Mob> extends $LongJumpToRandomPos<E> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $UniformInt, arg1: number, arg2: number, arg3: number, arg4: $Function_<E, $SoundEvent>, arg5: $TagKey_<$Block>, arg6: number, arg7: $BiPredicate_<E, $BlockPos>);
    }
    export class $ShufflingList<U> implements $Iterable<U> {
        add(arg0: U, arg1: number): $ShufflingList<U>;
        iterator(): $Iterator<U>;
        stream(): $Stream<U>;
        shuffle(): $ShufflingList<U>;
        static codec<U>(arg0: $Codec<U>): $Codec<$ShufflingList<U>>;
        spliterator(): $Spliterator<U>;
        forEach(arg0: $Consumer_<U>): void;
        constructor();
        [Symbol.iterator](): Iterator<U>
    }
    export class $SetWalkTargetFromAttackTargetIfTargetOutOfReach {
        static create(arg0: $Function_<$LivingEntity, number>): $BehaviorControl<$Mob>;
        static create(arg0: number): $BehaviorControl<$Mob>;
        constructor();
    }
    export class $OneShot<E extends $LivingEntity> implements $BehaviorControl<E>, $Trigger<E> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tryStart(arg0: $ServerLevel, arg1: E, arg2: number): boolean;
        tickOrStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        constructor();
        get status(): $Behavior$Status;
    }
    export class $EntityTracker implements $PositionTracker {
        currentPosition(): $Vec3;
        getEntity(): $Entity;
        currentBlockPosition(): $BlockPos;
        isVisibleBy(arg0: $LivingEntity): boolean;
        constructor(arg0: $Entity, arg1: boolean);
        get entity(): $Entity;
    }
    export class $AcquirePoi {
        static create(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $MemoryModuleType_<$GlobalPos_>, arg2: $MemoryModuleType_<$GlobalPos_>, arg3: boolean, arg4: (number) | undefined): $BehaviorControl<$PathfinderMob>;
        static create(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $MemoryModuleType_<$GlobalPos_>, arg2: boolean, arg3: (number) | undefined): $BehaviorControl<$PathfinderMob>;
        static findPathToPois(arg0: $Mob, arg1: $Set_<$Pair<$Holder_<$PoiType>, $BlockPos_>>): $Path;
        static SCAN_RANGE: number;
        constructor();
    }
    export class $CrossbowAttack$CrossbowState extends $Enum<$CrossbowAttack$CrossbowState> {
        static values(): $CrossbowAttack$CrossbowState[];
        static valueOf(arg0: string): $CrossbowAttack$CrossbowState;
        static CHARGED: $CrossbowAttack$CrossbowState;
        static UNCHARGED: $CrossbowAttack$CrossbowState;
        static READY_TO_ATTACK: $CrossbowAttack$CrossbowState;
        static CHARGING: $CrossbowAttack$CrossbowState;
    }
    /**
     * Values that may be interpreted as {@link $CrossbowAttack$CrossbowState}.
     */
    export type $CrossbowAttack$CrossbowState_ = "uncharged" | "charging" | "charged" | "ready_to_attack";
    export class $AcquirePoi$JitteredLinearRetry {
    }
    export class $FollowTemptation extends $Behavior<$PathfinderMob> {
        static DEFAULT_DURATION: number;
        static BACKED_UP_CLOSE_ENOUGH_DIST: number;
        static TEMPTATION_COOLDOWN: number;
        static DEFAULT_CLOSE_ENOUGH_DIST: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $Function_<$LivingEntity, number>);
        constructor(arg0: $Function_<$LivingEntity, number>, arg1: $Function_<$LivingEntity, number>);
    }
    export class $ShufflingList$WeightedEntry<T> {
        getData(): T;
        getWeight(): number;
        static codec<E>(arg0: $Codec<E>): $Codec<$ShufflingList$WeightedEntry<E>>;
        get data(): T;
        get weight(): number;
    }
    export class $SocializeAtBell {
        static create(): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $VillagerMakeLove extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $VillageBoundRandomStroll {
        static create(arg0: number, arg1: number, arg2: number): $OneShot<$PathfinderMob>;
        static create(arg0: number): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $StrollAroundPoi {
        static create(arg0: $MemoryModuleType_<$GlobalPos_>, arg1: number, arg2: number): $OneShot<$PathfinderMob>;
        constructor();
    }
    export class $SetHiddenState {
        static create(arg0: number, arg1: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $BecomePassiveIfMemoryPresent {
        static create(arg0: $MemoryModuleType_<never>, arg1: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $GateBehavior<E extends $LivingEntity> implements $BehaviorControl<E> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tryStart(arg0: $ServerLevel, arg1: E, arg2: number): boolean;
        tickOrStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        behaviors: $ShufflingList<$BehaviorControl<E>>;
        constructor(arg0: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, arg1: $Set_<$MemoryModuleType_<never>>, arg2: $GateBehavior$OrderPolicy_, arg3: $GateBehavior$RunningPolicy_, arg4: $List_<$Pair<$BehaviorControl<E>, number>>);
        get status(): $Behavior$Status;
    }
    export class $InteractWith {
        static of<E extends $LivingEntity, T extends $LivingEntity>(arg0: $EntityType_<T>, arg1: number, arg2: $Predicate_<E>, arg3: $Predicate_<T>, arg4: $MemoryModuleType_<T>, arg5: number, arg6: number): $BehaviorControl<E>;
        static of<T extends $LivingEntity>(arg0: $EntityType_<T>, arg1: number, arg2: $MemoryModuleType_<T>, arg3: number, arg4: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $BehaviorControl<E extends $LivingEntity> {
    }
    export interface $BehaviorControl<E extends $LivingEntity> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tryStart(arg0: $ServerLevel, arg1: E, arg2: number): boolean;
        tickOrStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        doStop(arg0: $ServerLevel, arg1: E, arg2: number): void;
        get status(): $Behavior$Status;
    }
    export class $TryFindWater {
        static create(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $SetWalkTargetFromLookTarget {
        static create(arg0: $Predicate_<$LivingEntity>, arg1: $Function_<$LivingEntity, number>, arg2: number): $OneShot<$LivingEntity>;
        static create(arg0: number, arg1: number): $OneShot<$LivingEntity>;
        constructor();
    }
    export class $GateBehavior$RunningPolicy extends $Enum<$GateBehavior$RunningPolicy> {
        static values(): $GateBehavior$RunningPolicy[];
        static valueOf(arg0: string): $GateBehavior$RunningPolicy;
        apply<E extends $LivingEntity>(arg0: $Stream<$BehaviorControl<E>>, arg1: $ServerLevel, arg2: E, arg3: number): void;
        static RUN_ONE: $GateBehavior$RunningPolicy;
        static TRY_ALL: $GateBehavior$RunningPolicy;
    }
    /**
     * Values that may be interpreted as {@link $GateBehavior$RunningPolicy}.
     */
    export type $GateBehavior$RunningPolicy_ = "run_one" | "try_all";
    export class $BehaviorUtils {
        static findSectionClosestToVillage(arg0: $ServerLevel, arg1: $SectionPos, arg2: number): $SectionPos;
        static canSee(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        static getRandomSwimmablePos(arg0: $PathfinderMob, arg1: number, arg2: number): $Vec3;
        static isOtherTargetMuchFurtherAwayThanCurrentAttackTarget(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number): boolean;
        static throwItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $Vec3_): void;
        static throwItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $Vec3_, arg3: $Vec3_, arg4: number): void;
        static setWalkAndLookTargetMemories(arg0: $LivingEntity, arg1: $PositionTracker, arg2: number, arg3: number): void;
        static setWalkAndLookTargetMemories(arg0: $LivingEntity, arg1: $BlockPos_, arg2: number, arg3: number): void;
        static setWalkAndLookTargetMemories(arg0: $LivingEntity, arg1: $Entity, arg2: number, arg3: number): void;
        static getLivingEntityFromUUIDMemory(arg0: $LivingEntity, arg1: $MemoryModuleType_<$UUID_>): ($LivingEntity) | undefined;
        static lockGazeAndWalkToEachOther(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number, arg3: number): void;
        static isWithinAttackRange(arg0: $Mob, arg1: $LivingEntity, arg2: number): boolean;
        static targetIsValid(arg0: $Brain<never>, arg1: $MemoryModuleType_<$LivingEntity>, arg2: $EntityType_<never>): boolean;
        static getTargetNearestMe(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingEntity): $LivingEntity;
        static lookAtEntity(arg0: $LivingEntity, arg1: $LivingEntity): void;
        static entityIsVisible(arg0: $Brain<never>, arg1: $LivingEntity): boolean;
        static getNearestTarget(arg0: $LivingEntity, arg1: ($LivingEntity) | undefined, arg2: $LivingEntity): $LivingEntity;
        static isBreeding(arg0: $LivingEntity): boolean;
    }
    export class $PositionTracker {
    }
    export interface $PositionTracker {
        currentPosition(): $Vec3;
        currentBlockPosition(): $BlockPos;
        isVisibleBy(arg0: $LivingEntity): boolean;
    }
    export class $PoiCompetitorScan {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $GateBehavior$OrderPolicy extends $Enum<$GateBehavior$OrderPolicy> {
        static values(): $GateBehavior$OrderPolicy[];
        static valueOf(arg0: string): $GateBehavior$OrderPolicy;
        apply(arg0: $ShufflingList<never>): void;
        static SHUFFLED: $GateBehavior$OrderPolicy;
        static ORDERED: $GateBehavior$OrderPolicy;
    }
    /**
     * Values that may be interpreted as {@link $GateBehavior$OrderPolicy}.
     */
    export type $GateBehavior$OrderPolicy_ = "ordered" | "shuffled";
    export class $GiveGiftToHero extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number);
    }
    export class $MoveToTargetSink extends $Behavior<$Mob> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $RandomStroll {
        static swim(arg0: number): $BehaviorControl<$PathfinderMob>;
        static stroll(arg0: number): $OneShot<$PathfinderMob>;
        static stroll(arg0: number, arg1: number, arg2: number): $BehaviorControl<$PathfinderMob>;
        static stroll(arg0: number, arg1: boolean): $OneShot<$PathfinderMob>;
        static fly(arg0: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $TryFindLand {
        static create(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $LongJumpMidJump extends $Behavior<$Mob> {
        static TIME_OUT_DURATION: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $UniformInt, arg1: $SoundEvent_);
    }
    export class $Behavior$Status extends $Enum<$Behavior$Status> {
        static values(): $Behavior$Status[];
        static valueOf(arg0: string): $Behavior$Status;
        static RUNNING: $Behavior$Status;
        static STOPPED: $Behavior$Status;
    }
    /**
     * Values that may be interpreted as {@link $Behavior$Status}.
     */
    export type $Behavior$Status_ = "stopped" | "running";
    export class $LongJumpToRandomPos<E extends $Mob> extends $Behavior<E> {
        static defaultAcceptableLandingSpot<E extends $Mob>(arg0: E, arg1: $BlockPos_): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $UniformInt, arg1: number, arg2: number, arg3: number, arg4: $Function_<E, $SoundEvent>);
        constructor(arg0: $UniformInt, arg1: number, arg2: number, arg3: number, arg4: $Function_<E, $SoundEvent>, arg5: $BiPredicate_<E, $BlockPos>);
    }
    export class $StopBeingAngryIfTargetDead {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $StrollToPoi {
        static create(arg0: $MemoryModuleType_<$GlobalPos_>, arg1: number, arg2: number, arg3: number): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $ResetProfession {
        static create(): $BehaviorControl<$Villager>;
        constructor();
    }
    export class $UseBonemeal extends $Behavior<$Villager> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $GoAndGiveItemsToTarget<E extends $LivingEntity> extends $Behavior<E> {
        static throwItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $Vec3_): void;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $Function_<$LivingEntity, ($PositionTracker) | undefined>, arg1: number, arg2: number);
    }
    export class $SetRaidStatus {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $AnimalMakeLove extends $Behavior<$Animal> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $EntityType_<$Animal>);
        constructor(arg0: $EntityType_<$Animal>, arg1: number, arg2: number);
    }
    export class $SetEntityLookTargetSometimes$Ticker {
        tickDownAndCheck(arg0: $RandomSource): boolean;
        constructor(arg0: $UniformInt);
    }
    export class $SetEntityLookTarget {
        static create(arg0: $Predicate_<$LivingEntity>, arg1: number): $OneShot<$LivingEntity>;
        static create(arg0: number): $OneShot<$LivingEntity>;
        static create(arg0: $EntityType_<never>, arg1: number): $OneShot<$LivingEntity>;
        static create(arg0: $MobCategory_, arg1: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ReactToBell {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $LongJumpUtil {
        static calculateJumpVectorForAngle(arg0: $Mob, arg1: $Vec3_, arg2: number, arg3: number, arg4: boolean): ($Vec3) | undefined;
        constructor();
    }
    export class $HarvestFarmland extends $Behavior<$Villager> {
        static SPEED_MODIFIER: number;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $LongJumpToRandomPos$PossibleJump extends $WeightedEntry$IntrusiveBase {
        getJumpTarget(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: number);
        get jumpTarget(): $BlockPos;
    }
    export class $SetLookAndInteract {
        static create(arg0: $EntityType_<never>, arg1: number): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $RandomLookAround extends $Behavior<$Mob> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: $IntProvider_, arg1: number, arg2: number, arg3: number);
    }
    export class $RunOne<E extends $LivingEntity> extends $GateBehavior<E> {
        behaviors: $ShufflingList<$BehaviorControl<E>>;
        constructor(arg0: $List_<$Pair<$BehaviorControl<E>, number>>);
        constructor(arg0: $Map_<$MemoryModuleType_<never>, $MemoryStatus_>, arg1: $List_<$Pair<$BehaviorControl<E>, number>>);
    }
    export class $SetWalkTargetFromBlockMemory {
        static create(arg0: $MemoryModuleType_<$GlobalPos_>, arg1: number, arg2: number, arg3: number, arg4: number): $OneShot<$Villager>;
        constructor();
    }
    export class $PlayTagWithOtherKids {
        static create(): $BehaviorControl<$PathfinderMob>;
        constructor();
    }
    export class $StopAttackingIfTargetInvalid {
        static create<E extends $Mob>(arg0: $Predicate_<$LivingEntity>, arg1: $BiConsumer_<E, $LivingEntity>, arg2: boolean): $BehaviorControl<E>;
        static create<E extends $Mob>(): $BehaviorControl<E>;
        static create<E extends $Mob>(arg0: $Predicate_<$LivingEntity>): $BehaviorControl<E>;
        static create<E extends $Mob>(arg0: $BiConsumer_<E, $LivingEntity>): $BehaviorControl<E>;
        constructor();
    }
    export class $MoveToSkySeeingSpot {
        static create(arg0: number): $OneShot<$LivingEntity>;
        static hasNoBlocksAbove(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $BlockPos_): boolean;
        constructor();
    }
}
