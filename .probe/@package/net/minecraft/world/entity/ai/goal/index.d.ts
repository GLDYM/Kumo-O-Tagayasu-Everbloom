import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $PathfinderMob, $TamableAnimal, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $EnumSet, $Set } from "@package/java/util";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $AbstractHorse, $Llama } from "@package/net/minecraft/world/entity/animal/horse";
import { $AbstractSchoolingFish, $Dolphin, $Cat, $ShoulderRidingEntity, $Wolf, $IronGolem, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Predicate, $Supplier_, $Function_, $Predicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $Zombie, $RangedAttackMob_, $Monster, $Creeper } from "@package/net/minecraft/world/entity/monster";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Class } from "@package/java/lang";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as target from "@package/net/minecraft/world/entity/ai/goal/target";

declare module "@package/net/minecraft/world/entity/ai/goal" {
    export class $WrappedGoal extends $Goal {
        getPriority(): number;
        getGoal(): $Goal;
        isRunning(): boolean;
        canBeReplacedBy(arg0: $WrappedGoal): boolean;
        constructor(arg0: number, arg1: $Goal);
        get priority(): number;
        get goal(): $Goal;
        get running(): boolean;
    }
    export class $MoveTowardsRestrictionGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $BreakDoorGoal extends $DoorInteractGoal {
        constructor(arg0: $Mob, arg1: $Predicate_<$Difficulty>);
        constructor(arg0: $Mob, arg1: number, arg2: $Predicate_<$Difficulty>);
    }
    export class $MoveThroughVillageGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number, arg2: boolean, arg3: number, arg4: $BooleanSupplier_);
    }
    export class $FollowParentGoal extends $Goal {
        static DONT_FOLLOW_IF_CLOSER_THAN: number;
        static HORIZONTAL_SCAN_RANGE: number;
        static VERTICAL_SCAN_RANGE: number;
        constructor(arg0: $Animal, arg1: number);
    }
    export class $LookAtTradingPlayerGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
        constructor(arg0: $AbstractVillager);
    }
    export class $WaterAvoidingRandomFlyingGoal extends $WaterAvoidingRandomStrollGoal {
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $DoorInteractGoal extends $Goal {
        constructor(arg0: $Mob);
    }
    export class $GoalSelector {
        tick(): void;
        getAvailableGoals(): $Set<$WrappedGoal>;
        tickRunningGoals(arg0: boolean): void;
        enableControlFlag(arg0: $Goal$Flag_): void;
        disableControlFlag(arg0: $Goal$Flag_): void;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        addGoal(arg0: number, arg1: $Goal): void;
        setControlFlag(arg0: $Goal$Flag_, arg1: boolean): void;
        removeGoal(arg0: $Goal): void;
        constructor(arg0: $Supplier_<$ProfilerFiller>);
        get availableGoals(): $Set<$WrappedGoal>;
    }
    export class $RunAroundLikeCrazyGoal extends $Goal {
        constructor(arg0: $AbstractHorse, arg1: number);
    }
    export class $AvoidEntityGoal<T extends $LivingEntity> extends $Goal {
        toAvoid: T;
        constructor(arg0: $PathfinderMob, arg1: $Class<T>, arg2: number, arg3: number, arg4: number, arg5: $Predicate_<$LivingEntity>);
        constructor(arg0: $PathfinderMob, arg1: $Class<T>, arg2: $Predicate_<$LivingEntity>, arg3: number, arg4: number, arg5: number, arg6: $Predicate_<$LivingEntity>);
        constructor(arg0: $PathfinderMob, arg1: $Class<T>, arg2: number, arg3: number, arg4: number);
    }
    export class $LeapAtTargetGoal extends $Goal {
        constructor(arg0: $Mob, arg1: number);
    }
    export class $SitWhenOrderedToGoal extends $Goal {
        constructor(arg0: $TamableAnimal);
    }
    export class $RangedBowAttackGoal<T extends $Mob> extends $Goal {
        setMinAttackInterval(arg0: number): void;
        constructor<M extends $Monster>(arg0: M, arg1: number, arg2: number, arg3: number);
        constructor(arg0: T, arg1: number, arg2: number, arg3: number);
        set minAttackInterval(value: number);
    }
    export class $MoveToBlockGoal extends $Goal {
        shouldRecalculatePath(): boolean;
        acceptedDistance(): number;
        speedModifier: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: number);
    }
    export class $FloatGoal extends $Goal {
        constructor(arg0: $Mob);
    }
    export class $CatSitOnBlockGoal extends $MoveToBlockGoal {
        speedModifier: number;
        constructor(arg0: $Cat, arg1: number);
    }
    export class $SwellGoal extends $Goal {
        constructor(arg0: $Creeper);
    }
    export class $RangedCrossbowAttackGoal<T extends $Mob> extends $Goal {
        static PATHFINDING_DELAY_RANGE: $UniformInt;
        constructor<M extends $Monster>(arg0: M, arg1: number, arg2: number);
        constructor(arg0: T, arg1: number, arg2: number);
    }
    export class $TradeWithPlayerGoal extends $Goal {
        constructor(arg0: $AbstractVillager);
    }
    export class $LandOnOwnersShoulderGoal extends $Goal {
        constructor(arg0: $ShoulderRidingEntity);
    }
    export class $RangedCrossbowAttackGoal$CrossbowState extends $Enum<$RangedCrossbowAttackGoal$CrossbowState> {
    }
    /**
     * Values that may be interpreted as {@link $RangedCrossbowAttackGoal$CrossbowState}.
     */
    export type $RangedCrossbowAttackGoal$CrossbowState_ = "uncharged" | "charging" | "charged" | "ready_to_attack";
    export class $LlamaFollowCaravanGoal extends $Goal {
        llama: $Llama;
        constructor(arg0: $Llama, arg1: number);
    }
    export class $GolemRandomStrollInVillageGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $ClimbOnTopOfPowderSnowGoal extends $Goal {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $LookAtPlayerGoal extends $Goal {
        static DEFAULT_PROBABILITY: number;
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number, arg3: number, arg4: boolean);
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number, arg3: number);
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number);
    }
    export class $BoatGoals extends $Enum<$BoatGoals> {
    }
    /**
     * Values that may be interpreted as {@link $BoatGoals}.
     */
    export type $BoatGoals_ = "go_to_boat" | "go_in_boat_direction";
    export class $FollowMobGoal extends $Goal {
        constructor(arg0: $Mob, arg1: number, arg2: number, arg3: number);
    }
    export class $RangedAttackGoal extends $Goal {
        constructor(arg0: $RangedAttackMob_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $RangedAttackMob_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $Goal$Flag extends $Enum<$Goal$Flag> {
        static values(): $Goal$Flag[];
        static valueOf(arg0: string): $Goal$Flag;
        static TARGET: $Goal$Flag;
        static MOVE: $Goal$Flag;
        static LOOK: $Goal$Flag;
        static JUMP: $Goal$Flag;
    }
    /**
     * Values that may be interpreted as {@link $Goal$Flag}.
     */
    export type $Goal$Flag_ = "move" | "look" | "jump" | "target";
    export class $DolphinJumpGoal extends $JumpGoal {
        constructor(arg0: $Dolphin, arg1: number);
    }
    export class $RandomLookAroundGoal extends $Goal {
        constructor(arg0: $Mob);
    }
    export class $PathfindToRaidGoal<T extends $Raider> extends $Goal {
        constructor(arg0: T);
    }
    export class $OfferFlowerGoal extends $Goal {
        static OFFER_TICKS: number;
        constructor(arg0: $IronGolem);
    }
    export class $RandomSwimmingGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
    }
    export class $OcelotAttackGoal extends $Goal {
        constructor(arg0: $Mob);
    }
    export class $TryFindWaterGoal extends $Goal {
        constructor(arg0: $PathfinderMob);
    }
    export class $RemoveBlockGoal extends $MoveToBlockGoal {
        playBreakSound(arg0: $Level_, arg1: $BlockPos_): void;
        playDestroyProgressSound(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        speedModifier: number;
        constructor(arg0: $Block_, arg1: $PathfinderMob, arg2: number, arg3: number);
    }
    export class $StrollThroughVillageGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $InteractGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number);
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number, arg3: number);
    }
    export class $TemptGoal extends $Goal {
        isRunning(): boolean;
        speedModifier: number;
        mob: $PathfinderMob;
        canScare: boolean;
        items: $Predicate<$ItemStack>;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: $Predicate_<$ItemStack>, arg3: boolean);
        get running(): boolean;
    }
    export class $FleeSunGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $EatBlockGoal extends $Goal {
        getEatAnimationTick(): number;
        constructor(arg0: $Mob);
        get eatAnimationTick(): number;
    }
    export class $CatLieOnBedGoal extends $MoveToBlockGoal {
        speedModifier: number;
        constructor(arg0: $Cat, arg1: number, arg2: number);
    }
    export class $FollowFlockLeaderGoal extends $Goal {
        constructor(arg0: $AbstractSchoolingFish);
    }
    export class $MoveBackToVillageGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: boolean);
    }
    export class $BreathAirGoal extends $Goal {
        constructor(arg0: $PathfinderMob);
    }
    export class $PanicGoal extends $Goal {
        isRunning(): boolean;
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: $Function_<$PathfinderMob, $TagKey<$DamageType>>);
        constructor(arg0: $PathfinderMob, arg1: number, arg2: $TagKey_<$DamageType>);
        constructor(arg0: $PathfinderMob, arg1: number);
        get running(): boolean;
    }
    export class $JumpGoal extends $Goal {
        constructor();
    }
    export class $BegGoal extends $Goal {
        constructor(arg0: $Wolf, arg1: number);
    }
    export class $RestrictSunGoal extends $Goal {
        constructor(arg0: $PathfinderMob);
    }
    export class $FollowOwnerGoal extends $Goal {
        constructor(arg0: $TamableAnimal, arg1: number, arg2: number, arg3: number);
    }
    export class $MeleeAttackGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number, arg2: boolean);
    }
    export class $Goal {
        start(): void;
        stop(): void;
        canUse(): boolean;
        tick(): void;
        getFlags(): $EnumSet<$Goal$Flag>;
        setFlags(arg0: $EnumSet<$Goal$Flag_>): void;
        requiresUpdateEveryTick(): boolean;
        canContinueToUse(): boolean;
        isInterruptable(): boolean;
        constructor();
        get interruptable(): boolean;
    }
    export class $FollowBoatGoal extends $Goal {
        constructor(arg0: $PathfinderMob);
    }
    export class $RandomStrollGoal extends $Goal {
        trigger(): void;
        setInterval(arg0: number): void;
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
        constructor(arg0: $PathfinderMob, arg1: number);
        set interval(value: number);
    }
    export class $BreedGoal extends $Goal {
        constructor(arg0: $Animal, arg1: number);
        constructor(arg0: $Animal, arg1: number, arg2: $Class<$Animal>);
    }
    export class $OpenDoorGoal extends $DoorInteractGoal {
        constructor(arg0: $Mob, arg1: boolean);
    }
    export class $ZombieAttackGoal extends $MeleeAttackGoal {
        constructor(arg0: $Zombie, arg1: number, arg2: boolean);
    }
    export class $RandomStandGoal extends $Goal {
        constructor(arg0: $AbstractHorse);
    }
    export class $WaterAvoidingRandomStrollGoal extends $RandomStrollGoal {
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number);
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
    }
    export class $UseItemGoal<T extends $Mob> extends $Goal {
        constructor(arg0: T, arg1: $ItemStack_, arg2: $SoundEvent_, arg3: $Predicate_<T>);
    }
    export class $MoveTowardsTargetGoal extends $Goal {
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
    }
}
