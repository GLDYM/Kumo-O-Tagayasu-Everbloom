import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/renyigesai/bakeries/api/event" {
    export class $AnvilLandingEvent extends $Event {
        getLevel(): $Level;
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $Level_);
        get level(): $Level;
        get entity(): $Entity;
    }
    export class $SnifferDropSeedEvent extends $Event {
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get level(): $Level;
        get blockPos(): $BlockPos;
    }
    export class $PlayerLookBlockEvent extends $Event {
        getBlockState(): $BlockState;
        getBlockPos(): $BlockPos;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $BlockState_);
        get blockState(): $BlockState;
        get blockPos(): $BlockPos;
        get player(): $Player;
    }
}
