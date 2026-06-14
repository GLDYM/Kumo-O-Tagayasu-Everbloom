import { $Logger } from "@package/org/apache/logging/log4j";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/debug" {
    export class $ProgressDebugContext$TYPE extends $Enum<$ProgressDebugContext$TYPE> {
        static values(): $ProgressDebugContext$TYPE[];
        static valueOf(arg0: string): $ProgressDebugContext$TYPE;
        static STATUS: $ProgressDebugContext$TYPE;
        static INTERACT: $ProgressDebugContext$TYPE;
        static MOVE: $ProgressDebugContext$TYPE;
        disableByDefault: boolean;
        static COMMON: $ProgressDebugContext$TYPE;
        static WORK: $ProgressDebugContext$TYPE;
        static DEBUG: $ProgressDebugContext$TYPE;
    }
    /**
     * Values that may be interpreted as {@link $ProgressDebugContext$TYPE}.
     */
    export type $ProgressDebugContext$TYPE_ = "common" | "move" | "work" | "status" | "interact" | "debug";
    export class $IProgressDebugContextSetter {
    }
    export interface $IProgressDebugContextSetter {
        setDebugContext(arg0: $ProgressDebugContext): void;
        set debugContext(value: $ProgressDebugContext);
    }
    /**
     * Values that may be interpreted as {@link $IProgressDebugContextSetter}.
     */
    export type $IProgressDebugContextSetter_ = ((arg0: $ProgressDebugContext) => void);
    export class $ProgressDebugContext {
        name(arg0: $ProgressDebugContext$TYPE_): string;
        log(arg0: $ProgressDebugContext$TYPE_, arg1: string, ...arg2: $Object[]): void;
        stop(): void;
        enable(arg0: $ProgressDebugContext$TYPE_): void;
        disable(arg0: $ProgressDebugContext$TYPE_): void;
        convey(arg0: $Object): void;
        isDummy(): boolean;
        logger: $Logger;
        id: string;
        constructor(arg0: boolean, arg1: string);
        constructor(arg0: boolean);
        get dummy(): boolean;
    }
}
