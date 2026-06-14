import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getZ(): number;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getX(): number;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        setBlockTextureUpload(arg0: boolean): void;
        isChanged(): boolean;
        bindTexture(arg0: number): number;
        isHasSomething(): boolean;
        getLevelsBuffered(): number;
        setGlTexture(arg0: number, arg1: number): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        updateBuffers(arg0: number, arg1: number[][]): void;
        getGlTexture(arg0: number): number;
        isRefreshRequired(arg0: number): boolean;
        setHasSomething(arg0: boolean): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isBlockTextureUpload(): boolean;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        setSuccess(arg0: boolean): void;
        getHeight(arg0: number, arg1: number): number;
        getZ(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getX(): number;
        recycle(): void;
        isSuccess(): boolean;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isHasSomething(): boolean;
        setHasTerrain(arg0: boolean): void;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        getHighlights(): number[];
        setHighlights(arg0: number[]): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        hasTerrain(): boolean;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
