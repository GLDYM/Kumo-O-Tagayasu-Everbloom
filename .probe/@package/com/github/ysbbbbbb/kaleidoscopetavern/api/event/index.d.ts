import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/github/ysbbbbbb/kaleidoscopetavern/api/event" {
    export class $PlantGrapeEvent extends $Event implements $ICancellableEvent {
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $Level;
        hitResult(): $BlockHitResult;
        player(): $Player;
        hand(): $InteractionHand;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult);
    }
}
