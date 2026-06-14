import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/dev/wuffs/bcc/data" {
    export class $BetterStatus extends $Record {
        name(): string;
        version(): string;
        isMetaData(): boolean;
        static CODEC: $Codec<$BetterStatus>;
        constructor(name: string, version: string, isMetaData: boolean);
        get metaData(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BetterStatus}.
     */
    export type $BetterStatus_ = { isMetaData?: boolean, version?: string, name?: string,  } | [isMetaData?: boolean, version?: string, name?: string, ];
    export class $ServerDataExtension {
    }
    export interface $ServerDataExtension {
        setBetterData(arg0: $BetterStatus_): void;
        getBetterData(): $BetterStatus;
    }
    export class $ExtendedServerStatus {
    }
    export interface $ExtendedServerStatus {
        setBetterData(arg0: $BetterStatus_): void;
        getBetterData(): ($BetterStatus) | undefined;
    }
}
