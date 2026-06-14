import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $LivingEntityExtensions as $LivingEntityExtensions$1 } from "@package/artifacts/extensions/pocketpiston";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Endimatable, $PlayableEndimation, $Endimatable$EndimatedState, $PlayableEndimation_ } from "@package/com/teamabnormals/blueprint/core/endimator";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $EntityDropChanceAccessor } from "@package/com/soytutta/mynethersdelight/common/utility";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $Stray, $ZombifiedPiglin, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $InvokerSpawnPlacements } from "@package/org/violetmoon/zeta/mixin/mixins";
import { $Vector3f } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/net/darkhax/bookshelf/common/mixin/access/entity";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity as $AccessorEntity$2 } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $Stack, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $HolderLookup$Provider, $Direction, $Holder_, $Position, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $MobAccessor, $LivingEntityAccessor as $LivingEntityAccessor$6, $EntityAccessor as $EntityAccessor$4 } from "@package/artifacts/mixin/accessors";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $Level_, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $AccessorLivingEntity } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $IBaguData, $IBaguAnimate } from "@package/bagu_chan/bagus_lib/api";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $ITransmogPreview } from "@package/io/redspace/ironslib/patreon/transmog";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $CapeData, $ICapeDataProvider } from "@package/io/redspace/ironslib/game/client";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $EntityAccess } from "@package/snownee/jade/mixin";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType, $FluidType_ } from "@package/net/neoforged/neoforge/fluids";
import { $LivingEntityExtensions } from "@package/artifacts/extensions/ability";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorWalkAnimationState, $AccessorEntity } from "@package/com/railwayteam/railways/mixin/client";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $FormattedCharSequence, $RandomSource, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $MobAccessor as $MobAccessor$1 } from "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $EntityMixin } from "@package/com/chinaex123/kaleidoscope_dim_wine/mixin";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityInvoker, $LivingEntityHealthAccessor, $LivingEntityInvoker } from "@package/com/github/yimeng261/maidspell/mixin/accessor";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $IMixinEntity as $IMixinEntity$1, $IMixinLeashable, $IMixinPassiveEntity } from "@package/fi/dy/masa/minihud/mixin/entity";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EntityAccessor as $EntityAccessor$5, $LivingEntityAccessor as $LivingEntityAccessor$5 } from "@package/io/redspace/ironsspellbooks/mixin";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Portal$Transition, $Rotation_, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $IMixinMobEntity } from "@package/fi/dy/masa/minihud/mixin/debug";
import { $LivingEntityAccessor as $LivingEntityAccessor$3, $EntityAccessor as $EntityAccessor$2 } from "@package/com/github/tartaricacid/touhoulittlemaid/mixin/accessor";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $IDataManager, $TrackedData } from "@package/com/teamabnormals/blueprint/common/world/storage/tracking";
import { $EndimationEffectHandler } from "@package/com/teamabnormals/blueprint/core/endimator/effects";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $IMixinEntity } from "@package/fi/dy/masa/litematica/mixin/entity";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LivingEntityAccessor as $LivingEntityAccessor$2 } from "@package/com/github/yimeng261/maidspell/mixin";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $LivingEntityAccessor as $LivingEntityAccessor$1, $EntityAccessor as $EntityAccessor$3 } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Stream } from "@package/java/util/stream";
import { $LivingEntityAccessor as $LivingEntityAccessor$4 } from "@package/umpaz/brewinandchewin/common/mixin";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $PotionContents_ } from "@package/net/minecraft/world/item/alchemy";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(arg0: $EntityType_<$LivingEntity>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
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
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        oldTentacleAngle: number;
        persistenceRequired: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        zo: number;
        xBodyRot: number;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        zBodyRotO: number;
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
        xBodyRotO: number;
        tentacleMovement: number;
        oldTentacleMovement: number;
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
        constructor(arg0: $EntityType_<$GlowSquid>, arg1: $Level_);
        get darkTicksRemaining(): number;
    }
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $IBaguData, $LivingEntityAccessor$1, $ICapeDataProvider, $ITransmogPreview, $LivingEntityAccessor$4, $EntityDropChanceAccessor, $LivingEntityAccessor$3, $LivingEntityKJS, $LivingEntityExtensions, $LivingEntityAccessor$6, $LivingEntityExtensions$1, $AccessorLivingEntity, $LivingEntityAccessor$5, $LivingEntityAccessor, $LivingEntityHealthAccessor, $LivingEntityInvoker, $LivingEntityAccessor$2 {
        getAttributes(): $AttributeMap;
        getAttribute(arg0: $Holder_<$Attribute>): $AttributeInstance;
        take(arg0: $Entity, arg1: number): void;
        isBlocking(): boolean;
        static maidspell$getHealthAccessor$touhou_little_maid_spell_$md$70d283$2(): $EntityDataAccessor<any>;
        static getDataHealthIdAccessor$touhou_little_maid_spell_$md$70d283$3(): $EntityDataAccessor<any>;
        handler$gci000$l2complements$l2complments_canFreeze_checkFeature(arg0: $CallbackInfoReturnable<any>): void;
        swing(arg0: $InteractionHand_, arg1: boolean): void;
        swing(arg0: $InteractionHand_): void;
        isSleeping(): boolean;
        handler$dnn000$youkaishomecoming$canBeSeenAsEnemy$unconscious(arg0: $CallbackInfoReturnable<any>): void;
        getAttributeValue(arg0: $Holder_<$Attribute>): number;
        artifacts$hasTickingAbilities(): boolean;
        isDeadOrDying(): boolean;
        getItemInHand(arg0: $InteractionHand_): $ItemStack;
        isUsingItem(): boolean;
        handler$eop000$l2damagetracker$checkTotemDeathProtection$addCustomTotem(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        handler$gci000$l2complements$canStandOnFluid_pandora(arg0: $FluidState, arg1: $CallbackInfoReturnable<any>): void;
        handler$hna000$irons_spellbooks$handleEquipmentChanges(arg0: $CallbackInfoReturnable<any>): void;
        wrapOperation$dod000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        handler$hna000$irons_spellbooks$changeSummonHurtCredit(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$hna000$irons_spellbooks$updateInvisibilityStatus(arg0: $CallbackInfo): void;
        handler$zeh000$l2weaponry$isDamageSourceBlocked_clawBlock(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        handleRelativeFrictionAndCalculateMovement(arg0: $Vec3_, arg1: number): $Vec3;
        wrapOperation$ghf000$artifacts$travel(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity, original: $Operation_<any>): number;
        handler$cea000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        handler$hhl000$quark$overrideForFoxhounds(arg0: $CallbackInfoReturnable<any>): void;
        canAttack(arg0: $LivingEntity): boolean;
        canAttack(arg0: $LivingEntity, arg1: $TargetingConditions): boolean;
        addEffect(arg0: $MobEffectInstance, arg1: $Entity): boolean;
        addEffect(arg0: $MobEffectInstance): boolean;
        getHealth(): number;
        getEffect(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        knockback(arg0: number, arg1: number, arg2: number): void;
        makeSound(arg0: $SoundEvent_): void;
        breakItem(arg0: $ItemStack_): void;
        heal(arg0: number): void;
        setSpeed(arg0: number): void;
        die(arg0: $DamageSource_): void;
        getHitbox(): $AABB;
        getHurtDir(): number;
        travel(arg0: $Vec3_): void;
        canUseSlot(arg0: $EquipmentSlot_): boolean;
        isHolding(arg0: $Item_): boolean;
        isHolding(arg0: $Predicate_<$ItemStack>): boolean;
        getSpeed(): number;
        setJumping(arg0: boolean): void;
        aiStep(): void;
        getMainArm(): $HumanoidArm;
        getUseItem(): $ItemStack;
        attackable(): boolean;
        eat(arg0: $Level_, arg1: $ItemStack_): $ItemStack;
        eat(arg0: $Level_, arg1: $ItemStack_, arg2: $FoodProperties_): $ItemStack;
        getBrain(): $Brain<never>;
        setHealth(arg0: number): void;
        isBaby(): boolean;
        hasEffect(arg0: $Holder_<$MobEffect>): boolean;
        releaseUsingItem(): void;
        getMaxHealth(): number;
        canAttackType(arg0: $EntityType_<never>): boolean;
        getLastHurtByMob(): $LivingEntity;
        getLastAttacker(): $LivingEntity;
        onEquipItem(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_): void;
        shouldDropLoot(): boolean;
        getLastHurtMob(): $LivingEntity;
        getAgeScale(): number;
        setNoActionTime(arg0: number): void;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        getSwimAmount(arg0: number): number;
        getSleepingPos(): ($BlockPos) | undefined;
        setLastHurtMob(arg0: $Entity): void;
        getNoActionTime(): number;
        setDiscardFriction(arg0: boolean): void;
        hasLandedInLiquid(): boolean;
        setLastHurtByMob(arg0: $LivingEntity): void;
        setSleepingPos(arg0: $BlockPos_): void;
        onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity): void;
        canBeSeenAsEnemy(): boolean;
        isFallFlying(): boolean;
        /**
         * @deprecated
         */
        canBeAffected(arg0: $MobEffectInstance): boolean;
        removeEffect(arg0: $Holder_<$MobEffect>): boolean;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        stopSleeping(): void;
        canBeSeenByAnyone(): boolean;
        forceAddEffect(arg0: $MobEffectInstance, arg1: $Entity): void;
        onEffectRemoved(arg0: $MobEffectInstance): void;
        onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity): void;
        removeAllEffects(): boolean;
        getMaxAbsorption(): number;
        getVoicePitch(): number;
        getCombatTracker(): $CombatTracker;
        getLootTable(): $ResourceKey<$LootTable>;
        indicateDamage(arg0: number, arg1: number): void;
        getLootTableSeed(): number;
        getFallSounds(): $LivingEntity$Fallsounds;
        getKillCredit(): $LivingEntity;
        getOffhandItem(): $ItemStack;
        getEatingSound(arg0: $ItemStack_): $SoundEvent;
        onClimbable(): boolean;
        getArmorValue(): number;
        setItemInHand(arg0: $InteractionHand_, arg1: $ItemStack_): void;
        setStingerCount(arg0: number): void;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        hasItemInSlot(arg0: $EquipmentSlot_): boolean;
        getArmorSlots(): $Iterable<$ItemStack>;
        getMainHandItem(): $ItemStack;
        getHandSlots(): $Iterable<$ItemStack>;
        getAllSlots(): $Iterable<$ItemStack>;
        getStingerCount(): number;
        getArrowCount(): number;
        setArrowCount(arg0: number): void;
        setLastArmorItem(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        jumpFromGround(): void;
        isSensitiveToWater(): boolean;
        getJumpBoostPower(): number;
        isAutoSpinAttack(): boolean;
        setLastHandItem(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
        updatingUsingItem(): void;
        doHurtTarget(arg0: $Entity): boolean;
        handleOnClimbable(arg0: $Vec3_): $Vec3;
        canStandOnFluid(arg0: $FluidState): boolean;
        clearSleepingPos(): void;
        stopUsingItem(): void;
        onLeaveCombat(): void;
        getProjectile(arg0: $ItemStack_): $ItemStack;
        getAttackAnim(arg0: number): number;
        onEnterCombat(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getBedOrientation(): $Direction;
        getUsedItemHand(): $InteractionHand;
        static getSlotForHand(arg0: $InteractionHand_): $EquipmentSlot;
        startSleeping(arg0: $BlockPos_): void;
        startUsingItem(arg0: $InteractionHand_): void;
        getTicksUsingItem(): number;
        hasLineOfSight(arg0: $Entity): boolean;
        getFallFlyingTicks(): number;
        canTakeItem(arg0: $ItemStack_): boolean;
        onItemPickup(arg0: $ItemEntity): void;
        getDismountPoses(): $ImmutableList<$Pose>;
        getBagusData(): $CompoundTag;
        setBagusData(arg0: $CompoundTag_): void;
        canDisableShield(): boolean;
        callGenerateLoot(arg0: $DamageSource_): $List<any>;
        skipDropExperience(): void;
        /**
         * @deprecated
         */
        canBreatheUnderwater(): boolean;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        setAbsorptionAmount(arg0: number): void;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        getLastDamageSource(): $DamageSource;
        shouldDropExperience(): boolean;
        removeEffectNoUpdate(arg0: $Holder_<$MobEffect>): $MobEffectInstance;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        static areAllEffectsAmbient(arg0: $Collection_<$MobEffectInstance>): boolean;
        shouldDiscardFriction(): boolean;
        setLastHurtByPlayer(arg0: $Player): void;
        getVisibilityPercent(arg0: $Entity): number;
        getArmorCoverPercentage(): number;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        isDamageSourceBlocked(arg0: $DamageSource_): boolean;
        getExperienceReward(arg0: $ServerLevel, arg1: $Entity): number;
        getAbsorptionAmount(): number;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        isInvertedHealAndHarm(): boolean;
        sendEffectToPassengers(arg0: $MobEffectInstance): void;
        getLastHurtMobTimestamp(): number;
        getLastHurtByMobTimestamp(): number;
        getAttributeBaseValue(arg0: $Holder_<$Attribute>): number;
        getFrictionInfluencedSpeed(arg0: number): number;
        equipmentHasChanged(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        calculateEntityAnimation(arg0: boolean): void;
        getLastClimbablePos(): ($BlockPos) | undefined;
        getUseItemRemainingTicks(): number;
        getCurrentSwingDuration(): number;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        wasExperienceConsumed(): boolean;
        hasInfiniteMaterials(): boolean;
        isAffectedByPotions(): boolean;
        getEquipmentSlotForItem(arg0: $ItemStack_): $EquipmentSlot;
        setRecordPlayingNearby(arg0: $BlockPos_, arg1: boolean): void;
        irons_lib$getCapeData(): $CapeData;
        getLocalBoundsForPose(arg0: $Pose_): $AABB;
        onEquippedItemBroken(arg0: $Item_, arg1: $EquipmentSlot_): void;
        shouldRiderFaceForward(arg0: $Player): boolean;
        wrapOperation$gci000$l2complements$getArmorCoverPercentage_hideInvisibleArmorsFromMobs(arg0: $ItemStack_, arg1: $Operation_<any>): boolean;
        handler$hna000$irons_spellbooks$onEffectAdded(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfo): void;
        handler$hna000$irons_spellbooks$onEffectUpdated(arg0: $MobEffectInstance, arg1: boolean, arg2: $Entity, arg3: $CallbackInfo): void;
        handler$hna000$irons_spellbooks$onEffectRemoved(arg0: $MobEffectInstance, arg1: $CallbackInfo): void;
        wrapOperation$gci000$l2complements$awardExp(arg0: $ServerLevel, arg1: $Vec3_, arg2: number, arg3: $Operation_<any>): void;
        wrapOperation$eop000$l2damagetracker$hurt$end(arg0: $Stack<any>, arg1: $Operation_<any>): $Object;
        handler$zeh000$l2weaponry$canFreeze_cancelFreeze(arg0: $CallbackInfoReturnable<any>): void;
        wrapOperation$blm000$supplementaries$supp$onTravel(arg0: $LivingEntity, arg1: $FluidState, arg2: $Operation_<any>): boolean;
        static resetForwardDirectionOfRelativePortalPosition(arg0: $Vec3_): $Vec3;
        handler$hna000$irons_spellbooks$isCurrentlyGlowing(arg0: $CallbackInfoReturnable<any>): void;
        wrapOperation$fdm001$fruitsdelight$getfriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Operation_<any>): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        irons_lib$setTransmogPreview(arg0: boolean): void;
        artifacts$setTickingAbilities(hasTickingAbilities: boolean): void;
        artifacts$getPocketPistonLength(): number;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: $Vec3_): $Vec3;
        irons_lib$isTransmogPreview(): boolean;
        self(): $LivingEntity;
        onDamageTaken(arg0: $DamageContainer): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        sinkInFluid(arg0: $FluidType_): void;
        jumpInFluid(arg0: $FluidType_): void;
        canDrownInFluidType(arg0: $FluidType_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getOffHandItem(): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        isUndead(): boolean;
        rayTrace(): $KubeRayTraceResult;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        getMainHandItem(): $ItemStack;
        getReachDistance(): number;
        getHeadArmorItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        setChestArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getTotalMovementSpeed(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        setMovementSpeedAddition(speed: number): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        setUseItem(arg0: $ItemStack_): void;
        tlmIsJumping(): boolean;
        getLastHurtByPlayer(): $Player;
        getLastHurtByPlayerTime(): number;
        quark$lastHurtByPlayerTime(): number;
        quark$lastHurtByPlayer(): $Player;
        invokeShouldDropLoot(): boolean;
        maidspell$invokeTickDeath(): void;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        brewinandchewin$invokeUpdateEffectVisibility(): void;
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
        maidspell$invokeActuallyHurt(arg0: $DamageSource_, arg1: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static ARMOR_SLOT_OFFSET: number;
        static USE_ITEM_INTERVAL: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        yHeadRot: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        swingingArm: $InteractionHand;
        moveDist: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        walkAnimation: $WalkAnimationState;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        deathTime: number;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static UUID_TAG: string;
        hurtDuration: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static DEFAULT_BABY_SCALE: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        xxa: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        timeOffs: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        wasTouchingWater: boolean;
        activeEffects: $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        get attributes(): $AttributeMap;
        get blocking(): boolean;
        static get dataHealthIdAccessor$touhou_little_maid_spell_$md$70d283$3(): $EntityDataAccessor<any>;
        get sleeping(): boolean;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get mainArm(): $HumanoidArm;
        get brain(): $Brain<never>;
        get baby(): boolean;
        get lastAttacker(): $LivingEntity;
        get ageScale(): number;
        set discardFriction(value: boolean);
        get fallFlying(): boolean;
        get maxAbsorption(): number;
        get voicePitch(): number;
        get combatTracker(): $CombatTracker;
        get lootTable(): $ResourceKey<$LootTable>;
        get lootTableSeed(): number;
        get fallSounds(): $LivingEntity$Fallsounds;
        get killCredit(): $LivingEntity;
        get offhandItem(): $ItemStack;
        get armorValue(): number;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get allSlots(): $Iterable<$ItemStack>;
        get sensitiveToWater(): boolean;
        get jumpBoostPower(): number;
        get autoSpinAttack(): boolean;
        get bedOrientation(): $Direction;
        get usedItemHand(): $InteractionHand;
        get ticksUsingItem(): number;
        get fallFlyingTicks(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get lastDamageSource(): $DamageSource;
        get armorCoverPercentage(): number;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get invertedHealAndHarm(): boolean;
        get lastHurtMobTimestamp(): number;
        get lastHurtByMobTimestamp(): number;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get useItemRemainingTicks(): number;
        get currentSwingDuration(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get affectedByPotions(): boolean;
        get scale(): number;
        get suppressingSlidingDownLadder(): boolean;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get undead(): boolean;
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        set movementSpeedAddition(value: number);
        get lastHurtByPlayerTime(): number;
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number,  } | [lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number, ];
    export class $EntityAttachments$Builder {
        build(arg0: number, arg1: number): $EntityAttachments;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityAttachments$Builder;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityAttachments$Builder;
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $IMixinEntity, $IBaguAnimate, $EntityAccessor$3, $AccessorEntity$2, $ExtensionHolder, $EntityAccessor$1, $Cullable, $EntityMixin, $AccessorEntity$1, $AccessorEntity, $IMixinEntity$1, $EntityAccessor$2, $EntityKJS, $EntityAccessor$4, $IDataManager, $Endimatable, $EntityAccess, $EntityAccessor$5, $EntityAccessor, $EntityInvoker {
        getName(): $Component;
        remove(arg0: $Entity$RemovalReason_): void;
        load(arg0: $CompoundTag_): void;
        position(): $Vec3;
        getValue(arg0: $TrackedData<any>): $Object;
        clean(): void;
        isAlive(): boolean;
        getId(): number;
        save(arg0: $CompoundTag_): boolean;
        setValue(arg0: $TrackedData<any>, arg1: $Object): void;
        getEntityType(): $EntityType<never>;
        getSlot(arg0: number): $SlotAccess;
        pick(arg0: number, arg1: number, arg2: boolean): $HitResult;
        is(arg0: $Entity): boolean;
        getEntries(arg0: boolean): $Set<any>;
        collide(arg0: $Vec3_): $Vec3;
        isActive(): boolean;
        rotate(arg0: $Rotation_): number;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        push(arg0: $Entity): void;
        push(arg0: $Vec3_): void;
        getDisplayName(): $Component;
        move(arg0: $MoverType_, arg1: $Vec3_): void;
        tick(): void;
        isSupportedBy(arg0: $BlockPos_): boolean;
        isDirty(): boolean;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        getDimensions(arg0: $Pose_): $EntityDimensions;
        getPosition(arg0: number): $Vec3;
        kill(): void;
        getBlockX(): number;
        getBlockY(): number;
        getBlockZ(): number;
        interact(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        interactAt(arg0: $Player, arg1: $Vec3_, arg2: $InteractionHand_): $InteractionResult;
        getUuid(): $UUID;
        setId(arg0: number): void;
        setInvisible(arg0: boolean): void;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        getY(arg0: number): number;
        getY(): number;
        discard(): void;
        isRemoved(): boolean;
        setTimeout(): void;
        getHorizontalFacing(): $Direction;
        getZ(): number;
        getZ(arg0: number): number;
        blockPosition(): $BlockPos;
        isVehicle(): boolean;
        unRide(): void;
        getTags(): $Set<string>;
        addTag(arg0: string): boolean;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        isSwimming(): boolean;
        closerThan(arg0: $Entity, arg1: number): boolean;
        closerThan(arg0: $Entity, arg1: number, arg2: number): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        turn(arg0: number, arg1: number): void;
        lavaHurt(): void;
        isOnFire(): boolean;
        getOnPos(): $BlockPos;
        isOnRails(): boolean;
        setSilent(arg0: boolean): void;
        canRide(arg0: $Entity): boolean;
        getForward(): $Vec3;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        thunderHit(arg0: $ServerLevel, arg1: $LightningBolt): void;
        deflection(arg0: $Projectile): $ProjectileDeflection;
        isFreezing(): boolean;
        canSprint(): boolean;
        setDataMap(arg0: $Map_<any, any>): void;
        getDataMap(): $Map<any, any>;
        setCulled(value: boolean): void;
        getPos(): $Position;
        isCulled(): boolean;
        handler$jgh000$touhou_little_maid_spell$onSaveAsPassenger(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$gfh000$artifacts$isInvulnerableTo(original: boolean, damageSource: $DamageSource_): boolean;
        handler$jgh000$touhou_little_maid_spell$onSaveWithoutId(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$gcd000$l2complements$dampensVibrations_delegate(arg0: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$hme000$create_sa$create$onFireImmune(arg0: boolean): boolean;
        tofuCraftReload_Recode$isInDoubanjang(): boolean;
        handler$hmk000$irons_spellbooks$isAlliedTo(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        adjustSpawnLocation(arg0: $ServerLevel, arg1: $BlockPos_): $BlockPos;
        setOnGroundWithMovement(arg0: boolean, arg1: $Vec3_): void;
        getDimensionChangingDelay(): number;
        getRemainingFireTicks(): number;
        setRemainingFireTicks(arg0: number): void;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        canSpawnSprintParticle(): boolean;
        setSharedFlagOnFire(arg0: boolean): void;
        getLightProbePosition(arg0: number): $Vec3;
        isSuppressingBounce(): boolean;
        isPassengerOfSameVehicle(arg0: $Entity): boolean;
        setCustomNameVisible(arg0: boolean): void;
        dismountsUnderwater(): boolean;
        isIgnoringBlockTriggers(): boolean;
        getNearestViewDirection(): $Direction;
        hasControllingPassenger(): boolean;
        getPassengersAndSelf(): $Stream<$Entity>;
        getIndirectPassengers(): $Iterable<$Entity>;
        displayFireAnimation(): boolean;
        canChangeDimensions(arg0: $Level_, arg1: $Level_): boolean;
        canBeHitByProjectile(): boolean;
        isSteppingCarefully(): boolean;
        skipAttackInteraction(arg0: $Entity): boolean;
        countPlayerPassengers(): number;
        hasIndirectPassenger(arg0: $Entity): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getSelfAndPassengers(): $Stream<$Entity>;
        getVehicleAttachmentPoint(arg0: $Entity): $Vec3;
        getHandHoldingItemAngle(arg0: $Item_): $Vec3;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getPistonPushReaction(): $PushReaction;
        touchingUnloadedChunk(): boolean;
        getControlledVehicle(): $Entity;
        getRopeHoldPosition(arg0: number): $Vec3;
        mirror(arg0: $Mirror_): number;
        getRandomX(arg0: number): number;
        getRandom(): $RandomSource;
        getRandomY(): number;
        getRandomZ(arg0: number): number;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Entity): void;
        gameEvent(arg0: $Holder_<$GameEvent>): void;
        isDiscrete(): boolean;
        isSilent(): boolean;
        setPose(arg0: $Pose_): void;
        playSound(arg0: $SoundEvent_, arg1: number, arg2: number): void;
        playSound(arg0: $SoundEvent_): void;
        getVehicle(): $Entity;
        getServer(): $MinecraftServer;
        onGround(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        isInLava(): boolean;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getGravity(): number;
        getBbWidth(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        stopRiding(): void;
        canFreeze(): boolean;
        rideTick(): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        hasPose(arg0: $Pose_): boolean;
        /**
         * Measures the distance of entity to another entity.
         */
        distanceToEntity(arg0: $Entity): number;
        isPickable(): boolean;
        isPushable(): boolean;
        getEyeY(): number;
        maxUpStep(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        getPose(): $Pose;
        revive(): void;
        isAlliedTo(arg0: $Team): boolean;
        isOnSameTeam(arg0: $Entity): boolean;
        moveTo(arg0: $Vec3_, arg1: number, arg2: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        moveToBlockPos(arg0: $BlockPos_, arg1: number, arg2: number): void;
        moveTo(arg0: $Vec3_): void;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTeam(): $PlayerTeam;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        clearFire(): void;
        setPos(arg0: $Vec3_): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        baseTick(): void;
        isInLiquid(): boolean;
        isInWater(): boolean;
        fireImmune(): boolean;
        isInWall(): boolean;
        getEndimatedState(): $Endimatable$EndimatedState;
        getDirtyEntries(): $Set<any>;
        getX(arg0: number): number;
        getX(): number;
        registryAccess(): $RegistryAccess;
        isUnderWater(): boolean;
        isGlowing(): boolean;
        isSpectator(): boolean;
        damageSources(): $DamageSources;
        getTicksFrozen(): number;
        getMaxAirSupply(): number;
        getPercentFrozen(): number;
        getAirSupply(): number;
        getSoundSource(): $SoundSource;
        extinguish(): void;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        getBoundingBox(): $AABB;
        getDeltaMovement(): $Vec3;
        isInvulnerable(): boolean;
        getStringUuid(): string;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        isInvisible(): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        hasCustomName(): boolean;
        spawnAtLocation(arg0: $ItemStack_, arg1: number): $ItemEntity;
        spawnAtLocation(arg0: $ItemStack_): $ItemEntity;
        awardKillScore(arg0: $Entity, arg1: number, arg2: $DamageSource_): void;
        killedEntity(arg0: $ServerLevel, arg1: $LivingEntity): boolean;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: $Vec3_): void;
        getYHeadRot(): number;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        getWeaponItem(): $ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: $DamageSource_): boolean;
        setSprinting(arg0: boolean): void;
        animateHurt(arg0: number): void;
        handleDamageEvent(arg0: $DamageSource_): void;
        getBbHeight(): number;
        getInBlockState(): $BlockState;
        getMaxFallDistance(): number;
        handleEntityEvent(arg0: number): void;
        resetFallDistance(): void;
        addDeltaMovement(arg0: $Vec3_): void;
        getFluidTypeHeight(arg0: $FluidType_): number;
        isEffectiveAi(): boolean;
        isFullyFrozen(): boolean;
        isPassenger(): boolean;
        /**
         * @deprecated
         */
        getFluidHeight(arg0: $TagKey_<$Fluid>): number;
        setTicksFrozen(arg0: number): void;
        lerpTargetX(): number;
        getLookAngle(): $Vec3;
        isSprinting(): boolean;
        shouldShowName(): boolean;
        moveRelative(arg0: number, arg1: $Vec3_): void;
        refreshDimensions(): void;
        setYHeadRot(arg0: number): void;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(arg0: number): void;
        lerpTargetZ(): number;
        lerpTargetXRot(): number;
        lerpTargetY(): number;
        isVisuallySwimming(): boolean;
        lerpTargetYRot(): number;
        isShiftKeyDown(): boolean;
        canUsePortal(arg0: boolean): boolean;
        recreateFromPacket(arg0: $ClientboundAddEntityPacket): void;
        getViewYRot(arg0: number): number;
        getBlockStateOn(): $BlockState;
        getCustomName(): $Component;
        getViewVector(arg0: number): $Vec3;
        igniteForTicks(arg0: number): void;
        getEntityData(): $SynchedEntityData;
        getEncodeId(): string;
        saveWithoutId(arg0: $CompoundTag_): $CompoundTag;
        getPickResult(): $ItemStack;
        getForgePersistentData(): $CompoundTag;
        sendSystemMessage(arg0: $Component_): void;
        getEyeInFluidType(): $FluidType;
        /**
         * Measures the **square** of a distance of entity to the point at specified 3D position vector.
         */
        distanceToSqr(arg0: $Vec3_): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         */
        distanceToEntitySqr(arg0: $Entity): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        onAddedToLevel(): void;
        getEyePosition(arg0: number): $Vec3;
        getEyePosition(): $Vec3;
        setOnGround(arg0: boolean): void;
        onRemovedFromLevel(): void;
        isAddedToLevel(): boolean;
        /**
         * @deprecated
         */
        isPushedByFluid(): boolean;
        chunkPosition(): $ChunkPos;
        hasGlowingTag(): boolean;
        getPositionCodec(): $VecDeltaCodec;
        setBoundingBox(arg0: $AABB_): void;
        isColliding(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        onPassengerTurned(arg0: $Entity): void;
        onClientRemoval(): void;
        updateSwimming(): void;
        checkBelowWorld(): void;
        setPortalCooldown(): void;
        setPortalCooldown(arg0: number): void;
        getPortalCooldown(): number;
        ejectPassengers(): void;
        getTeamColor(): number;
        isNoGravity(): boolean;
        igniteForSeconds(arg0: number): void;
        isOnPortalCooldown(): boolean;
        getSwimSplashSound(): $SoundEvent;
        setNoGravity(arg0: boolean): void;
        dampensVibrations(): boolean;
        isInWaterOrBubble(): boolean;
        setSwimming(arg0: boolean): void;
        /**
         * @deprecated
         */
        isEyeInFluid(arg0: $TagKey_<$Fluid>): boolean;
        static collideBoundingBox(arg0: $Entity, arg1: $Vec3_, arg2: $AABB_, arg3: $Level_, arg4: $List_<$VoxelShape>): $Vec3;
        isInWaterOrRain(): boolean;
        isCrouching(): boolean;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        canControlVehicle(): boolean;
        setCustomName(arg0: $Component_): void;
        hasPassenger(arg0: $Entity): boolean;
        hasPassenger(arg0: $Predicate_<$Entity>): boolean;
        removeVehicle(): void;
        setGlowing(arg0: boolean): void;
        playerTouch(arg0: $Player): void;
        showVehicleHealth(): boolean;
        setOldPosAndRot(): void;
        canBeCollidedWith(): boolean;
        absRotateTo(arg0: number, arg1: number): void;
        canCollideWith(arg0: $Entity): boolean;
        getAttachments(): $EntityAttachments;
        getPickRadius(): number;
        getRotationVector(): $Vec2;
        setAsInsidePortal(arg0: $Portal_, arg1: $BlockPos_): void;
        getUpVector(arg0: number): $Vec3;
        setAirSupply(arg0: number): void;
        startRiding(arg0: $Entity): boolean;
        startRiding(arg0: $Entity, arg1: boolean): boolean;
        setShiftKeyDown(arg0: boolean): void;
        saveAsPassenger(arg0: $CompoundTag_): boolean;
        getEyeHeight(): number;
        getEyeHeight(arg0: $Pose_): number;
        canAddPassenger(arg0: $Entity): boolean;
        positionRider(arg0: $Entity): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getFirstPassenger(): $Entity;
        getViewXRot(arg0: number): number;
        changeDimension(arg0: $DimensionTransition_): $Entity;
        isDescending(): boolean;
        getScoreboardName(): string;
        makeStuckInBlock(arg0: $BlockState_, arg1: $Vec3_): void;
        isVisuallyCrawling(): boolean;
        setInvulnerable(arg0: boolean): void;
        placePortalTicket(arg0: $BlockPos_): void;
        isAttackable(): boolean;
        onAboveBubbleCol(arg0: boolean): void;
        static setViewScale(arg0: number): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isInvisibleTo(arg0: $Player): boolean;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        static getViewScale(): number;
        getMotionDirection(): $Direction;
        copyPosition(arg0: $Entity): void;
        broadcastToPlayer(arg0: $ServerPlayer): boolean;
        restoreFrom(arg0: $Entity): void;
        getLeashOffset(arg0: number): $Vec3;
        ignoreExplosion(arg0: $Explosion): boolean;
        startSeenByPlayer(arg0: $ServerPlayer): void;
        stopSeenByPlayer(arg0: $ServerPlayer): void;
        shouldBeSaved(): boolean;
        hasPermissions(arg0: number): boolean;
        checkDespawn(): void;
        getAddEntityPacket(arg0: $ServerEntity): $Packet<$ClientGamePacketListener>;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        getKnownMovement(): $Vec3;
        setIsInPowderSnow(arg0: boolean): void;
        isAlwaysTicking(): boolean;
        getRemovalReason(): $Entity$RemovalReason;
        mayInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        acceptsSuccess(): boolean;
        onExplosionHit(arg0: $Entity): void;
        getRootVehicle(): $Entity;
        trackingPosition(): $Vec3;
        isForcedVisible(): boolean;
        isOutOfCamera(): boolean;
        getBaguController(): $BaguAnimationController<any>;
        acceptsFailure(): boolean;
        setOutOfCamera(value: boolean): void;
        shouldInformAdmins(): boolean;
        onlyOpCanSetNbt(): boolean;
        isInWaterRainOrBubble(): boolean;
        getControllingPassenger(): $LivingEntity;
        isCustomNameVisible(): boolean;
        getPassengerRidingPosition(arg0: $Entity): $Vec3;
        calculateViewVector(arg0: number, arg1: number): $Vec3;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getMaxHeightFluidType(): $FluidType;
        getFluidJumpThreshold(): number;
        getRelativePortalPosition(arg0: $Direction$Axis_, arg1: $BlockUtil$FoundRectangle): $Vec3;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        getPreciseBodyRotation(arg0: number): number;
        checkSlowFallDistance(): void;
        getBoundingBoxForCulling(): $AABB;
        getCommandSenderWorld(): $Level;
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        setUUID(arg0: $UUID_): void;
        handler$jgh000$touhou_little_maid_spell$onSave(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hmk000$irons_spellbooks$isInvisibleTo(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        handler$hni000$irons_spellbooks$changeGlowOutline(arg0: $CallbackInfoReturnable<any>): void;
        handler$cgf000$l2library$overrideClientGlow_isCurrentlyGlowing(arg0: $CallbackInfoReturnable<any>): void;
        localvar$hbd000$kaleidoscope_nether$lavaWalker$enableLavaWalking(arg0: $Vec3_): $Vec3;
        removeTag(arg0: string): boolean;
        lookAt(arg0: $EntityAnchorArgument$Anchor_, arg1: $Vec3_): void;
        handler$bgg000$bagus_lib$init(arg0: $EntityType_<any>, arg1: $Level_, arg2: $CallbackInfo): void;
        getDismountLocationForPassenger(arg0: $LivingEntity): $Vec3;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        isControlledByLocalInstance(): boolean;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState, arg5: number): number;
        handler$fkg000$tofucraft$baseTick(arg0: $CallbackInfo): void;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        updateDynamicGameEventListener(arg0: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<$Fluid>, arg1: number): boolean;
        updateFluidHeightAndDoFluidPushing(): void;
        fudgePositionAfterSizeChange(arg0: $EntityDimensions_): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        handler$gid000$blueprint$read(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        getParts(): $PartEntity<never>[];
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        shouldRiderSit(): boolean;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        canRiderInteract(): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isMultipartEntity(): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        canStartSwimming(): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        isPushedByFluid(arg0: $FluidType_): boolean;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        getNbt(): $CompoundTag;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setX(x: number): void;
        setY(y: number): void;
        setZ(z: number): void;
        spawn(): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        getLevel(): $Level;
        getType(): string;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        getServer(): $MinecraftServer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        getScriptType(): $ScriptType;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        setMotionZ(z: number): void;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getMotionX(): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        setMotionX(x: number): void;
        setMotionY(y: number): void;
        getMotionZ(): number;
        getMotionY(): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setPlayingEndimation(arg0: $PlayableEndimation_): void;
        getPlayingEndimation(): $PlayableEndimation;
        isNoEndimationPlaying(): boolean;
        isEndimationPlaying(arg0: $PlayableEndimation_): boolean;
        endimateTick(): void;
        onEndimationEnd(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        onEndimationStart(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        resetEndimation(): void;
        getAnimationTick(): number;
        getEffectHandler(): $EndimationEffectHandler;
        setAnimationTick(arg0: number): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getYRot(): number;
        getXRot(): number;
        setXRot(arg0: number): void;
        setYRot(arg0: number): void;
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        invokeSetSharedFlag(arg0: number, arg1: boolean): void;
        transition$setRawPosition(arg0: $Vec3_): void;
        catnip$callSetLevel(arg0: $Level_): void;
        bookshelf$createHoverEvent(): $HoverEvent;
        invokeCanAddPassenger(arg0: $Entity): boolean;
        transition$getRawPosition(): $Vec3;
        litematica_setWorld(arg0: $Level_): void;
        setRemovalReason(arg0: $Entity$RemovalReason_): void;
        invokeCanRide(arg0: $Entity): boolean;
        tlmCanAddPassenger(arg0: $Entity): boolean;
        getFirstTick(): boolean;
        callGetTypeName(): $Component;
        maidspell$invokeUnsetRemoved(): void;
        litematica_readCustomDataFromNbt(arg0: $CompoundTag_): void;
        minihud_readCustomDataFromNbt(arg0: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get active(): boolean;
        get dirty(): boolean;
        get blockX(): number;
        get blockY(): number;
        get blockZ(): number;
        get uuid(): $UUID;
        get horizontalFacing(): $Direction;
        get tags(): $Set<string>;
        get onFire(): boolean;
        get onPos(): $BlockPos;
        get onRails(): boolean;
        get forward(): $Vec3;
        get freezing(): boolean;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get dimensionChangingDelay(): number;
        set sharedFlagOnFire(value: boolean);
        get suppressingBounce(): boolean;
        get ignoringBlockTriggers(): boolean;
        get nearestViewDirection(): $Direction;
        get passengersAndSelf(): $Stream<$Entity>;
        get indirectPassengers(): $Iterable<$Entity>;
        get steppingCarefully(): boolean;
        get selfAndPassengers(): $Stream<$Entity>;
        get pistonPushReaction(): $PushReaction;
        get controlledVehicle(): $Entity;
        get randomY(): number;
        get discrete(): boolean;
        get inLava(): boolean;
        get gravity(): number;
        get bbWidth(): number;
        get pickable(): boolean;
        get pushable(): boolean;
        get eyeY(): number;
        get team(): $PlayerTeam;
        get inLiquid(): boolean;
        get inWater(): boolean;
        get inWall(): boolean;
        get endimatedState(): $Endimatable$EndimatedState;
        get dirtyEntries(): $Set<any>;
        get underWater(): boolean;
        get spectator(): boolean;
        get maxAirSupply(): number;
        get percentFrozen(): number;
        get soundSource(): $SoundSource;
        get stringUuid(): string;
        get weaponItem(): $ItemStack;
        get bbHeight(): number;
        get inBlockState(): $BlockState;
        get maxFallDistance(): number;
        get effectiveAi(): boolean;
        get fullyFrozen(): boolean;
        get passenger(): boolean;
        get lookAngle(): $Vec3;
        get visuallySwimming(): boolean;
        get blockStateOn(): $BlockState;
        get entityData(): $SynchedEntityData;
        get encodeId(): string;
        get pickResult(): $ItemStack;
        get forgePersistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get positionCodec(): $VecDeltaCodec;
        get teamColor(): number;
        get onPortalCooldown(): boolean;
        get swimSplashSound(): $SoundEvent;
        get inWaterOrBubble(): boolean;
        get inWaterOrRain(): boolean;
        get crouching(): boolean;
        get onPosLegacy(): $BlockPos;
        get attachments(): $EntityAttachments;
        get pickRadius(): number;
        get rotationVector(): $Vec2;
        get firstPassenger(): $Entity;
        get descending(): boolean;
        get scoreboardName(): string;
        get visuallyCrawling(): boolean;
        get attackable(): boolean;
        get motionDirection(): $Direction;
        set levelCallback(value: $EntityInLevelCallback);
        get knownMovement(): $Vec3;
        get alwaysTicking(): boolean;
        get rootVehicle(): $Entity;
        get forcedVisible(): boolean;
        get baguController(): $BaguAnimationController<any>;
        get inWaterRainOrBubble(): boolean;
        get controllingPassenger(): $LivingEntity;
        get ticksRequiredToFreeze(): number;
        get maxHeightFluidType(): $FluidType;
        get fluidJumpThreshold(): number;
        get boundingBoxForCulling(): $AABB;
        get commandSenderWorld(): $Level;
        get persistentData(): $CompoundTag;
        set UUID(value: $UUID_);
        get controlledByLocalInstance(): boolean;
        get lightLevelDependentMagicValue(): number;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get feedbackDisplayName(): $Component;
        get parts(): $PartEntity<never>[];
        get multipartEntity(): boolean;
        get self(): boolean;
        get living(): boolean;
        get type(): string;
        get teamName(): string;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get player(): boolean;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get facing(): $Direction;
        get animal(): boolean;
        get monster(): boolean;
        get frame(): boolean;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        get peacefulCreature(): boolean;
        get noEndimationPlaying(): boolean;
        get effectHandler(): $EndimationEffectHandler;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get firstTick(): boolean;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $SpawnPlacements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_,  } | [predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(arg0: $Component_, arg1: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeKJS, $IRenderableEntity, $InjectedEntityTypeExtension, $EntityTypeExtension<any> {
        static getKey(arg0: $EntityType_<never>): $ResourceLocation;
        toShortString(): string;
        static create(arg0: $CompoundTag_, arg1: $Level_): ($Entity) | undefined;
        create(arg0: $Level_): T;
        create(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        is(arg0: $TagKey_<$EntityType<never>>): boolean;
        is(arg0: $HolderSet_<$EntityType<never>>): boolean;
        getDimensions(): $EntityDimensions;
        getDescription(): $Component;
        getWidth(): number;
        getCategory(): $MobCategory;
        requiredFeatures(): $FeatureFlagSet;
        getDescriptionId(): string;
        static appendCustomEntityStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        getHeight(): number;
        static by(arg0: $CompoundTag_): ($EntityType<never>) | undefined;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        canSummon(): boolean;
        kjs$getId(): string;
        fireImmune(): boolean;
        static byString(arg0: string): ($EntityType<never>) | undefined;
        kjs$getKey(): $ResourceKey<any>;
        kjs$asHolder(): $Holder<any>;
        updateInterval(): number;
        getSpawnAABB(arg0: number, arg1: number, arg2: number): $AABB;
        getBaseClass(): $Class<$Entity>;
        trackDeltas(): boolean;
        isBlockDangerous(arg0: $BlockState_): boolean;
        canSpawnFarFromPlayer(): boolean;
        clientTrackingRange(): number;
        static loadEntitiesRecursive(arg0: $List_<$Tag_>, arg1: $Level_): $Stream<$Entity>;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        static loadEntityRecursive(arg0: $CompoundTag_, arg1: $Level_, arg2: $Function_<$Entity, $Entity>): $Entity;
        chloride$whitelisted(): boolean;
        static createDefaultStackConfig<T extends $Entity>(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player): $Consumer<T>;
        static appendDefaultStackConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ServerLevel, arg2: $ItemStack_, arg3: $Player): $Consumer<T>;
        static updateCustomEntityTag(arg0: $Level_, arg1: $Player, arg2: $Entity, arg3: $CustomData): void;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        static appendCustomNameConfig<T extends $Entity>(arg0: $Consumer_<T>, arg1: $ItemStack_): $Consumer<T>;
        embPlus$resourceLocation(): $ResourceLocation;
        canSerialize(): boolean;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        tryCast(arg0: $Entity): T;
        spawn(arg0: $ServerLevel, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $MobSpawnType_, arg5: boolean, arg6: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $Consumer_<T>, arg2: $BlockPos_, arg3: $MobSpawnType_, arg4: boolean, arg5: boolean): T;
        spawn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $MobSpawnType_): T;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$holder(): $Holder<$EntityType<never>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        arch$registryName(): $ResourceLocation;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block_>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get dimensions(): $EntityDimensions;
        get description(): $Component;
        get width(): number;
        get category(): $MobCategory;
        get descriptionId(): string;
        get height(): number;
        get baseClass(): $Class<$Entity>;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
    }
    /**
     * Values that may be interpreted as {@link $EntityType}.
     */
    export type $EntityType_<T> = RegistryTypes.EntityType;
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { previous?: $Transformation, current?: $Transformation,  } | [previous?: $Transformation, current?: $Transformation, ];
    export class $SpawnPlacements implements $InvokerSpawnPlacements {
        /**
         * @deprecated
         */
        static register<T extends $Mob>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
        static checkSpawnRules<T extends $Entity>(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        static isSpawnPositionOk(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static fireSpawnPlacementEvent(): void;
        static hasPlacement(arg0: $EntityType_<never>): boolean;
        static getPlacementType(arg0: $EntityType_<never>): $SpawnPlacementType;
        static getHeightmapType(arg0: $EntityType_<never>): $Heightmap$Types;
        static register$zeta_$md$70d283$0(arg0: $EntityType_<any>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<any>): void;
        constructor();
    }
    export class $Display$FloatInterpolator {
        static constant(arg0: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(arg0: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(arg0: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable extends $IMixinLeashable {
        isLeashed(): boolean;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        getLeashData(): $Leashable$LeashData;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        mayBeLeashed(): boolean;
        dropLeash(arg0: boolean, arg1: boolean): void;
        canHaveALeashAttachedToIt(): boolean;
        leashTooFarBehaviour(): void;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
        get leashHolder(): $Entity;
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(arg0: number, arg1: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(arg0: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(arg0: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(arg0: $LevelReader, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
        adjustSpawnPosition(arg0: $LevelReader, arg1: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getLastAttacker(): $LivingEntity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get target(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
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
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export interface $EntityType extends RegistryMarked<RegistryTypes.EntityTypeTag, RegistryTypes.EntityType> {}
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(arg0: $LivingEntity): boolean;
        setOwnerUUID(arg0: $UUID_): void;
        isTame(): boolean;
        tryToTeleportToOwner(): void;
        shouldTryTeleportToOwner(): boolean;
        unableToMoveToOwner(): boolean;
        isInSittingPose(): boolean;
        getOwnerUUID(): $UUID;
        wantsToAttack(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        setInSittingPose(arg0: boolean): void;
        setOrderedToSit(arg0: boolean): void;
        canTeleportTo(arg0: $BlockPos_): boolean;
        isOrderedToSit(): boolean;
        tame(arg0: $Player): void;
        setTame(arg0: boolean, arg1: boolean): void;
        getOwner(): $LivingEntity;
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
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
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
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byFraction(arg0: number): $Crackiness$Level;
        byDamage(arg0: number, arg1: number): $Crackiness$Level;
        byDamage(arg0: $ItemStack_): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { player?: $UUID_, timestamp?: number,  } | [player?: $UUID_, timestamp?: number, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        getDespawnDistance(): number;
        static getExtensionInfo(): $ExtensionInfo;
        getNoDespawnDistance(): number;
        isFriendly(): boolean;
        getMaxInstancesPerChunk(): number;
        isPersistent(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        get despawnDistance(): number;
        static get extensionInfo(): $ExtensionInfo;
        get noDespawnDistance(): number;
        get friendly(): boolean;
        get maxInstancesPerChunk(): number;
        get persistent(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        textOpacity(): $Display$IntInterpolator;
        lineWidth(): number;
        backgroundColor(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_,  } | [lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, text?: $Component_, ];
    export class $Display$BlockDisplay extends $Display {
        getBlockState(): $BlockState;
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        setBlockState(arg0: $BlockState_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        canJump(): boolean;
        handleStopJump(): void;
        handleStartJump(arg0: number): void;
        getJumpCooldown(): number;
        onPlayerJump(arg0: number): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(arg0: $EntityType_<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        textRenderState(): $Display$TextDisplay$TextRenderState;
        cacheDisplay(arg0: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        static getAlign(arg0: number): $Display$TextDisplay$Align;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static FLAG_SHADOW: number;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static TAG_TEXT: string;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        static INITIAL_BACKGROUND: number;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        static DEFAULT_BB_HEIGHT: number;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FLAG_ALIGN_LEFT: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(arg0: string): $EquipmentSlot;
        limit(arg0: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        getIndex(): number;
        getIndex(arg0: number): number;
        static byName(arg0: string): $EquipmentSlot;
        isArmor(): boolean;
        getFilterFlag(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get armor(): boolean;
        get filterFlag(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(arg0: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        setItemSlot(arg0: $EquipmentSlot_, arg1: $ItemStack_): void;
    }
    export class $WalkAnimationState implements $AccessorWalkAnimationState {
        update(arg0: number, arg1: number): void;
        position(arg0: number): number;
        position(): number;
        setSpeed(arg0: number): void;
        speed(arg0: number): number;
        speed(): number;
        isMoving(): boolean;
        setPosition(arg0: number): void;
        setSpeedOld(arg0: number): void;
        getSpeedOld(): number;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number): $SlotAccess;
        static forContainer(arg0: $Container, arg1: number, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $Predicate_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(arg0: $LivingEntity, arg1: $EquipmentSlot_): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(arg0: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(arg0: $ServerPlayer): void;
        getDamage(): number;
        setDamage(arg0: number): void;
        getHitEntities(): $Stream<$Entity>;
        getBlocksSetOnFire(): number;
        handler$fki008$tofucraft$tick(arg0: $CallbackInfo): void;
        setVisualOnly(arg0: boolean): void;
        handler$glk000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        handler$cgg000$l2library$l2weaponry$spawnFire$cancelFire(arg0: number, arg1: $CallbackInfo): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        seed: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$LightningBolt>, arg1: $Level_);
        get hitEntities(): $Stream<$Entity>;
        get blocksSetOnFire(): number;
        set visualOnly(value: boolean);
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent_, big: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { small?: $SoundEvent_, big?: $SoundEvent_,  } | [small?: $SoundEvent_, big?: $SoundEvent_, ];
    export class $Display$ItemDisplay extends $Display {
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(arg0: $Entity): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(arg0: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsEvents(): boolean;
        emitsSounds(): boolean;
        emitsAnything(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        start(arg0: number): void;
        stop(): void;
        isStarted(): boolean;
        updateTime(arg0: number, arg1: number): void;
        ifStarted(arg0: $Consumer_<$AnimationState>): void;
        startIfStopped(arg0: number): void;
        getAccumulatedTime(): number;
        fastForward(arg0: number, arg1: number): void;
        animateWhen(arg0: boolean, arg1: number): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        shear(arg0: $SoundSource_): void;
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        getOwner(): $LivingEntity;
        setOwner(arg0: $LivingEntity): void;
        getDuration(): number;
        setDuration(arg0: number): void;
        setRadius(arg0: number): void;
        addEffect(arg0: $MobEffectInstance): void;
        getRadius(): number;
        getParticle(): $ParticleOptions;
        setRadiusOnUse(arg0: number): void;
        setDurationOnUse(arg0: number): void;
        getRadiusPerTick(): number;
        setParticle(arg0: $ParticleOptions_): void;
        getWaitTime(): number;
        getDurationOnUse(): number;
        getRadiusOnUse(): number;
        setPotionContents(arg0: $PotionContents_): void;
        setWaitTime(arg0: number): void;
        setRadiusPerTick(arg0: number): void;
        isWaiting(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        static DEFAULT_WIDTH: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        reapplicationDelay: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static HEIGHT: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$AreaEffectCloud>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        set potionContents(value: $PotionContents_);
        get waiting(): boolean;
    }
    export class $PathfinderMob extends $Mob {
        isPathFinding(): boolean;
        getWalkTargetValue(arg0: $BlockPos_): number;
        getWalkTargetValue(arg0: $BlockPos_, arg1: $LevelReader): number;
        isPanicking(): boolean;
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
        get pathFinding(): boolean;
        get panicking(): boolean;
    }
    export class $Display$RenderState extends $Record {
        transformation(): $Display$GenericInterpolator<$Transformation>;
        shadowStrength(): $Display$FloatInterpolator;
        shadowRadius(): $Display$FloatInterpolator;
        brightnessOverride(): number;
        billboardConstraints(): $Display$BillboardConstraints;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_,  } | [brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static unpack(arg0: number): $Set<$RelativeMovement>;
        static pack(arg0: $Set_<$RelativeMovement_>): number;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(arg0: $Level_, arg1: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        addParticles(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<$OminousItemSpawner>, arg1: $Level_);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> {
        static of<T extends $Entity>(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_): $EntityType$Builder<T>;
        build(arg0: string): $EntityType<T>;
        attach(arg0: $EntityAttachment_, arg1: number, arg2: number, arg3: number): $EntityType$Builder<T>;
        attach(arg0: $EntityAttachment_, arg1: $Vec3_): $EntityType$Builder<T>;
        requiredFeatures(...arg0: $FeatureFlag[]): $EntityType$Builder<T>;
        eyeHeight(arg0: number): $EntityType$Builder<T>;
        immuneTo(...arg0: $Block_[]): $EntityType$Builder<T>;
        sized(arg0: number, arg1: number): $EntityType$Builder<T>;
        noSummon(): $EntityType$Builder<T>;
        fireImmune(): $EntityType$Builder<T>;
        updateInterval(arg0: number): $EntityType$Builder<T>;
        ridingOffset(arg0: number): $EntityType$Builder<T>;
        nameTagOffset(arg0: number): $EntityType$Builder<T>;
        static createNothing<T extends $Entity>(arg0: $MobCategory_): $EntityType$Builder<T>;
        vehicleAttachment(arg0: $Vec3_): $EntityType$Builder<T>;
        spawnDimensionsScale(arg0: number): $EntityType$Builder<T>;
        canSpawnFarFromPlayer(): $EntityType$Builder<T>;
        clientTrackingRange(arg0: number): $EntityType$Builder<T>;
        passengerAttachments(...arg0: number[]): $EntityType$Builder<T>;
        passengerAttachments(...arg0: $Vec3_[]): $EntityType$Builder<T>;
        noSave(): $EntityType$Builder<T>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<T>;
        setUpdateInterval(arg0: number): $EntityType$Builder<T>;
        setTrackingRange(arg0: number): $EntityType$Builder<T>;
        set shouldReceiveVelocityUpdates(value: boolean);
        set trackingRange(value: number);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { width?: number, contents?: $FormattedCharSequence_,  } | [width?: number, contents?: $FormattedCharSequence_, ];
    export class $EquipmentTable extends $Record {
        slotDropChances(): $Map<$EquipmentSlot, number>;
        lootTable(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>,  } | [slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>, ];
    export class $PortalProcessor {
        hasExpired(): boolean;
        processPortalTeleportation(arg0: $ServerLevel, arg1: $Entity, arg2: boolean): boolean;
        updateEntryPosition(arg0: $BlockPos_): void;
        getPortalDestination(arg0: $ServerLevel, arg1: $Entity): $DimensionTransition;
        setAsInsidePortalThisTick(arg0: boolean): void;
        isSamePortal(arg0: $Portal_): boolean;
        isInsidePortalThisTick(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        constructor(arg0: $Portal_, arg1: $BlockPos_);
        set asInsidePortalThisTick(value: boolean);
        get insidePortalThisTick(): boolean;
        get portalLocalTransition(): $Portal$Transition;
        get entryPosition(): $BlockPos;
        get portalTime(): number;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static ignoresLightRequirements(arg0: $MobSpawnType_): boolean;
        static isSpawner(arg0: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity {
        getValue(): number;
        static award(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): void;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        static getExperienceValue(arg0: number): number;
        static tryMergeToExisting(arg0: $ServerLevel, arg1: $Vec3_, arg2: number): boolean;
        repairPlayerItems(arg0: $ServerPlayer, arg1: number): number;
        getIcon(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        count: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        value: number;
        static DEFAULT_BB_HEIGHT: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $EntityType_<$ExperienceOrb>, arg1: $Level_);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EntityDimensions extends $Record {
        scale(arg0: number, arg1: number): $EntityDimensions;
        scale(arg0: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(arg0: number, arg1: number): $EntityDimensions;
        width(): number;
        withAttachments(arg0: $EntityAttachments$Builder): $EntityDimensions;
        height(): number;
        eyeHeight(): number;
        makeBoundingBox(arg0: number, arg1: number, arg2: number): $AABB;
        makeBoundingBox(arg0: $Vec3_): $AABB;
        withEyeHeight(arg0: number): $EntityDimensions;
        attachments(): $EntityAttachments;
        static scalable(arg0: number, arg1: number): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number, eyeHeight?: number,  } | [height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number, eyeHeight?: number, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(arg0: number, arg1: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getOpposite(): $HumanoidArm;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get opposite(): $HumanoidArm;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(arg0: $EntityType_<T>, arg1: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldSave(): boolean;
        shouldDestroy(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        isSaddled(): boolean;
        isSaddleable(): boolean;
        equipSaddle(arg0: $ItemStack_, arg1: $SoundSource_): void;
        getSaddleSoundEvent(): $SoundEvent;
        get saddled(): boolean;
        get saddleable(): boolean;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(arg0: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        static bySlot(arg0: $EquipmentSlot_): $EquipmentSlotGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor {
        calculateInterpolationProgress(arg0: number): number;
        renderState(): $Display$RenderState;
        invokeSetHeight(arg0: number): void;
        invokeSetWidth(arg0: number): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        static TAG_BRIGHTNESS: string;
        static NO_BRIGHTNESS_OVERRIDE: number;
        tickCount: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static TAG_WIDTH: string;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_TRANSFORMATION: string;
        static TAG_HEIGHT: string;
        static TAG_SHADOW_RADIUS: string;
        level: $Level;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static TAG_SHADOW_STRENGTH: string;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        static TAG_VIEW_RANGE: string;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        BAGU_ANIMATION_CONTROLLER: $BaguAnimationController<any>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $MobAccessor$1, $EntityDropChanceAccessor, $IMixinMobEntity, $MobAccessor {
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        redirect$goo000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        restrictTo(arg0: $BlockPos_, arg1: number): void;
        isWearingBodyArmor(): boolean;
        isBodyArmorItem(arg0: $ItemStack_): boolean;
        setBodyArmorItem(arg0: $ItemStack_): void;
        setGuaranteedDrop(arg0: $EquipmentSlot_): void;
        isLeftHanded(): boolean;
        removeWhenFarAway(arg0: number): boolean;
        getMoveControl(): $MoveControl;
        getJumpControl(): $JumpControl;
        onPathfindingStart(): void;
        onPathfindingDone(): void;
        getBodyArmorItem(): $ItemStack;
        getLookControl(): $LookControl;
        setCanPickUpLoot(arg0: boolean): void;
        canPickUpLoot(): boolean;
        setLeftHanded(arg0: boolean): void;
        stopInPlace(): void;
        wantsToPickUp(arg0: $ItemStack_): boolean;
        canHoldItem(arg0: $ItemStack_): boolean;
        getSpawnType(): $MobSpawnType;
        setSpawnCancelled(arg0: boolean): void;
        getRestrictCenter(): $BlockPos;
        setDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        clearRestriction(): void;
        getLeashData(): $Leashable$LeashData;
        setLeashData(arg0: $Leashable$LeashData): void;
        canBeLeashed(): boolean;
        getHeadRotSpeed(): number;
        getMaxHeadYRot(): number;
        hasRestriction(): boolean;
        checkSpawnRules(arg0: $LevelAccessor, arg1: $MobSpawnType_): boolean;
        setAggressive(arg0: boolean): void;
        getRestrictRadius(): number;
        isAggressive(): boolean;
        removeAllGoals(arg0: $Predicate_<$Goal>): void;
        removeFreeWill(): void;
        equip(arg0: $EquipmentTable_): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>): void;
        spawnAnim(): void;
        dropLeash(arg0: boolean, arg1: boolean): void;
        setBaby(arg0: boolean): void;
        isPersistenceRequired(): boolean;
        isWithinMeleeAttackRange(arg0: $LivingEntity): boolean;
        setPathfindingMalus(arg0: $PathType_, arg1: number): void;
        checkSpawnObstruction(arg0: $LevelReader): boolean;
        equipItemIfPossible(arg0: $ItemStack_): $ItemStack;
        requiresCustomPersistence(): boolean;
        getMaxSpawnClusterSize(): number;
        isMaxGroupSizeReached(arg0: number): boolean;
        getPathfindingMalus(arg0: $PathType_): number;
        canFireProjectileWeapon(arg0: $ProjectileWeaponItem): boolean;
        getAmbientSoundInterval(): number;
        dropPreservedEquipment(): void;
        dropPreservedEquipment(arg0: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        static getEquipmentForSlot(arg0: $EquipmentSlot_, arg1: number): $Item;
        static createMobAttributes(): $AttributeSupplier$Builder;
        canReplaceEqualItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isWithinRestriction(arg0: $BlockPos_): boolean;
        isWithinRestriction(): boolean;
        leashTooFarBehaviour(): void;
        setNoAi(arg0: boolean): void;
        isNoAi(): boolean;
        getMaxHeadXRot(): number;
        static checkMobSpawnRules(arg0: $EntityType_<$Mob>, arg1: $LevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource): boolean;
        /**
         * @deprecated
         */
        finalizeSpawn(arg0: $ServerLevelAccessor, arg1: $DifficultyInstance, arg2: $MobSpawnType_, arg3: $SpawnGroupData): $SpawnGroupData;
        isSpawnCancelled(): boolean;
        playAmbientSound(): void;
        setYya(arg0: number): void;
        setXxa(arg0: number): void;
        setZza(arg0: number): void;
        getSensing(): $Sensing;
        ate(): void;
        getNavigation(): $PathNavigation;
        handler$jgp000$touhou_little_maid_spell$preventMaidConversion(arg0: $EntityType_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        setPersistenceRequired(): void;
        lookAt(arg0: $Entity, arg1: number, arg2: number): void;
        convertTo<T extends $Mob>(arg0: $EntityType_<T>, arg1: boolean): T;
        modifyExpressionValue$idj000$create$mobRidingContraptionsMaintainTheirAttackBox(arg0: $Entity): $Entity;
        resolveSlot(arg0: $ItemStack_, arg1: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $ResourceKey_<$LootTable>, arg1: $LootParams, arg2: $Map_<$EquipmentSlot_, number>): void;
        equip(arg0: $EquipmentTable_, arg1: $LootParams): void;
        isLeashed(): boolean;
        readLeashData(arg0: $CompoundTag_): $Leashable$LeashData;
        writeLeashData(arg0: $CompoundTag_, arg1: $Leashable$LeashData): void;
        mayBeLeashed(): boolean;
        canHaveALeashAttachedToIt(): boolean;
        handleLeashAtDistance(arg0: $Entity, arg1: number): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        closeRangeLeashBehaviour(arg0: $Entity): void;
        elasticRangeLeashBehaviour(arg0: $Entity, arg1: number): void;
        setLeashedTo(arg0: $Entity, arg1: boolean): void;
        getLeashHolder(): $Entity;
        getGoalSelector(): $GoalSelector;
        minihud_getGoalSelector(): $GoalSelector;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
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
        get wearingBodyArmor(): boolean;
        set guaranteedDrop(value: $EquipmentSlot_);
        get moveControl(): $MoveControl;
        get jumpControl(): $JumpControl;
        get lookControl(): $LookControl;
        get spawnType(): $MobSpawnType;
        get restrictCenter(): $BlockPos;
        get headRotSpeed(): number;
        get maxHeadYRot(): number;
        get restrictRadius(): number;
        set baby(value: boolean);
        get maxSpawnClusterSize(): number;
        get ambientSoundInterval(): number;
        get maxHeadXRot(): number;
        get sensing(): $Sensing;
        get navigation(): $PathNavigation;
        get leashed(): boolean;
        set delayedLeashHolderId(value: number);
        get leashHolder(): $Entity;
    }
    export class $Leashable$LeashData {
        setLeashHolder(arg0: $Entity): void;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(arg0: $Entity, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        scale(arg0: number, arg1: number, arg2: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        static createDefault(arg0: number, arg1: number): $EntityAttachments;
        getClamped(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
        getNullable(arg0: $EntityAttachment_, arg1: number, arg2: number): $Vec3;
    }
    export class $EntitySelector {
        static withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): $Predicate<$Entity>;
        static pushableBy(arg0: $Entity): $Predicate<$Entity>;
        static notRiding(arg0: $Entity): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob implements $IMixinPassiveEntity {
        getAge(): number;
        setAge(arg0: number): void;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getBreedOffspring(arg0: $ServerLevel, arg1: $AgeableMob): $AgeableMob;
        canBreed(): boolean;
        ageUp(arg0: number): void;
        ageUp(arg0: number, arg1: boolean): void;
        minihud_getRealBreedingAge(): number;
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
    }
    export class $ItemBasedSteering {
        setSaddle(arg0: boolean): void;
        onSynced(): void;
        hasSaddle(): boolean;
        tickBoost(): void;
        boost(arg0: $RandomSource): boolean;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        boostFactor(): number;
        constructor(arg0: $SynchedEntityData, arg1: $EntityDataAccessor_<number>, arg2: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        getTarget(): $LivingEntity;
        setTarget(arg0: $LivingEntity): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        playerDied(arg0: $Player): void;
        canAttack(arg0: $LivingEntity): boolean;
        getLastHurtByMob(): $LivingEntity;
        setLastHurtByMob(arg0: $LivingEntity): void;
        setLastHurtByPlayer(arg0: $Player): void;
        stopBeingAngry(): void;
        getRemainingPersistentAngerTime(): number;
        readPersistentAngerSaveData(arg0: $Level_, arg1: $CompoundTag_): void;
        setRemainingPersistentAngerTime(arg0: number): void;
        isAngryAt(arg0: $LivingEntity): boolean;
        isAngry(): boolean;
        addPersistentAngerSaveData(arg0: $CompoundTag_): void;
        getPersistentAngerTarget(): $UUID;
        setPersistentAngerTarget(arg0: $UUID_): void;
        isAngryAtAllPlayers(arg0: $Level_): boolean;
        startPersistentAngerTimer(): void;
        updatePersistentAnger(arg0: $ServerLevel, arg1: boolean): void;
        set lastHurtByPlayer(value: $Player);
        get angry(): boolean;
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        getGroupSize(): number;
        isShouldSpawnBaby(): boolean;
        getBabySpawnChance(): number;
        increaseGroupSizeByOne(): void;
        constructor(arg0: number);
        constructor(arg0: boolean);
        get groupSize(): number;
        get shouldSpawnBaby(): boolean;
        get babySpawnChance(): number;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(arg0: $ReputationEventType, arg1: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemTransform(): $ItemDisplayContext;
        itemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_,  } | [itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_, ];
}
