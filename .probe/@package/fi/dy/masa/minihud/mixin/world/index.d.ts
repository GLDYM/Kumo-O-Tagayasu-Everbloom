import { $SectionPos } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelEntityGetter, $PersistentEntitySectionManager } from "@package/net/minecraft/world/level/entity";

declare module "@package/fi/dy/masa/minihud/mixin/world" {
    export class $IMixinBiomeAccess {
    }
    export interface $IMixinBiomeAccess {
        minihud_getSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinBiomeAccess}.
     */
    export type $IMixinBiomeAccess_ = (() => number);
    export class $IMixinServerWorld {
    }
    export interface $IMixinServerWorld {
        minihud_getEntityManager(): $PersistentEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinServerWorld}.
     */
    export type $IMixinServerWorld_ = (() => $PersistentEntitySectionManager<$Entity>);
    export class $IMixinWorld {
    }
    export interface $IMixinWorld {
        minihud_getEntityLookup(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinWorld}.
     */
    export type $IMixinWorld_ = (() => $LevelEntityGetter<$Entity>);
    export class $IMixinChunkDeltaUpdateS2CPacket {
    }
    export interface $IMixinChunkDeltaUpdateS2CPacket {
        minihud_getChunkSectionPos(): $SectionPos;
    }
    /**
     * Values that may be interpreted as {@link $IMixinChunkDeltaUpdateS2CPacket}.
     */
    export type $IMixinChunkDeltaUpdateS2CPacket_ = (() => $SectionPos);
}
