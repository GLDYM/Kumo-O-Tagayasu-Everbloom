import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        getColor(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getY(arg0: number): number;
        getZ(arg0: number): number;
        getVertexNormal(arg0: number): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        getFaceNormal(): number;
        getColorIndex(): number;
        getX(arg0: number): number;
        getLight(arg0: number): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        hasColor(): boolean;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get lightFace(): $Direction;
        get faceNormal(): number;
        get colorIndex(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        getFaceNormal(): number;
        hasShade(): boolean;
        hasAO(): boolean;
        getNormalFace(): $ModelQuadFacing;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
