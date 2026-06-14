import { $Supplier } from "@package/java/util/function";
import { $EmotePlayer } from "@package/io/github/kosmx/emotes/main/emotePlay";
import { $IEmotePlayerEntity } from "@package/io/github/kosmx/emotes/executor/emotePlayer";
import { $UUID_ } from "@package/java/util";

declare module "@package/io/github/kosmx/emotes/main/mixinFunctions" {
    export class $IPlayerEntity {
        static FPPerspective: number;
        static TPBPerspective: $Supplier<number>;
    }
    export interface $IPlayerEntity extends $IEmotePlayerEntity {
        emotecraft$playerEntersInvalidPose(): void;
        emoteTick(): void;
        stopEmote(): void;
        stopEmote(emoteID: $UUID_): void;
        initEmotePerspective(emotePlayer: $EmotePlayer): void;
        emotecraft$voidEmote(): void;
        emotecraft$getEmote(): $EmotePlayer;
        emotes_getAndIncreaseAge(): number;
        emotes_getAge(): number;
        isPlayingEmote(): boolean;
        isMainPlayer(): boolean;
        initEmotePlay(): void;
        get playingEmote(): boolean;
        get mainPlayer(): boolean;
    }
}
