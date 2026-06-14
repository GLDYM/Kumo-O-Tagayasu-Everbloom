import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/baguchan/tofucraft/api/tfenergy" {
    export class $TofuNetworkChangedEvent$NetworkLoaded extends $TofuNetworkChangedEvent {
        constructor(arg0: string, arg1: $BlockEntity, arg2: boolean);
    }
    export class $TofuNetworkChangedEvent$NetworkRemoved extends $TofuNetworkChangedEvent {
        constructor(arg0: string, arg1: $BlockEntity, arg2: boolean);
    }
    export class $TofuNetworkChangedEvent extends $Event {
        isSystem(): boolean;
        getUUID(): string;
        getTE(): $BlockEntity;
        constructor(arg0: string, arg1: $BlockEntity, arg2: boolean);
        get system(): boolean;
        get UUID(): string;
        get TE(): $BlockEntity;
    }
    export class $TofuNetworkChangedEvent$NetworkCleared extends $TofuNetworkChangedEvent {
        constructor(arg0: boolean);
    }
}
