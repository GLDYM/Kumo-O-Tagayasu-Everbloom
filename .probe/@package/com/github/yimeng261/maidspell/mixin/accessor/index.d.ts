import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/github/yimeng261/maidspell/mixin/accessor" {
    export class $LivingEntityHealthAccessor {
        static maidspell$getHealthAccessor(): $EntityDataAccessor<number>;
    }
    export interface $LivingEntityHealthAccessor {
    }
    export class $LivingEntityInvoker {
    }
    export interface $LivingEntityInvoker {
        maidspell$invokeTickDeath(): void;
        maidspell$invokeActuallyHurt(arg0: $DamageSource_, arg1: number): void;
    }
    export class $JumpControlAccessor {
    }
    export interface $JumpControlAccessor {
        maidspell$setJump(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $JumpControlAccessor}.
     */
    export type $JumpControlAccessor_ = ((arg0: boolean) => void);
    export class $EntityInvoker {
    }
    export interface $EntityInvoker {
        maidspell$invokeUnsetRemoved(): void;
    }
    /**
     * Values that may be interpreted as {@link $EntityInvoker}.
     */
    export type $EntityInvoker_ = (() => void);
}
