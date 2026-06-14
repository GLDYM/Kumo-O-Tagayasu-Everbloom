import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/dev/xkmc/l2complements/events/event" {
    export class $EnderPickupEvent extends $Event {
        getStack(): $ItemStack;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ItemStack_);
        get stack(): $ItemStack;
        get player(): $ServerPlayer;
    }
}
