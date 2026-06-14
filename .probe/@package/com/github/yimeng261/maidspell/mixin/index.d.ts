import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
export * as accessor from "@package/com/github/yimeng261/maidspell/mixin/accessor";
export * as iss from "@package/com/github/yimeng261/maidspell/mixin/iss";

declare module "@package/com/github/yimeng261/maidspell/mixin" {
    export class $LivingEntityAccessor {
        static getDataHealthIdAccessor(): $EntityDataAccessor<number>;
        static get dataHealthIdAccessor(): $EntityDataAccessor<number>;
    }
    export interface $LivingEntityAccessor {
    }
}
