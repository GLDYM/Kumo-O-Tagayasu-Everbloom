import { $JsonObject, $Gson } from "@package/com/google/gson";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $SpellRarity_, $SchoolType, $SpellRarity, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/api/config" {
    export class $SpellConfigHolder {
        get<T>(arg0: $SpellConfigParameter_<T>): T;
        set<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        isDefault<T>(arg0: $SpellConfigParameter_<T>): boolean;
        getDefaultValue<T>(arg0: $SpellConfigParameter_<T>): (T) | undefined;
        toJson<T>(arg0: $Gson): $JsonObject;
        setDefaultValue<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        constructor();
    }
    export class $DefaultConfig {
        build(): $DefaultConfig;
        setSchoolResource(arg0: $ResourceLocation_): $DefaultConfig;
        setMaxLevel(arg0: number): $DefaultConfig;
        setCooldownSeconds(arg0: number): $DefaultConfig;
        setMinRarity(arg0: $SpellRarity_): $DefaultConfig;
        setAllowCrafting(arg0: boolean): $DefaultConfig;
        setDeprecated(arg0: boolean): $DefaultConfig;
        maxLevel: number;
        allowCrafting: boolean;
        minRarity: $SpellRarity;
        schoolResource: $ResourceLocation;
        enabled: boolean;
        cooldownInSeconds: number;
        constructor(arg0: $Consumer_<$DefaultConfig>);
        constructor();
        set cooldownSeconds(value: number);
        set deprecated(value: boolean);
    }
    export class $RegisterConfigParametersEvent extends $Event {
        register(arg0: $SpellConfigParameter_<never>): void;
        constructor(arg0: $Consumer_<$SpellConfigParameter<never>>);
    }
    export class $SpellConfigParameter<T> extends $Record {
        key(): $ResourceLocation;
        defaultValue(): $Supplier<T>;
        datatype(): $Codec<T>;
        static SCHOOL: $SpellConfigParameter<$SchoolType>;
        static COOLDOWN_IN_SECONDS: $SpellConfigParameter<number>;
        static ALLOW_CRAFTING: $SpellConfigParameter<boolean>;
        static MIN_RARITY: $SpellConfigParameter<$SpellRarity>;
        static POWER_MULTIPLIER: $SpellConfigParameter<number>;
        static ENABLED: $SpellConfigParameter<boolean>;
        static MAX_LEVEL: $SpellConfigParameter<number>;
        static MANA_MULTIPLIER: $SpellConfigParameter<number>;
        constructor(arg0: $ResourceLocation_, arg1: $Codec<T>, arg2: T);
        constructor(key: $ResourceLocation_, datatype: $Codec<T>, defaultValue: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $SpellConfigParameter}.
     */
    export type $SpellConfigParameter_<T> = { datatype?: $Codec<any>, defaultValue?: $Supplier_<any>, key?: $ResourceLocation_,  } | [datatype?: $Codec<any>, defaultValue?: $Supplier_<any>, key?: $ResourceLocation_, ];
    export class $ModifyDefaultConfigValuesEvent extends $Event {
        getSpell(): $AbstractSpell;
        setDefaultValue<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        constructor(arg0: $AbstractSpell_, arg1: $SpellConfigHolder);
        get spell(): $AbstractSpell;
    }
}
