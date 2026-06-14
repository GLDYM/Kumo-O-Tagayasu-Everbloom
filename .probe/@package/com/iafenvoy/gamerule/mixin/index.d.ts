import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelResource } from "@package/net/minecraft/world/level/storage";

declare module "@package/com/iafenvoy/gamerule/mixin" {
    export class $LevelResourceAccessor {
        static gameRuleManager$newInstance(arg0: string): $LevelResource;
    }
    export interface $LevelResourceAccessor {
    }
    export class $CycleButtonAccessor {
    }
    export interface $CycleButtonAccessor {
        gameRuleManager$getName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $CycleButtonAccessor}.
     */
    export type $CycleButtonAccessor_ = (() => $Component_);
    export class $GameRules$RuleAccessor {
    }
    export interface $GameRules$RuleAccessor {
        gameRuleManager$deserialize(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$RuleAccessor}.
     */
    export type $GameRules$RuleAccessor_ = ((arg0: string) => void);
}
