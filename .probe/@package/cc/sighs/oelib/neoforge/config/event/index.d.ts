import { $Event } from "@package/net/neoforged/bus/api";
import { $ConfigLoadEvent_, $ConfigSaveEvent, $ConfigSyncEvent, $ConfigChangedEvent_, $ConfigLoadEvent, $ConfigChangedEvent, $ConfigSaveEvent_, $ConfigSyncEvent_ } from "@package/cc/sighs/oelib/config/api";

declare module "@package/cc/sighs/oelib/neoforge/config/event" {
    export class $NeoForgeConfigEvent$Load<T> extends $NeoForgeConfigEvent<$ConfigLoadEvent<T>> {
        constructor(event: $ConfigLoadEvent_<T>);
    }
    export class $NeoForgeConfigEvent$Changed<T> extends $NeoForgeConfigEvent<$ConfigChangedEvent<T>> {
        constructor(event: $ConfigChangedEvent_<T>);
    }
    export class $NeoForgeConfigEvent$BeforeSave<T> extends $NeoForgeConfigEvent<$ConfigSaveEvent<T>> {
        constructor(event: $ConfigSaveEvent_<T>);
    }
    export class $NeoForgeConfigEvent$AfterSave<T> extends $NeoForgeConfigEvent<$ConfigSaveEvent<T>> {
        constructor(event: $ConfigSaveEvent_<T>);
    }
    export class $NeoForgeConfigEvent<E> extends $Event {
        get(): E;
    }
    export class $NeoForgeConfigEvent$Sync<T> extends $NeoForgeConfigEvent<$ConfigSyncEvent<T>> {
        constructor(event: $ConfigSyncEvent_<T>);
    }
}
