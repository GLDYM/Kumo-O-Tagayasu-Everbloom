import { $LightChunkGetter } from "@package/net/minecraft/world/level/chunk";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/fi/dy/masa/tweakeroo/mixin/world" {
    export class $IMixinChunkLightProvider {
    }
    export interface $IMixinChunkLightProvider {
        tweakeroo_getChunkProvider(): $LightChunkGetter;
    }
    /**
     * Values that may be interpreted as {@link $IMixinChunkLightProvider}.
     */
    export type $IMixinChunkLightProvider_ = (() => $LightChunkGetter);
    export class $IMixinClientWorld {
    }
    export interface $IMixinClientWorld {
        tweakeroo_getMapStates(): $Map<$MapId, $MapItemSavedData>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinClientWorld}.
     */
    export type $IMixinClientWorld_ = (() => $Map_<$MapId_, $MapItemSavedData>);
}
