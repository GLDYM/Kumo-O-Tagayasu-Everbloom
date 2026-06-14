import { $DedicatedServerSettings } from "@package/net/minecraft/server/dedicated";

declare module "@package/dev/anvilcraft/rg/mixin" {
    export class $DedicatedServerAccessor {
    }
    export interface $DedicatedServerAccessor {
        getSettings(): $DedicatedServerSettings;
        get settings(): $DedicatedServerSettings;
    }
    /**
     * Values that may be interpreted as {@link $DedicatedServerAccessor}.
     */
    export type $DedicatedServerAccessor_ = (() => $DedicatedServerSettings);
}
