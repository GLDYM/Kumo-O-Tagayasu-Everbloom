import { $Level } from "@package/net/minecraft/world/level";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $Holder, $HolderGetter } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        stop(): void;
        getId(): number;
        save(arg0: $CompoundTag_): $CompoundTag;
        isStarted(): boolean;
        isActive(): boolean;
        tick(): void;
        getLevel(): $Level;
        isStopped(): boolean;
        getCenter(): $BlockPos;
        addHeroOfTheVillage(arg0: $Entity): void;
        static getLeaderBannerInstance(arg0: $HolderGetter<$BannerPattern_>): $ItemStack;
        getMaxRaidOmenLevel(): number;
        getRaidOmenLevel(): number;
        isOver(): boolean;
        isLoss(): boolean;
        setLeader(arg0: number, arg1: $Raider): void;
        joinRaid(arg0: number, arg1: $Raider, arg2: $BlockPos_, arg3: boolean): void;
        addWaveMob(arg0: number, arg1: $Raider, arg2: boolean): boolean;
        getLeader(arg0: number): $Raider;
        updateBossbar(): void;
        removeLeader(arg0: number): void;
        removeFromRaid(arg0: $Raider, arg1: boolean): void;
        getGroupsSpawned(): number;
        getEnchantOdds(): number;
        getNumGroups(arg0: $Difficulty_): number;
        getHealthOfLivingRaiders(): number;
        getTotalRaidersAlive(): number;
        hasFirstWaveSpawned(): boolean;
        isVictory(): boolean;
        isBetweenWaves(): boolean;
        absorbRaidOmen(arg0: $ServerPlayer): boolean;
        setRaidOmenLevel(arg0: number): void;
        getAllRaiders(): $Set<$Raider>;
        getTotalHealth(): number;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(arg0: number, arg1: $ServerLevel, arg2: $BlockPos_);
        constructor(arg0: $ServerLevel, arg1: $CompoundTag_);
        get id(): number;
        get started(): boolean;
        get active(): boolean;
        get level(): $Level;
        get stopped(): boolean;
        get center(): $BlockPos;
        get maxRaidOmenLevel(): number;
        get over(): boolean;
        get loss(): boolean;
        get groupsSpawned(): number;
        get enchantOdds(): number;
        get healthOfLivingRaiders(): number;
        get totalRaidersAlive(): number;
        get victory(): boolean;
        get betweenWaves(): boolean;
        get allRaiders(): $Set<$Raider>;
        get totalHealth(): number;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static getExtensionInfo(): $ExtensionInfo;
        static EVOKER: $Raid$RaiderType;
        static VINDICATOR: $Raid$RaiderType;
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData {
        get(arg0: number): $Raid;
        static load(arg0: $ServerLevel, arg1: $CompoundTag_): $Raids;
        static factory(arg0: $ServerLevel): $SavedData$Factory<$Raids>;
        tick(): void;
        createOrExtendRaid(arg0: $ServerPlayer, arg1: $BlockPos_): $Raid;
        static getFileId(arg0: $Holder_<$DimensionType>): string;
        getNearbyRaid(arg0: $BlockPos_, arg1: number): $Raid;
        static canJoinRaid(arg0: $Raider, arg1: $Raid): boolean;
        constructor(arg0: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(arg0: number): void;
        hasRaid(): boolean;
        setWave(arg0: number): void;
        getWave(): number;
        isCaptain(): boolean;
        applyRaidBuffs(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        getCelebrateSound(): $SoundEvent;
        isCelebrating(): boolean;
        canJoinRaid(): boolean;
        setCanJoinRaid(arg0: boolean): void;
        setCurrentRaid(arg0: $Raid): void;
        hasActiveRaid(): boolean;
        getCurrentRaid(): $Raid;
        setCelebrating(arg0: boolean): void;
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
        get captain(): boolean;
        get celebrateSound(): $SoundEvent;
    }
}
