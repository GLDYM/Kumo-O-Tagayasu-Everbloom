import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        getChangeCount(): number;
        clearDirtyOptions(): void;
        setDefaults(): void;
        copyOptionsFrom(arg0: $Config): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        setChangeListener(arg0: $IConfigChangeListener): void;
        getChangeListener(): $IConfigChangeListener;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        isAllowNullValues(): boolean;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        postSave(): void;
        set optionDefault(value: $ConfigOption<T>);
        get changeCount(): number;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        get allowNullValues(): boolean;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
    }
}
