import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $SmoothSwimmingMoveControl, $SmoothSwimmingLookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $PortalProcessor, $LerpingModel, $AgeableMob$AgeableMobGroupData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $Bucketable, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Behavior, $Behavior$Status, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $ServerLevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MemoryModuleType, $MemoryStatus } from "@package/net/minecraft/world/entity/ai/memory";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/world/entity/animal/axolotl" {
    export class $PlayDead extends $Behavior<$Axolotl> {
        static DEFAULT_DURATION: number;
        entryCondition: $Map<$MemoryModuleType<never>, $MemoryStatus>;
        endTimestamp: number;
        status: $Behavior$Status;
        constructor();
    }
    export class $ValidatePlayDead {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Axolotl$AxolotlLookControl extends $SmoothSwimmingLookControl {
    }
    export class $Axolotl$AxolotlGroupData extends $AgeableMob$AgeableMobGroupData {
        getVariant(arg0: $RandomSource): $Axolotl$Variant;
        types: $Axolotl$Variant[];
        constructor(...arg0: $Axolotl$Variant_[]);
    }
    export class $AxolotlAi {
        static getTemptations(): $Predicate<$ItemStack>;
        static updateActivity(arg0: $Axolotl): void;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $Axolotl$AxolotlMoveControl extends $SmoothSwimmingMoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Axolotl extends $Animal implements $LerpingModel, $VariantHolder<$Axolotl$Variant>, $Bucketable {
        getVariant(): $Axolotl$Variant;
        setVariant(arg0: $Axolotl$Variant_): void;
        playAttackSound(): void;
        static createAttributes(): $AttributeSupplier$Builder;
        getModelRotationValues(): $Map<string, $Vector3f>;
        applySupportingEffects(arg0: $Player): void;
        static checkAxolotlSpawnRules(arg0: $EntityType_<$LivingEntity>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        getPickupSound(): $SoundEvent;
        fromBucket(): boolean;
        setFromBucket(arg0: boolean): void;
        getBucketItemStack(): $ItemStack;
        saveToBucketTag(arg0: $ItemStack_): void;
        loadFromBucketTag(arg0: $CompoundTag_): void;
        setPlayingDead(arg0: boolean): void;
        static onStopAttacking(arg0: $Axolotl, arg1: $LivingEntity): void;
        isPlayingDead(): boolean;
        rehydrate(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Axolotl$Variant;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static TOTAL_PLAYDEAD_TIME: number;
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
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static VARIANT_TAG: string;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static RARE_VARIANT_CHANCE: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
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
        static PLAYER_REGEN_DETECTION_RANGE: number;
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
        constructor(arg0: $EntityType_<$Axolotl>, arg1: $Level_);
        get modelRotationValues(): $Map<string, $Vector3f>;
        get pickupSound(): $SoundEvent;
        get bucketItemStack(): $ItemStack;
    }
    export class $Axolotl$Variant extends $Enum<$Axolotl$Variant> implements $StringRepresentable {
        getName(): string;
        static values(): $Axolotl$Variant[];
        static valueOf(arg0: string): $Axolotl$Variant;
        getId(): number;
        static byId(arg0: number): $Axolotl$Variant;
        static getCommonSpawnVariant(arg0: $RandomSource): $Axolotl$Variant;
        static getRareSpawnVariant(arg0: $RandomSource): $Axolotl$Variant;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static GOLD: $Axolotl$Variant;
        static WILD: $Axolotl$Variant;
        static CODEC: $Codec<$Axolotl$Variant>;
        static BLUE: $Axolotl$Variant;
        static LUCY: $Axolotl$Variant;
        static CYAN: $Axolotl$Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Axolotl$Variant}.
     */
    export type $Axolotl$Variant_ = "lucy" | "wild" | "gold" | "cyan" | "blue";
}
