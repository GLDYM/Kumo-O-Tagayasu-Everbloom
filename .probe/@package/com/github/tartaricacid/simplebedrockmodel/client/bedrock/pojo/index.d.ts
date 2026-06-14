import { $Enum } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/pojo" {
    export class $GeometryModelLegacy {
        getBones(): $BonesItem[];
        deco(): void;
        getTextureHeight(): number;
        getTextureWidth(): number;
        getVisibleBoundsWidth(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): number[];
        constructor();
        get bones(): $BonesItem[];
        get textureHeight(): number;
        get textureWidth(): number;
        get visibleBoundsWidth(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): number[];
    }
    export class $CubesItem {
        getSize(): number[];
        getOrigin(): number[];
        isMirror(): boolean;
        getUv(): number[];
        getFaceUv(): $FaceUVsItem;
        getInflate(): number;
        getPivot(): number[];
        getRotation(): number[];
        setMirror(arg0: boolean): void;
        isHasMirror(): boolean;
        constructor();
        get size(): number[];
        get origin(): number[];
        get uv(): number[];
        get faceUv(): $FaceUVsItem;
        get inflate(): number;
        get pivot(): number[];
        get rotation(): number[];
        get hasMirror(): boolean;
    }
    export class $BedrockVersion extends $Enum<$BedrockVersion> {
        static values(): $BedrockVersion[];
        static valueOf(arg0: string): $BedrockVersion;
        static getVersion(arg0: $BedrockModelPOJO): $BedrockVersion;
        static isNewVersion(arg0: $BedrockModelPOJO): boolean;
        static isLegacyVersion(arg0: $BedrockModelPOJO): boolean;
        static NEW: $BedrockVersion;
        static LEGACY: $BedrockVersion;
    }
    /**
     * Values that may be interpreted as {@link $BedrockVersion}.
     */
    export type $BedrockVersion_ = "legacy" | "new";
    export class $BonesItem {
        getName(): string;
        getParent(): string;
        isMirror(): boolean;
        getPivot(): number[];
        getRotation(): number[];
        getCubes(): $CubesItem[];
        constructor();
        get name(): string;
        get parent(): string;
        get mirror(): boolean;
        get pivot(): number[];
        get rotation(): number[];
        get cubes(): $CubesItem[];
    }
    export class $Description {
        getTextureHeight(): number;
        getTextureWidth(): number;
        getVisibleBoundsWidth(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): number[];
        constructor();
        get textureHeight(): number;
        get textureWidth(): number;
        get visibleBoundsWidth(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): number[];
    }
    export class $BedrockModelPOJO {
        getGeometryModelLegacy(): $GeometryModelLegacy;
        getGeometryModelNew(): $GeometryModelNew;
        getFormatVersion(): string;
        constructor();
        get geometryModelLegacy(): $GeometryModelLegacy;
        get geometryModelNew(): $GeometryModelNew;
        get formatVersion(): string;
    }
    export class $GeometryModelNew {
        getDescription(): $Description;
        getBones(): $BonesItem[];
        deco(): void;
        constructor();
        get description(): $Description;
        get bones(): $BonesItem[];
    }
}
