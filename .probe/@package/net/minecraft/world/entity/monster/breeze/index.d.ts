import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Behavior$Status, $Behavior, $MoveToTargetSink } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $MemoryStatus, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Holder } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/entity/monster/breeze" {
    export class $Slide extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BreezeUtil {
        static hasLineOfSight(arg0: $Breeze, arg1: $Vec3_): boolean;
        static randomPointBehindTarget(arg0: $LivingEntity, arg1: $RandomSource): $Vec3;
        constructor();
    }
    export class $BreezeAi$SlideToTargetSink extends $MoveToTargetSink {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor(arg0: number, arg1: number);
    }
    export class $LongJump extends $Behavior<$Breeze> {
        static canRun(arg0: $ServerLevel, arg1: $Breeze): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $ShootWhenStuck extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $Breeze extends $Monster {
        static createAttributes(): $AttributeSupplier$Builder;
        withinInnerCircleRange(arg0: $Vec3_): boolean;
        emitGroundParticles(arg0: number): void;
        emitJumpTrailParticles(): void;
        playWhirlSound(): void;
        getSnoutYPosition(): number;
        resetJumpTrail(): $Breeze;
        getHurtBy(): ($LivingEntity) | undefined;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        slide: $AnimationState;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        slideBack: $AnimationState;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        shoot: $AnimationState;
        longJump: $AnimationState;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        ambientSoundTime: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        inhale: $AnimationState;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        idle: $AnimationState;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(arg0: $EntityType_<$Monster>, arg1: $Level_);
        get snoutYPosition(): number;
        get hurtBy(): ($LivingEntity) | undefined;
    }
    export class $Shoot extends $Behavior<$Breeze> {
        static isFacingTarget(arg0: $Breeze, arg1: $LivingEntity): boolean;
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $BreezeAi {
        static JUMP_CIRCLE_INNER_RADIUS: number;
        static JUMP_CIRCLE_MIDDLE_RADIUS: number;
        static SPEED_MULTIPLIER_WHEN_SLIDING: number;
        static JUMP_CIRCLE_OUTER_RADIUS: number;
        constructor();
    }
}
