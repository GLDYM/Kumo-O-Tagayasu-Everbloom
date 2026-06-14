import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SignText } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/fi/dy/masa/litematica/mixin/entity" {
    export class $IMixinSignBlockEntity {
    }
    export interface $IMixinSignBlockEntity {
        litematica_getBackText(): $SignText;
        litematica_getFrontText(): $SignText;
    }
    export class $IMixinEntity {
    }
    export interface $IMixinEntity {
        litematica_setWorld(arg0: $Level_): void;
        litematica_readCustomDataFromNbt(arg0: $CompoundTag_): void;
    }
}
