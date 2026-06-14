import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigMeta, $ConfigValueMeta } from "@package/cc/sighs/oelib/config/model";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
export * as api from "@package/cc/sighs/oelib/config/api";
export * as model from "@package/cc/sighs/oelib/config/model";
export * as ui from "@package/cc/sighs/oelib/config/ui";

declare module "@package/cc/sighs/oelib/config" {
    export class $ConfigUnit<T> {
        get(): T;
        static of<T>(codec: $ConfigCodec_<T>, defaultValue: T): $ConfigUnit<T>;
        id(): $ResourceLocation;
        save(): void;
        setValue(value: T): void;
        getDefaultValue(): T;
        reload(): void;
        applyAutoMigrationOnRegister(): void;
        meta(): $ConfigMeta;
        codec(): $ConfigCodec<T>;
        set value(value: T);
        get defaultValue(): T;
    }
    export class $ConfigCodec<T> extends $Record {
        fields(): $List<$ConfigValueMeta>;
        meta(): $ConfigMeta;
        codec(): $Codec<T>;
        constructor(codec: $Codec<T>, meta: $ConfigMeta, fields: $List_<$ConfigValueMeta>);
    }
    /**
     * Values that may be interpreted as {@link $ConfigCodec}.
     */
    export type $ConfigCodec_<T> = { fields?: $List_<$ConfigValueMeta>, codec?: $Codec<any>, meta?: $ConfigMeta,  } | [fields?: $List_<$ConfigValueMeta>, codec?: $Codec<any>, meta?: $ConfigMeta, ];
}
