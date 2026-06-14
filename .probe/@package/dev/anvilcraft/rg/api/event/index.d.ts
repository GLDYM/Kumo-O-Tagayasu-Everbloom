import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component, $PlayerChatMessage_, $Component_, $PlayerChatMessage } from "@package/net/minecraft/network/chat";
import { $FilteredText_, $FilteredText } from "@package/net/minecraft/server/network";
import { $ServerLifecycleEvent } from "@package/net/neoforged/neoforge/event/server";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RGRule, $RGRule_ } from "@package/dev/anvilcraft/rg/api";

declare module "@package/dev/anvilcraft/rg/api/event" {
    export class $RGRuleChangeEvent$Server<T> extends $RGRuleChangeEvent<T> {
        getServer(): $MinecraftServer;
        constructor(arg0: $RGRule_<T>, arg1: T, arg2: T, arg3: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    export class $ServerAboutToStopEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
    export class $RGRuleChangeEvent$Client<T> extends $RGRuleChangeEvent<T> {
        constructor(arg0: $RGRule_<T>, arg1: T, arg2: T);
    }
    export class $ClientLoadedEvent extends $Event {
        static loaded: boolean;
        constructor();
    }
    export class $ServerPlayerChatEvent extends $PlayerEvent {
        getText(): $FilteredText;
        getComponent(): $Component;
        getPlayerchatmessage(): $PlayerChatMessage;
        constructor(arg0: $ServerPlayer, arg1: $Component_, arg2: $PlayerChatMessage_, arg3: $FilteredText_);
        get text(): $FilteredText;
        get component(): $Component;
        get playerchatmessage(): $PlayerChatMessage;
    }
    export class $RGRuleChangeEvent<T> extends $Event implements $ICancellableEvent {
        getOldValue(): T;
        getNewValue(): T;
        getRule(): $RGRule<T>;
        setNewValue(arg0: T): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $RGRule_<T>, arg1: T, arg2: T);
        get oldValue(): T;
        get rule(): $RGRule<T>;
    }
    export class $RGValidatorNotPassedEvent<T> extends $Event implements $IModBusEvent {
        getOldValue(): T;
        getRule(): $RGRule<T>;
        constructor(arg0: $RGRule_<T>, arg1: T);
        get oldValue(): T;
        get rule(): $RGRule<T>;
    }
    export class $ServerLoadedLevelEvent extends $ServerLifecycleEvent {
        constructor(arg0: $MinecraftServer);
    }
}
