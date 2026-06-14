import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/dev/xkmc/l2complements/mixin" {
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        callGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
}
