import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $DamageState, $DamageTypeWrapper } from "@package/dev/xkmc/l2damagetracker/contents/damage";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $AttackEntityEvent, $CriticalHitEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Float2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingDamageEvent$Pre, $LivingIncomingDamageEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource, $DamageType_, $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/xkmc/l2damagetracker/contents/attack" {
    export class $DamageData$All {
    }
    export interface $DamageData$All extends $DamageData$Attack, $DamageData$Offence, $DamageData$Defence, $DamageData$DefenceMax {
    }
    export class $DamageModifier$Type$Start {
    }
    export interface $DamageModifier$Type$Start {
        start(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DamageModifier$Type$Start}.
     */
    export type $DamageModifier$Type$Start_ = ((arg0: number) => number);
    export class $DamageData$Defence {
    }
    export interface $DamageData$Defence extends $DamageData$OffenceMax {
        addDealtModifier(arg0: $DamageModifier): void;
    }
    export class $DamageData$Attack {
    }
    export interface $DamageData$Attack extends $DamageData$PostSetup {
        setNonCancellable(): void;
    }
    export class $DamageModifier$Type extends $Enum<$DamageModifier$Type> {
        static values(): $DamageModifier$Type[];
        static valueOf(arg0: string): $DamageModifier$Type;
        static MULTIPLICATIVE: $DamageModifier$Type;
        static NONLINEAR: $DamageModifier$Type;
        static ADDITIVE: $DamageModifier$Type;
        start: $DamageModifier$Type$Start;
        end: $DamageModifier$Type$End;
    }
    /**
     * Values that may be interpreted as {@link $DamageModifier$Type}.
     */
    export type $DamageModifier$Type_ = "additive" | "multiplicative" | "nonlinear";
    export class $DamageData$DefenceMax {
    }
    export interface $DamageData$DefenceMax extends $DamageData$OffenceMax {
        getDamageFinal(): number;
        get damageFinal(): number;
    }
    export class $DamageModifier$Type$End {
    }
    export interface $DamageModifier$Type$End {
        end(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DamageModifier$Type$End}.
     */
    export type $DamageModifier$Type$End_ = ((arg0: number, arg1: number) => number);
    export class $PlayerAttackCache {
        getWeapon(): $ItemStack;
        getStrength(): number;
        getCriticalHitEvent(): $CriticalHitEvent;
        getAttacker(): $LivingEntity;
        setupAttackerProfile(arg0: $LivingEntity, arg1: $ItemStack_): void;
        getPlayerAttackEntityEvent(): $AttackEntityEvent;
        constructor();
        get weapon(): $ItemStack;
        get strength(): number;
        get criticalHitEvent(): $CriticalHitEvent;
        get attacker(): $LivingEntity;
        get playerAttackEntityEvent(): $AttackEntityEvent;
    }
    export class $DamageData$OffenceMax {
    }
    export interface $DamageData$OffenceMax extends $DamageData$PostSetup {
        getDamageIncoming(): number;
        get damageIncoming(): number;
    }
    export class $AttackListener {
    }
    export interface $AttackListener {
        onDamage(arg0: $DamageData$Defence): void;
        onHurt(arg0: $DamageData$Offence): void;
        onAttack(arg0: $DamageData$Attack): boolean;
        setupProfile(arg0: $DamageData, arg1: $BiConsumer_<$LivingEntity, $ItemStack>): void;
        onHurtMaximized(arg0: $DamageData$OffenceMax): void;
        onDamageFinalized(arg0: $DamageData$DefenceMax): void;
        onCreateSource(arg0: $CreateSourceEvent): void;
        onCriticalHit(arg0: $PlayerAttackCache, arg1: $CriticalHitEvent): boolean;
        onPlayerAttack(arg0: $PlayerAttackCache): void;
    }
    export class $DamageModifier$Order extends $Enum<$DamageModifier$Order> {
        static values(): $DamageModifier$Order[];
        static valueOf(arg0: string): $DamageModifier$Order;
        static PRE_NONLINEAR: $DamageModifier$Order;
        static POST_MULT_BASE: $DamageModifier$Order;
        static PRE_ADDITIVE: $DamageModifier$Order;
        static POST_MULTIPLICATIVE: $DamageModifier$Order;
        static POST_ADDITIVE: $DamageModifier$Order;
        static END_NONLINEAR: $DamageModifier$Order;
        static POST_NONLINEAR: $DamageModifier$Order;
        type: $DamageModifier$Type;
        static PRE_MULTIPLICATIVE: $DamageModifier$Order;
        static EVENT: $DamageModifier$Order;
    }
    /**
     * Values that may be interpreted as {@link $DamageModifier$Order}.
     */
    export type $DamageModifier$Order_ = "pre_nonlinear" | "pre_multiplicative" | "pre_additive" | "post_mult_base" | "event" | "post_multiplicative" | "post_nonlinear" | "post_additive" | "end_nonlinear";
    export class $DamageDataExtra implements $DamageData$All {
        end(): void;
        init(arg0: $DamageSource_, arg1: number): void;
        getTarget(): $LivingEntity;
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getWeapon(): $ItemStack;
        getStrength(): number;
        getPlayerData(): $PlayerAttackCache;
        setNonCancellable(): void;
        getDamageOriginal(): number;
        addHurtModifier(arg0: $DamageModifier): void;
        getDamageIncoming(): number;
        addDealtModifier(arg0: $DamageModifier): void;
        getAttacker(): $LivingEntity;
        onSetNewDamage(arg0: number): void;
        getDamageFinal(): number;
        onIncoming(arg0: $LivingIncomingDamageEvent, arg1: $Consumer_<$LivingIncomingDamageEvent>): void;
        onDamage(arg0: $LivingDamageEvent$Pre, arg1: $Consumer_<$LivingDamageEvent$Pre>): void;
        bypassMagic(): boolean;
        constructor();
        get target(): $LivingEntity;
        get source(): $DamageSource;
        get container(): $DamageContainer;
        get weapon(): $ItemStack;
        get strength(): number;
        get playerData(): $PlayerAttackCache;
        get damageOriginal(): number;
        get damageIncoming(): number;
        get attacker(): $LivingEntity;
        get damageFinal(): number;
    }
    export class $DamageData$PostSetup {
    }
    export interface $DamageData$PostSetup extends $DamageData {
        getWeapon(): $ItemStack;
        get weapon(): $ItemStack;
    }
    export class $DamageModifier {
        static add(arg0: number, arg1: $ResourceLocation_): $DamageModifier;
        static nonlinearMiddle(arg0: number, arg1: $Float2FloatFunction_, arg2: $ResourceLocation_): $DamageModifier;
        static nonlinearPre(arg0: number, arg1: $Float2FloatFunction_, arg2: $ResourceLocation_): $DamageModifier;
        static addExtra(arg0: number, arg1: $ResourceLocation_): $DamageModifier;
        static multAttr(arg0: number, arg1: $ResourceLocation_): $DamageModifier;
        static multTotal(arg0: number, arg1: $ResourceLocation_): $DamageModifier;
        static nonlinearFinal(arg0: number, arg1: $Float2FloatFunction_, arg2: $ResourceLocation_): $DamageModifier;
        static multBase(arg0: number, arg1: $ResourceLocation_): $DamageModifier;
    }
    export interface $DamageModifier {
        priority(): number;
        info(arg0: number): string;
        id(): $ResourceLocation;
        order(): $DamageModifier$Order;
        modify(arg0: number): number;
    }
    export class $DamageData$Offence {
    }
    export interface $DamageData$Offence extends $DamageData$PostSetup {
        addHurtModifier(arg0: $DamageModifier): void;
    }
    export class $DamageData {
    }
    export interface $DamageData {
        getTarget(): $LivingEntity;
        getSource(): $DamageSource;
        getContainer(): $DamageContainer;
        getStrength(): number;
        getPlayerData(): $PlayerAttackCache;
        getDamageOriginal(): number;
        getAttacker(): $LivingEntity;
        bypassMagic(): boolean;
        get target(): $LivingEntity;
        get source(): $DamageSource;
        get container(): $DamageContainer;
        get strength(): number;
        get playerData(): $PlayerAttackCache;
        get damageOriginal(): number;
        get attacker(): $LivingEntity;
    }
    export class $DamageContainerExtra {
        static get(arg0: $DamageContainer): $DamageDataExtra;
    }
    export interface $DamageContainerExtra {
        l2damagetracker$getExtra(): $DamageDataExtra;
    }
    /**
     * Values that may be interpreted as {@link $DamageContainerExtra}.
     */
    export type $DamageContainerExtra_ = (() => $DamageDataExtra);
    export class $CreateSourceEvent extends $Event {
        enable(arg0: $DamageState): void;
        enable(arg0: string): void;
        /**
         * @deprecated
         */
        setResult(arg0: $DamageTypeWrapper): void;
        getResult(): $DamageTypeWrapper;
        setDirect(arg0: $Entity): void;
        getPos(): $Vec3;
        setTo(arg0: string): void;
        getAttacker(): $LivingEntity;
        getRegistry(): $Registry<$DamageType>;
        getDirect(): $Entity;
        sourceIs(arg0: string): boolean;
        getOriginal(): $ResourceKey<$DamageType>;
        getPlayerAttackCache(): $PlayerAttackCache;
        setPlayerAttackCache(arg0: $PlayerAttackCache): void;
        constructor(arg0: $Registry<$DamageType_>, arg1: $ResourceKey_<$DamageType>, arg2: $LivingEntity, arg3: $Entity, arg4: $Vec3_);
        get pos(): $Vec3;
        set to(value: string);
        get attacker(): $LivingEntity;
        get registry(): $Registry<$DamageType>;
        get original(): $ResourceKey<$DamageType>;
    }
}
