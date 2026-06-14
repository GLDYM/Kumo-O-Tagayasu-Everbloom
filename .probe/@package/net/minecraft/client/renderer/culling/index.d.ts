import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $FrustumIntersection } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $ViewportProvider {
        prepare(arg0: number, arg1: number, arg2: number): void;
        offsetToFullyIncludeCameraCube(arg0: number): $Frustum;
        isVisible(arg0: $AABB_): boolean;
        sodium$createViewport(): $Viewport;
        camY: number;
        camZ: number;
        intersection: $FrustumIntersection;
        camX: number;
        static OFFSET_STEP: number;
        constructor(arg0: $Matrix4f, arg1: $Matrix4f);
        constructor(arg0: $Frustum);
    }
}
