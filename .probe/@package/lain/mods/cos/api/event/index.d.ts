import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $CAStacksBase } from "@package/lain/mods/cos/api/inventory";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/lain/mods/cos/api/event" {
    export class $CosArmorDeathDrops extends $Event implements $ICancellableEvent {
        getCAStacks(): $CAStacksBase;
        getEntityPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $CAStacksBase);
        get CAStacks(): $CAStacksBase;
        get entityPlayer(): $Player;
    }
}
