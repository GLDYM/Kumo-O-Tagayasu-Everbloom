import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $RecastInstance, $RecastResult_ } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $List } from "@package/java/util";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Holder_ } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Comparable } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $SpellDamageSource } from "@package/io/redspace/ironsspellbooks/damage";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AnimationHolder } from "@package/io/redspace/ironsspellbooks/api/util";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DefaultConfig } from "@package/io/redspace/ironsspellbooks/api/config";
import { $Vector3f } from "@package/org/joml";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/io/redspace/ironsspellbooks/api/spells" {
    export class $SchoolType {
        getId(): $ResourceLocation;
        getDisplayName(): $Component;
        getDamageType(): $ResourceKey<$DamageType>;
        getResistanceFor(arg0: $LivingEntity): number;
        getPowerFor(arg0: $LivingEntity): number;
        getCastSound(): $SoundEvent;
        getTargetingColor(): $Vector3f;
        isFocus(arg0: $ItemStack_): boolean;
        getFocus(): $TagKey<$Item>;
        constructor(arg0: $ResourceLocation_, arg1: $TagKey_<$Item>, arg2: $Component_, arg3: $Holder_<$Attribute>, arg4: $Holder_<$Attribute>, arg5: $Holder_<$SoundEvent>, arg6: $ResourceKey_<$DamageType>, arg7: boolean, arg8: boolean);
        constructor(arg0: $ResourceLocation_, arg1: $TagKey_<$Item>, arg2: $Component_, arg3: $Holder_<$Attribute>, arg4: $Holder_<$Attribute>, arg5: $Holder_<$SoundEvent>, arg6: $ResourceKey_<$DamageType>);
        get id(): $ResourceLocation;
        get displayName(): $Component;
        get damageType(): $ResourceKey<$DamageType>;
        get castSound(): $SoundEvent;
        get targetingColor(): $Vector3f;
    }
    /**
     * Values that may be interpreted as {@link $SchoolType}.
     */
    export type $SchoolType_ = RegistryTypes.IronsSpellbooksSchools;
    export class $SpellData implements $Comparable<$SpellData> {
        compareTo(arg0: $SpellData): number;
        isLocked(): boolean;
        getDisplayName(): $Component;
        getLevel(): number;
        canRemove(): boolean;
        getSpell(): $AbstractSpell;
        getRarity(): $SpellRarity;
        static writeToBuffer(arg0: $FriendlyByteBuf, arg1: $SpellData): void;
        static readFromBuffer(arg0: $FriendlyByteBuf): $SpellData;
        static CODEC: $Codec<$SpellData>;
        static SPELL_ID: string;
        static SPELL_LEVEL: string;
        static EMPTY: $SpellData;
        static SPELL_LOCKED: string;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: boolean);
        constructor(arg0: $AbstractSpell_, arg1: number);
        constructor(arg0: $AbstractSpell_, arg1: number, arg2: boolean);
        get locked(): boolean;
        get displayName(): $Component;
        get level(): number;
        get spell(): $AbstractSpell;
        get rarity(): $SpellRarity;
    }
    export class $SpellRarity extends $Enum<$SpellRarity> implements $StringRepresentable {
        static values(): $SpellRarity[];
        static valueOf(arg0: string): $SpellRarity;
        getValue(): number;
        getDisplayName(): $MutableComponent;
        static getRarityConfig(): $List<number>;
        static getRawRarityConfig(): $List<number>;
        getChatFormatting(): $ChatFormatting;
        compareRarity(arg0: $SpellRarity_): number;
        getSerializedName(): string;
        static rarityTest(): void;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SpellRarity>;
        static RARE: $SpellRarity;
        static EPIC: $SpellRarity;
        static UNCOMMON: $SpellRarity;
        static COMMON: $SpellRarity;
        static LEGENDARY: $SpellRarity;
        get value(): number;
        get displayName(): $MutableComponent;
        static get rarityConfig(): $List<number>;
        static get rawRarityConfig(): $List<number>;
        get chatFormatting(): $ChatFormatting;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpellRarity}.
     */
    export type $SpellRarity_ = "common" | "uncommon" | "rare" | "epic" | "legendary";
    export interface $AbstractSpell extends RegistryMarked<RegistryTypes.IronsSpellbooksSpellsTag, RegistryTypes.IronsSpellbooksSpells> {}
    export class $CastResult {
        isSuccess(): boolean;
        type: $CastResult$Type;
        message: $Component;
        constructor(arg0: $CastResult$Type_);
        constructor(arg0: $CastResult$Type_, arg1: $Component_);
        get success(): boolean;
    }
    export class $CastResult$Type extends $Enum<$CastResult$Type> {
        static values(): $CastResult$Type[];
        static valueOf(arg0: string): $CastResult$Type;
        static SUCCESS: $CastResult$Type;
        static FAILURE: $CastResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $CastResult$Type}.
     */
    export type $CastResult$Type_ = "success" | "failure";
    export class $ICastData {
    }
    export interface $ICastData {
        reset(): void;
    }
    /**
     * Values that may be interpreted as {@link $ICastData}.
     */
    export type $ICastData_ = (() => void);
    export class $CastSource extends $Enum<$CastSource> {
        static values(): $CastSource[];
        static valueOf(arg0: string): $CastSource;
        consumesMana(): boolean;
        respectsCooldown(): boolean;
        static MOB: $CastSource;
        static SCROLL: $CastSource;
        static SWORD: $CastSource;
        static COMMAND: $CastSource;
        static SPELLBOOK: $CastSource;
        static NONE: $CastSource;
    }
    /**
     * Values that may be interpreted as {@link $CastSource}.
     */
    export type $CastSource_ = "spellbook" | "scroll" | "sword" | "mob" | "command" | "none";
    export interface $SchoolType extends RegistryMarked<RegistryTypes.IronsSpellbooksSchoolsTag, RegistryTypes.IronsSpellbooksSchools> {}
    export class $ICastDataSerializable {
    }
    export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<$CompoundTag> {
    }
    export class $AbstractSpell {
        isEnabled(): boolean;
        getDisplayName(arg0: $Player): $MutableComponent;
        getMaxLevel(): number;
        getMinLevel(): number;
        castSpell(arg0: $Level_, arg1: number, arg2: $ServerPlayer, arg3: $CastSource_, arg4: boolean): void;
        getCastType(): $CastType;
        onServerPreCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): void;
        getCastFinishSound(): ($SoundEvent) | undefined;
        getRecastCount(arg0: number, arg1: $LivingEntity): number;
        getSpellResource(): $ResourceLocation;
        getCastTime(arg0: number): number;
        getManaCost(arg0: number): number;
        canBeCastedBy(arg0: number, arg1: $CastSource_, arg2: $MagicData, arg3: $Player): $CastResult;
        onRecastFinished(arg0: $ServerPlayer, arg1: $RecastInstance, arg2: $RecastResult_, arg3: $ICastDataSerializable): void;
        onClientPreCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $InteractionHand_, arg4: $MagicData): void;
        allowCrafting(): boolean;
        getSpellPower(arg0: number, arg1: $Entity): number;
        getDefaultConfig(): $DefaultConfig;
        getCastStartSound(): ($SoundEvent) | undefined;
        stopSoundOnCancel(): boolean;
        getLevelFor(arg0: number, arg1: $LivingEntity): number;
        canBeCraftedBy(arg0: $Player): boolean;
        canBeInterrupted(arg0: $Player): boolean;
        getMaxRarity(): number;
        getSpellCooldown(): number;
        onClientCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $ICastData_): void;
        getDeathMessageId(): string;
        onServerCastTick(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): void;
        getEmptyCastData(): $ICastDataSerializable;
        getUniqueInfo(arg0: number, arg1: $LivingEntity): $List<$MutableComponent>;
        resetRarityWeights(): void;
        /**
         * @deprecated
         */
        getMinRarity(): number;
        getLockedMessage(): $Component;
        requiresLearning(): boolean;
        allowLooting(): boolean;
        playSound(arg0: ($SoundEvent_) | undefined, arg1: $Entity): void;
        getSpellId(): string;
        onCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $CastSource_, arg4: $MagicData): void;
        isLearned(arg0: $Player): boolean;
        getComponentId(): string;
        getSchoolType(): $SchoolType;
        obfuscateStats(arg0: $Player): boolean;
        getRarity(arg0: number): $SpellRarity;
        getDamageSource(arg0: $Entity, arg1: $Entity): $SpellDamageSource;
        getDamageSource(arg0: $Entity): $SpellDamageSource;
        getTargetingColor(): $Vector3f;
        getSpellName(): string;
        getEntityPowerMultiplier(arg0: $LivingEntity): number;
        checkPreCastConditions(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): boolean;
        getEffectiveCastTime(arg0: number, arg1: $LivingEntity): number;
        getSpellIconResource(): $ResourceLocation;
        getCastFinishAnimation(): $AnimationHolder;
        getCastStartAnimation(): $AnimationHolder;
        attemptInitiateCast(arg0: $ItemStack_, arg1: number, arg2: $Level_, arg3: $Player, arg4: $CastSource_, arg5: boolean, arg6: string): boolean;
        onServerCastComplete(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData, arg4: boolean): void;
        getMinLevelForRarity(arg0: $SpellRarity_): number;
        shouldAIStopCasting(arg0: number, arg1: $Mob, arg2: $LivingEntity): boolean;
        static ELDRITCH_OBFUSCATED_STYLE: $Style;
        constructor();
        get enabled(): boolean;
        get maxLevel(): number;
        get minLevel(): number;
        get castType(): $CastType;
        get castFinishSound(): ($SoundEvent) | undefined;
        get spellResource(): $ResourceLocation;
        get defaultConfig(): $DefaultConfig;
        get castStartSound(): ($SoundEvent) | undefined;
        get maxRarity(): number;
        get spellCooldown(): number;
        get deathMessageId(): string;
        get emptyCastData(): $ICastDataSerializable;
        get minRarity(): number;
        get lockedMessage(): $Component;
        get spellId(): string;
        get componentId(): string;
        get schoolType(): $SchoolType;
        get targetingColor(): $Vector3f;
        get spellName(): string;
        get spellIconResource(): $ResourceLocation;
        get castFinishAnimation(): $AnimationHolder;
        get castStartAnimation(): $AnimationHolder;
    }
    /**
     * Values that may be interpreted as {@link $AbstractSpell}.
     */
    export type $AbstractSpell_ = RegistryTypes.IronsSpellbooksSpells;
    export class $CastType extends $Enum<$CastType> {
        static values(): $CastType[];
        static valueOf(arg0: string): $CastType;
        getValue(): number;
        immediatelySuppressRightClicks(): boolean;
        static INSTANT: $CastType;
        static NONE: $CastType;
        static CONTINUOUS: $CastType;
        static LONG: $CastType;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $CastType}.
     */
    export type $CastType_ = "none" | "instant" | "long" | "continuous";
}
