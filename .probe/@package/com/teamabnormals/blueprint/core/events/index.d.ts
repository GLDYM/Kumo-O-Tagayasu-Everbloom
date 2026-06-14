import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Map_, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/teamabnormals/blueprint/core/events" {
    export class $FallingBlockEvent$BlockFallEvent extends $FallingBlockEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getPos(): $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
    }
    export class $SimpleJsonResourceListenerPreparedEvent extends $Event {
        getEntries(): $Map<$ResourceLocation, $JsonElement>;
        getGson(): $Gson;
        getDirectory(): string;
        constructor(arg0: $Gson, arg1: string, arg2: $Map_<$ResourceLocation_, $JsonElement_>);
        get entries(): $Map<$ResourceLocation, $JsonElement>;
        get gson(): $Gson;
        get directory(): string;
    }
    export class $FallingBlockEvent extends $Event {
        getEntity(): $FallingBlockEntity;
        static onFallingBlockTick(arg0: $FallingBlockEntity): boolean;
        static onBlockFall(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity): $FallingBlockEntity;
        setEntity(arg0: $FallingBlockEntity): void;
        constructor(arg0: $FallingBlockEntity);
    }
    export class $EntityStepEvent extends $Event implements $ICancellableEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        getEntity(): $Entity;
        getPos(): $BlockPos;
        static onEntityStep(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity);
        get state(): $BlockState;
        get level(): $Level;
        get entity(): $Entity;
        get pos(): $BlockPos;
    }
    export class $FallingBlockEvent$FallingBlockTickEvent extends $FallingBlockEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $FallingBlockEntity);
    }
    export class $LoadThisClassEvent extends $Event implements $IModBusEvent {
        constructor();
    }
}
