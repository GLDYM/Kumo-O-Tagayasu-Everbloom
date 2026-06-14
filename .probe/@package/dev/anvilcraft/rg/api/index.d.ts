import { $JsonElement_, $JsonElement, $JsonDeserializationContext_, $JsonSerializer, $JsonSerializationContext, $JsonDeserializer } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $Field, $Type } from "@package/java/lang/reflect";
import { $List, $List_, $Map } from "@package/java/util";
import { $Object, $Enum, $Record, $Class } from "@package/java/lang";
export * as event from "@package/dev/anvilcraft/rg/api/event";

declare module "@package/dev/anvilcraft/rg/api" {
    export class $RGEnvironment extends $Enum<$RGEnvironment> {
        static values(): $RGEnvironment[];
        static valueOf(arg0: string): $RGEnvironment;
        isClient(): boolean;
        isServer(): boolean;
        static SERVER: $RGEnvironment;
        static CLIENT: $RGEnvironment;
        get client(): boolean;
        get server(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RGEnvironment}.
     */
    export type $RGEnvironment_ = "client" | "server";
    export class $RGCodec<T> implements $JsonDeserializer<T>, $JsonSerializer<T> {
        clazz(): $Class<T>;
        decode(arg0: string): T;
        encode(arg0: T): string;
        static of<T>(arg0: $Class<T>, arg1: $Function_<string, T>, arg2: $Function_<T, string>): $RGCodec<T>;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): T;
        serialize(arg0: T, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        isBuiltIn(): boolean;
        forceEncode(arg0: $Object): string;
        static FLOAT: $RGCodec<number>;
        static BYTE: $RGCodec<number>;
        static STRING: $RGCodec<string>;
        static DOUBLE: $RGCodec<number>;
        static BOOLEAN: $RGCodec<boolean>;
        static SHORT: $RGCodec<number>;
        static INTEGER: $RGCodec<number>;
        static LONG: $RGCodec<number>;
        get builtIn(): boolean;
    }
    export class $RGRule<T> extends $Record {
        name(): string;
        type(): $Class<T>;
        min(): string;
        max(): string;
        getValue(): T;
        static of<T>(arg0: string, arg1: $Field): $RGRule<T>;
        field(): $Field;
        defaultValue(): T;
        static checkType(arg0: $Field): $Class<never>;
        environment(): $RGEnvironment;
        allowed(): string[];
        validators(): $List<$RGValidator<T>>;
        serialize(): string;
        setFieldValue(arg0: string): void;
        setFieldValue(arg0: $JsonElement_): void;
        categories(): string[];
        namespace(): string;
        codec(): $RGCodec<T>;
        getNameTranslationKey(): string;
        static getRuleMax(arg0: string, arg1: $RGCodec<never>): $Object;
        static getRuleMin(arg0: string, arg1: $RGCodec<never>): $Object;
        getDescriptionTranslationKey(): string;
        onlyAllowed(): boolean;
        static checkSerialize(arg0: string): void;
        getTypedAllowed(): $List<T>;
        static caseToSnake(arg0: string): string;
        static CODECS: $Map<string, $RGCodec<never>>;
        constructor(namespace: string, type: $Class<T>, environment: $RGEnvironment_, categories: string[], serialize: string, onlyAllowed: boolean, allowed: string[], min: string, max: string, validators: $List_<$RGValidator_<T>>, defaultValue: T, field: $Field, codec: $RGCodec<T>);
        get value(): T;
        get nameTranslationKey(): string;
        get descriptionTranslationKey(): string;
        get typedAllowed(): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $RGRule}.
     */
    export type $RGRule_<T> = { serialize?: string, allowed?: string[], defaultValue?: any, validators?: $List_<$RGValidator_<any>>, codec?: $RGCodec<any>, max?: string, min?: string, environment?: $RGEnvironment_, type?: $Class<any>, field?: $Field, onlyAllowed?: boolean, namespace?: string, categories?: string[],  } | [serialize?: string, allowed?: string[], defaultValue?: any, validators?: $List_<$RGValidator_<any>>, codec?: $RGCodec<any>, max?: string, min?: string, environment?: $RGEnvironment_, type?: $Class<any>, field?: $Field, onlyAllowed?: boolean, namespace?: string, categories?: string[], ];
    export class $RGValidator<T> {
    }
    export interface $RGValidator<T> {
        validate(arg0: T, arg1: string): boolean;
        reason(): string;
    }
    /**
     * Values that may be interpreted as {@link $RGValidator}.
     */
    export type $RGValidator_<T> = ((arg0: T, arg1: string) => boolean);
}
