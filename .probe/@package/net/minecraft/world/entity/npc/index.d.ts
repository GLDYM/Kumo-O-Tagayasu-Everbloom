import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $VariantHolder, $EntityDimensions, $Entity$RemovalReason, $AgeableMob, $WalkAnimationState, $Mob, $PortalProcessor, $Entity, $ReputationEventHandler } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GossipContainer } from "@package/net/minecraft/world/entity/ai/gossip";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand, $SimpleContainer, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MerchantOffer, $MerchantOffers, $ItemCost, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $IMixinMerchantEntity } from "@package/fi/dy/masa/malilib/mixin/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $MemoryModuleType_, $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $VillagerExperienceAccessor, $ResolvableItemListing } from "@package/com/cake/trading_floor/foundation/access";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $List, $Map_ } from "@package/java/util";
import { $Predicate_, $Predicate, $BiPredicate } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $RegistryAccess, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $VillagerInvoker } from "@package/cn/mcmod_mmf/mmlib/mixin";
import { $PotentialMerchantOfferInfo } from "@package/com/cake/trading_floor/compat/jei/virtual_recipes/potential_villager_trade";
import { $ItemLike_, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $SuspiciousStewEffects_, $SuspiciousStewEffects } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/npc" {
    export class $VillagerProfession extends $Record {
        name(): string;
        acquirableJobSite(): $Predicate<$Holder<$PoiType>>;
        heldJobSite(): $Predicate<$Holder<$PoiType>>;
        requestedItems(): $ImmutableSet<$Item>;
        secondaryPoi(): $ImmutableSet<$Block>;
        workSound(): $SoundEvent;
        static CARTOGRAPHER: $VillagerProfession;
        static MASON: $VillagerProfession;
        static SHEPHERD: $VillagerProfession;
        static ARMORER: $VillagerProfession;
        static TOOLSMITH: $VillagerProfession;
        static FARMER: $VillagerProfession;
        static FLETCHER: $VillagerProfession;
        static NITWIT: $VillagerProfession;
        static LEATHERWORKER: $VillagerProfession;
        static LIBRARIAN: $VillagerProfession;
        static CLERIC: $VillagerProfession;
        static FISHERMAN: $VillagerProfession;
        static BUTCHER: $VillagerProfession;
        static WEAPONSMITH: $VillagerProfession;
        static ALL_ACQUIRABLE_JOBS: $Predicate<$Holder<$PoiType>>;
        static NONE: $VillagerProfession;
        constructor(arg0: string, arg1: $Predicate_<$Holder<$PoiType>>, arg2: $Predicate_<$Holder<$PoiType>>, arg3: $ImmutableSet<$Item_>, arg4: $ImmutableSet<$Block_>, arg5: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $VillagerProfession}.
     */
    export type $VillagerProfession_ = RegistryTypes.VillagerProfession | { acquirableJobSite?: $Predicate_<$Holder<$PoiType>>, secondaryPoi?: $ImmutableSet<$Block_>, heldJobSite?: $Predicate_<$Holder<$PoiType>>, name?: string, requestedItems?: $ImmutableSet<$Item_>, workSound?: $SoundEvent_,  } | [acquirableJobSite?: $Predicate_<$Holder<$PoiType>>, secondaryPoi?: $ImmutableSet<$Block_>, heldJobSite?: $Predicate_<$Holder<$PoiType>>, name?: string, requestedItems?: $ImmutableSet<$Item_>, workSound?: $SoundEvent_, ];
    export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant, $IMixinMerchantEntity {
        overrideOffers(arg0: $MerchantOffers): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        playCelebrateSound(): void;
        getNotifyTradeSound(): $SoundEvent;
        getTradingPlayer(): $Player;
        setTradingPlayer(arg0: $Player): void;
        showProgressBar(): boolean;
        getOffers(): $MerchantOffers;
        getInventory(): $SimpleContainer;
        isClientSide(): boolean;
        getVillagerXp(): number;
        getUnhappyCounter(): number;
        setUnhappyCounter(arg0: number): void;
        modifyExpressionValue$hfl000$quark$replaceRandom(arg0: $RandomSource, arg1: $MerchantOffers, arg2: $LocalRef<any>): $RandomSource;
        modifyExpressionValue$hfl000$quark$setTierForOffer(arg0: $MerchantOffer): $MerchantOffer;
        handler$hfl000$quark$replaceRandom(arg0: $MerchantOffers, arg1: $VillagerTrades$ItemListing_[], arg2: number, arg3: $CallbackInfo, arg4: $LocalRef<any>): void;
        isTrading(): boolean;
        overrideXp(arg0: number): void;
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        canRestock(): boolean;
        malilib_offers(): $MerchantOffers;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static VILLAGER_SLOT_OFFSET: number;
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
        constructor(arg0: $EntityType_<$AbstractVillager>, arg1: $Level_);
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get inventory(): $SimpleContainer;
        get clientSide(): boolean;
        get villagerXp(): number;
        get trading(): boolean;
    }
    export class $WanderingTrader extends $AbstractVillager {
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        setWanderTarget(arg0: $BlockPos_): void;
        setDespawnDelay(arg0: number): void;
        getDespawnDelay(): number;
        handler$bop000$supplementaries$supp$addOpenDoor(arg0: $CallbackInfo): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static VILLAGER_SLOT_OFFSET: number;
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
        constructor(arg0: $EntityType_<$WanderingTrader>, arg1: $Level_);
        set wanderTarget(value: $BlockPos_);
    }
    export class $VillagerTrades$ItemsForEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        itemStack: $ItemStack;
        villagerXp: number;
        priceMultiplier: number;
        emeraldCost: number;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ResourceKey_<$EnchantmentProvider>);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(arg0: $Block_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export interface $VillagerProfession extends RegistryMarked<RegistryTypes.VillagerProfessionTag, RegistryTypes.VillagerProfession> {}
    export class $VillagerTrades$EnchantBookForEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        minLevel: number;
        maxLevel: number;
        villagerXp: number;
        tradeableEnchantments: $TagKey<$Enchantment>;
        constructor(arg0: number, arg1: $TagKey_<$Enchantment>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TagKey_<$Enchantment>);
    }
    export class $WanderingTrader$WanderToPositionGoal extends $Goal {
    }
    export class $InventoryCarrier {
        static pickUpItem(arg0: $Mob, arg1: $InventoryCarrier_, arg2: $ItemEntity): void;
        static TAG_INVENTORY: string;
    }
    export interface $InventoryCarrier {
        writeInventoryToTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readInventoryFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getInventory(): $SimpleContainer;
        get inventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $InventoryCarrier}.
     */
    export type $InventoryCarrier_ = (() => $SimpleContainer);
    export class $VillagerTrades$TreasureMapForEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        handler$bln000$supplementaries$turnToQuill(arg0: $Entity, arg1: $RandomSource, arg2: $CallbackInfoReturnable<any>): void;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        villagerXp: number;
        displayName: string;
        destination: $TagKey<$Structure>;
        destinationType: $Holder<$MapDecorationType>;
        emeraldCost: number;
        constructor(arg0: number, arg1: $TagKey_<$Structure>, arg2: string, arg3: $Holder_<$MapDecorationType>, arg4: number, arg5: number);
    }
    export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $VillagerExperienceAccessor, $VillagerInvoker {
        mobInteract(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        handler$fcn004$delighto_flight$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$fcn004$delighto_flight$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        getPlayerReputation(arg0: $Player): number;
        static createAttributes(): $AttributeSupplier$Builder;
        handler$ikm000$kaleidoscope_cookery$onVillagerWantsToPickUp(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        increaseMerchantCareer(): void;
        shouldRestock(): boolean;
        playWorkSound(): void;
        hasFarmSeeds(): boolean;
        updateTrades(): void;
        eatAndDigestFood(): void;
        spawnGolemIfNeeded(arg0: $ServerLevel, arg1: number, arg2: number): void;
        hasExcessFood(): boolean;
        getGossips(): $GossipContainer;
        setGossips(arg0: $Tag_): void;
        setOffers(arg0: $MerchantOffers): void;
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $Villager;
        wantsMoreFood(): boolean;
        setVillagerXp(arg0: number): void;
        getVillagerData(): $VillagerData;
        setVillagerData(arg0: $VillagerData): void;
        wantsToSpawnGolem(arg0: number): boolean;
        refreshBrain(arg0: $ServerLevel): void;
        trading_Floor_Neoforge$addExperienceForTrade(arg0: number, arg1: $MerchantOffer): void;
        handler$hip000$quark$restock(arg0: $CallbackInfo): void;
        assignProfessionWhenSpawned(): boolean;
        handler$hip000$quark$resetRestocks(arg0: $CallbackInfo): void;
        releasePoi(arg0: $MemoryModuleType_<$GlobalPos_>): void;
        gossip(arg0: $ServerLevel, arg1: $Villager, arg2: number): void;
        setChasing(arg0: boolean): void;
        restock(): void;
        isChasing(): boolean;
        setVariant(arg0: $VillagerType_): void;
        hungryInvoker(): boolean;
        countFoodPointsInInventoryInvoker(): number;
        getVariant(): $VillagerType;
        serializeNBT(arg0: $HolderLookup$Provider): $VillagerType;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        static VILLAGER_SLOT_OFFSET: number;
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
        increaseProfessionLevelOnUpdate: boolean;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        static FOOD_POINTS: $Map<$Item, number>;
        attackAnim: number;
        zOld: number;
        static WANTED_ITEMS: $Set<$Item>;
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
        numberOfRestocksToday: number;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        static MEMORY_TYPES: $ImmutableList<$MemoryModuleType<never>>;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static BREEDING_FOOD_THRESHOLD: number;
        static POI_MEMORIES: $Map<$MemoryModuleType<$GlobalPos>, $BiPredicate<$Villager, $Holder<$PoiType>>>;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static SPEED_MODIFIER: number;
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
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_);
        constructor(arg0: $EntityType_<$Villager>, arg1: $Level_, arg2: $VillagerType_);
        set offers(value: $MerchantOffers);
        set villagerXp(value: number);
    }
    export class $VillagerTrades$DyedArmorForEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        item: $Item;
        villagerXp: number;
        value: number;
        constructor(arg0: $Item_, arg1: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
    }
    export class $VillagerTrades$TypeSpecificTrade extends $Record implements $VillagerTrades$ItemListing {
        trades(): $Map<$VillagerType, $VillagerTrades$ItemListing>;
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        static oneTradeInBiomes(arg0: $VillagerTrades$ItemListing_, ...arg1: $VillagerType_[]): $VillagerTrades$TypeSpecificTrade;
        constructor(trades: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>);
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$TypeSpecificTrade}.
     */
    export type $VillagerTrades$TypeSpecificTrade_ = { trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>,  } | [trades?: $Map_<$VillagerType_, $VillagerTrades$ItemListing_>, ];
    export class $ClientSideMerchant implements $Merchant {
        overrideOffers(arg0: $MerchantOffers): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        getTradingPlayer(): $Player;
        setTradingPlayer(arg0: $Player): void;
        showProgressBar(): boolean;
        getOffers(): $MerchantOffers;
        isClientSide(): boolean;
        getVillagerXp(): number;
        overrideXp(arg0: number): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        canRestock(): boolean;
        constructor(arg0: $Player);
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get clientSide(): boolean;
        get villagerXp(): number;
    }
    export class $VillagerTrades$EnchantedItemForEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        itemStack: $ItemStack;
        baseEmeraldCost: number;
        villagerXp: number;
        priceMultiplier: number;
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $VillagerTrades {
        static EXPERIMENTAL_WANDERING_TRADER_TRADES: $List<$Pair<$VillagerTrades$ItemListing[], number>>;
        static EXPERIMENTAL_TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static TRADES: $Map<$VillagerProfession, $Int2ObjectMap<$VillagerTrades$ItemListing[]>>;
        static WANDERING_TRADER_TRADES: $Int2ObjectMap<$VillagerTrades$ItemListing[]>;
        constructor();
    }
    export class $Npc {
    }
    export interface $Npc {
    }
    export class $VillagerTrades$SuspiciousStewForEmerald implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        effects: $SuspiciousStewEffects;
        xp: number;
        priceMultiplier: number;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number);
        constructor(arg0: $SuspiciousStewEffects_, arg1: number, arg2: number);
    }
    export class $VillagerData {
        getType(): $VillagerType;
        getLevel(): number;
        setLevel(arg0: number): $VillagerData;
        setType(arg0: $VillagerType_): $VillagerData;
        static getMaxXpPerLevel(arg0: number): number;
        setProfession(arg0: $VillagerProfession_): $VillagerData;
        getProfession(): $VillagerProfession;
        static getMinXpPerLevel(arg0: number): number;
        static canLevelUp(arg0: number): boolean;
        static CODEC: $Codec<$VillagerData>;
        static MIN_VILLAGER_LEVEL: number;
        static MAX_VILLAGER_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VillagerData>;
        constructor(arg0: $VillagerType_, arg1: $VillagerProfession_, arg2: number);
    }
    export class $VillagerTrades$ItemsAndEmeraldsToItems implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        villagerXp: number;
        fromItem: $ItemCost;
        priceMultiplier: number;
        emeraldCost: number;
        toItem: $ItemStack;
        constructor(arg0: $ItemCost_, arg1: number, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: ($ResourceKey_<$EnchantmentProvider>) | undefined);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: $Item_, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $VillagerTrades$EmeraldsForVillagerTypeItem implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        villagerXp: number;
        cost: number;
        trades: $Map<$VillagerType, $Item>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Map_<$VillagerType_, $Item_>);
    }
    export interface $VillagerType extends RegistryMarked<RegistryTypes.VillagerTypeTag, RegistryTypes.VillagerType> {}
    export class $CatSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $VillagerDataHolder {
    }
    export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
        setVariant(arg0: $VillagerType_): void;
        getVillagerData(): $VillagerData;
        setVillagerData(arg0: $VillagerData): void;
        getVariant(): $VillagerType;
    }
    export class $VillagerTrades$TippedArrowForItemsAndEmeralds implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        maxUses: number;
        villagerXp: number;
        toCount: number;
        fromItem: $Item;
        fromCount: number;
        priceMultiplier: number;
        toItem: $ItemStack;
        emeraldCost: number;
        constructor(arg0: $Item_, arg1: number, arg2: $Item_, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $VillagerType {
        static byBiome(arg0: $Holder_<$Biome>): $VillagerType;
        /**
         * @deprecated
         */
        static BY_BIOME: $Map<$ResourceKey<$Biome>, $VillagerType>;
        static SAVANNA: $VillagerType;
        static JUNGLE: $VillagerType;
        static SNOW: $VillagerType;
        static PLAINS: $VillagerType;
        static TAIGA: $VillagerType;
        static DESERT: $VillagerType;
        static SWAMP: $VillagerType;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $VillagerType}.
     */
    export type $VillagerType_ = RegistryTypes.VillagerType;
    export class $VillagerTrades$ItemListing {
    }
    export interface $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTrades$ItemListing}.
     */
    export type $VillagerTrades$ItemListing_ = ((arg0: $Entity, arg1: $RandomSource) => $MerchantOffer);
    export class $WanderingTraderSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        handler$bog000$supplementaries$supp$spawnRedMerchant(arg0: $ServerLevel, arg1: $CallbackInfoReturnable<any>): void;
        handler$bog000$supplementaries$supp$tickRedMerchant(arg0: $ServerLevel, arg1: boolean, arg2: boolean, arg3: $CallbackInfoReturnable<any>): void;
        static DEFAULT_SPAWN_DELAY: number;
        constructor(arg0: $ServerLevelData);
    }
    export class $VillagerTrades$EmeraldForItems implements $VillagerTrades$ItemListing, $ResolvableItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
        maxUses: number;
        itemStack: $ItemCost;
        villagerXp: number;
        emeraldAmount: number;
        priceMultiplier: number;
        constructor(arg0: $ItemCost_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemLike_, arg1: number, arg2: number, arg3: number);
    }
    export class $VillagerTrades$FailureItemListing implements $VillagerTrades$ItemListing {
        getOffer(arg0: $Entity, arg1: $RandomSource): $MerchantOffer;
    }
}
