import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Packet } from "@package/net/minecraft/network/protocol";

declare module "@package/com/chunksending" {
    export class $IBatchedUpdateSender {
    }
    export interface $IBatchedUpdateSender {
        reset(): void;
        tick(arg0: $ServerPlayer): void;
        attachToPending(arg0: $ChunkPos, arg1: $Packet<never>, arg2: $Player): boolean;
    }
}
