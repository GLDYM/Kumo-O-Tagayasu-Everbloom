import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        isTrackingMatrices(): boolean;
        getPosY(): number;
        getPosX(): number;
        getInflate(): number;
        setRotZ(arg0: number): void;
        setHidden(arg0: boolean): void;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        getScaleY(): number;
        setScaleY(arg0: number): void;
        getPivotX(): number;
        setPivotX(arg0: number): void;
        getPivotY(): number;
        setPivotY(arg0: number): void;
        getScaleX(): number;
        setScaleX(arg0: number): void;
        getWorldPosition(): $Vector3d;
        getRotationVector(): $Vector3d;
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getMirror(): boolean;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        getPivotZ(): number;
        getScaleZ(): number;
        setScaleZ(arg0: number): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getLocalSpaceMatrix(): $Matrix4f;
        markPositionAsChanged(): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        markRotationAsChanged(): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        saveInitialSnapshot(): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        getInitialSnapshot(): $BoneSnapshot;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getCubes(): $List<$GeoCube>;
        hasPositionChanged(): boolean;
        setChildrenHidden(arg0: boolean): void;
        getModelPosition(): $Vector3d;
        getScaleVector(): $Vector3d;
        hasScaleChanged(): boolean;
        resetStateChanges(): void;
        markScaleAsChanged(): void;
        getLocalPosition(): $Vector3d;
        hasRotationChanged(): boolean;
        getPositionVector(): $Vector3d;
        saveSnapshot(): $BoneSnapshot;
        setModelPosition(arg0: $Vector3d): void;
        shouldNeverRender(): boolean;
        setPosZ(arg0: number): void;
        setPivotZ(arg0: number): void;
        getPosZ(): number;
        getReset(): boolean;
        setTrackingMatrices(arg0: boolean): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get inflate(): number;
        get worldPosition(): $Vector3d;
        get rotationVector(): $Vector3d;
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get mirror(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get initialSnapshot(): $BoneSnapshot;
        get cubes(): $List<$GeoCube>;
        set childrenHidden(value: boolean);
        get scaleVector(): $Vector3d;
        get localPosition(): $Vector3d;
        get positionVector(): $Vector3d;
        get reset(): boolean;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f,  } | [direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f, ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        quads(): $GeoQuad[];
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_,  } | [quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texV(): number;
        texU(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texU?: number, texV?: number,  } | [position?: $Vector3f, texU?: number, texV?: number, ];
}
