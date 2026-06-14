import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Sugar, $Flavor } from "@package/com/lnatit/ccw/item/sugaring";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RefiningInput_ } from "@package/com/lnatit/ccw/item/crafting";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/com/lnatit/ccw/data" {
    export class $Formula extends $Record implements $IFormula {
        result(): $ItemStack;
        batch(arg0: $RefiningInput_, arg1: $Consumer_<$ItemStack>): $ItemStack;
        sugar(): $Holder<$Sugar>;
        static getFormulaOptional(arg0: $Holder_<$Sugar>, arg1: $Holder_<$Flavor>): ($Formula) | undefined;
        effects(): $List<$Effect>;
        flavor(): $Holder<$Flavor>;
        static rebuildCache(arg0: $Registry<$Formula_>): void;
        productionOf(arg0: $RefiningInput_): $ItemStack;
        static CODEC: $Codec<$Formula>;
        static KEY: $ResourceKey<$Registry<$Formula>>;
        constructor(sugar: $Holder_<$Sugar>, flavor: $Holder_<$Flavor>, effects: $List_<$Effect_>);
    }
    /**
     * Values that may be interpreted as {@link $Formula}.
     */
    export type $Formula_ = RegistryTypes.CcwFormula | { flavor?: $Holder_<$Flavor>, effects?: $List_<$Effect_>, sugar?: $Holder_<$Sugar>,  } | [flavor?: $Holder_<$Flavor>, effects?: $List_<$Effect_>, sugar?: $Holder_<$Sugar>, ];
    export interface $Formula extends RegistryMarked<RegistryTypes.CcwFormulaTag, RegistryTypes.CcwFormula> {}
    export class $IFormula {
        static isSugar(arg0: $ItemStack_): boolean;
        static isExtra(arg0: $ItemStack_): boolean;
        static getMilkConsumption(arg0: $ItemStack_): number;
        static hasEnoughMilkAndSugar(arg0: $RefiningInput_): boolean;
        static shrinkAndHandleRemainders(arg0: $ItemStack_, arg1: number, arg2: $Consumer_<$ItemStack>): void;
        static shrinkAndHandleRemainders(arg0: $ItemStack_, arg1: $Consumer_<$ItemStack>): void;
        static isMain(arg0: $ItemStack_): boolean;
        static isMilk(arg0: $ItemStack_): boolean;
        static CARTON_MILK_CONSUMPTION: number;
        static SUGAR_CONSUMPTION: number;
        static COMMON_MILK_CONSUMPTION: number;
        static SUGAR_PRODUCTION: number;
    }
    export interface $IFormula {
        result(): $ItemStack;
        batch(arg0: $RefiningInput_, arg1: $Consumer_<$ItemStack>): $ItemStack;
        productionOf(arg0: $RefiningInput_): $ItemStack;
    }
    export class $Effect extends $Record {
        duration(): number;
        is(arg0: $Holder_<$MobEffect>): boolean;
        static instant(arg0: $Holder_<$MobEffect>): $Effect;
        getDescription(arg0: number): $Component;
        mobEffect(): $Holder<$MobEffect>;
        static simple(arg0: $Holder_<$MobEffect>): $Effect;
        amplifier(): number;
        withAmplifier(arg0: number): $Effect;
        withDuration(arg0: number): $Effect;
        extendEffect(arg0: $LivingEntity): void;
        doubleDuration(): $Effect;
        enhanceAmplifier(): $Effect;
        static CODEC: $Codec<$Effect>;
        static DEFAULT_DURATION: number;
        static DEFAULT_AMPLIFIER: number;
        constructor(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number);
    }
    /**
     * Values that may be interpreted as {@link $Effect}.
     */
    export type $Effect_ = { duration?: number, mobEffect?: $Holder_<$MobEffect>, amplifier?: number,  } | [duration?: number, mobEffect?: $Holder_<$MobEffect>, amplifier?: number, ];
}
