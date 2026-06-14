import { $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/fi/dy/masa/litematica/mixin/world" {
    export class $IMixinWorldTickScheduler<T> {
    }
    export interface $IMixinWorldTickScheduler<T> {
        litematica_getChunkTickSchedulers(): $Long2ObjectMap<$LevelChunkTicks<T>>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinWorldTickScheduler}.
     */
    export type $IMixinWorldTickScheduler_<T> = (() => $Long2ObjectMap<$LevelChunkTicks<T>>);
    export class $IMixinWorld {
    }
    export interface $IMixinWorld {
        litematica_getEntityLookup(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinWorld}.
     */
    export type $IMixinWorld_ = (() => $LevelEntityGetter<$Entity>);
}
