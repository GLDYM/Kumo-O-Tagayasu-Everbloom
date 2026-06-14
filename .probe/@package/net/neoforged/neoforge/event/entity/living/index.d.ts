import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EntityType, $SpawnGroupData, $Entity, $EquipmentSlot, $LivingEntity, $AgeableMob, $Mob, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $ImmunityData, $ImmunityDataExtra } from "@package/dev/xkmc/l2damagetracker/contents/immunity";
import { $List, $EnumMap, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_, $DifficultyInstance } from "@package/net/minecraft/world";
import { $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $ServerLevelAccessor, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $IReductionFunction_, $DamageContainer$Reduction_, $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/event/entity/living" {
    export class $MobSpawnEvent extends $EntityEvent {
        getLevel(): $ServerLevelAccessor;
        getY(): number;
        getZ(): number;
        getX(): number;
        get level(): $ServerLevelAccessor;
        get y(): number;
        get z(): number;
        get x(): number;
    }
    export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent {
        isDrowning(): boolean;
        getBubbleCount(): number;
        getDamageAmount(): number;
        setDrowning(arg0: boolean): void;
        setDamageAmount(arg0: number): void;
        setBubbleCount(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
        constructor(arg0: $LivingEntity);
    }
    export class $LivingEntityUseItemEvent extends $LivingEvent {
        getDuration(): number;
        getItem(): $ItemStack;
        getHand(): $InteractionHand;
        setDuration(arg0: number): void;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
    }
    export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getDrops(): $Collection<$ItemEntity>;
        isRecentlyHit(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: boolean);
        get source(): $DamageSource;
        get drops(): $Collection<$ItemEntity>;
        get recentlyHit(): boolean;
    }
    export class $LivingChangeTargetEvent$LivingTargetType extends $Enum<$LivingChangeTargetEvent$LivingTargetType> implements $LivingChangeTargetEvent$ILivingTargetType {
        static values(): $LivingChangeTargetEvent$LivingTargetType[];
        static valueOf(arg0: string): $LivingChangeTargetEvent$LivingTargetType;
        static MOB_TARGET: $LivingChangeTargetEvent$LivingTargetType;
        static BEHAVIOR_TARGET: $LivingChangeTargetEvent$LivingTargetType;
    }
    /**
     * Values that may be interpreted as {@link $LivingChangeTargetEvent$LivingTargetType}.
     */
    export type $LivingChangeTargetEvent$LivingTargetType_ = "mob_target" | "behavior_target";
    export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
        setResult(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result_): void;
        getLevel(): $ServerLevelAccessor;
        getResult(): $MobSpawnEvent$SpawnPlacementCheck$Result;
        getSpawnType(): $MobSpawnType;
        getPos(): $BlockPos;
        getRandom(): $RandomSource;
        getEntityType(): $EntityType<never>;
        getDefaultResult(): boolean;
        getPlacementCheckResult(): boolean;
        constructor(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean);
        get level(): $ServerLevelAccessor;
        get spawnType(): $MobSpawnType;
        get pos(): $BlockPos;
        get random(): $RandomSource;
        get entityType(): $EntityType<never>;
        get defaultResult(): boolean;
        get placementCheckResult(): boolean;
    }
    export class $LivingGetProjectileEvent extends $LivingEvent {
        getProjectileItemStack(): $ItemStack;
        setProjectileItemStack(arg0: $ItemStack_): void;
        getProjectileWeaponItemStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_);
        get projectileWeaponItemStack(): $ItemStack;
    }
    export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get source(): $DamageSource;
    }
    export class $LivingSwapItemsEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingUseTotemEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getTotem(): $ItemStack;
        getHandHolding(): $InteractionHand;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $ItemStack_, arg3: $InteractionHand_);
        get source(): $DamageSource;
        get totem(): $ItemStack;
        get handHolding(): $InteractionHand;
    }
    export class $MobSpawnEvent$SpawnPlacementCheck$Result extends $Enum<$MobSpawnEvent$SpawnPlacementCheck$Result> {
        static values(): $MobSpawnEvent$SpawnPlacementCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$SpawnPlacementCheck$Result;
        static SUCCEED: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static DEFAULT: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static FAIL: $MobSpawnEvent$SpawnPlacementCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$SpawnPlacementCheck$Result}.
     */
    export type $MobSpawnEvent$SpawnPlacementCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingEquipmentChangeEvent extends $LivingEvent {
        getSlot(): $EquipmentSlot;
        getFrom(): $ItemStack;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $ItemStack_);
        get slot(): $EquipmentSlot;
        get from(): $ItemStack;
        get to(): $ItemStack;
    }
    export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        /**
         * @deprecated
         */
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: number);
    }
    export class $LivingConversionEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $MobEffectEvent$Applicable extends $MobEffectEvent {
        setResult(arg0: $MobEffectEvent$Applicable$Result_): void;
        getResult(): $MobEffectEvent$Applicable$Result;
        getApplicationResult(): boolean;
        getEffectSource(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $Entity);
        get applicationResult(): boolean;
        get effectSource(): $Entity;
    }
    export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getNewDamage(): number;
        setNewDamage(arg0: number): void;
        getOriginalDamage(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get container(): $DamageContainer;
        get originalDamage(): number;
    }
    export class $ArmorHurtEvent$ArmorEntry {
        originalDamage: number;
        newDamage: number;
        armorItemStack: $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $BabyEntitySpawnEvent extends $Event implements $ICancellableEvent {
        getChild(): $AgeableMob;
        getCausedByPlayer(): $Player;
        setChild(arg0: $AgeableMob): void;
        getParentA(): $Mob;
        getParentB(): $Mob;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Mob, arg1: $Mob, arg2: $AgeableMob);
        get causedByPlayer(): $Player;
        get parentA(): $Mob;
        get parentB(): $Mob;
    }
    export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $MobDespawnEvent$Result extends $Enum<$MobDespawnEvent$Result> {
        static values(): $MobDespawnEvent$Result[];
        static valueOf(arg0: string): $MobDespawnEvent$Result;
        static DENY: $MobDespawnEvent$Result;
        static ALLOW: $MobDespawnEvent$Result;
        static DEFAULT: $MobDespawnEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobDespawnEvent$Result}.
     */
    export type $MobDespawnEvent$Result_ = "allow" | "default" | "deny";
    export class $LivingEvent extends $EntityEvent {
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent implements $ICancellableEvent {
        setItemSwappedToMainHand(arg0: $ItemStack_): void;
        setItemSwappedToOffHand(arg0: $ItemStack_): void;
        getItemSwappedToMainHand(): $ItemStack;
        getItemSwappedToOffHand(): $ItemStack;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity);
    }
    export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent {
        getStrength(): number;
        setStrength(arg0: number): void;
        getRatioX(): number;
        getRatioZ(): number;
        getOriginalStrength(): number;
        setRatioX(arg0: number): void;
        setRatioZ(arg0: number): void;
        getOriginalRatioZ(): number;
        getOriginalRatioX(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get originalStrength(): number;
        get originalRatioZ(): number;
        get originalRatioX(): number;
    }
    export class $MobSplitEvent extends $Event implements $ICancellableEvent {
        getParent(): $Mob;
        getChildren(): $List<$Mob>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $List_<$Mob>);
        get parent(): $Mob;
        get children(): $List<$Mob>;
    }
    export class $SpawnClusterSizeEvent extends $LivingEvent {
        getSize(): number;
        setSize(arg0: number): void;
        constructor(arg0: $Mob);
    }
    export class $MobEffectEvent extends $LivingEvent {
        getEffectInstance(): $MobEffectInstance;
        get effectInstance(): $MobEffectInstance;
    }
    export class $FinalizeSpawnEvent extends $MobSpawnEvent implements $ICancellableEvent {
        getSpawnType(): $MobSpawnType;
        setSpawnCancelled(arg0: boolean): void;
        getSpawner(): $Either<$BlockEntity, $Entity>;
        setDifficulty(arg0: $DifficultyInstance): void;
        setSpawnData(arg0: $SpawnGroupData): void;
        getSpawnData(): $SpawnGroupData;
        isSpawnCancelled(): boolean;
        getDifficulty(): $DifficultyInstance;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: number, arg3: number, arg4: number, arg5: $DifficultyInstance, arg6: $MobSpawnType_, arg7: $SpawnGroupData, arg8: $Either<$BlockEntity, $Entity>);
        get spawnType(): $MobSpawnType;
        get spawner(): $Either<$BlockEntity, $Entity>;
    }
    export class $LivingHealEvent extends $LivingEvent implements $ICancellableEvent {
        getAmount(): number;
        setAmount(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $LivingConversionEvent$Post extends $LivingConversionEvent {
        getOutcome(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity);
        get outcome(): $LivingEntity;
    }
    export class $EnderManAngerEvent extends $LivingEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EnderMan, arg1: $Player);
        get player(): $Player;
    }
    export class $MobDespawnEvent extends $MobSpawnEvent {
        setResult(arg0: $MobDespawnEvent$Result_): void;
        getResult(): $MobDespawnEvent$Result;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor);
    }
    export class $MobEffectEvent$Applicable$Result extends $Enum<$MobEffectEvent$Applicable$Result> {
        static values(): $MobEffectEvent$Applicable$Result[];
        static valueOf(arg0: string): $MobEffectEvent$Applicable$Result;
        static DO_NOT_APPLY: $MobEffectEvent$Applicable$Result;
        static APPLY: $MobEffectEvent$Applicable$Result;
        static DEFAULT: $MobEffectEvent$Applicable$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectEvent$Applicable$Result}.
     */
    export type $MobEffectEvent$Applicable$Result_ = "apply" | "default" | "do_not_apply";
    export class $LivingFallEvent extends $LivingEvent implements $ICancellableEvent {
        setDamageMultiplier(arg0: number): void;
        getDamageMultiplier(): number;
        getDistance(): number;
        setDistance(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number);
    }
    export class $MobEffectEvent$Added extends $MobEffectEvent {
        getOldEffectInstance(): $MobEffectInstance;
        getEffectSource(): $Entity;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $MobEffectInstance, arg3: $Entity);
        get oldEffectInstance(): $MobEffectInstance;
        get effectSource(): $Entity;
    }
    export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
        getVisibilityModifier(): number;
        getLookingEntity(): $Entity;
        modifyVisibility(arg0: number): void;
        constructor(arg0: $LivingEntity, arg1: $Entity, arg2: number);
        get visibilityModifier(): number;
        get lookingEntity(): $Entity;
    }
    export class $LivingBreatheEvent extends $LivingEvent {
        getConsumeAirAmount(): number;
        setConsumeAirAmount(arg0: number): void;
        canBreathe(): boolean;
        getRefillAirAmount(): number;
        setCanBreathe(arg0: boolean): void;
        setRefillAirAmount(arg0: number): void;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
    }
    export class $MobSpawnEvent$PositionCheck$Result extends $Enum<$MobSpawnEvent$PositionCheck$Result> {
        static values(): $MobSpawnEvent$PositionCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$PositionCheck$Result;
        static SUCCEED: $MobSpawnEvent$PositionCheck$Result;
        static DEFAULT: $MobSpawnEvent$PositionCheck$Result;
        static FAIL: $MobSpawnEvent$PositionCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$PositionCheck$Result}.
     */
    export type $MobSpawnEvent$PositionCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingConversionEvent$Pre extends $LivingConversionEvent implements $ICancellableEvent {
        getOutcome(): $EntityType<$LivingEntity>;
        setConversionTimer(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>);
        get outcome(): $EntityType<$LivingEntity>;
        set conversionTimer(value: number);
    }
    export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent, $ImmunityDataExtra {
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        addReductionModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        setInvulnerabilityTicks(arg0: number): void;
        l2damagetracker$getExtra(): $ImmunityData;
        getAmount(): number;
        setAmount(arg0: number): void;
        getOriginalAmount(): number;
        setCanceled(arg0: boolean): void;
        handler$epa001$l2damagetracker$setInvulnerable$log(arg0: boolean, arg1: $CallbackInfo): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get container(): $DamageContainer;
        set invulnerabilityTicks(value: number);
        get originalAmount(): number;
    }
    export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent {
        getDroppedExperience(): number;
        setDroppedExperience(arg0: number): void;
        getOriginalExperience(): number;
        getAttackingPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Player, arg2: number);
        get originalExperience(): number;
        get attackingPlayer(): $Player;
    }
    export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent {
        getTamer(): $Player;
        getAnimal(): $Animal;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Animal, arg1: $Player);
        get tamer(): $Player;
        get animal(): $Animal;
    }
    export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent {
        getTargetType(): $LivingChangeTargetEvent$ILivingTargetType;
        getNewAboutToBeSetTarget(): $LivingEntity;
        setNewAboutToBeSetTarget(arg0: $LivingEntity): void;
        getOriginalAboutToBeSetTarget(): $LivingEntity;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType);
        get targetType(): $LivingChangeTargetEvent$ILivingTargetType;
        get originalAboutToBeSetTarget(): $LivingEntity;
    }
    export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent {
        getEffect(): $Holder<$MobEffect>;
        getCure(): $EffectCure;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure);
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure);
        get effect(): $Holder<$MobEffect>;
        get cure(): $EffectCure;
    }
    export class $EffectParticleModificationEvent extends $LivingEvent {
        setVisible(arg0: boolean): void;
        getEffect(): $MobEffectInstance;
        getOriginalParticleOptions(): $ParticleOptions;
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        setParticleOptions(arg0: $ParticleOptions_): void;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
        get effect(): $MobEffectInstance;
        get originalParticleOptions(): $ParticleOptions;
    }
    export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingDamageEvent$Post extends $LivingDamageEvent {
        getSource(): $DamageSource;
        getPostAttackInvulnerabilityTicks(): number;
        getNewDamage(): number;
        getBlockedDamage(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        getShieldDamage(): number;
        getOriginalDamage(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get source(): $DamageSource;
        get postAttackInvulnerabilityTicks(): number;
        get newDamage(): number;
        get blockedDamage(): number;
        get shieldDamage(): number;
        get originalDamage(): number;
    }
    export class $LivingDestroyBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getState(): $BlockState;
        getPos(): $BlockPos;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $LivingChangeTargetEvent$ILivingTargetType {
    }
    export interface $LivingChangeTargetEvent$ILivingTargetType {
    }
    export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getBlocked(): boolean;
        getOriginalBlockedDamage(): number;
        getDamageContainer(): $DamageContainer;
        getBlockedDamage(): number;
        shieldDamage(): number;
        setBlockedDamage(arg0: number): void;
        setBlocked(arg0: boolean): void;
        getOriginalBlock(): boolean;
        getDamageSource(): $DamageSource;
        setShieldDamage(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer, arg2: boolean);
        get originalBlockedDamage(): number;
        get damageContainer(): $DamageContainer;
        get originalBlock(): boolean;
        get damageSource(): $DamageSource;
    }
    export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
        setResultStack(arg0: $ItemStack_): void;
        getResultStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_);
    }
    export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent {
        getNewDamage(arg0: $EquipmentSlot_): number;
        setNewDamage(arg0: $EquipmentSlot_, arg1: number): void;
        getArmorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        getDamageSource(): $DamageSource;
        getOriginalDamage(arg0: $EquipmentSlot_): number;
        getArmorItemStack(arg0: $EquipmentSlot_): $ItemStack;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EnumMap<$EquipmentSlot_, $ArmorHurtEvent$ArmorEntry>, arg1: $LivingEntity, arg2: $DamageSource_);
        get armorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        get damageSource(): $DamageSource;
    }
    export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
        setResult(arg0: $MobSpawnEvent$PositionCheck$Result_): void;
        getResult(): $MobSpawnEvent$PositionCheck$Result;
        getSpawnType(): $MobSpawnType;
        getSpawner(): $BaseSpawner;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BaseSpawner);
        get spawnType(): $MobSpawnType;
        get spawner(): $BaseSpawner;
    }
    export class $LivingDamageEvent extends $LivingEvent {
    }
    export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
    }
}
