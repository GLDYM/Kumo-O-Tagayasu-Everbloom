import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Object2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EndimationEffectSource, $EndimationEffectHandler, $ConfiguredEndimationEffect } from "@package/com/teamabnormals/blueprint/core/endimator/effects";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EndimationInterpolator_, $EndimationInterpolator } from "@package/com/teamabnormals/blueprint/core/endimator/interpolation";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";
export * as effects from "@package/com/teamabnormals/blueprint/core/endimator/effects";
export * as interpolation from "@package/com/teamabnormals/blueprint/core/endimator/interpolation";

declare module "@package/com/teamabnormals/blueprint/core/endimator" {
    export class $Endimatable {
    }
    export interface $Endimatable extends $EndimationEffectSource {
        setPlayingEndimation(arg0: $PlayableEndimation_): void;
        getPlayingEndimation(): $PlayableEndimation;
        isNoEndimationPlaying(): boolean;
        isEndimationPlaying(arg0: $PlayableEndimation_): boolean;
        getEndimatedState(): $Endimatable$EndimatedState;
        endimateTick(): void;
        onEndimationEnd(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        onEndimationStart(arg0: $PlayableEndimation_, arg1: $PlayableEndimation_): void;
        resetEndimation(): void;
        getAnimationTick(): number;
        getEffectHandler(): $EndimationEffectHandler;
        setAnimationTick(arg0: number): void;
        get noEndimationPlaying(): boolean;
        get endimatedState(): $Endimatable$EndimatedState;
        get effectHandler(): $EndimationEffectHandler;
    }
    export class $Endimatable$EndimatedState {
        animationTick: number;
        endimation: $PlayableEndimation;
        effectHandler: $EndimationEffectHandler;
        constructor(arg0: $Endimatable);
    }
    export class $EndimatablePart {
    }
    export interface $EndimatablePart {
        reset(): void;
        addRotation(arg0: number, arg1: number, arg2: number): void;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        addPos(arg0: number, arg1: number, arg2: number): void;
        addScale(arg0: number, arg1: number, arg2: number): void;
    }
    export class $PlayableEndimation$LoopType extends $Enum<$PlayableEndimation$LoopType> {
        static values(): $PlayableEndimation$LoopType[];
        static valueOf(arg0: string): $PlayableEndimation$LoopType;
        static LOOP: $PlayableEndimation$LoopType;
        static NONE: $PlayableEndimation$LoopType;
        static HOLD: $PlayableEndimation$LoopType;
    }
    /**
     * Values that may be interpreted as {@link $PlayableEndimation$LoopType}.
     */
    export type $PlayableEndimation$LoopType_ = "none" | "loop" | "hold";
    export class $EndimationKeyframe implements $Comparable<$EndimationKeyframe> {
        compareTo(arg0: $EndimationKeyframe): number;
        apply(arg0: $Vector3f, arg1: $EndimationKeyframe[], arg2: $EndimationKeyframe, arg3: $EndimationKeyframe, arg4: number, arg5: number, arg6: number): void;
        preX: $Supplier<number>;
        preY: $Supplier<number>;
        static CATMULL_ROM: $EndimationInterpolator;
        static CODEC: $Codec<$EndimationKeyframe>;
        preZ: $Supplier<number>;
        static PRE_POST_CODEC: $Codec<$EndimationKeyframe$Transform>;
        postZ: $Supplier<number>;
        postX: $Supplier<number>;
        postY: $Supplier<number>;
        static PRE_AND_POST_CODEC: $Codec<$Pair<$EndimationKeyframe$Transform, $EndimationKeyframe$Transform>>;
        interpolator: $EndimationInterpolator;
        time: number;
        static LINEAR: $EndimationInterpolator;
        constructor(arg0: number, arg1: $Supplier_<number>, arg2: $Supplier_<number>, arg3: $Supplier_<number>, arg4: $Supplier_<number>, arg5: $Supplier_<number>, arg6: $Supplier_<number>, arg7: $EndimationInterpolator_);
        constructor(arg0: number, arg1: $EndimationKeyframe$Transform_, arg2: $EndimationInterpolator_);
    }
    export class $Endimation$PartKeyframes {
        getPosFrames(): $EndimationKeyframe[];
        getRotationFrames(): $EndimationKeyframe[];
        getScaleFrames(): $EndimationKeyframe[];
        getOffsetFrames(): $EndimationKeyframe[];
        static CODEC: $Codec<$Endimation$PartKeyframes>;
        constructor(arg0: $EndimationKeyframe[], arg1: $EndimationKeyframe[], arg2: $EndimationKeyframe[], arg3: $EndimationKeyframe[]);
        get posFrames(): $EndimationKeyframe[];
        get rotationFrames(): $EndimationKeyframe[];
        get scaleFrames(): $EndimationKeyframe[];
        get offsetFrames(): $EndimationKeyframe[];
    }
    export class $Endimation$PartKeyframes$Builder {
        scale(...arg0: $EndimationKeyframe[]): $Endimation$PartKeyframes$Builder;
        offset(...arg0: $EndimationKeyframe[]): $Endimation$PartKeyframes$Builder;
        pos(...arg0: $EndimationKeyframe[]): $Endimation$PartKeyframes$Builder;
        build(): $Endimation$PartKeyframes;
        rotate(...arg0: $EndimationKeyframe[]): $Endimation$PartKeyframes$Builder;
        static partKeyframes(): $Endimation$PartKeyframes$Builder;
    }
    export class $EndimationKeyframe$Transform extends $Record {
        x(): $Supplier<number>;
        z(): $Supplier<number>;
        y(): $Supplier<number>;
        constructor(x: $Supplier_<number>, y: $Supplier_<number>, z: $Supplier_<number>);
    }
    /**
     * Values that may be interpreted as {@link $EndimationKeyframe$Transform}.
     */
    export type $EndimationKeyframe$Transform_ = { x?: $Supplier_<number>, y?: $Supplier_<number>, z?: $Supplier_<number>,  } | [x?: $Supplier_<number>, y?: $Supplier_<number>, z?: $Supplier_<number>, ];
    export class $PlayableEndimation extends $Record {
        location(): $ResourceLocation;
        duration(): number;
        loopType(): $PlayableEndimation$LoopType;
        asEndimation(): $Endimation;
        static BLANK: $PlayableEndimation;
        constructor(location: $ResourceLocation_, duration: number, loopType: $PlayableEndimation$LoopType_);
    }
    /**
     * Values that may be interpreted as {@link $PlayableEndimation}.
     */
    export type $PlayableEndimation_ = { duration?: number, loopType?: $PlayableEndimation$LoopType_, location?: $ResourceLocation_,  } | [duration?: number, loopType?: $PlayableEndimation$LoopType_, location?: $ResourceLocation_, ];
    export class $Endimation$Builder {
        length(arg0: number): $Endimation$Builder;
        build(): $Endimation;
        keyframes(arg0: $Endimation$Builder$Keyframes): $Endimation$Builder;
        keyframes(arg0: $Object2ObjectArrayMap<string, $Endimation$PartKeyframes>): $Endimation$Builder;
        effects(arg0: $ConfiguredEndimationEffect<never, never>[]): $Endimation$Builder;
        blendWeight(arg0: number): $Endimation$Builder;
        addEffects(...arg0: $ConfiguredEndimationEffect<never, never>[]): $Endimation$Builder;
        constructor();
    }
    export class $Endimation {
        getLength(): number;
        static builder(): $Endimation$Builder;
        getEffects(): $ConfiguredEndimationEffect<never, never>[];
        getBlendWeight(): number;
        getPartKeyframes(): $Object2ObjectArrayMap<string, $Endimation$PartKeyframes>;
        static BLANK: $Endimation;
        static CODEC: $Codec<$Endimation>;
        constructor(arg0: number, arg1: number, arg2: $Object2ObjectArrayMap<string, $Endimation$PartKeyframes>, arg3: $ConfiguredEndimationEffect<never, never>[]);
        get length(): number;
        get effects(): $ConfiguredEndimationEffect<never, never>[];
        get blendWeight(): number;
        get partKeyframes(): $Object2ObjectArrayMap<string, $Endimation$PartKeyframes>;
    }
    export class $Endimation$Builder$Keyframes {
        build(): $Object2ObjectArrayMap<string, $Endimation$PartKeyframes>;
        part(arg0: string, arg1: $Endimation$PartKeyframes$Builder): $Endimation$Builder$Keyframes;
        part(arg0: string, arg1: $Endimation$PartKeyframes): $Endimation$Builder$Keyframes;
        static keyframes(): $Endimation$Builder$Keyframes;
    }
}
