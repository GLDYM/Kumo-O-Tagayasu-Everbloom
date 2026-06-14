import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getRotY(): number;
        getRotX(): number;
        getScaleY(): number;
        getScaleX(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleZ(): number;
        getOffsetZ(): number;
        getOffsetY(): number;
        getOffsetX(): number;
        getBone(): $GeoBone;
        getRotZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startRotAnim(): void;
        stopPosAnim(arg0: number): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        startScaleAnim(): void;
        stopRotAnim(arg0: number): void;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isScaleAnimInProgress(): boolean;
        isRotAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        getLastResetPositionTick(): number;
        constructor(arg0: $GeoBone);
        get rotY(): number;
        get rotX(): number;
        get scaleY(): number;
        get scaleX(): number;
        get scaleZ(): number;
        get offsetZ(): number;
        get offsetY(): number;
        get offsetX(): number;
        get bone(): $GeoBone;
        get rotZ(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get scaleAnimInProgress(): boolean;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get lastResetPositionTick(): number;
    }
}
