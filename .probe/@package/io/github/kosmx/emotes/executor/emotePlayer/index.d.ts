import { $UUID_, $UUID } from "@package/java/util";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";
import { $Vec3d } from "@package/dev/kosmx/playerAnim/core/util";

declare module "@package/io/github/kosmx/emotes/executor/emotePlayer" {
    export class $IEmotePlayerEntity {
    }
    export interface $IEmotePlayerEntity {
        emotecraft$playerEntersInvalidPose(): void;
        emoteTick(): void;
        stopEmote(arg0: $UUID_): void;
        stopEmote(): void;
        emotecraft$getBodyYaw(): number;
        emotecraft$setBodyYaw(arg0: number): void;
        emotecraft$isNotStanding(): boolean;
        emotecraft$getViewYaw(): number;
        emotecraft$isForcedEmote(): boolean;
        emotecraft$emotesGetPos(): $Vec3d;
        emotecraft$getPrevPos(): $Vec3d;
        emotecraft$playEmote(arg0: $KeyframeAnimation, arg1: number, arg2: boolean): void;
        emotecraft$getEmote(): $IEmotePlayer;
        emoteStartPlayCallback(): void;
        emoteTickCallback(): void;
        isPlayingEmote(): boolean;
        emotes_getUUID(): $UUID;
        isMainPlayer(): boolean;
        get playingEmote(): boolean;
        get mainPlayer(): boolean;
    }
    export class $IEmotePlayer {
        static isRunningEmote(emotePlayer: $IEmotePlayer): boolean;
    }
    export interface $IEmotePlayer {
        tick(): void;
        getData(): $KeyframeAnimation;
        isRunning(): boolean;
        getTick(): number;
        isLoopStarted(): boolean;
        get data(): $KeyframeAnimation;
        get running(): boolean;
        get loopStarted(): boolean;
    }
}
