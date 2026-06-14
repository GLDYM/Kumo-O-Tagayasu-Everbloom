import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        position(): $Vec3;
        right(): $Vec3;
        up(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { position?: $Vec3_, up?: $Vec3_, forward?: $Vec3_,  } | [position?: $Vec3_, up?: $Vec3_, forward?: $Vec3_, ];
    export class $Library {
        init(arg0: string, arg1: boolean): void;
        cleanup(): void;
        getListener(): $Listener;
        getAvailableSoundDevices(): $List<string>;
        getDebugString(): string;
        acquireChannel(arg0: $Library$Pool_): $Channel;
        releaseChannel(arg0: $Channel): void;
        isCurrentDeviceDisconnected(): boolean;
        hasDefaultDeviceChanged(): boolean;
        getCurrentDeviceName(): string;
        static getDefaultDeviceName(): string;
        staticChannels: $Library$ChannelPool;
        constructor();
        get listener(): $Listener;
        get availableSoundDevices(): $List<string>;
        get debugString(): string;
        get currentDeviceDisconnected(): boolean;
        get currentDeviceName(): string;
        static get defaultDeviceName(): string;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
        release(arg0: $Channel): boolean;
        cleanup(): void;
        acquire(): $Channel;
        getUsedCount(): number;
        getMaxCount(): number;
        get usedCount(): number;
        get maxCount(): number;
    }
    export class $Listener {
        reset(): void;
        getTransform(): $ListenerTransform;
        setTransform(arg0: $ListenerTransform_): void;
        setGain(arg0: number): void;
        getGain(): number;
        constructor();
    }
    export class $OpenAlUtil {
        constructor();
    }
    export class $Channel {
        stop(): void;
        destroy(): void;
        pause(): void;
        stopped(): boolean;
        attachStaticBuffer(arg0: $SoundBuffer): void;
        disableAttenuation(): void;
        linearAttenuation(arg0: number): void;
        setSelfPosition(arg0: $Vec3_): void;
        attachBufferStream(arg0: $AudioStream): void;
        updateStream(): void;
        play(): void;
        setVolume(arg0: number): void;
        setPitch(arg0: number): void;
        playing(): boolean;
        setRelative(arg0: boolean): void;
        setLooping(arg0: boolean): void;
        unpause(): void;
        static BUFFER_DURATION_SECONDS: number;
        set selfPosition(value: $Vec3_);
        set volume(value: number);
        set pitch(value: number);
        set relative(value: boolean);
        set looping(value: boolean);
    }
    export class $SoundBuffer {
        releaseAlBuffer(): $OptionalInt;
        discardAlBuffer(): void;
        constructor(arg0: $ByteBuffer, arg1: $AudioFormat);
    }
}
