import { $ConfigUnit } from "@package/cc/sighs/oelib/config";
import { $Record } from "@package/java/lang";

declare module "@package/cc/sighs/oelib/config/api" {
    export class $ConfigSyncEvent<T> extends $Record {
        value(): T;
        unit(): $ConfigUnit<T>;
        fromServer(): boolean;
        constructor(unit: $ConfigUnit<T>, value: T, fromServer: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfigSyncEvent}.
     */
    export type $ConfigSyncEvent_<T> = { unit?: $ConfigUnit<any>, fromServer?: boolean, value?: any,  } | [unit?: $ConfigUnit<any>, fromServer?: boolean, value?: any, ];
    export class $ConfigLoadEvent<T> extends $Record {
        value(): T;
        unit(): $ConfigUnit<T>;
        constructor(unit: $ConfigUnit<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $ConfigLoadEvent}.
     */
    export type $ConfigLoadEvent_<T> = { unit?: $ConfigUnit<any>, value?: any,  } | [unit?: $ConfigUnit<any>, value?: any, ];
    export class $ConfigSaveEvent<T> extends $Record {
        value(): T;
        unit(): $ConfigUnit<T>;
        constructor(unit: $ConfigUnit<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $ConfigSaveEvent}.
     */
    export type $ConfigSaveEvent_<T> = { unit?: $ConfigUnit<any>, value?: any,  } | [unit?: $ConfigUnit<any>, value?: any, ];
    export class $ConfigChangedEvent<T> extends $Record {
        oldValue(): T;
        newValue(): T;
        unit(): $ConfigUnit<T>;
        constructor(unit: $ConfigUnit<T>, oldValue: T, newValue: T);
    }
    /**
     * Values that may be interpreted as {@link $ConfigChangedEvent}.
     */
    export type $ConfigChangedEvent_<T> = { unit?: $ConfigUnit<any>, newValue?: any, oldValue?: any,  } | [unit?: $ConfigUnit<any>, newValue?: any, oldValue?: any, ];
}
