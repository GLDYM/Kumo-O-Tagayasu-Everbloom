import { $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $TickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/gly091020/netMusicListNeoforge/mixin" {
    export class $TickableSoundGetterMixins$SoundEngineMixin {
    }
    export interface $TickableSoundGetterMixins$SoundEngineMixin {
        getTickableSoundInstances(): $List<$TickableSoundInstance>;
        get tickableSoundInstances(): $List<$TickableSoundInstance>;
    }
    /**
     * Values that may be interpreted as {@link $TickableSoundGetterMixins$SoundEngineMixin}.
     */
    export type $TickableSoundGetterMixins$SoundEngineMixin_ = (() => $List_<$TickableSoundInstance>);
    export class $TickableSoundGetterMixins$SoundManagerMixin {
    }
    export interface $TickableSoundGetterMixins$SoundManagerMixin {
        getSoundEngine(): $SoundEngine;
        get soundEngine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $TickableSoundGetterMixins$SoundManagerMixin}.
     */
    export type $TickableSoundGetterMixins$SoundManagerMixin_ = (() => $SoundEngine);
    export class $AbstractContainerMenuMixin {
    }
    export interface $AbstractContainerMenuMixin {
        invokeAddSlot(arg0: $Slot): $Slot;
    }
    /**
     * Values that may be interpreted as {@link $AbstractContainerMenuMixin}.
     */
    export type $AbstractContainerMenuMixin_ = ((arg0: $Slot) => $Slot);
}
