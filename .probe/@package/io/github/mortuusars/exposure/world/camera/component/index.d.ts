import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/component" {
    export class $ShutterSpeed implements $StringRepresentable {
        getStops(): number;
        getNotation(): string;
        getStopsDifference(relative: $ShutterSpeed): number;
        getSerializedName(): string;
        shouldCauseTickingSound(): boolean;
        getBrightness(): number;
        getDurationMilliseconds(): number;
        getDurationTicks(): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ShutterSpeed>;
        static DEFAULT: $ShutterSpeed;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterSpeed>;
        constructor(notation: string);
        get stops(): number;
        get notation(): string;
        get serializedName(): string;
        get brightness(): number;
        get durationMilliseconds(): number;
        get durationTicks(): number;
        get remappedEnumConstantName(): string;
    }
    export class $FocalRange implements $StringRepresentable {
        min(): number;
        max(): number;
        static getDefault(): $FocalRange;
        static parse(value: string): $FocalRange;
        static fromJson(json: $JsonElement_): $FocalRange;
        isPrime(): boolean;
        getSerializedName(): string;
        focalLengthFromZoom(zoom: number): number;
        fovFromZoom(zoom: number): number;
        clampFocalLength(focalLength: number): number;
        zoomFromFov(fov: number): number;
        clampFov(fov: number): number;
        getRemappedEnumConstantName(): string;
        static REGULAR: $FocalRange;
        static CODEC: $Codec<$FocalRange>;
        static RANGE_CODEC: $Codec<$FocalRange>;
        static ALLOWED_MIN: number;
        static PRIME_CODEC: $Codec<$FocalRange>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FocalRange>;
        static ALLOWED_MAX: number;
        constructor(min: number, max: number);
        constructor(primeValue: number);
        static get default(): $FocalRange;
        get prime(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
}
