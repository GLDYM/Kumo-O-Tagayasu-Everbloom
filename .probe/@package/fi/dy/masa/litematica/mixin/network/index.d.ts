import { $SectionPos } from "@package/net/minecraft/core";

declare module "@package/fi/dy/masa/litematica/mixin/network" {
    export class $IMixinChunkDeltaUpdateS2CPacket {
    }
    export interface $IMixinChunkDeltaUpdateS2CPacket {
        litematica_getSection(): $SectionPos;
    }
    /**
     * Values that may be interpreted as {@link $IMixinChunkDeltaUpdateS2CPacket}.
     */
    export type $IMixinChunkDeltaUpdateS2CPacket_ = (() => $SectionPos);
}
