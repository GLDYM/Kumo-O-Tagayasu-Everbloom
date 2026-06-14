import { $Consumer_ } from "@package/java/util/function";
import { $CommentedConfig } from "@package/com/electronwill/nightconfig/core";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/generator/config" {
    export class $ConfigTypes$ConfigType<T> {
        getValue(): T;
        read(arg0: $CommentedConfig, arg1: string, arg2: $MutableBoolean): void;
        save(arg0: $CommentedConfig, arg1: string): void;
        setValue(arg0: T): void;
        setOnChange(arg0: $Consumer_<T>): void;
        getTranslatableName(): $Component;
        type: $ConfigTypes$ConfigTypeEnum;
        constructor(arg0: string, arg1: T, arg2: $Component_, arg3: $ConfigTypes$ConfigTypeEnum_);
        set onChange(value: $Consumer_<T>);
        get translatableName(): $Component;
    }
    export class $ConfigTypes$ConfigTypeEnum extends $Enum<$ConfigTypes$ConfigTypeEnum> {
        static values(): $ConfigTypes$ConfigTypeEnum[];
        static valueOf(arg0: string): $ConfigTypes$ConfigTypeEnum;
        static Integer: $ConfigTypes$ConfigTypeEnum;
        static String: $ConfigTypes$ConfigTypeEnum;
        static Boolean: $ConfigTypes$ConfigTypeEnum;
        static Double: $ConfigTypes$ConfigTypeEnum;
    }
    /**
     * Values that may be interpreted as {@link $ConfigTypes$ConfigTypeEnum}.
     */
    export type $ConfigTypes$ConfigTypeEnum_ = "boolean" | "integer" | "string" | "double";
}
