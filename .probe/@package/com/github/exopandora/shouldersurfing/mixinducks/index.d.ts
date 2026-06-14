import { $CameraType_, $CameraType } from "@package/net/minecraft/client";

declare module "@package/com/github/exopandora/shouldersurfing/mixinducks" {
    export class $OptionsDuck {
    }
    export interface $OptionsDuck {
        shouldersurfing$setCameraTypeDirect(arg0: $CameraType_): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionsDuck}.
     */
    export type $OptionsDuck_ = ((arg0: $CameraType) => void);
    export class $CameraDuck {
    }
    export interface $CameraDuck {
        shouldersurfing$setZRot(arg0: number): void;
        shouldersurfing$getZRot(): number;
    }
}
