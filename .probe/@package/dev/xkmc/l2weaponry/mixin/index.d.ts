import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/dev/xkmc/l2weaponry/mixin" {
    export class $TargetGoalAccessor {
    }
    export interface $TargetGoalAccessor {
        setTargetMob(arg0: $LivingEntity): void;
        set targetMob(value: $LivingEntity);
    }
    /**
     * Values that may be interpreted as {@link $TargetGoalAccessor}.
     */
    export type $TargetGoalAccessor_ = ((arg0: $LivingEntity) => void);
}
