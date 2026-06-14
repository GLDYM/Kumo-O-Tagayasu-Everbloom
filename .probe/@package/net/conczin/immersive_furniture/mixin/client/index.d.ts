import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/conczin/immersive_furniture/mixin/client" {
    export class $TextureAtlasAccessor {
    }
    export interface $TextureAtlasAccessor {
        getSprites(): $List<$SpriteContents>;
        get sprites(): $List<$SpriteContents>;
    }
    /**
     * Values that may be interpreted as {@link $TextureAtlasAccessor}.
     */
    export type $TextureAtlasAccessor_ = (() => $List_<$SpriteContents>);
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getMipLevelData(): $NativeImage[];
        immersiveFurniture$getFrameCount(): number;
        get mipLevelData(): $NativeImage[];
    }
}
