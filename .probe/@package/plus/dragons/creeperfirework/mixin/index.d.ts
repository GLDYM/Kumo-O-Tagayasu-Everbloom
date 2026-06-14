import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";

declare module "@package/plus/dragons/creeperfirework/mixin" {
    export class $CreeperEntityAccessor {
        static getChargedTrackedDataKey(): $EntityDataAccessor<boolean>;
        static get chargedTrackedDataKey(): $EntityDataAccessor<boolean>;
    }
    export interface $CreeperEntityAccessor {
    }
}
