import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        constructor(arg0: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(arg0: $CompoundTag_): void;
        static read(arg0: $DynamicLike<never>, arg1: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getDamagePerBlock(): number;
        getCenterX(): number;
        getCenterZ(): number;
        getWarningBlocks(): number;
        getSizeLerpTarget(): number;
        getSafeZone(): number;
        getWarningTime(): number;
        getSizeLerpTime(): number;
        get size(): number;
        get damagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
        get warningBlocks(): number;
        get sizeLerpTarget(): number;
        get safeZone(): number;
        get warningTime(): number;
        get sizeLerpTime(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder {
        getSize(): number;
        tick(): void;
        setSize(arg0: number): void;
        addListener(arg0: $BorderChangeListener): void;
        removeListener(arg0: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        isWithinBounds(arg0: $Vec3_): boolean;
        isWithinBounds(arg0: $BlockPos_): boolean;
        isWithinBounds(arg0: number, arg1: number, arg2: number): boolean;
        isWithinBounds(arg0: $AABB_): boolean;
        isWithinBounds(arg0: $ChunkPos): boolean;
        isWithinBounds(arg0: number, arg1: number): boolean;
        isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_): boolean;
        getLerpRemainingTime(): number;
        setAbsoluteMaxSize(arg0: number): void;
        clampToBounds(arg0: $BlockPos_): $BlockPos;
        clampToBounds(arg0: number, arg1: number, arg2: number): $BlockPos;
        clampToBounds(arg0: $Vec3_): $BlockPos;
        getDamagePerBlock(): number;
        getDamageSafeZone(): number;
        getCollisionShape(): $VoxelShape;
        getDistanceToBorder(arg0: number, arg1: number): number;
        getDistanceToBorder(arg0: $Entity): number;
        getCenterX(): number;
        getCenterZ(): number;
        setWarningBlocks(arg0: number): void;
        getWarningBlocks(): number;
        setDamageSafeZone(arg0: number): void;
        setWarningTime(arg0: number): void;
        applySettings(arg0: $WorldBorder$Settings): void;
        lerpSizeBetween(arg0: number, arg1: number, arg2: number): void;
        getWarningTime(): number;
        setDamagePerBlock(arg0: number): void;
        createSettings(): $WorldBorder$Settings;
        getLerpTarget(): number;
        getAbsoluteMaxSize(): number;
        getLerpSpeed(): number;
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        setCenter(arg0: number, arg1: number): void;
        getMinX(): number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get status(): $BorderStatus;
        get lerpRemainingTime(): number;
        get collisionShape(): $VoxelShape;
        get centerX(): number;
        get centerZ(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get minX(): number;
    }
}
